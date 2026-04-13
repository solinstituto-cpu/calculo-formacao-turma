const fs = require('fs');

const raw = fs.readFileSync('sheet_default.csv', 'utf-8');
const lines = [];
let currentRow = [];
let currentCell = '';
let inQuotes = false;

for (let i = 0; i < raw.length; i++) {
    const char = raw[i];
    const nextChar = raw[i + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
        currentCell += '"';
        i++; // skip next quote
    } else if (char === '"') {
        inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
        currentRow.push(currentCell);
        currentCell = '';
    } else if (char === '\n' && !inQuotes) {
        // Handle CR LF
        if (currentCell.endsWith('\r')) {
            currentCell = currentCell.slice(0, -1);
        }
        currentRow.push(currentCell);
        lines.push(currentRow);
        currentRow = [];
        currentCell = '';
    } else {
        currentCell += char;
    }
}
if (currentCell || currentRow.length > 0) {
    currentRow.push(currentCell);
    lines.push(currentRow);
}

const courses = [];
let idCounter = 1;

for (let i = 2; i < lines.length; i++) { // Skip headers
    const row = lines[i];
    if (row.length < 8) continue;

    const name = row[0] ? row[0].trim() : '';
    const duration = row[1] ? row[1].trim() : '';
    const type = row[2] ? row[2].trim() : '';
    
    if (!name || name === 'Disciplinas') continue;

    const basePriceRaw = row[5] || '';
    let basePrice = parseFloat(basePriceRaw.replace(/[^\d,]/g, '').replace(',', '.')) || 0;

    const targetRevRaw = row[6] || '';
    let targetRevenue = parseFloat(targetRevRaw.replace(/[^\d,]/g, '').replace(',', '.')) || 0;
    
    // Some courses have "escolher" in column C. Let's map modality
    let modality = type.includes('FDS') ? 'FDS' : (type.includes('Sema') ? 'Semanal' : 'Outro');

    courses.push({
        id: idCounter++,
        name,
        duration,
        modality,
        basePrice,
        targetRevenue,
        _sheetType: type // debug
    });
}

// Write to data.js
const out = `// =====================================================
// SOL INSTITUTO - DADOS DOS CURSOS GERADOS DA PLANILHA CSV
// =====================================================\n\n` +
`const COURSES_DATA = ${JSON.stringify(courses, null, 4)};\n`;

fs.writeFileSync('data.js', out);
console.log(`Generated data.js with ${courses.length} courses!`);
