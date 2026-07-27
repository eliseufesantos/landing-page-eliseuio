/* ============================================================
   eliseu.io — Landing v2 · runtime estático
   ============================================================ */
(function () {
  "use strict";

  var activeCase = 0;

  var cases = [
    {
      title: "Estúdios Lumini & Aura + Cor e Amor",
      segment: "agendamento · CRM · operação",
      stack: ["site de agendamento", "reservas e pagamentos", "WhatsApp", "CRM", "calendário"],
      summary: "Dois negócios compartilhavam clientes, atendimento e parte dos processos. O desafio era organizar jornadas diferentes sem multiplicar o trabalho da equipe.",
      chaos: "A locação dos estúdios e a venda de álbuns premium dependiam de jornadas diferentes, mas dividiam clientes, atendimento e dados. Sem um sistema comum, cada nova etapa aumentava o esforço da equipe.",
      system: "Construí um site próprio de agendamento com reservas e pagamentos integrados, automações de confirmação, triagem pelo WhatsApp e um CRM para clientes, leads, reservas, pagamentos e pedidos.",
      result: "O site e os fluxos de reserva e pagamento entraram em produção para atender ao volume real. A experiência visual foi elogiada pelo cliente e rapidamente adotada pela equipe.",
      metric: null,
      shot: "assets/case-shots/estudio-case.jpeg",
      cta: "Ver arquitetura e processo"
    },
    {
      title: "FIAP",
      segment: "educação · IA aplicada",
      stack: ["Python", "LangGraph", "agentes IA", "ClickUp"],
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
        return '<button type="button" class="case-chip ' + (i === activeCase ? "active" : "") + '" data-case="' + i + '">' + esc(c.title) + "</button>";
      })
      .join("");
  }

  function renderCase() {
    var item = cases[activeCase];
    var card = document.getElementById("caseCard");
    var counter = document.getElementById("caseCounter");
    var dots = document.getElementById("caseDots");
    if (!card) return;

    if (counter) counter.textContent = (activeCase + 1) + " / " + cases.length;

    card.classList.remove("open");
    card.innerHTML =
      '<div class="case-media">' +
        '<span class="media-tag">// ' + esc(item.segment) + "</span>" +
        '<img src="' + item.shot + '" alt="Imagem do case ' + esc(item.title) + '" />' +
      "</div>" +
      '<div class="case-detail">' +
        '<span class="seg">case ' + (activeCase + 1) + " de " + cases.length + "</span>" +
        "<h3>" + esc(item.title) + "</h3>" +
        '<p class="summary">' + esc(item.summary) + "</p>" +
        (item.metric
          ? '<div class="case-metric"><span class="case-metric-value">' + esc(item.metric.value) + '</span><span class="case-metric-label">' + esc(item.metric.label) + "</span></div>"
          : "") +
        '<div class="case-stack">' +
          item.stack.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("") +
        "</div>" +
        '<div class="case-expand"><div>' +
          '<div class="case-steps">' +
            '<div class="case-step s1"><span>// o cenário anterior</span><p>' + esc(item.chaos) + "</p></div>" +
            '<div class="case-step s2"><span>// a solução implementada</span><p>' + esc(item.system) + "</p></div>" +
            '<div class="case-step s3"><span>// o resultado</span><p>' + esc(item.result) + "</p></div>" +
          "</div>" +
        "</div></div>" +
        '<div class="case-actions">' +
          '<button class="btn btn-expand" id="expandBtn" type="button">' +
            '<span class="expand-label">' + esc(item.cta || "Ver detalhes") + "</span>" +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>' +
          "</button>" +
          '<a class="btn btn-wa" href="https://wa.me/+5511911652102" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>' +
            "Quero um sistema assim" +
          "</a>" +
        "</div>" +
      "</div>";

    if (dots) {
      dots.innerHTML = cases
        .map(function (_, i) {
          return '<button type="button" aria-label="Ir para case ' + (i + 1) + '" class="' + (i === activeCase ? "active" : "") + '" data-case="' + i + '"></button>';
        })
        .join("");
    }

    var chipBtns = document.querySelectorAll("#caseChips .case-chip");
    Array.prototype.forEach.call(chipBtns, function (b, i) {
      b.classList.toggle("active", i === activeCase);
    });
  }

  function setCase(index) {
    activeCase = ((index % cases.length) + cases.length) % cases.length;
    renderCase();
  }

  function toggleExpand() {
    var card = document.getElementById("caseCard");
    if (!card) return;
    card.classList.toggle("open");
    var label = card.querySelector(".expand-label");
    if (label) label.textContent = card.classList.contains("open") ? "Ocultar detalhes" : (cases[activeCase].cta || "Ver detalhes");
  }

  function setupCarousel() {
    var prev = document.getElementById("prevCase");
    var next = document.getElementById("nextCase");
    var dots = document.getElementById("caseDots");
    var chips = document.getElementById("caseChips");
    var card = document.getElementById("caseCard");

    if (prev) prev.addEventListener("click", function () { setCase(activeCase - 1); });
    if (next) next.addEventListener("click", function () { setCase(activeCase + 1); });

    if (dots) dots.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-case]");
      if (b) setCase(Number(b.dataset.case));
    });
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

  function init() {
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
