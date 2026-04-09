const cursos = [
  { nome: "Acupuntura Aplicada (Qualificacao)", custoTurma: 1400 },
  { nome: "Acupuntura Aplicada (Capacitacao)", custoTurma: 1500 },
  { nome: "Aromaterapia (Qualificacao)", custoTurma: 1740 },
  { nome: "Aromaterapia (Capacitacao)", custoTurma: 1948 },
  { nome: "Massagem Relaxante (Qualificacao)", custoTurma: 1140 },
  { nome: "Massagem Relaxante (Capacitacao)", custoTurma: 1278 }
];

const cursoSelect = document.getElementById("curso");
const custoTurmaInput = document.getElementById("custoTurma");
const precoVendedorInput = document.getElementById("precoVendedor");
const margemLucroInput = document.getElementById("margemLucro");
const matriculadosInput = document.getElementById("matriculados");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoCard = document.getElementById("resultadoCard");
const resumo = document.getElementById("resumo");
const risco = document.getElementById("risco");

const formatMoeda = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valor);

function preencherCursos() {
  cursos.forEach((curso, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = curso.nome;
    cursoSelect.appendChild(option);
  });
}

function atualizarCustoPorCurso() {
  const curso = cursos[Number(cursoSelect.value)];
  custoTurmaInput.value = curso?.custoTurma ?? 0;
}

function calcular() {
  const custoTurma = Number(custoTurmaInput.value);
  const precoVendedor = Number(precoVendedorInput.value);
  const margemLucro = Number(margemLucroInput.value) / 100;
  const matriculados = Number(matriculadosInput.value);
  const curso = cursos[Number(cursoSelect.value)];

  if (custoTurma <= 0 || precoVendedor <= 0 || margemLucro < 0 || matriculados < 0) {
    alert("Preencha os campos com valores validos maiores que zero.");
    return;
  }

  const metaReceita = custoTurma * (1 + margemLucro);
  const alunosNecessarios = Math.ceil(metaReceita / precoVendedor);
  const faltam = Math.max(0, alunosNecessarios - matriculados);

  resumo.textContent =
    `Curso: ${curso?.nome ?? "Personalizado"} | ` +
    `Meta de receita: ${formatMoeda(metaReceita)} | ` +
    `Preco por aluno: ${formatMoeda(precoVendedor)} | ` +
    `Alunos necessarios: ${alunosNecessarios}.`;

  risco.className = "risk";
  if (matriculados >= alunosNecessarios) {
    risco.classList.add("ok");
    risco.textContent = `Sem risco: com ${matriculados} matriculados, a meta foi atingida.`;
  } else if (faltam <= 2) {
    risco.classList.add("medium");
    risco.textContent = `Risco medio: faltam ${faltam} aluno(s) para atingir a meta.`;
  } else {
    risco.classList.add("high");
    risco.textContent = `Risco alto: faltam ${faltam} aluno(s) para atingir a meta.`;
  }

  resultadoCard.hidden = false;
}

preencherCursos();
atualizarCustoPorCurso();

cursoSelect.addEventListener("change", atualizarCustoPorCurso);
calcularBtn.addEventListener("click", calcular);
