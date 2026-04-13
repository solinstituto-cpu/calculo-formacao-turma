// =====================================================
// SOL INSTITUTO - CALCULADORA DE FORMAÇÃO DE TURMA
// Application Logic
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});

class App {
    constructor() {
        // Local storage key
        this.STORAGE_KEY = 'sol_instituto_courses';
        
        // Load courses from data.js and merge with localStorage
        this.courses = this.loadCourses();
    }

    // ===== INITIALIZATION =====
    init() {
        this.setupNavigation();
        this.setupCalculator();
        this.setupConfig();
        this.setupDashboard();
        this.populateCourseSelect();
        this.renderConfigTable();
        this.renderDashboard();
    }

    // ===== DATA MANAGEMENT =====
    loadCourses() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            const savedCourses = JSON.parse(saved);
            return COURSES_DATA.map(course => {
                const savedCourse = savedCourses.find(s => String(s.id) === String(course.id));
                return {
                    ...course,
                    targetRevenue: savedCourse ? savedCourse.targetRevenue : course.targetRevenue
                };
            });
        }
        return COURSES_DATA;
    }

    saveCourses() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.courses));
    }

    // ===== NAVIGATION =====
    setupNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.dataset.tab;
                
                // Update active nav
                navBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Update active tab content
                document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
                document.getElementById(`tab-${tab}`).classList.add('active');
                
                // Refresh content on tab switch
                if (tab === 'dashboard') this.renderDashboard();
                if (tab === 'config') this.renderConfigTable();
            });
        });
    }

    // ===== CALCULATOR =====
    setupCalculator() {
        const courseSelect = document.getElementById('course-select');
        const modalityFilter = document.getElementById('calc-modality-filter');
        const discountInput = document.getElementById('discount-value');
        const enrolledInput = document.getElementById('enrolled-students');
        const btnCalculate = document.getElementById('btn-calculate');

        if (modalityFilter) {
            modalityFilter.addEventListener('change', () => this.refreshCourseSelect());
        }

        courseSelect.addEventListener('change', () => this.onCourseSelect());
        
        discountInput.addEventListener('input', () => {
            const course = this.getSelectedCourse();
            if (!course) return;
            
            const val = parseFloat(discountInput.value);
            const hint = document.getElementById('discount-hint');
            
            if (val > 0 && val < course.basePrice) {
                const discount = ((course.basePrice - val) / course.basePrice * 100).toFixed(1);
                hint.textContent = `Desconto de ${discount}% sobre o valor base`;
                hint.className = 'input-hint success';
            } else if (val >= course.basePrice) {
                hint.textContent = 'Valor igual ou superior ao valor base (sem desconto)';
                hint.className = 'input-hint warning';
            } else {
                hint.textContent = '';
                hint.className = 'input-hint';
            }
        });

        btnCalculate.addEventListener('click', () => this.calculate());
        
        // Allow Enter key to trigger calculation
        discountInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.calculate();
        });
    }

    populateCourseSelect() {
        const select = document.getElementById('course-select');
        const modalityFilterval = document.getElementById('calc-modality-filter')?.value || 'all';
        
        // Group courses by base name (without Qualificação/Capacitação or Modality tags)
        const groups = {};
        this.courses.forEach(course => {
            if (modalityFilterval !== 'all' && course.modality !== modalityFilterval && course.modality !== 'Outro') {
                return; // Pula este curso se não bater com o filtro principal
            }

            let baseName = course.name.replace(/\s*\(Qualificação\)|\s*\(Capacitação\)/g, '');
            baseName = baseName.replace(/\s*\[.*?\]/g, '').trim();
            if (!groups[baseName]) groups[baseName] = [];
            groups[baseName].push(course);
        });
        
        Object.keys(groups).sort().forEach(groupName => {
            const optgroup = document.createElement('optgroup');
            optgroup.label = groupName;
            
            groups[groupName].forEach(course => {
                const option = document.createElement('option');
                option.value = course.id;
                let displayName = course.name;
                if (course.modality !== 'Outro') {
                    displayName += ` [${course.modality}]`;
                }
                option.textContent = `${displayName} - R$ ${course.basePrice.toFixed(2)}`;
                
                if (course.targetRevenue <= 0) {
                    option.textContent += ' ⚠️ (sem custo alvo)';
                }
                
                optgroup.appendChild(option);
            });
            
            select.appendChild(optgroup);
        });
    }

    getSelectedCourse() {
        const select = document.getElementById('course-select');
        const id = select.value;
        return this.courses.find(c => String(c.id) === String(id));
    }

    onCourseSelect() {
        const course = this.getSelectedCourse();
        const courseInfo = document.getElementById('course-info');
        const resultsCard = document.getElementById('results-card');
        
        if (!course) {
            courseInfo.style.display = 'none';
            resultsCard.style.display = 'none';
            return;
        }
        
        document.getElementById('info-duracao').textContent = course.duration;
        document.getElementById('info-valor-base').textContent = `R$ ${course.basePrice.toFixed(2)}`;
        document.getElementById('info-custo-alvo').textContent = course.targetRevenue > 0 
            ? `R$ ${course.targetRevenue.toFixed(2)}` 
            : '⚠️ Não configurado';
        document.getElementById('info-custo-alvo').style.color = 
            course.targetRevenue > 0 ? '' : '#f87171';
        
        courseInfo.style.display = 'block';
        
        // Pre-fill discount value with base price
        const discountInput = document.getElementById('discount-value');
        if (!discountInput.value) {
            discountInput.value = course.basePrice.toFixed(2);
        }
        
        // Clear hint
        document.getElementById('discount-hint').textContent = '';
        document.getElementById('discount-hint').className = 'input-hint';
    }

    calculate() {
        const course = this.getSelectedCourse();
        if (!course) {
            this.showToast('Selecione um curso primeiro', 'warning');
            return;
        }

        const discountValue = parseFloat(document.getElementById('discount-value').value);
        const enrolled = parseInt(document.getElementById('enrolled-students').value) || 0;

        if (!discountValue || discountValue <= 0) {
            this.showToast('Insira um valor com desconto válido', 'warning');
            return;
        }

        if (course.targetRevenue <= 0) {
            this.showToast('Configure o custo alvo deste curso na aba "Configurar Custos" antes de calcular', 'error');
            return;
        }

        // Core calculation: ARREDONDAR.PARA.CIMA(G/F; 0)
        const studentsNeeded = Math.ceil(course.targetRevenue / discountValue);
        const discountPercent = ((course.basePrice - discountValue) / course.basePrice * 100);

        // Show results
        const resultsCard = document.getElementById('results-card');
        resultsCard.style.display = 'block';

        // Animate number
        this.animateNumber('result-students', studentsNeeded);

        // Subtitle
        document.getElementById('result-subtitle').textContent = 
            `Para o curso cobrar R$ ${discountValue.toFixed(2)} por aluno`;

        // Risk calculation
        this.calculateRisk(studentsNeeded, enrolled);

        // Discount info
        document.getElementById('discount-percent').textContent = 
            discountPercent > 0 ? `${discountPercent.toFixed(1)}%` : 'Sem desconto';
        document.getElementById('discount-bar-fill').style.width = 
            `${Math.min(Math.max(discountPercent, 0), 100)}%`;

        // Suggested prices for 2, 3, 4, 5 students
        this.renderSuggestedPrices(course, studentsNeeded);

        // Revenue projection
        this.renderRevenueProjection(course, discountValue, studentsNeeded, enrolled);

        // Scroll to results on mobile
        if (window.innerWidth <= 1024) {
            resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    calculateRisk(needed, enrolled) {
        const badge = document.getElementById('risk-badge');
        const icon = document.getElementById('risk-icon');
        const text = document.getElementById('risk-text');

        badge.className = 'risk-badge';

        if (enrolled === 0 || enrolled === '') {
            badge.classList.add('medio');
            icon.textContent = '⚠️';
            text.textContent = `Nenhum aluno matriculado ainda - Necessários: ${needed}`;
            return;
        }

        if (enrolled >= needed) {
            badge.classList.add('sem-risco');
            icon.textContent = '✅';
            text.textContent = `Sem risco - ${enrolled} matriculados de ${needed} necessários`;
        } else {
            const ratio = (needed - enrolled) / needed;
            if (ratio <= 0.25) {
                badge.classList.add('baixo');
                icon.textContent = '🟡';
                text.textContent = `Risco Baixo - Faltam ${needed - enrolled} aluno(s)`;
            } else if (ratio <= 0.5) {
                badge.classList.add('medio');
                icon.textContent = '⚠️';
                text.textContent = `Risco Médio - Faltam ${needed - enrolled} aluno(s)`;
            } else {
                badge.classList.add('alto');
                icon.textContent = '🔴';
                text.textContent = `Risco Alto - Faltam ${needed - enrolled} aluno(s)`;
            }
        }
    }

    renderSuggestedPrices(course, studentsNeeded) {
        const grid = document.getElementById('price-grid');
        grid.innerHTML = '';

        [2, 3, 4, 5].forEach(n => {
            const div = document.createElement('div');
            div.className = 'price-item';

            if (n < studentsNeeded) {
                div.classList.add('not-allowed');
                div.innerHTML = `
                    <div class="price-students">${n} alunos</div>
                    <div class="price-value">Não permitido</div>
                `;
            } else {
                const price = course.targetRevenue / n;
                div.innerHTML = `
                    <div class="price-students">${n} alunos</div>
                    <div class="price-value">R$ ${price.toFixed(2)}</div>
                `;
            }

            grid.appendChild(div);
        });
    }

    renderRevenueProjection(course, discountValue, needed, enrolled) {
        const container = document.getElementById('projection-items');
        container.innerHTML = '';

        const rows = [
            {
                label: 'Receita com desconto × alunos necessários',
                value: discountValue * needed,
                format: 'currency',
                class: 'neutral'
            },
            {
                label: 'Custo alvo (meta de receita)',
                value: course.targetRevenue,
                format: 'currency',
                class: 'neutral'
            },
            {
                label: 'Margem (receita - custo alvo)',
                value: (discountValue * needed) - course.targetRevenue,
                format: 'currency',
                class: (discountValue * needed) - course.targetRevenue >= 0 ? 'positive' : 'negative'
            }
        ];

        if (enrolled > 0) {
            const currentRevenue = discountValue * enrolled;
            const diff = currentRevenue - course.targetRevenue;
            rows.push({
                label: `Receita atual (${enrolled} aluno${enrolled !== 1 ? 's' : ''} × R$ ${discountValue.toFixed(2)})`,
                value: currentRevenue,
                format: 'currency',
                class: 'neutral'
            });
            rows.push({
                label: 'Resultado atual',
                value: diff,
                format: 'currency',
                class: diff >= 0 ? 'positive' : 'negative'
            });
        }

        rows.forEach(row => {
            const div = document.createElement('div');
            div.className = 'projection-row';
            
            const valueStr = row.format === 'currency' 
                ? `R$ ${row.value.toFixed(2)}` 
                : row.value;
            
            div.innerHTML = `
                <span class="proj-label">${row.label}</span>
                <span class="proj-value ${row.class}">${valueStr}</span>
            `;
            container.appendChild(div);
        });
    }

    animateNumber(elementId, target) {
        const el = document.getElementById(elementId);
        const duration = 600;
        const start = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * eased);
            
            el.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }

    // ===== CONFIG TAB =====
    setupConfig() {
        const searchInput = document.getElementById('config-search');
        searchInput.addEventListener('input', () => this.renderConfigTable());

        const modalityFilter = document.getElementById('config-modality-filter');
        if (modalityFilter) {
            modalityFilter.addEventListener('change', () => this.renderConfigTable());
        }

        const btnApplyAll = document.getElementById('btn-apply-all');
        btnApplyAll.addEventListener('click', () => {
            const defaultCost = parseFloat(document.getElementById('default-cost').value);
            if (!defaultCost || defaultCost <= 0) {
                this.showToast('Insira um valor padrão válido', 'warning');
                return;
            }
            
            this.courses.forEach(course => {
                if (course.targetRevenue <= 0) {
                    course.targetRevenue = defaultCost;
                }
            });
            this.saveCourses();
            this.renderConfigTable();
            this.showToast(`Valor padrão R$ ${defaultCost.toFixed(2)} aplicado aos cursos sem custo`, 'success');
        });
    }

    renderConfigTable() {
        const tbody = document.getElementById('config-tbody');
        const searchTerm = document.getElementById('config-search').value.toLowerCase();
        const modalityFilter = document.getElementById('config-modality-filter')?.value || 'all';
        
        const filtered = this.courses.filter(course => {
            const matchesSearch = course.name.toLowerCase().includes(searchTerm);
            const matchesModality = modalityFilter === 'all' || course.modality === modalityFilter;
            return matchesSearch && matchesModality;
        });

        tbody.innerHTML = '';

        filtered.forEach(course => {
            const tr = document.createElement('tr');
            const isConfigured = course.targetRevenue > 0;
            
            let displayName = course.name;
            if (course.modality !== 'Outro') {
                displayName += ` [${course.modality}]`;
            }
            
            tr.innerHTML = `
                <td class="course-name-cell">${displayName}</td>
                <td class="duration-cell">${course.duration}</td>
                <td class="base-price-cell">R$ ${course.basePrice.toFixed(2)}</td>
                <td>
                    <input type="number" 
                           class="cost-input ${isConfigured ? 'has-value' : ''}" 
                           value="${course.targetRevenue > 0 ? course.targetRevenue : ''}" 
                           placeholder="0,00"
                           data-course-id="${course.id}"
                           step="100"
                           min="0">
                </td>
                <td>
                    <span class="status-badge ${isConfigured ? 'configured' : 'pending'}">
                        ${isConfigured ? '✓ Configurado' : '⚠ Pendente'}
                    </span>
                </td>
            `;

            // Add event listener for cost input
            const input = tr.querySelector('.cost-input');
            input.addEventListener('change', (e) => {
                const id = e.target.dataset.courseId;
                const value = parseFloat(e.target.value) || 0;
                const courseToUpdate = this.courses.find(c => String(c.id) === String(id));
                
                if (courseToUpdate) {
                    courseToUpdate.targetRevenue = value;
                    this.saveCourses();
                    
                    // Update UI
                    e.target.classList.toggle('has-value', value > 0);
                    const statusBadge = tr.querySelector('.status-badge');
                    statusBadge.className = `status-badge ${value > 0 ? 'configured' : 'pending'}`;
                    statusBadge.textContent = value > 0 ? '✓ Configurado' : '⚠ Pendente';
                    
                    // Also refresh the course select dropdown indication
                    this.refreshCourseSelect();
                }
            });

            tbody.appendChild(tr);
        });
    }

    refreshCourseSelect() {
        const select = document.getElementById('course-select');
        const currentValue = String(select.value);
        
        select.innerHTML = '<option value="">-- Escolha um curso --</option>';
        
        this.populateCourseSelect();
        
        // Restore previous selection if it's still available in the new list
        let optionExists = Array.from(select.options).some(opt => opt.value === currentValue);
        
        if (currentValue && optionExists) {
            select.value = currentValue;
        } else {
            select.value = "";
        }
        
        // Force UI update
        this.onCourseSelect();
    }

    // ===== DASHBOARD TAB =====
    setupDashboard() {
        const searchInput = document.getElementById('dashboard-search');
        searchInput.addEventListener('input', () => this.renderDashboard());

        const filterChips = document.querySelectorAll('.chip[data-filter]');
        filterChips.forEach(chip => {
            chip.addEventListener('click', () => {
                filterChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                this.renderDashboard();
            });
        });
    }

    renderDashboard() {
        this.updateStats();
        this.renderDashboardGrid();
    }

    updateStats() {
        const total = this.courses.length;
        const configured = this.courses.filter(c => c.targetRevenue > 0).length;
        const pending = total - configured;
        const avgCost = configured > 0 
            ? this.courses.filter(c => c.targetRevenue > 0).reduce((sum, c) => sum + c.targetRevenue, 0) / configured 
            : 0;

        document.getElementById('stat-total-courses').textContent = total;
        document.getElementById('stat-configured').textContent = configured;
        document.getElementById('stat-pending').textContent = pending;
        document.getElementById('stat-avg-cost').textContent = `R$ ${avgCost.toFixed(0)}`;
    }

    renderDashboardGrid() {
        const grid = document.getElementById('dashboard-grid');
        const searchTerm = document.getElementById('dashboard-search').value.toLowerCase();
        const activeFilter = document.querySelector('.chip.active')?.dataset.filter || 'all';

        let filtered = this.courses.filter(course => 
            course.name.toLowerCase().includes(searchTerm)
        );

        if (activeFilter === 'configured') {
            filtered = filtered.filter(c => c.targetRevenue > 0);
        } else if (activeFilter === 'pending') {
            filtered = filtered.filter(c => c.targetRevenue <= 0);
        }

        grid.innerHTML = '';

        filtered.forEach(course => {
            const isConfigured = course.targetRevenue > 0;
            const minStudents = isConfigured ? Math.ceil(course.targetRevenue / course.basePrice) : '-';
            
            const card = document.createElement('div');
            card.className = 'course-card';
            
            card.innerHTML = `
                <div class="course-card-header">
                    <div class="course-card-name">${course.name}</div>
                    <span class="status-badge ${isConfigured ? 'configured' : 'pending'}">
                        ${isConfigured ? '✓' : '⚠'}
                    </span>
                </div>
                <div class="course-card-body">
                    <div class="course-card-item">
                        <div class="item-label">Valor Base</div>
                        <div class="item-value orange">R$ ${course.basePrice.toFixed(2)}</div>
                    </div>
                    <div class="course-card-item">
                        <div class="item-label">Custo Alvo</div>
                        <div class="item-value ${isConfigured ? 'green' : 'red'}">
                            ${isConfigured ? `R$ ${course.targetRevenue.toFixed(2)}` : 'Não definido'}
                        </div>
                    </div>
                    <div class="course-card-item">
                        <div class="item-label">Duração</div>
                        <div class="item-value">${course.duration}</div>
                    </div>
                    <div class="course-card-item">
                        <div class="item-label">Mín. Alunos (sem desc.)</div>
                        <div class="item-value">${minStudents}</div>
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
        });

        if (filtered.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 16px; display: block; opacity: 0.3;">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    <p>Nenhum curso encontrado</p>
                </div>
            `;
        }
    }

    // ===== TOAST NOTIFICATIONS =====
    showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icons = {
            success: '✅',
            warning: '⚠️',
            error: '❌'
        };
        
        toast.innerHTML = `<span>${icons[type] || ''}</span> ${message}`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}
