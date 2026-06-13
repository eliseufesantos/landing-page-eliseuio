const cases = [
  {
    title: "FIAP",
    segment: "educação e tecnologia",
    status: "case em refinamento",
    stack: ["produto", "dados", "experiência"],
    summary:
      "Projeto com foco em clareza, estrutura e experiência digital para uma operação de educação e tecnologia.",
    chaos:
      "O cenário completo será detalhado em breve, com contexto, objetivos e restrições do projeto.",
    system:
      "A solução combinou organização de informação, experiência digital e decisões técnicas orientadas ao uso real.",
    result:
      "O resultado foi uma base mais clara para apresentar, operar e evoluir a experiência.",
    metric: "case em edição",
    link: "Detalhes em breve",
    shot: "assets/case-shots/fiap-case.jpeg"
  },
  {
    title: "Eucalyptus Automations",
    segment: "automação e operação",
    status: "case em refinamento",
    stack: ["automação", "integração", "processo"],
    summary:
      "Automação pensada para reduzir atrito operacional e transformar tarefas repetitivas em fluxo confiável.",
    chaos:
      "O cenário completo será detalhado em breve, com o mapa dos processos e gargalos iniciais.",
    system:
      "A solução parte de integrações, regras claras e uma camada operacional simples de acompanhar.",
    result:
      "O resultado esperado é menos trabalho manual e mais previsibilidade no dia a dia.",
    metric: "case em edição",
    link: "Detalhes em breve",
    shot: "assets/case-shots/eucalyptus-case.jpeg"
  },
  {
    title: "Estúdio Fotográfico",
    segment: "serviço premium",
    status: "case em refinamento",
    stack: ["site", "CRM", "agenda", "atendimento"],
    summary:
      "Sistema comercial e operacional para organizar atendimento, agenda, captura de clientes e rotina do estúdio.",
    chaos:
      "O cenário completo será detalhado em breve, incluindo os pontos de perda entre contato, agendamento e entrega.",
    system:
      "A solução conecta presença digital, CRM, agenda e acompanhamento para dar continuidade ao cliente.",
    result:
      "O resultado é uma operação mais clara, com menos improviso e mais controle sobre cada etapa.",
    metric: "case em edição",
    link: "Detalhes em breve",
    shot: "assets/case-shots/estudio-case.jpeg"
  }
];

let activeCase = 0;

const caseCard = document.querySelector("#caseCard");
const caseCounter = document.querySelector("#caseCounter");
const caseDots = document.querySelector("#caseDots");
const modal = document.querySelector("#caseModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");
const prevCase = document.querySelector("#prevCase");
const nextCase = document.querySelector("#nextCase");
const prevCaseFloat = document.querySelector("#prevCaseFloat");
const nextCaseFloat = document.querySelector("#nextCaseFloat");

function tagClass(index) {
  if (index === 0) return "blue";
  if (index === 1) return "green";
  return "";
}

function renderCase() {
  const item = cases[activeCase];
  caseCounter.textContent = `${activeCase + 1} / ${cases.length}`;
  caseCard.innerHTML = `
    <div class="case-image">
      <img src="${item.shot}" alt="Imagem do case ${item.title}" />
    </div>
    <div class="case-body">
      <div class="case-info">
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
      </div>
      <div class="case-mini-meta">
        <span>${item.segment}</span>
        <span>${item.status}</span>
      </div>
    </div>
  `;

  caseDots.innerHTML = cases
    .map((_, index) => `<button type="button" aria-label="Abrir case ${index + 1}" class="${index === activeCase ? "active" : ""}" data-case="${index}"></button>`)
    .join("");
}

function setCase(index) {
  activeCase = (index + cases.length) % cases.length;
  renderCase();
}

function openModal() {
  const item = cases[activeCase];
  modalContent.innerHTML = `
    <div class="modal-cover modal-cover-image"><img src="${item.shot}" alt="Imagem do case ${item.title}" /></div>
    <div class="modal-inner">
      <span class="modal-icon"><img src="assets/logomark-io.png" alt="" /></span>
      <h2 id="modalTitle">${item.title}</h2>
      <p class="modal-summary">${item.summary}</p>
      <div class="modal-properties">
        <div class="modal-property"><span>Segmento</span><strong>${item.segment}</strong></div>
        <div class="modal-property"><span>Status</span><strong>${item.status}</strong></div>
        <div class="modal-property"><span>Resultado</span><strong>${item.metric}</strong></div>
      </div>
      <div class="modal-sections">
        <section class="modal-section">
          <h3>O Cenário Anterior: o caos</h3>
          <p>${item.chaos}</p>
        </section>
        <section class="modal-section">
          <h3>A Engenharia Aplicada: o sistema</h3>
          <p>${item.system}</p>
        </section>
        <section class="modal-section">
          <h3>O Resultado: a ordem</h3>
          <p>${item.result}</p>
        </section>
      </div>
      ${item.shot ? `<div class="shot-frame"><img src="${item.shot}" alt="Captura de tela do case ${item.title}" /></div>` : ""}
      <div class="modal-links">
        <a class="btn btn-secondary" href="#cases">${item.link}</a>
        <a class="btn btn-primary" href="#contato">Quero um sistema assim</a>
      </div>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModal.focus();
}

function closeCaseModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  caseCard.focus();
}

prevCase.addEventListener("click", () => setCase(activeCase - 1));
nextCase.addEventListener("click", () => setCase(activeCase + 1));
prevCaseFloat.addEventListener("click", () => setCase(activeCase - 1));
nextCaseFloat.addEventListener("click", () => setCase(activeCase + 1));
caseCard.addEventListener("click", openModal);
closeModal.addEventListener("click", closeCaseModal);

caseDots.addEventListener("click", (event) => {
  const dot = event.target.closest("button[data-case]");
  if (!dot) return;
  setCase(Number(dot.dataset.case));
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeCaseModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeCaseModal();
  }
});

renderCase();
