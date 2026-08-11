/* ============================================================
   eliseu.io — Landing v2 · runtime estático
   ============================================================ */
(function () {
  "use strict";

  var activeCase = 0;
  var caseOpen = false;

  var cases = [
    {
      title: "Estúdios Lumini & Aura + Cor e Amor",
      segment: "agendamento · CRM · operação",
      stack: ["site de agendamento", "reservas e pagamentos", "WhatsApp", "CRM", "calendário"],
      shortTitle: "Estúdios",
      flow: ["Site de agendamento", "Reservas e pagamentos", "WhatsApp", "CRM + calendário"],
      summary: "Dois negócios compartilhavam clientes, atendimento e parte dos processos. O desafio era organizar jornadas diferentes sem multiplicar o trabalho da equipe.",
      summaryShort: "Dois negócios compartilhavam clientes, atendimento e parte dos processos.",
      chaos: "A locação dos estúdios e a venda de álbuns premium dependiam de jornadas diferentes, mas dividiam clientes, atendimento e dados. Sem um sistema comum, cada nova etapa aumentava o esforço da equipe.",
      chaosShort: "A locação dos estúdios e a venda de álbuns premium dependiam de jornadas diferentes, mas dividiam clientes, atendimento e dados.",
      system: "Construí um site próprio de agendamento com reservas e pagamentos integrados, automações de confirmação, triagem pelo WhatsApp e um CRM para clientes, leads, reservas, pagamentos e pedidos.",
      result: "O site e os fluxos de reserva e pagamento entraram em produção para atender ao volume real. A experiência visual foi elogiada pelo cliente e rapidamente adotada pela equipe.",
      resultShort: "Reservas, pagamentos e atendimento passaram a operar em um fluxo integrado, adotado pela equipe.",
      metric: null,
      shot: "assets/case-shots/estudio-case.jpeg",
      cta: "Ver arquitetura e processo"
    },
    {
      title: "FIAP",
      segment: "educação · IA aplicada",
      stack: ["Python", "LangGraph", "agentes IA", "ClickUp"],
      shortTitle: "FIAP",
      flow: ["Professor", "Diagramador com IA", "edição · estrutura visual · ativos", "plataforma final"],
      summary: "Reengenharia completa do fluxo de produção de conteúdo educacional com o \"Diagramador com IA\", uma ferramenta que conecta o professor direto à plataforma final.",
      chaos: "A criação de um curso passava por conteudistas, revisão, estúdio e dev. A fragmentação gerava retrabalho, perda de contexto e custos invisíveis. Cada entrega levava de 90 a 180 dias.",
      system: "Construí o \"Diagramador com IA\" usando arquitetura de agentes para automatizar a edição, a estruturação visual e a geração de ativos, transformando o fluxo numa esteira ágil.",
      result: "De 6 meses para 7 dias: cerca de 96% menos tempo de produção, conectando o criador de conteúdo direto ao resultado final.",
      metric: { value: "−96%", label: "tempo de produção · de 6 meses para 7 dias" },
      shot: "assets/case-shots/fiap-case.jpeg",
      cta: "Ver detalhes do projeto"
    },
    {
      title: "Eucalyptus Solutions",
      segment: "automação · ativos digitais",
      stack: ["automação", "bots", "Notion CRM", "SwaS"],
      shortTitle: "Eucalyptus",
      flow: ["Mapeamento", "Automações e bots", "Notion CRM", "Operação SwaS"],
      summary: "Venture de criação e comercialização de \"propriedades digitais\" (fluxos de automação e bots), caminhando para um modelo SwaS (Software with a Service).",
      chaos: "Processos manuais e gargalos recorrentes consumiam tempo e abriam espaço para erro em tarefas que se repetiam todo dia.",
      system: "Estruturei processos digitais escaláveis com automação, gestão de ativos digitais e um CRM interno em Notion, entregando eficiência via ecossistemas automatizados.",
      result: "Tarefas repetitivas viraram fluxo confiável, com mais previsibilidade e eficiência operacional no dia a dia.",
      metric: null,
      shot: "assets/case-shots/eucalyptus-case.jpeg",
      cta: "Ver detalhes do projeto"
    }
  ];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderChips() {
    var chips = document.getElementById("caseChips");
    if (!chips) return;
    chips.innerHTML = cases
      .map(function (c, i) {
        return '<button type="button" class="case-chip ' + (i === activeCase ? "active" : "") + '" data-case="' + i + '" aria-pressed="' + (i === activeCase) + '">' + esc(c.shortTitle) + "</button>";
      })
      .join("");
  }

  function renderCase() {
    var item = cases[activeCase];
    var card = document.getElementById("caseCard");
    var stage = document.getElementById("caseStage");
    var architecture = document.getElementById("caseArchitecture");
    var counter = document.getElementById("caseCounter");
    if (!card || !stage || !architecture) return;

    if (counter) counter.textContent = (activeCase + 1) + " / " + cases.length;

    stage.classList.toggle("open", caseOpen);
    card.innerHTML =
      '<div class="case-visual">' +
        '<img src="' + item.shot + '" alt="Imagem do case ' + esc(item.title) + '" />' +
      "</div>" +
      '<article class="case-info">' +
        '<span class="case-segment">' + esc(item.segment) + "</span>" +
        "<h3>" + esc(item.title) + "</h3>" +
        '<p class="summary">' + esc(item.summaryShort || item.summary) + "</p>" +
        (item.metric
          ? '<div class="case-metric"><span class="case-metric-value">' + esc(item.metric.value) + '</span><span class="case-metric-label">' + esc(item.metric.label) + "</span></div>"
          : "") +
        '<button class="case-expand-trigger" id="expandBtn" type="button" aria-expanded="' + caseOpen + '" aria-controls="caseArchitecture">' +
            '<span class="expand-label">' + (caseOpen ? "Ocultar arquitetura e processo" : "Explorar arquitetura e processo") + "</span>" +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>' +
          "</button>" +
      "</article>";

    architecture.innerHTML =
      '<div class="case-architecture-inner">' +
        '<h4>Arquitetura e processo</h4>' +
        '<div class="case-architecture-grid">' +
          '<section class="architecture-copy architecture-before"><span>O cenário anterior</span><p>' + esc(item.chaosShort || item.chaos) + "</p></section>" +
          '<section class="architecture-solution"><span>A solução implementada</span><div class="architecture-flow">' +
            item.flow.map(function (step) { return '<span class="architecture-node">' + esc(step) + "</span>"; }).join('<span class="architecture-line" aria-hidden="true"></span>') +
          "</div></section>" +
          '<section class="architecture-copy architecture-result"><span>O resultado</span><p>' + esc(item.resultShort || item.result) + "</p></section>" +
        "</div>" +
      "</div>";

    var chipBtns = document.querySelectorAll("#caseChips .case-chip");
    Array.prototype.forEach.call(chipBtns, function (b, i) {
      b.classList.toggle("active", i === activeCase);
      b.setAttribute("aria-pressed", String(i === activeCase));
    });
  }

  function setCase(index) {
    activeCase = ((index % cases.length) + cases.length) % cases.length;
    renderCase();
  }

  function toggleExpand() {
    caseOpen = !caseOpen;
    renderCase();
  }

  function setupCarousel() {
    var prev = document.getElementById("prevCase");
    var next = document.getElementById("nextCase");
    var chips = document.getElementById("caseChips");
    var card = document.getElementById("caseCard");

    if (prev) prev.addEventListener("click", function () { setCase(activeCase - 1); });
    if (next) next.addEventListener("click", function () { setCase(activeCase + 1); });

    if (chips) chips.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-case]");
      if (b) setCase(Number(b.dataset.case));
    });
    if (card) card.addEventListener("click", function (e) {
      if (e.target.closest("#expandBtn")) toggleExpand();
    });
  }

  function setupHeader() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var toggle = document.getElementById("menuToggle");
    var menu = document.getElementById("mobileMenu");
    var toggleIcon = toggle ? toggle.querySelector("img") : null;
    var menuPanel = menu ? menu.querySelector(".mobile-menu-panel") : null;
    var menuLinks = menu ? Array.prototype.slice.call(menu.querySelectorAll(".mobile-menu-panel a")) : [];
    var menuOpen = false;

    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 12);
    };

    var setMenu = function (open, returnFocus) {
      if (!toggle || !menu) return;
      menuOpen = open;
      document.body.classList.toggle("modal-open", open);
      header.classList.toggle("menu-open", open);
      menu.classList.toggle("is-open", open);
      menu.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      if (toggleIcon) toggleIcon.src = open ? "assets/icon-close.svg" : "assets/icon-menu.svg";

      if (open && menuPanel) {
        window.requestAnimationFrame(function () { menuPanel.focus(); });
      } else if (returnFocus) {
        toggle.focus();
      }
    };

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        setMenu(!menuOpen, false);
      });

      menu.addEventListener("click", function (event) {
        if (event.target.closest("[data-menu-close]")) setMenu(false, true);
      });

      menuLinks.forEach(function (link) {
        link.addEventListener("click", function () { setMenu(false, false); });
      });

      document.addEventListener("keydown", function (event) {
        if (!menuOpen) return;
        if (event.key === "Escape") {
          event.preventDefault();
          setMenu(false, true);
          return;
        }
        if (event.key !== "Tab") return;

        var focusable = [toggle].concat(menuLinks);
        var current = focusable.indexOf(document.activeElement);
        event.preventDefault();
        if (current === -1) {
          (event.shiftKey ? toggle : menuLinks[0]).focus();
          return;
        }
        var next = (current + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length;
        focusable[next].focus();
      });

      window.addEventListener("resize", function () {
        if (menuOpen && window.innerWidth > 980) setMenu(false, false);
      }, { passive: true });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupFaq() {
    var items = Array.prototype.slice.call(document.querySelectorAll(".faq-list details"));
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    items.forEach(function (item) {
      var summary = item.querySelector("summary");
      var shell = item.querySelector(".faq-answer-shell");
      if (!summary || !shell) return;

      shell.style.height = item.open ? "auto" : "0px";
      shell.style.opacity = item.open ? "1" : "0";

      summary.addEventListener("click", function (event) {
        event.preventDefault();
        if (item.classList.contains("is-animating")) return;

        var willOpen = !item.open;

        if (reduceMotion.matches) {
          item.open = willOpen;
          shell.style.height = willOpen ? "auto" : "0px";
          shell.style.opacity = willOpen ? "1" : "0";
          return;
        }

        item.classList.add("is-animating");
        item.classList.toggle("is-closing", !willOpen);

        var finish = function (transitionEvent) {
          if (transitionEvent.target !== shell || transitionEvent.propertyName !== "height") return;
          shell.removeEventListener("transitionend", finish);

          if (willOpen) {
            shell.style.height = "auto";
          } else {
            item.open = false;
            shell.style.height = "0px";
          }

          item.classList.remove("is-animating", "is-closing");
        };

        shell.addEventListener("transitionend", finish);

        if (willOpen) {
          item.open = true;
          shell.style.height = "0px";
          shell.style.opacity = "0";
          void shell.offsetHeight;
          window.requestAnimationFrame(function () {
            shell.style.height = shell.scrollHeight + "px";
            shell.style.opacity = "1";
          });
        } else {
          shell.style.height = shell.scrollHeight + "px";
          shell.style.opacity = "1";
          void shell.offsetHeight;
          window.requestAnimationFrame(function () {
            shell.style.height = "0px";
            shell.style.opacity = "0";
          });
        }
      });
    });
  }

  function setupReveals() {
    var els = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
    var pipeline = document.getElementById("pipeline");
    var pipeLit = false;
    var check = function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (el) {
        if (el.classList.contains("is-visible")) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add("is-visible");
      });
      if (pipeline && !pipeLit) {
        var r = pipeline.getBoundingClientRect();
        if (r.top < vh * 0.7 && r.bottom > 0) {
          pipeLit = true;
          Array.prototype.forEach.call(pipeline.querySelectorAll(".pipe-node"), function (n, i) {
            setTimeout(function () { n.classList.add("lit"); }, i * 220);
          });
        }
      }
    };
    var onView = function () { requestAnimationFrame(check); };
    window.addEventListener("scroll", onView, { passive: true });
    window.addEventListener("resize", onView, { passive: true });
    check();
    setTimeout(check, 120);
    setTimeout(check, 450);
  }

  function setupIcons() {
    if (!window.lucide || typeof window.lucide.createIcons !== "function") return;
    window.lucide.createIcons({
      attrs: {
        "aria-hidden": "true",
        "stroke-width": 1.8
      }
    });
  }

  function init() {
    setupIcons();
    renderChips();
    renderCase();
    setupCarousel();
    setupHeader();
    setupFaq();
    setupReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
