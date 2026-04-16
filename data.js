// =====================================================
// SOL INSTITUTO - DADOS DOS CURSOS GERADOS DA PLANILHA CSV
// =====================================================

const COURSES_DATA = [
    {
        "id": 1,
        "name": "Acupuntura Aplicada (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 565,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 2,
        "name": "Acupuntura Aplicada (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 565,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 3,
        "name": "Acupuntura Aplicada (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 633,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 4,
        "name": "Acupuntura Aplicada (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 633,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 5,
        "name": "Acupuntura Reumato (Qualificação)",
        "duration": "1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 565,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 6,
        "name": "Acupuntura Reumato (Qualificação)",
        "duration": "1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 565,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 7,
        "name": "Acupuntura Reumato (Capacitação)",
        "duration": "1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 600,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 8,
        "name": "Acupuntura Reumato (Capacitação)",
        "duration": "1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 600,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 9,
        "name": "Anatomia (Qualificação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "Semanal",
        "basePrice": 685,
        "profCost": 980,
        "targetRevenue": 1960,
        "_sheetType": "Semana"
    },
    {
        "id": 10,
        "name": "Anatomia (Qualificação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "FDS",
        "basePrice": 685,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 11,
        "name": "Anatomia (Capacitação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "Semanal",
        "basePrice": 766,
        "profCost": 980,
        "targetRevenue": 1960,
        "_sheetType": "Semana"
    },
    {
        "id": 12,
        "name": "Anatomia (Capacitação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "FDS",
        "basePrice": 766,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 13,
        "name": "Aromaterapia (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 870,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 14,
        "name": "Aromaterapia (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 870,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 15,
        "name": "Aromaterapia (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 974,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 16,
        "name": "Aromaterapia (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 974,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 17,
        "name": "Aromaterapia Aplicada (Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 304,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 18,
        "name": "Aromaterapia Aplicada (Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 304,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 19,
        "name": "Aromaterapia Aplicada (Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 340,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 20,
        "name": "Aromaterapia Aplicada (Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 340,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 21,
        "name": "Auriculoterapia Energética (acup, nat, t.holíst, integr, curso curto) (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 808,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 22,
        "name": "Auriculoterapia Energética (acup, nat, t.holíst, integr, curso curto) (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 808,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 23,
        "name": "Auriculoterapia Energética (acup, nat, t.holíst, integr, curso curto)(Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 908,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 24,
        "name": "Auriculoterapia Energética (acup, nat, t.holíst, integr, curso curto)(Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 908,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 25,
        "name": "Autocuidado do Terapeuta e Ergonomia do Toque (integrativa)(Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 304,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 26,
        "name": "Autocuidado do Terapeuta e Ergonomia do Toque (integrativa)(Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 304,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 27,
        "name": "Autocuidado do Terapeuta e Ergonomia do Toque (integrativa)(Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 340,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 28,
        "name": "Autocuidado do Terapeuta e Ergonomia do Toque (integrativa)(Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 340,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 29,
        "name": "Cone Hindu  (Qualificação)",
        "duration": "2 aulas ( 1 encontro integral)",
        "modality": "Semanal",
        "basePrice": 470,
        "profCost": 280,
        "targetRevenue": 560,
        "_sheetType": "Semana"
    },
    {
        "id": 30,
        "name": "Cone Hindu  (Qualificação)",
        "duration": "2 aulas ( 1 encontro integral)",
        "modality": "FDS",
        "basePrice": 470,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 31,
        "name": "Cone Hindu (Capacitação)",
        "duration": "2 aulas ( 1 encontro integral)",
        "modality": "Semanal",
        "basePrice": 527,
        "profCost": 280,
        "targetRevenue": 560,
        "_sheetType": "Semana"
    },
    {
        "id": 32,
        "name": "Cone Hindu (Capacitação)",
        "duration": "2 aulas ( 1 encontro integral)",
        "modality": "FDS",
        "basePrice": 527,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 33,
        "name": "Craniopuntura Chinesa  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 530,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 34,
        "name": "Craniopuntura Chinesa  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 530,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 35,
        "name": "Craniopuntura Chinesa (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 595,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 36,
        "name": "Craniopuntura Chinesa (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 595,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 37,
        "name": "Craniopuntura Japonesa  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 530,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 38,
        "name": "Craniopuntura Japonesa  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 530,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 39,
        "name": "Craniopuntura Japonesa (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 595,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 40,
        "name": "Craniopuntura Japonesa (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 595,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 41,
        "name": "Cristaloterapia Aplicada à Massoterapia (integrativa)  (Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 304,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 42,
        "name": "Cristaloterapia Aplicada à Massoterapia (integrativa)  (Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 304,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 43,
        "name": "Cristaloterapia Aplicada à Massoterapia (integrativa) (Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 340,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 44,
        "name": "Cristaloterapia Aplicada à Massoterapia (integrativa) (Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 340,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 45,
        "name": "Cristaloterapia e Argiloterapia  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 870,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 46,
        "name": "Cristaloterapia e Argiloterapia  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 870,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 47,
        "name": "Cristaloterapia e Argiloterapia (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 974,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 48,
        "name": "Cristaloterapia e Argiloterapia (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 974,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 49,
        "name": "Cromoterapia  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 7 encontros",
        "modality": "Semanal",
        "basePrice": 870,
        "profCost": 980,
        "targetRevenue": 1960,
        "_sheetType": "Semana"
    },
    {
        "id": 50,
        "name": "Cromoterapia  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 7 encontros",
        "modality": "FDS",
        "basePrice": 870,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 51,
        "name": "Cromoterapia (Capacitação)",
        "duration": "2 FDS, 1 mês ou 7 encontros",
        "modality": "Semanal",
        "basePrice": 975,
        "profCost": 980,
        "targetRevenue": 1960,
        "_sheetType": "Semana"
    },
    {
        "id": 52,
        "name": "Cromoterapia (Capacitação)",
        "duration": "2 FDS, 1 mês ou 7 encontros",
        "modality": "FDS",
        "basePrice": 975,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 53,
        "name": "Cromoterapia Aplicada à Massoterapia (integrativa)  (Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 304,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 54,
        "name": "Cromoterapia Aplicada à Massoterapia (integrativa)  (Qualificação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 304,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 55,
        "name": "Cromoterapia Aplicada à Massoterapia (integrativa) (Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 340,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 56,
        "name": "Cromoterapia Aplicada à Massoterapia (integrativa) (Capacitação)",
        "duration": "15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 340,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 57,
        "name": "Cromoterapia, Aromaterapia e Cristaloterapia aplicadas à massagem (integrativa)  (Qualificação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 570,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 58,
        "name": "Cromoterapia, Aromaterapia e Cristaloterapia aplicadas à massagem (integrativa)  (Qualificação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 570,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 59,
        "name": "Cromoterapia, Aromaterapia e Cristaloterapia aplicadas à massagem (integrativa) (Capacitação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 639,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 60,
        "name": "Cromoterapia, Aromaterapia e Cristaloterapia aplicadas à massagem (integrativa) (Capacitação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 639,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 61,
        "name": "Drenagem Linfática Corporal Terapêutica (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês e meio ou 10 aulas",
        "modality": "Semanal",
        "basePrice": 760,
        "profCost": 1400,
        "targetRevenue": 2800,
        "_sheetType": "Semana"
    },
    {
        "id": 62,
        "name": "Drenagem Linfática Corporal Terapêutica (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês e meio ou 10 aulas",
        "modality": "FDS",
        "basePrice": 760,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 63,
        "name": "Drenagem Linfática Corporal Terapêutica (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês e meio ou 10 aulas",
        "modality": "Semanal",
        "basePrice": 850,
        "profCost": 1400,
        "targetRevenue": 2800,
        "_sheetType": "Semana"
    },
    {
        "id": 64,
        "name": "Drenagem Linfática Corporal Terapêutica (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês e meio ou 10 aulas",
        "modality": "FDS",
        "basePrice": 850,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 65,
        "name": "Drenagem Linfática Manual (pré e pós) - (antiga FDS e curso curto)  (Qualificação)",
        "duration": "3 FDS, 3 meses,  ou 12 aulas",
        "modality": "Semanal",
        "basePrice": 1440,
        "profCost": 1680,
        "targetRevenue": 3360,
        "_sheetType": "Semana"
    },
    {
        "id": 66,
        "name": "Drenagem Linfática Manual (pré e pós) - (antiga FDS e curso curto)  (Qualificação)",
        "duration": "3 FDS, 3 meses,  ou 12 aulas",
        "modality": "FDS",
        "basePrice": 1440,
        "profCost": 1800,
        "targetRevenue": 3600,
        "_sheetType": "FDS"
    },
    {
        "id": 67,
        "name": "Drenagem Linfática Manual (pré e pós) - (antiga FDS e curso curto) (Capacitação)",
        "duration": "3 FDS, 3 meses,  ou 12 aulas",
        "modality": "Semanal",
        "basePrice": 1615,
        "profCost": 1680,
        "targetRevenue": 3360,
        "_sheetType": "Semana"
    },
    {
        "id": 68,
        "name": "Drenagem Linfática Manual (pré e pós) - (antiga FDS e curso curto) (Capacitação)",
        "duration": "3 FDS, 3 meses,  ou 12 aulas",
        "modality": "FDS",
        "basePrice": 1615,
        "profCost": 1800,
        "targetRevenue": 3600,
        "_sheetType": "FDS"
    },
    {
        "id": 69,
        "name": "Drenagem Linfática Manual (pré e pós) - antiga  (Qualificação)",
        "duration": "3 FDS,  3 meses ou 20 aulas",
        "modality": "Semanal",
        "basePrice": 1765,
        "profCost": 2800,
        "targetRevenue": 5600,
        "_sheetType": "Semana"
    },
    {
        "id": 70,
        "name": "Drenagem Linfática Manual (pré e pós) - antiga  (Qualificação)",
        "duration": "3 FDS,  3 meses ou 20 aulas",
        "modality": "FDS",
        "basePrice": 1765,
        "profCost": 1800,
        "targetRevenue": 3600,
        "_sheetType": "FDS"
    },
    {
        "id": 71,
        "name": "Drenagem Linfática Manual (pré e pós) - antiga (Capacitação)",
        "duration": "3 FDS,  3 meses ou 20 aulas",
        "modality": "Semanal",
        "basePrice": 1980,
        "profCost": 2800,
        "targetRevenue": 5600,
        "_sheetType": "Semana"
    },
    {
        "id": 72,
        "name": "Drenagem Linfática Manual (pré e pós) - antiga (Capacitação)",
        "duration": "3 FDS,  3 meses ou 20 aulas",
        "modality": "FDS",
        "basePrice": 1980,
        "profCost": 1800,
        "targetRevenue": 3600,
        "_sheetType": "FDS"
    },
    {
        "id": 73,
        "name": "Drenagem pós-operatória (antiga semanal)  (Qualificação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "Semanal",
        "basePrice": 805,
        "profCost": 980,
        "targetRevenue": 1960,
        "_sheetType": "Semana"
    },
    {
        "id": 74,
        "name": "Drenagem pós-operatória (antiga semanal)  (Qualificação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "FDS",
        "basePrice": 805,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 75,
        "name": "Drenagem pós-operatória (antiga semanal) (Capacitação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "Semanal",
        "basePrice": 905,
        "profCost": 980,
        "targetRevenue": 1960,
        "_sheetType": "Semana"
    },
    {
        "id": 76,
        "name": "Drenagem pós-operatória (antiga semanal) (Capacitação)",
        "duration": "1 mês ou 7 encontros",
        "modality": "FDS",
        "basePrice": 905,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 77,
        "name": "Drenagem pós-operatória (antiga FDS e curso curto)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 615,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 78,
        "name": "Drenagem pós-operatória (antiga FDS e curso curto)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 615,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 79,
        "name": "Drenagem pós-operatória (antiga FDS e curso curto) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 695,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 80,
        "name": "Drenagem pós-operatória (antiga FDS e curso curto) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 695,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 81,
        "name": "Feng shui  (Qualificação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 560,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 82,
        "name": "Feng shui  (Qualificação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 560,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 83,
        "name": "Feng shui (Capacitação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 627,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 84,
        "name": "Feng shui (Capacitação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 627,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 85,
        "name": "Fitoterapia Brasileira  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 960,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 86,
        "name": "Fitoterapia Brasileira  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 960,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 87,
        "name": "Fitoterapia Brasileira (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 1075,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 88,
        "name": "Fitoterapia Brasileira (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 1075,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 89,
        "name": "Florais de Bach  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 935,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 90,
        "name": "Florais de Bach  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 935,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 91,
        "name": "Florais de Bach (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 1048,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 92,
        "name": "Florais de Bach (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 1048,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 93,
        "name": "Fundamentos Anatômicos e Palpatórios (integrativa)  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 608,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 94,
        "name": "Fundamentos Anatômicos e Palpatórios (integrativa)  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 608,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 95,
        "name": "Fundamentos Anatômicos e Palpatórios (integrativa) (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 680,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 96,
        "name": "Fundamentos Anatômicos e Palpatórios (integrativa) (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 680,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 97,
        "name": "Liberação Miofascial - 1 FDS (integrativa)  (Qualificação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 805,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 98,
        "name": "Liberação Miofascial - 1 FDS (integrativa)  (Qualificação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 805,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 99,
        "name": "Liberação Miofascial - 1 FDS (integrativa) (Capacitação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 905,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 100,
        "name": "Liberação Miofascial - 1 FDS (integrativa) (Capacitação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 905,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 101,
        "name": "Liberação Miofascial – 3 meses - Regina  (Qualificação)",
        "duration": "3 FDS ou 12 encontros",
        "modality": "Semanal",
        "basePrice": 1440,
        "profCost": 2160,
        "targetRevenue": 4320,
        "_sheetType": "Semana"
    },
    {
        "id": 102,
        "name": "Liberação Miofascial – 3 meses - Regina  (Qualificação)",
        "duration": "3 FDS ou 12 encontros",
        "modality": "FDS",
        "basePrice": 1440,
        "profCost": 3000,
        "targetRevenue": 6000,
        "_sheetType": "FDS"
    },
    {
        "id": 103,
        "name": "Liberação Miofascial – 3 meses - Regina (Capacitação)",
        "duration": "3 FDS ou 12 encontros",
        "modality": "Semanal",
        "basePrice": 1613,
        "profCost": 2160,
        "targetRevenue": 4320,
        "_sheetType": "Semana"
    },
    {
        "id": 104,
        "name": "Liberação Miofascial – 3 meses - Regina (Capacitação)",
        "duration": "3 FDS ou 12 encontros",
        "modality": "FDS",
        "basePrice": 1613,
        "profCost": 3000,
        "targetRevenue": 6000,
        "_sheetType": "FDS"
    },
    {
        "id": 105,
        "name": "Massagem Relaxante Antiestresse (integrativa)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 570,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 106,
        "name": "Massagem Relaxante Antiestresse (integrativa)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 570,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 107,
        "name": "Massagem Relaxante Antiestresse (integrativa) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 639,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 108,
        "name": "Massagem Relaxante Antiestresse (integrativa) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 639,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 109,
        "name": "Massagem Ayurvédica – Abhyanga (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 a 2 meses ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 608,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 110,
        "name": "Massagem Ayurvédica – Abhyanga (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 a 2 meses ou 8 aulas",
        "modality": "FDS",
        "basePrice": 608,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 111,
        "name": "Massagem Ayurvédica – Abhyanga (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 a 2 meses ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 680,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 112,
        "name": "Massagem Ayurvédica – Abhyanga (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 a 2 meses ou 8 aulas",
        "modality": "FDS",
        "basePrice": 680,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 113,
        "name": "Massoterapia Aplicada a Públicos Específicos (integrativa)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 6 aulas",
        "modality": "Semanal",
        "basePrice": 304,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 114,
        "name": "Massoterapia Aplicada a Públicos Específicos (integrativa)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 6 aulas",
        "modality": "FDS",
        "basePrice": 304,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 115,
        "name": "Massoterapia Aplicada a Públicos Específicos (integrativa) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 6 aulas",
        "modality": "Semanal",
        "basePrice": 340,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 116,
        "name": "Massoterapia Aplicada a Públicos Específicos (integrativa) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 6 aulas",
        "modality": "FDS",
        "basePrice": 340,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 117,
        "name": "Massagem com Pedras Quentes & Pindas Chinesas (integrativa)  (Qualificação)",
        "duration": "1 mês ou 6 aulas",
        "modality": "Semanal",
        "basePrice": 456,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 118,
        "name": "Massagem com Pedras Quentes & Pindas Chinesas (integrativa)  (Qualificação)",
        "duration": "1 mês ou 6 aulas",
        "modality": "FDS",
        "basePrice": 456,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 119,
        "name": "Massagem com Pedras Quentes & Pindas Chinesas (integrativa) (Capacitação)",
        "duration": "1 mês ou 6 aulas",
        "modality": "Semanal",
        "basePrice": 510,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 120,
        "name": "Massagem com Pedras Quentes & Pindas Chinesas (integrativa) (Capacitação)",
        "duration": "1 mês ou 6 aulas",
        "modality": "FDS",
        "basePrice": 510,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 121,
        "name": "Massagem com Pedras Quentes e Pindas Chinesas (antiga)  (Qualificação)",
        "duration": "1 FDS ou 4 aulas",
        "modality": "Semanal",
        "basePrice": 361,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 122,
        "name": "Massagem com Pedras Quentes e Pindas Chinesas (antiga)  (Qualificação)",
        "duration": "1 FDS ou 4 aulas",
        "modality": "FDS",
        "basePrice": 361,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 123,
        "name": "Massagem com Pedras Quentes e Pindas Chinesas (antiga) (Capacitação)",
        "duration": "1 FDS ou 4 aulas",
        "modality": "Semanal",
        "basePrice": 405,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 124,
        "name": "Massagem com Pedras Quentes e Pindas Chinesas (antiga) (Capacitação)",
        "duration": "1 FDS ou 4 aulas",
        "modality": "FDS",
        "basePrice": 405,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 125,
        "name": "Massagem Desportiva (integrativa)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 855,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 126,
        "name": "Massagem Desportiva (integrativa)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 855,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 127,
        "name": "Massagem Desportiva (integrativa) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 958,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 128,
        "name": "Massagem Desportiva (integrativa) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 958,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 129,
        "name": "Massagem Desportiva (FDS, curso curto e antiga)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 608,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 130,
        "name": "Massagem Desportiva (FDS, curso curto e antiga)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 608,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 131,
        "name": "Massagem Desportiva (FDS, curso curto e antiga) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 680,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 132,
        "name": "Massagem Desportiva (FDS, curso curto e antiga) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 680,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 133,
        "name": "Massagem do In (antiga)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 536,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 134,
        "name": "Massagem do In (antiga)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 536,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 135,
        "name": "Massagem do In (antiga) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 604,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 136,
        "name": "Massagem do In (antiga) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 604,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 137,
        "name": "Massagem e Drenagem Facial  (Qualificação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 551,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 138,
        "name": "Massagem e Drenagem Facial  (Qualificação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 551,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 139,
        "name": "Massagem e Drenagem Facial (Capacitação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 618,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 140,
        "name": "Massagem e Drenagem Facial (Capacitação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 618,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 141,
        "name": "Massagem Modeladora (semanal antiga)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 755,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 142,
        "name": "Massagem Modeladora (semanal antiga)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 755,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 143,
        "name": "Massagem Modeladora (semanal antiga) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 846,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 144,
        "name": "Massagem Modeladora (semanal antiga) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 846,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 145,
        "name": "Massagem Modeladora (FDS, curso curto)  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 480,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 146,
        "name": "Massagem Modeladora (FDS, curso curto)  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 480,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 147,
        "name": "Massagem Modeladora (FDS, curso curto) (Capacitação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 538,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 148,
        "name": "Massagem Modeladora (FDS, curso curto) (Capacitação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 538,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 149,
        "name": "Massagem Antiestresse (FDS, curso curto)  (Qualificação)",
        "duration": "1 FDS  ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 456,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 150,
        "name": "Massagem Antiestresse (FDS, curso curto)  (Qualificação)",
        "duration": "1 FDS  ou 4 encontros",
        "modality": "FDS",
        "basePrice": 456,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 151,
        "name": "Massagem Antiestresse (FDS, curso curto) (Capacitação)",
        "duration": "1 FDS  ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 510,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 152,
        "name": "Massagem Antiestresse (FDS, curso curto) (Capacitação)",
        "duration": "1 FDS  ou 4 encontros",
        "modality": "FDS",
        "basePrice": 510,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 153,
        "name": "Massagem Antiestresse (semanal antiga)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 755,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 154,
        "name": "Massagem Antiestresse (semanal antiga)  (Qualificação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 755,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 155,
        "name": "Massagem Antiestresse (semanal antiga) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 846,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 156,
        "name": "Massagem Antiestresse (semanal antiga) (Capacitação)",
        "duration": "1 mês ou 8 aulas",
        "modality": "FDS",
        "basePrice": 846,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 157,
        "name": "Massagem Terapêutica (antiga)  (Qualificação)",
        "duration": "2 meses ou 16 encontros",
        "modality": "Semanal",
        "basePrice": 1045,
        "profCost": 2240,
        "targetRevenue": 4480,
        "_sheetType": "Semana"
    },
    {
        "id": 158,
        "name": "Massagem Terapêutica (antiga)  (Qualificação)",
        "duration": "2 meses ou 16 encontros",
        "modality": "FDS",
        "basePrice": 1045,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 159,
        "name": "Massagem Terapêutica (antiga) (Capacitação)",
        "duration": "2 meses ou 16 encontros",
        "modality": "Semanal",
        "basePrice": 1174,
        "profCost": 2240,
        "targetRevenue": 4480,
        "_sheetType": "Semana"
    },
    {
        "id": 160,
        "name": "Massagem Terapêutica (antiga) (Capacitação)",
        "duration": "2 meses ou 16 encontros",
        "modality": "FDS",
        "basePrice": 1174,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 161,
        "name": "Massagem Terapêutica (antiga - FDS)  (Qualificação)",
        "duration": "2 FDS",
        "modality": "Semanal",
        "basePrice": 760,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 162,
        "name": "Massagem Terapêutica (antiga - FDS)  (Qualificação)",
        "duration": "2 FDS",
        "modality": "FDS",
        "basePrice": 760,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 163,
        "name": "Massagem Terapêutica (antiga - FDS) (Capacitação)",
        "duration": "2 FDS",
        "modality": "Semanal",
        "basePrice": 850,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 164,
        "name": "Massagem Terapêutica (antiga - FDS) (Capacitação)",
        "duration": "2 FDS",
        "modality": "FDS",
        "basePrice": 850,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 165,
        "name": "Massagem Terapêutica Integrativa Profissional (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 aulas,   ( a 10 aulas)",
        "modality": "Semanal",
        "basePrice": 875,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 166,
        "name": "Massagem Terapêutica Integrativa Profissional (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês ou 8 aulas,   ( a 10 aulas)",
        "modality": "FDS",
        "basePrice": 875,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 167,
        "name": "Massagem Terapêutica Integrativa Profissional (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 aulas,   ( a 10 aulas)",
        "modality": "Semanal",
        "basePrice": 980,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 168,
        "name": "Massagem Terapêutica Integrativa Profissional (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês ou 8 aulas,   ( a 10 aulas)",
        "modality": "FDS",
        "basePrice": 980,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 169,
        "name": "Meditação e Autocura  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 508,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 170,
        "name": "Meditação e Autocura  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 508,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 171,
        "name": "Meditação e Autocura (Capacitação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 570,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 172,
        "name": "Meditação e Autocura (Capacitação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 570,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 173,
        "name": "Mestrado em Reiki  (Qualificação)",
        "duration": "1 aulas",
        "modality": "Semanal",
        "basePrice": 745,
        "profCost": 140,
        "targetRevenue": 280,
        "_sheetType": "Semana"
    },
    {
        "id": 174,
        "name": "Mestrado em Reiki  (Qualificação)",
        "duration": "1 aulas",
        "modality": "FDS",
        "basePrice": 745,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 175,
        "name": "Mestrado em Reiki (Capacitação)",
        "duration": "1 aulas",
        "modality": "Semanal",
        "basePrice": 836,
        "profCost": 140,
        "targetRevenue": 280,
        "_sheetType": "Semana"
    },
    {
        "id": 176,
        "name": "Mestrado em Reiki (Capacitação)",
        "duration": "1 aulas",
        "modality": "FDS",
        "basePrice": 836,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 177,
        "name": "Moxaterapia, Ventosaterapia e Gua Sha  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 455,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 178,
        "name": "Moxaterapia, Ventosaterapia e Gua Sha  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 455,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 179,
        "name": "Moxaterapia, Ventosaterapia e Gua Sha (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 512,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 180,
        "name": "Moxaterapia, Ventosaterapia e Gua Sha (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 512,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 181,
        "name": "Pompages e Empreendedorismo (antigo)  (Qualificação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 375,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 182,
        "name": "Pompages e Empreendedorismo (antigo)  (Qualificação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 375,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 183,
        "name": "Pompages e Empreendedorismo (antigo) (Capacitação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 421,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 184,
        "name": "Pompages e Empreendedorismo (antigo) (Capacitação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 421,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 185,
        "name": "Pompages e Liberação Miofascial (integrativa e antiga)  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 608,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 186,
        "name": "Pompages e Liberação Miofascial (integrativa e antiga)  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 608,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 187,
        "name": "Pompages e Liberação Miofascial (integrativa e antiga) (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 680,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 188,
        "name": "Pompages e Liberação Miofascial (integrativa e antiga) (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 680,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 189,
        "name": "Quick Massage (integrativo)  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 480,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 190,
        "name": "Quick Massage (integrativo)  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 480,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 191,
        "name": "Quick Massage (integrativo) (Capacitação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 542,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 192,
        "name": "Quick Massage (integrativo) (Capacitação)",
        "duration": "1 FDS, 15 dias ou 4 encontros",
        "modality": "FDS",
        "basePrice": 542,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 193,
        "name": "Quick Massage (antigo)  (Qualificação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "Semanal",
        "basePrice": 715,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 194,
        "name": "Quick Massage (antigo)  (Qualificação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "FDS",
        "basePrice": 715,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 195,
        "name": "Quick Massage (antigo) (Capacitação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "Semanal",
        "basePrice": 798,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 196,
        "name": "Quick Massage (antigo) (Capacitação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "FDS",
        "basePrice": 798,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 197,
        "name": "Radiestesia e Radionica  (Qualificação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "Semanal",
        "basePrice": 615,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 198,
        "name": "Radiestesia e Radionica  (Qualificação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "FDS",
        "basePrice": 615,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 199,
        "name": "Radiestesia e Radionica (Capacitação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "Semanal",
        "basePrice": 690,
        "profCost": 840,
        "targetRevenue": 1680,
        "_sheetType": "Semana"
    },
    {
        "id": 200,
        "name": "Radiestesia e Radionica (Capacitação)",
        "duration": "1 FDS, 20 dias ou 6 encontros",
        "modality": "FDS",
        "basePrice": 690,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 201,
        "name": "Recursos Eletroterapêuticos  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 530,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 202,
        "name": "Recursos Eletroterapêuticos  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 530,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 203,
        "name": "Recursos Eletroterapêuticos (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 595,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 204,
        "name": "Recursos Eletroterapêuticos (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 595,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 205,
        "name": "Reflexologia Podal (antigo, curso curto, t. holist))  (Qualificação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 579,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 206,
        "name": "Reflexologia Podal (antigo, curso curto, t. holist))  (Qualificação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 579,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 207,
        "name": "Reflexologia Podal (antigo, curso curto, t. holist)) (Capacitação)",
        "duration": "1 FDS",
        "modality": "Semanal",
        "basePrice": 650,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "Semana"
    },
    {
        "id": 208,
        "name": "Reflexologia Podal (antigo, curso curto, t. holist)) (Capacitação)",
        "duration": "1 FDS",
        "modality": "FDS",
        "basePrice": 650,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 209,
        "name": "Reflexologia Podal Chinesa (integrativa e nat)  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 608,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 210,
        "name": "Reflexologia Podal Chinesa (integrativa e nat)  (Qualificação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 608,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 211,
        "name": "Reflexologia Podal Chinesa (integrativa e nat) (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 680,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 212,
        "name": "Reflexologia Podal Chinesa (integrativa e nat) (Capacitação)",
        "duration": "1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 680,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 213,
        "name": "Reiki (Usui I e II) (nat e t. holíst)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 456,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 214,
        "name": "Reiki (Usui I e II) (nat e t. holíst)  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 456,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 215,
        "name": "Reiki (Usui I e II) (nat e t. holíst) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 512,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 216,
        "name": "Reiki (Usui I e II) (nat e t. holíst) (Capacitação)",
        "duration": "1 FDS, 1 mês ou 8 encontros",
        "modality": "FDS",
        "basePrice": 512,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 217,
        "name": "Reiki II  (Qualificação)",
        "duration": "2 encontros",
        "modality": "Semanal",
        "basePrice": 375,
        "profCost": 280,
        "targetRevenue": 560,
        "_sheetType": "Semana"
    },
    {
        "id": 218,
        "name": "Reiki II  (Qualificação)",
        "duration": "2 encontros",
        "modality": "FDS",
        "basePrice": 375,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 219,
        "name": "Reiki II (Capacitação)",
        "duration": "2 encontros",
        "modality": "Semanal",
        "basePrice": 421,
        "profCost": 280,
        "targetRevenue": 560,
        "_sheetType": "Semana"
    },
    {
        "id": 220,
        "name": "Reiki II (Capacitação)",
        "duration": "2 encontros",
        "modality": "FDS",
        "basePrice": 421,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 221,
        "name": "Reiki III  (Qualificação)",
        "duration": "2 encontros",
        "modality": "Semanal",
        "basePrice": 375,
        "profCost": 280,
        "targetRevenue": 560,
        "_sheetType": "Semana"
    },
    {
        "id": 222,
        "name": "Reiki III  (Qualificação)",
        "duration": "2 encontros",
        "modality": "FDS",
        "basePrice": 375,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 223,
        "name": "Reiki III (Capacitação)",
        "duration": "2 encontros",
        "modality": "Semanal",
        "basePrice": 421,
        "profCost": 280,
        "targetRevenue": 560,
        "_sheetType": "Semana"
    },
    {
        "id": 224,
        "name": "Reiki III (Capacitação)",
        "duration": "2 encontros",
        "modality": "FDS",
        "basePrice": 421,
        "profCost": 0,
        "targetRevenue": 0,
        "_sheetType": "FDS"
    },
    {
        "id": 225,
        "name": "Seitai (antigo)  (Qualificação)",
        "duration": "2 FDS, 2 meses ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 1022,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 226,
        "name": "Seitai (antigo)  (Qualificação)",
        "duration": "2 FDS, 2 meses ou 8 encontros",
        "modality": "FDS",
        "basePrice": 1022,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 227,
        "name": "Seitai (antigo) (Capacitação)",
        "duration": "2 FDS, 2 meses ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 1145,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 228,
        "name": "Seitai (antigo) (Capacitação)",
        "duration": "2 FDS, 2 meses ou 8 encontros",
        "modality": "FDS",
        "basePrice": 1145,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 229,
        "name": "Seitai e New Seitai (Quiropraxia Japonesa) (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês e meio ou 12 encontros",
        "modality": "Semanal",
        "basePrice": 912,
        "profCost": 1680,
        "targetRevenue": 3360,
        "_sheetType": "Semana"
    },
    {
        "id": 230,
        "name": "Seitai e New Seitai (Quiropraxia Japonesa) (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês e meio ou 12 encontros",
        "modality": "FDS",
        "basePrice": 912,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 231,
        "name": "Seitai e New Seitai (Quiropraxia Japonesa) (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês e meio ou 12 encontros",
        "modality": "Semanal",
        "basePrice": 1020,
        "profCost": 1680,
        "targetRevenue": 3360,
        "_sheetType": "Semana"
    },
    {
        "id": 232,
        "name": "Seitai e New Seitai (Quiropraxia Japonesa) (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês e meio ou 12 encontros",
        "modality": "FDS",
        "basePrice": 1020,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 233,
        "name": "Shiatsu (antigo e t. holística)  (Qualificação)",
        "duration": "2 FDS ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 870,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 234,
        "name": "Shiatsu (antigo e t. holística)  (Qualificação)",
        "duration": "2 FDS ou 8 encontros",
        "modality": "FDS",
        "basePrice": 870,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 235,
        "name": "Shiatsu (antigo e t. holística) (Capacitação)",
        "duration": "2 FDS ou 8 encontros",
        "modality": "Semanal",
        "basePrice": 974,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 236,
        "name": "Shiatsu (antigo e t. holística) (Capacitação)",
        "duration": "2 FDS ou 8 encontros",
        "modality": "FDS",
        "basePrice": 974,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 237,
        "name": "Shiatsu & Do In (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês e meio ou 10 encontros",
        "modality": "Semanal",
        "basePrice": 1095,
        "profCost": 1400,
        "targetRevenue": 2800,
        "_sheetType": "Semana"
    },
    {
        "id": 238,
        "name": "Shiatsu & Do In (integrativa)  (Qualificação)",
        "duration": "2 FDS, 1 mês e meio ou 10 encontros",
        "modality": "FDS",
        "basePrice": 1095,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 239,
        "name": "Shiatsu & Do In (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês e meio ou 10 encontros",
        "modality": "Semanal",
        "basePrice": 1225,
        "profCost": 1400,
        "targetRevenue": 2800,
        "_sheetType": "Semana"
    },
    {
        "id": 240,
        "name": "Shiatsu & Do In (integrativa) (Capacitação)",
        "duration": "2 FDS, 1 mês e meio ou 10 encontros",
        "modality": "FDS",
        "basePrice": 1225,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 241,
        "name": "Técnica de Analgesia  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 530,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 242,
        "name": "Técnica de Analgesia  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 530,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 243,
        "name": "Técnica de Analgesia (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 595,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 244,
        "name": "Técnica de Analgesia (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 595,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 245,
        "name": "Tecnicas Avç Inserção e Manip Agulhas  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 635,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 246,
        "name": "Tecnicas Avç Inserção e Manip Agulhas  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 635,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 247,
        "name": "Tecnicas Avç Inserção e Manip Agulhas (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 705,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 248,
        "name": "Tecnicas Avç Inserção e Manip Agulhas (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 705,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 249,
        "name": "Tecnicas de Três Agulhas e/ou Tecnicas de Tratamento  (Qualificação)",
        "duration": "2 FDS, 2 meses ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 1260,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 250,
        "name": "Tecnicas de Três Agulhas e/ou Tecnicas de Tratamento  (Qualificação)",
        "duration": "2 FDS, 2 meses ou 8 aulas",
        "modality": "FDS",
        "basePrice": 1260,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 251,
        "name": "Tecnicas de Três Agulhas e/ou Tecnicas de Tratamento (Capacitação)",
        "duration": "2 FDS, 2 meses ou 8 aulas",
        "modality": "Semanal",
        "basePrice": 1410,
        "profCost": 1120,
        "targetRevenue": 2240,
        "_sheetType": "Semana"
    },
    {
        "id": 252,
        "name": "Tecnicas de Três Agulhas e/ou Tecnicas de Tratamento (Capacitação)",
        "duration": "2 FDS, 2 meses ou 8 aulas",
        "modality": "FDS",
        "basePrice": 1410,
        "profCost": 1200,
        "targetRevenue": 2400,
        "_sheetType": "FDS"
    },
    {
        "id": 253,
        "name": "Técnicas Não Invasivas  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 530,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 254,
        "name": "Técnicas Não Invasivas  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 530,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 255,
        "name": "Técnicas Não Invasivas (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 595,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 256,
        "name": "Técnicas Não Invasivas (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 595,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 257,
        "name": "Tecnicas Seleção e Combinação de Pontos  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 635,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 258,
        "name": "Tecnicas Seleção e Combinação de Pontos  (Qualificação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 635,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 259,
        "name": "Tecnicas Seleção e Combinação de Pontos (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "Semanal",
        "basePrice": 705,
        "profCost": 560,
        "targetRevenue": 1120,
        "_sheetType": "Semana"
    },
    {
        "id": 260,
        "name": "Tecnicas Seleção e Combinação de Pontos (Capacitação)",
        "duration": "1 FDS, 1 mês ou 4 encontros",
        "modality": "FDS",
        "basePrice": 705,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 261,
        "name": "Ventosa, Magneto e Stiperterapia  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 5 encontros",
        "modality": "Semanal",
        "basePrice": 432,
        "profCost": 700,
        "targetRevenue": 1400,
        "_sheetType": "Semana"
    },
    {
        "id": 262,
        "name": "Ventosa, Magneto e Stiperterapia  (Qualificação)",
        "duration": "1 FDS, 15 dias ou 5 encontros",
        "modality": "FDS",
        "basePrice": 432,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    },
    {
        "id": 263,
        "name": "Ventosa, Magneto e Stiperterapia (Capacitação)",
        "duration": "1 FDS, 15 dias ou 5 encontros",
        "modality": "Semanal",
        "basePrice": 485,
        "profCost": 700,
        "targetRevenue": 1400,
        "_sheetType": "Semana"
    },
    {
        "id": 264,
        "name": "Ventosa, Magneto e Stiperterapia (Capacitação)",
        "duration": "1 FDS, 15 dias ou 5 encontros",
        "modality": "FDS",
        "basePrice": 485,
        "profCost": 600,
        "targetRevenue": 1200,
        "_sheetType": "FDS"
    }
];
