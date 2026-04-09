// =====================================================
// SOL INSTITUTO - DADOS DOS CURSOS
// Extraído da planilha "Calculo formação turma"
// =====================================================

const COURSES_DATA = [
    // Row 4-7: Acupuntura
    { id: 1, name: "Acupuntura Aplicada (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 565, targetRevenue: 1400 },
    { id: 2, name: "Acupuntura Aplicada (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 633, targetRevenue: 1500 },
    { id: 3, name: "Acupuntura Reumato (Qualificação)", duration: "1 mês ou 4 encontros", basePrice: 565, targetRevenue: 1400 },
    { id: 4, name: "Acupuntura Reumato (Capacitação)", duration: "1 mês ou 4 encontros", basePrice: 633, targetRevenue: 1400 },
    
    // Row 8-9: Anatomia
    { id: 5, name: "Anatomia (Qualificação)", duration: "1 mês ou 7 encontros", basePrice: 685, targetRevenue: 0 },
    { id: 6, name: "Anatomia (Capacitação)", duration: "1 mês ou 7 encontros", basePrice: 766, targetRevenue: 0 },
    
    // Row 10-11: Aromaterapia
    { id: 7, name: "Aromaterapia (Qualificação)", duration: "2 FDS, 1 mês ou 8 aulas", basePrice: 870, targetRevenue: 0 },
    { id: 8, name: "Aromaterapia (Capacitação)", duration: "2 FDS, 1 mês ou 8 aulas", basePrice: 974, targetRevenue: 0 },
    
    // Row 12-13: Aromaterapia Aplicada
    { id: 9, name: "Aromaterapia Aplicada (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 10, name: "Aromaterapia Aplicada (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 14-15: Auriculoterapia Energética
    { id: 11, name: "Auriculoterapia Energética (acup, nat, t.holist, integr, curso curto) (Qualificação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 808, targetRevenue: 0 },
    { id: 12, name: "Auriculoterapia Energética (acup, nat, t.holist, integr, curso curto) (Capacitação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 908, targetRevenue: 0 },
    
    // Row 16-17: Autocuidado do Terapeuta
    { id: 13, name: "Autocuidado do Terapeuta e Ergonomia do Toque (integrativa) (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 14, name: "Autocuidado do Terapeuta e Ergonomia do Toque (integrativa) (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 18-19: Cone Hindu
    { id: 15, name: "Cone Hindu (Qualificação)", duration: "2 aulas (1 encontro integral)", basePrice: 470, targetRevenue: 0 },
    { id: 16, name: "Cone Hindu (Capacitação)", duration: "2 aulas (1 encontro integral)", basePrice: 527, targetRevenue: 0 },
    
    // Row 20-21: Craniopuntura Chinesa
    { id: 17, name: "Craniopuntura Chinesa (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 18, name: "Craniopuntura Chinesa (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 22-23: Craniopuntura Japonesa
    { id: 19, name: "Craniopuntura Japonesa (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 20, name: "Craniopuntura Japonesa (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 24-25: Cristaloterapia Aplicada à Massoterapia
    { id: 21, name: "Cristaloterapia Aplicada à Massoterapia (integrativa) (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 22, name: "Cristaloterapia Aplicada à Massoterapia (integrativa) (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 26-27: Cristaloterapia e Argiloterapia
    { id: 23, name: "Cristaloterapia e Argiloterapia (Qualificação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 24, name: "Cristaloterapia e Argiloterapia (Capacitação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 28-29: Cromoterapia
    { id: 25, name: "Cromoterapia (Qualificação)", duration: "2 FDS, 1 mês ou 7 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 26, name: "Cromoterapia (Capacitação)", duration: "2 FDS, 1 mês ou 7 encontros", basePrice: 975, targetRevenue: 0 },
    
    // Row 30-31: Cromoterapia Aplicada à Massoterapia
    { id: 27, name: "Cromoterapia Aplicada à Massoterapia (integrativa) (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 28, name: "Cromoterapia Aplicada à Massoterapia (integrativa) (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 32-33: Cromoterapia, Aromaterapia e Cristaloterapia
    { id: 29, name: "Cromoterapia, Aromaterapia e Cristaloterapia aplicadas à massagem (integrativa) (Qualificação)", duration: "1 FDS", basePrice: 570, targetRevenue: 0 },
    { id: 30, name: "Cromoterapia, Aromaterapia e Cristaloterapia aplicadas à massagem (integrativa) (Capacitação)", duration: "1 FDS", basePrice: 639, targetRevenue: 0 },
    
    // Row 34-35: Drenagem Linfática Corporal Terapêutica
    { id: 31, name: "Drenagem Linfática Corporal Terapêutica (integrativa) (Qualificação)", duration: "2 FDS, 1 mês e meio ou 10 aulas", basePrice: 760, targetRevenue: 0 },
    { id: 32, name: "Drenagem Linfática Corporal Terapêutica (integrativa) (Capacitação)", duration: "2 FDS, 1 mês e meio ou 10 aulas", basePrice: 850, targetRevenue: 0 },
    
    // Row 36-37: Drenagem Linfática Manual (pré e pós) - antiga FDS e curso curto
    { id: 33, name: "Drenagem Linfática Manual (pré e pós) - (antiga FDS e curso curto) (Qualificação)", duration: "3 FDS, 3 meses, ou 12 aulas", basePrice: 1440, targetRevenue: 0 },
    { id: 34, name: "Drenagem Linfática Manual (pré e pós) - (antiga FDS e curso curto) (Capacitação)", duration: "3 FDS, 3 meses, ou 12 aulas", basePrice: 1615, targetRevenue: 0 },
    
    // Row 38-39: Drenagem Linfática Manual (pré e pós) - antiga
    { id: 35, name: "Drenagem Linfática Manual (pré e pós) - antiga (Qualificação)", duration: "3 FDS, 3 meses ou 20 aulas", basePrice: 1765, targetRevenue: 0 },
    { id: 36, name: "Drenagem Linfática Manual (pré e pós) - antiga (Capacitação)", duration: "3 FDS, 3 meses ou 20 aulas", basePrice: 1980, targetRevenue: 0 },
    
    // Row 40-41: Drenagem pós-operatória (antiga semanal)
    { id: 37, name: "Drenagem pós-operatória (antiga semanal) (Qualificação)", duration: "1 mês ou 7 encontros", basePrice: 805, targetRevenue: 0 },
    { id: 38, name: "Drenagem pós-operatória (antiga semanal) (Capacitação)", duration: "1 mês ou 7 encontros", basePrice: 905, targetRevenue: 0 },
    
    // Row 42-43: Drenagem pós-operatória (antiga FDS e curso curto)
    { id: 39, name: "Drenagem pós-operatória (antiga FDS e curso curto) (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 615, targetRevenue: 0 },
    { id: 40, name: "Drenagem pós-operatória (antiga FDS e curso curto) (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 695, targetRevenue: 0 },
    
    // Row 44-45: Feng Shui
    { id: 41, name: "Feng Shui (Qualificação)", duration: "1 FDS", basePrice: 560, targetRevenue: 0 },
    { id: 42, name: "Feng Shui (Capacitação)", duration: "1 FDS", basePrice: 627, targetRevenue: 0 },
    
    // Row 46-47: Fitoterapia Brasileira
    { id: 43, name: "Fitoterapia Brasileira (Qualificação)", duration: "1 mês ou 8 encontros", basePrice: 960, targetRevenue: 0 },
    { id: 44, name: "Fitoterapia Brasileira (Capacitação)", duration: "1 mês ou 8 encontros", basePrice: 1075, targetRevenue: 0 },
    
    // Row 48-49: Florais de Bach
    { id: 45, name: "Florais de Bach (Qualificação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 46, name: "Florais de Bach (Capacitação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 50-51: Fundamentos Anatômicos e Palpatórios
    { id: 47, name: "Fundamentos Anatômicos e Palpatórios (integrativa) (Qualificação)", duration: "1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 48, name: "Fundamentos Anatômicos e Palpatórios (integrativa) (Capacitação)", duration: "1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 52-53: Liberação Miofascial - 1 FDS
    { id: 49, name: "Liberação Miofascial - 1 FDS (integrativa) (Qualificação)", duration: "1 FDS", basePrice: 560, targetRevenue: 0 },
    { id: 50, name: "Liberação Miofascial - 1 FDS (integrativa) (Capacitação)", duration: "1 FDS", basePrice: 627, targetRevenue: 0 },
    
    // Row 54-55: Liberação Miofascial – 3 meses - Regina
    { id: 51, name: "Liberação Miofascial – 3 meses - Regina (Qualificação)", duration: "3 FDS ou 12 encontros", basePrice: 1440, targetRevenue: 0 },
    { id: 52, name: "Liberação Miofascial – 3 meses - Regina (Capacitação)", duration: "3 FDS ou 12 encontros", basePrice: 1615, targetRevenue: 0 },
    
    // Row 56-57: Massagem Relaxante Antiestresse
    { id: 53, name: "Massagem Relaxante Antiestresse (integrativa) (Qualificação)", duration: "1 mês ou 8 aulas", basePrice: 870, targetRevenue: 0 },
    { id: 54, name: "Massagem Relaxante Antiestresse (integrativa) (Capacitação)", duration: "1 mês ou 8 aulas", basePrice: 974, targetRevenue: 0 },
    
    // Row 58-59: Massagem Ayurvédica – Abhyanga
    { id: 55, name: "Massagem Ayurvédica – Abhyanga (integrativa) (Qualificação)", duration: "2 FDS, 1 a 2 meses ou 8 aulas", basePrice: 870, targetRevenue: 0 },
    { id: 56, name: "Massagem Ayurvédica – Abhyanga (integrativa) (Capacitação)", duration: "2 FDS, 1 a 2 meses ou 8 aulas", basePrice: 974, targetRevenue: 0 },
    
    // Row 60-61: Massoterapia Aplicada a Públicos Específicos
    { id: 57, name: "Massoterapia Aplicada a Públicos Específicos (integrativa) (Qualificação)", duration: "1 FDS, 1 mês ou 6 aulas", basePrice: 560, targetRevenue: 0 },
    { id: 58, name: "Massoterapia Aplicada a Públicos Específicos (integrativa) (Capacitação)", duration: "1 FDS, 1 mês ou 6 aulas", basePrice: 627, targetRevenue: 0 },
    
    // Row 62-63: Massagem com Pedras Quentes & Pindas Chinesas (integrativa)
    { id: 59, name: "Massagem com Pedras Quentes & Pindas Chinesas (integrativa) (Qualificação)", duration: "1 mês ou 6 aulas", basePrice: 760, targetRevenue: 0 },
    { id: 60, name: "Massagem com Pedras Quentes & Pindas Chinesas (integrativa) (Capacitação)", duration: "1 mês ou 6 aulas", basePrice: 850, targetRevenue: 0 },
    
    // Row 64-65: Massagem com Pedras Quentes e Pindas Chinesas (antiga)
    { id: 61, name: "Massagem com Pedras Quentes e Pindas Chinesas (antiga) (Qualificação)", duration: "1 FDS ou 4 aulas", basePrice: 560, targetRevenue: 0 },
    { id: 62, name: "Massagem com Pedras Quentes e Pindas Chinesas (antiga) (Capacitação)", duration: "1 FDS ou 4 aulas", basePrice: 627, targetRevenue: 0 },
    
    // Row 66-67: Massagem Desportiva
    { id: 63, name: "Massagem Desportiva (integrativa) (Qualificação)", duration: "1 mês ou 8 aulas", basePrice: 870, targetRevenue: 0 },
    { id: 64, name: "Massagem Desportiva (integrativa) (Capacitação)", duration: "1 mês ou 8 aulas", basePrice: 974, targetRevenue: 0 },
    
    // Row 68-69: Massagem Facial
    { id: 65, name: "Massagem Facial (integrativa) (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 66, name: "Massagem Facial (integrativa) (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 70-71: Massagem Modeladora
    { id: 67, name: "Massagem Modeladora (integrativa) (Qualificação)", duration: "1 mês ou 8 aulas", basePrice: 870, targetRevenue: 0 },
    { id: 68, name: "Massagem Modeladora (integrativa) (Capacitação)", duration: "1 mês ou 8 aulas", basePrice: 974, targetRevenue: 0 },
    
    // Row 72-73: Massagem com Bambu
    { id: 69, name: "Massagem com Bambu (integrativa) (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 70, name: "Massagem com Bambu (integrativa) (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 74-75: Massagem com Ventosas
    { id: 71, name: "Massagem com Ventosas (integrativa) (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 72, name: "Massagem com Ventosas (integrativa) (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 76-77: Massagem Terapêutica (integrativa)
    { id: 73, name: "Massagem Terapêutica (integrativa) (Qualificação)", duration: "2 meses ou 16 encontros", basePrice: 1440, targetRevenue: 0 },
    { id: 74, name: "Massagem Terapêutica (integrativa) (Capacitação)", duration: "2 meses ou 16 encontros", basePrice: 1615, targetRevenue: 0 },
    
    // Row 78-79: Massagem Antiestresse (semanal antiga)
    { id: 75, name: "Massagem Antiestresse (semanal antiga) (Qualificação)", duration: "1 mês ou 8 aulas", basePrice: 870, targetRevenue: 0 },
    { id: 76, name: "Massagem Antiestresse (semanal antiga) (Capacitação)", duration: "1 mês ou 8 aulas", basePrice: 974, targetRevenue: 0 },
    
    // Row 80-81: continuation
    { id: 77, name: "Massagem Antiestresse (FDS antiga) (Qualificação)", duration: "1 FDS", basePrice: 560, targetRevenue: 0 },
    { id: 78, name: "Massagem Antiestresse (FDS antiga) (Capacitação)", duration: "1 FDS", basePrice: 627, targetRevenue: 0 },
    
    // Row 82-83: Massagem Terapêutica (antiga)
    { id: 79, name: "Massagem Terapêutica (antiga) (Qualificação)", duration: "2 meses ou 16 encontros", basePrice: 1440, targetRevenue: 0 },
    { id: 80, name: "Massagem Terapêutica (antiga) (Capacitação)", duration: "2 meses ou 16 encontros", basePrice: 1615, targetRevenue: 0 },
    
    // Row 84-85: Massagem Terapêutica (antiga - FDS)
    { id: 81, name: "Massagem Terapêutica (antiga - FDS) (Qualificação)", duration: "2 FDS", basePrice: 870, targetRevenue: 0 },
    { id: 82, name: "Massagem Terapêutica (antiga - FDS) (Capacitação)", duration: "2 FDS", basePrice: 974, targetRevenue: 0 },
    
    // Row 86-87: Massagem Terapêutica Integrativa Profissional
    { id: 83, name: "Massagem Terapêutica Integrativa Profissional (integrativa) (Qualificação)", duration: "1 mês ou 8 aulas (a 10 aulas)", basePrice: 870, targetRevenue: 0 },
    { id: 84, name: "Massagem Terapêutica Integrativa Profissional (integrativa) (Capacitação)", duration: "1 mês ou 8 aulas (a 10 aulas)", basePrice: 974, targetRevenue: 0 },
    
    // Row 88-89: Meditação e Autocura
    { id: 85, name: "Meditação e Autocura (Qualificação)", duration: "1 FDS, 15 dias ou 4 encontros", basePrice: 560, targetRevenue: 0 },
    { id: 86, name: "Meditação e Autocura (Capacitação)", duration: "1 FDS, 15 dias ou 4 encontros", basePrice: 627, targetRevenue: 0 },
    
    // Row 90-91: Mestrado em Reiki
    { id: 87, name: "Mestrado em Reiki (Qualificação)", duration: "1 aula", basePrice: 470, targetRevenue: 0 },
    { id: 88, name: "Mestrado em Reiki (Capacitação)", duration: "1 aula", basePrice: 527, targetRevenue: 0 },
    
    // Row 92-93: Moxaterapia, Ventosaterapia e Gua Sha
    { id: 89, name: "Moxaterapia, Ventosaterapia e Gua Sha (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 90, name: "Moxaterapia, Ventosaterapia e Gua Sha (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 94-95: Pompages e Empreendedorismo (antigo)
    { id: 91, name: "Pompages e Empreendedorismo (antigo) (Qualificação)", duration: "1 FDS", basePrice: 560, targetRevenue: 0 },
    { id: 92, name: "Pompages e Empreendedorismo (antigo) (Capacitação)", duration: "1 FDS", basePrice: 627, targetRevenue: 0 },
    
    // Row 96-97: Pompages e Liberação Miofascial
    { id: 93, name: "Pompages e Liberação Miofascial (integrativa e antiga) (Qualificação)", duration: "1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 94, name: "Pompages e Liberação Miofascial (integrativa e antiga) (Capacitação)", duration: "1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 98-99: Quick Massage (integrativo)
    { id: 95, name: "Quick Massage (integrativo) (Qualificação)", duration: "1 FDS, 15 dias ou 4 encontros", basePrice: 560, targetRevenue: 0 },
    { id: 96, name: "Quick Massage (integrativo) (Capacitação)", duration: "1 FDS, 15 dias ou 4 encontros", basePrice: 627, targetRevenue: 0 },
    
    // Row 100-101: Quick Massage (antigo)
    { id: 97, name: "Quick Massage (antigo) (Qualificação)", duration: "1 FDS, 20 dias ou 6 encontros", basePrice: 560, targetRevenue: 0 },
    { id: 98, name: "Quick Massage (antigo) (Capacitação)", duration: "1 FDS, 20 dias ou 6 encontros", basePrice: 627, targetRevenue: 0 },
    
    // Row 102-103: Radiestesia e Radionica
    { id: 99, name: "Radiestesia e Radionica (Qualificação)", duration: "1 FDS, 20 dias ou 6 encontros", basePrice: 560, targetRevenue: 0 },
    { id: 100, name: "Radiestesia e Radionica (Capacitação)", duration: "1 FDS, 20 dias ou 6 encontros", basePrice: 627, targetRevenue: 0 },
    
    // Row 104-105: Recursos Eletroterapêuticos
    { id: 101, name: "Recursos Eletroterapêuticos (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 102, name: "Recursos Eletroterapêuticos (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 106-107: Reflexologia Podal
    { id: 103, name: "Reflexologia Podal (Qualificação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 104, name: "Reflexologia Podal (Capacitação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 108-109: Reiki Nível I
    { id: 105, name: "Reiki Nível I (Qualificação)", duration: "1 dia (encontro integral)", basePrice: 304, targetRevenue: 0 },
    { id: 106, name: "Reiki Nível I (Capacitação)", duration: "1 dia (encontro integral)", basePrice: 340, targetRevenue: 0 },
    
    // Row 110-111: Reiki Nível II
    { id: 107, name: "Reiki Nível II (Qualificação)", duration: "1 dia (encontro integral)", basePrice: 304, targetRevenue: 0 },
    { id: 108, name: "Reiki Nível II (Capacitação)", duration: "1 dia (encontro integral)", basePrice: 340, targetRevenue: 0 },
    
    // Row 112-113: Reiki Nível III
    { id: 109, name: "Reiki Nível III (Qualificação)", duration: "1 dia (encontro integral)", basePrice: 304, targetRevenue: 0 },
    { id: 110, name: "Reiki Nível III (Capacitação)", duration: "1 dia (encontro integral)", basePrice: 340, targetRevenue: 0 },
    
    // Row 114-115: Seitai
    { id: 111, name: "Seitai (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 112, name: "Seitai (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 116-117: Shiatsu
    { id: 113, name: "Shiatsu (Qualificação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 114, name: "Shiatsu (Capacitação)", duration: "2 FDS, 1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 118-119: Terapia com Cristais
    { id: 115, name: "Terapia com Cristais (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 116, name: "Terapia com Cristais (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 120-121: Tui Ná
    { id: 117, name: "Tui Ná (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 118, name: "Tui Ná (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 122-123: Ventosaterapia
    { id: 119, name: "Ventosaterapia (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 120, name: "Ventosaterapia (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 124-125: Yoga Terapêutico
    { id: 121, name: "Yoga Terapêutico (Qualificação)", duration: "1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 122, name: "Yoga Terapêutico (Capacitação)", duration: "1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 126-127: Do-In
    { id: 123, name: "Do-In (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 124, name: "Do-In (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 128-129: Iridologia
    { id: 125, name: "Iridologia (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 126, name: "Iridologia (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 130-131: Musicoterapia
    { id: 127, name: "Musicoterapia (Qualificação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 530, targetRevenue: 0 },
    { id: 128, name: "Musicoterapia (Capacitação)", duration: "1 FDS, 1 mês ou 4 encontros", basePrice: 595, targetRevenue: 0 },
    
    // Row 132-133: Técnicas de Relaxamento
    { id: 129, name: "Técnicas de Relaxamento (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
    { id: 130, name: "Técnicas de Relaxamento (Capacitação)", duration: "15 dias ou 4 encontros", basePrice: 340, targetRevenue: 0 },
    
    // Row 134-135: Práticas Integrativas e Complementares
    { id: 131, name: "Práticas Integrativas e Complementares (Qualificação)", duration: "1 mês ou 8 encontros", basePrice: 870, targetRevenue: 0 },
    { id: 132, name: "Práticas Integrativas e Complementares (Capacitação)", duration: "1 mês ou 8 encontros", basePrice: 974, targetRevenue: 0 },
    
    // Row 136: Massagem para Gestantes
    { id: 133, name: "Massagem para Gestantes (Qualificação)", duration: "15 dias ou 4 encontros", basePrice: 304, targetRevenue: 0 },
];
