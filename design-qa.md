# Design QA — padrão mobile e estado global dos cases

Data: 2026-08-11

Este é o gate autoritativo da versão atual dos cases.

## Fonte, implementação e estado

- Padrão visual selecionado: `qa/cases-redesign/implementation-mobile-fiap-flow-fixed-390.png`, 375 × 865 px, derivado da correção aprovada para a FIAP.
- Estúdios: `qa/cases-redesign/implementation-mobile-studios-vertical-flow.png`, 375 × 865 px.
- FIAP: `qa/cases-redesign/implementation-mobile-fiap-vertical-flow.png`, 375 × 865 px.
- Eucalyptus: `qa/cases-redesign/implementation-mobile-eucalyptus-vertical-flow.png`, 375 × 865 px.
- Viewport de captura: 390 × 900 CSS px, densidade 1×.
- Evidência adicional em 320 × 800 CSS px: `qa/cases-redesign/implementation-mobile-eucalyptus-vertical-flow-320.png`, 305 × 763 px visíveis.
- Comparação full-view combinada: `qa/cases-redesign/comparison-mobile-all-vertical-flows.png`.
- A comparação já é focada no detalhamento de arquitetura; os três fluxos e seus textos estão legíveis, dispensando outro recorte.
- Estado: arquitetura aberta ao alternar entre os três cases; depois, arquitetura fechada no Eucalyptus e retorno aos Estúdios mantendo o estado fechado.

## Findings e histórico

- [P2] Apenas a FIAP usava a esteira vertical no mobile, enquanto Estúdios e Eucalyptus mantinham a grade 2 × 2. A diferença fazia a mesma interação parecer ter três sistemas visuais.
- Correção: todos os quatro passos agora ocupam uma coluna, com conectores verticais e dimensões iguais em cada case.
- [P1] Trocar de case redefinia `caseOpen` para `false`, interrompendo a comparação entre arquiteturas e contradizendo o estado percebido pelo usuário.
- Correção: `caseOpen` passou a ser um estado global do carrossel. Navegação por chips ou setas preserva a abertura; apenas o controle “Ocultar arquitetura e processo” fecha o detalhamento.
- Evidência pós-correção: Estúdios aberto → FIAP aberta (`2 / 3`) → Eucalyptus aberta (`3 / 3`); após fechar, retorno aos Estúdios com `aria-expanded="false"` e sem a classe `open`.
- Nenhuma divergência P0, P1 ou P2 permanece acionável.

## Superfícies de fidelidade

- Tipografia: rótulos usam o mesmo tamanho, peso e alinhamento à esquerda nos três fluxos.
- Espaçamento e layout: nós de 54 px, conectores de 14 px e largura integral da coluna; em 390 px todos medem 293 px e em 320 px medem 223 px.
- Cores e tokens: bordas e conectores reutilizam o azul da arquitetura existente.
- Imagens e ativos: imagens dos cases e iconografia não foram alteradas.
- Copy e conteúdo: todos os passos originais permanecem integrais e na ordem correta.
- Acessibilidade: `aria-expanded` acompanha o estado global; chips preservam `aria-pressed`; não há overflow horizontal.

## Validação funcional

- Abertura nos Estúdios e navegação seguinte até FIAP e Eucalyptus mantendo `aria-expanded="true"`.
- Fechamento no Eucalyptus e retorno aos Estúdios mantendo `aria-expanded="false"`.
- Fluxos verticais verificados visualmente nos três cases.
- Viewports 390 × 900 e 320 × 800 com `overflowX: 0`.
- Nenhum erro ou aviso no console.
- `node --check script.js` e `git diff --check` passaram.

final result: passed

---

# Design QA — seta final do conector da seção Solução

Data: 2026-08-25

## Fonte visual, implementação e estado

- Evidência visual do problema: `qa/solution-connector/reference-arrow-feedback.png`, 471 × 148 px.
- Implementação desktop: `qa/solution-connector/implemented-arrow-cta-desktop.png`, 1440 × 1024 px, viewport 1440 × 1024 CSS px, densidade 1×.
- Implementação mobile: `qa/solution-connector/implemented-arrow-cta-mobile.png`, 390 × 844 px, viewport 390 × 844 CSS px, densidade 1×.
- Comparação combinada: `qa/solution-connector/design-qa-arrow-comparison.png`.
- Estado: seção `#solucao` revelada, animação do conector concluída, CTA centralizado e seta apontando para o botão.
- A comparação é focada no fechamento do conector; outro recorte não foi necessário porque linha, corte diagonal, seta, espaço e CTA estão legíveis nas duas capturas.
- Normalização: as três imagens aparecem na mesma prancha sem distorção; a referência curta documenta o defeito e as capturas reais mostram a correção no contexto desktop e mobile.

## Findings e histórico

- [P2] O fechamento anterior parecia um triângulo contornado e encostava no CTA, criando ruído visual e enfraquecendo a direção do fluxo.
- Correção: o encaixe foi substituído por uma seta completa, preenchida pelo mesmo degradê do trecho final e sem `stroke`.
- [P2] O trecho final era curto demais para tornar legível a transição azul → verde.
- Correção: o espaço entre Automação & IA e CTA aumentou em 40 px; a haste final ganhou comprimento e a transição agora passa por azul `#176df1`, azul intermediário `#237ee4`, turquesa `#1baab1` e verde `#1fca6b`.
- Pós-correção: a seta termina antes do botão, deixando espaço negativo claro, e aponta diretamente para o centro do CTA em desktop e mobile.
- Nenhuma divergência P0, P1 ou P2 permanece acionável.

## Superfícies de fidelidade

- Fontes e tipografia: CTA, título e textos da seção não foram alterados.
- Espaçamento e layout: eixo e CTA continuam centralizados com desvio inferior a 0,01 px; o fechamento agora tem respiro suficiente para a seta ser reconhecida.
- Cores e tokens: degradê mais distribuído e verde final idêntico ao fundo do CTA.
- Imagens e ativos: mocks, marca Kommo e iconografia existentes permanecem intactos; a seta integra o SVG decorativo responsivo do conector.
- Copy e conteúdo: nenhuma copy foi alterada.
- Acessibilidade: conector permanece `aria-hidden`, sem stroke preto, sem círculos e com `prefers-reduced-motion` preservado.

## Validação funcional

- Desktop 1440 × 1024 e mobile 390 × 844 verificados no navegador.
- Seta com `stroke: none`, preenchimento pelo degradê final e alinhamento ao centro do CTA.
- Sem overflow horizontal e sem erros no console.
- `node --check script.js` e `git diff --check` passaram.

final result: passed

---

# Design QA — fluxo mobile do case FIAP

Data: 2026-08-11

Este é o gate autoritativo da versão atual dos cases.

## Fonte, implementação e estado

- Direção visual aprovada: `C:\Users\Eliseu Santos\.codex\generated_images\019fe259-02fe-75b1-88d7-1544d85aefd0\exec-dda3815a-0cad-47c1-94e4-dfc8de19d9ec.png`, 1440 × 1280 px.
- Evidência do defeito mobile: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-b9b36423-307f-4332-a787-10bbb12381c9.png`, 357 × 953 px.
- Implementação corrigida em 390 px: `qa/cases-redesign/implementation-mobile-fiap-flow-fixed-390.png`, 375 × 865 px visíveis sob viewport 390 × 900 CSS px, densidade 1×.
- Implementação corrigida em 320 px: `qa/cases-redesign/implementation-mobile-fiap-flow-fixed-320.png`, 305 × 763 px visíveis sob viewport 320 × 800 CSS px, densidade 1×.
- Estado: FIAP ativa, arquitetura aberta e solução implementada visível.
- Comparação combinada e normalizada: `qa/cases-redesign/comparison-mobile-fiap-flow-fix.png`.
- A comparação já é um recorte focado no detalhamento completo; outro recorte não foi necessário porque títulos, textos, conectores e resultado permanecem legíveis.

## Findings e histórico

- [P2] A grade 2 × 2 quebrava a leitura sequencial do processo e comprimia “edição · estrutura visual · ativos” numa caixa curta, fazendo os quatro passos parecerem independentes.
- Correção: apenas a FIAP usa uma esteira vertical conectada no mobile. Cada passo ocupa toda a largura útil e os conectores reaparecem entre os nós.
- Evidência pós-correção: a comparação `comparison-mobile-fiap-flow-fix.png` mostra a sequência Professor → Diagramador com IA → edição/estrutura/ativos → plataforma final sem ambiguidade.
- Em 320 px, cada nó mede 223 × 54 px e nenhum conteúdo ultrapassa a superfície.
- Nenhuma divergência P0, P1 ou P2 permanece acionável.

## Superfícies de fidelidade

- Tipografia: pesos, tamanhos e quebras continuam coerentes; o rótulo longo cabe em uma linha nos dois breakpoints testados.
- Espaçamento e layout: a esteira usa 54 px por nó e conectores de 14 px; cenário e resultado mantêm os divisores existentes.
- Cores e tokens: bordas e conectores reutilizam o azul já empregado na arquitetura.
- Imagens e ativos: nenhuma imagem ou iconografia foi alterada.
- Copy e conteúdo: os quatro passos permanecem integrais e na ordem correta.
- Acessibilidade: conectores são decorativos, a arquitetura mantém `aria-expanded="true"` e não há overflow horizontal.

## Validação

- FIAP selecionada e arquitetura aberta pelo navegador.
- Viewports 390 × 900 e 320 × 800 com `overflowX: 0`.
- Em 320 px, a classe específica da FIAP e os quatro nós foram confirmados no DOM.
- Nenhum erro ou aviso no console durante a validação.
- `node --check script.js` e `git diff --check` passaram.

final result: passed

---

# Design QA — link compacto de arquitetura dos cases

Data: 2026-08-11

Este é o gate autoritativo da versão atual.

## Fonte, implementação e estado

- Fonte visual: `C:\Users\Eliseu Santos\.codex\generated_images\019fe259-02fe-75b1-88d7-1544d85aefd0\exec-dda3815a-0cad-47c1-94e4-dfc8de19d9ec.png`, 1440 × 1280 px.
- Implementação desktop aberta: `qa/cases-redesign/implementation-desktop-link-compact-open.png`, 1440 × 1280 px em viewport 1440 × 1280 CSS px, densidade 1×.
- Implementação desktop fechada e hover: `qa/cases-redesign/implementation-desktop-link-compact.png` e `implementation-desktop-link-compact-hover.png`.
- Implementação mobile: `qa/cases-redesign/implementation-mobile-390-link-compact.png`, 390 × 844 px, e `implementation-mobile-320-link-compact.png`, 320 × 700 px, densidade 1×.
- Comparação full-view combinada: `qa/cases-redesign/comparison-desktop-link-compact-open.png`.
- Comparação focada no controle: `qa/cases-redesign/comparison-desktop-link-compact-focus.png`.
- Estado comparado: arquitetura aberta, com o case Estúdios ativo no desktop; estados fechado e aberto também exercitados nos breakpoints menores.

## Histórico de comparação

- [P1] Iteração anterior: o controle ocupava toda a largura do painel, adicionava uma segunda linha e criava uma superfície semelhante a um grande botão. Isso competia com o título e quebrava a hierarquia em telas estreitas.
- Correção: remoção da caixa, da microcopy, da largura forçada, da sombra e da elevação. O controle voltou a ser um link editorial de 38 px no desktop e 36 px em 390 px.
- Post-fix: em 320 px, o texto quebra de forma natural e o controle mede 173 × 48 px, sem sair do painel; `overflowX: 0` em 390 px e 320 px.
- A comparação focada confirma que a implementação voltou a ficar próxima da referência, acrescentando apenas sublinhado e uma seta circular pequena para affordance.
- Nenhuma diferença P0, P1 ou P2 permanece acionável.

## Superfícies de fidelidade

- Tipografia: Satoshi preservada; rótulo com 15 px no desktop e 13,5 px no mobile, sem competir com o título do case.
- Espaçamento e layout: largura baseada no conteúdo, sem fundo próprio; painel, imagem e navegação não foram deslocados.
- Cores e tokens: azul do sistema reaproveitado; sublinhado de baixo contraste ganha força apenas no hover.
- Imagens e ativos: nenhum asset foi alterado; a seta existente permanece com 24 px.
- Copy e conteúdo: “Explorar arquitetura e processo” comunica a ação sem adicionar explicações ou peso visual desnecessário.
- Acessibilidade: foco visível, `aria-expanded` alternado entre `false` e `true` e animação coberta por `prefers-reduced-motion`.

## Validação

- Hover e clique verificados no desktop.
- Abertura da arquitetura confirmada em 1440 px e 320 px.
- Viewports 390 × 844 e 320 × 700 sem overflow horizontal.
- Nenhum erro ou aviso no console.
- `node --check script.js` e `git diff --check` passaram.

final result: passed

---

# Design QA — linha semiótica vertical da seção Problema

## Fonte visual, estado e normalização

- Fonte visual de linguagem: `qa/problem/source-reference-horizontal-mobile.png`, 427 × 852 px.
- Ativo vertical aprovado para implementação: `assets/problem-tension-line-vertical-mobile.png`, 183 × 2046 px, PNG RGBA transparente.
- Implementação mobile: `qa/problem/implementation-vertical-mobile-top.png` e `qa/problem/implementation-vertical-mobile-bottom-pass2.png`, 378 × 819 px, viewport de 393 × 852 CSS px, DPR 1.
- Implementação desktop de regressão: `qa/problem/implementation-desktop-after-vertical-mobile.png`, 1425 × 990 px, viewport de 1440 × 1000 CSS px, DPR 1.
- Estado: seção `#problema` revelada, navegação fixa real da landing ativa e ativo selecionado pelo elemento `picture` em cada breakpoint.
- Normalização: a comparação combinada dimensiona a referência horizontal, o ativo vertical e a seção renderizada dentro de um mesmo quadro de 1200 × 1250 px. A diferença de altura é intencional, pois o objetivo desta iteração é transformar a narrativa horizontal em percurso vertical no mobile.

## Evidências de comparação

- Comparação full-view combinada: `qa/problem/comparison-vertical-mobile.png`.
- Recorte focado superior: `qa/problem/implementation-vertical-mobile-top.png`, confirmando título, copy, ponto inicial e início do nó.
- Recorte focado inferior: `qa/problem/implementation-vertical-mobile-bottom-pass2.png`, confirmando resolução do nó, linha tracejada, círculo final, quatro conceitos e citação.
- O navegador confirmou que o mobile carrega `assets/problem-tension-line-vertical-mobile.png` e o desktop continua carregando `assets/problem-tension-line.png`.

## Histórico das correções P0/P1/P2

- P2 — Na primeira captura, o traço vertical perdia contraste após a redução e o aspecto intrínseco do PNG fazia o diagrama crescer para 760 px.
- Correção — O alpha do PNG foi reforçado, a cor foi uniformizada em coral `#ff5148` e o diagrama mobile recebeu altura fixa de 520 px.
- Evidência pós-correção — `implementation-vertical-mobile-top.png` e `implementation-vertical-mobile-bottom-pass2.png` mostram o traço legível, sem halo verde, com nó, ondas, tracejado e círculo final preservados.
- P2 — A primeira composição mantinha os rótulos em uma grade 2 × 2 abaixo da linha, sem acompanhar a nova direção vertical.
- Correção — Os quatro conceitos passaram a alternar à esquerda e à direita em quatro faixas alinhadas ao percurso central.
- Evidência pós-correção — Os rótulos ocupam quatro linhas de 130 px no viewport testado, sem colisão ou truncamento.

## Superfícies de fidelidade

- Tipografia: Satoshi permanece na headline e na copy; os conceitos continuam monoespaçados, em caixa alta e com o mesmo tom técnico da referência.
- Espaçamento e layout: o mobile usa três colunas simétricas, 68 px para o eixo central e 520 px de altura para a narrativa; o desktop permanece horizontal e inalterado.
- Cores e tokens: fundo `rgb(22, 27, 33)` e coral `#ff5148` preservam a relação cromática da referência, sem introdução de novas cores.
- Imagem e qualidade do ativo: PNG transparente real, sem fundo rasterizado da seção, sem halo verde perceptível e com 25 KB no recorte mobile.
- Copy e conteúdo: nenhum texto foi rasterizado ou alterado; headline, parágrafo, quatro conceitos e citação permanecem HTML acessível e responsivo.

## Validação final

- Mobile: `scrollWidth` e `clientWidth` iguais a 378 px; sem overflow horizontal.
- Desktop: `scrollWidth` e `clientWidth` iguais a 1425 px; a fonte horizontal original continua selecionada.
- Console: nenhum erro ou aviso.
- Interações: navegação por `#problema` e troca responsiva do `picture` verificadas; a ilustração em si é decorativa e não possui interação.
- `node --check script.js` e `git diff --check` passaram.

Não restam diferenças P0, P1 ou P2 acionáveis para a verticalização solicitada.

final result: passed

---

# Design QA — reforço do CTA de arquitetura dos cases (versão substituída)

Data: 2026-08-11

## Fonte, implementação e estado

- Fonte visual: `C:\Users\Eliseu Santos\.codex\generated_images\019fe259-02fe-75b1-88d7-1544d85aefd0\exec-dda3815a-0cad-47c1-94e4-dfc8de19d9ec.png`, 1440 × 1280 px.
- Implementação desktop aberta: `qa/cases-redesign/implementation-desktop-cta-open.png`, 1440 × 1280 px em viewport 1440 × 1280 CSS px e densidade 1×.
- Implementação desktop fechada: `qa/cases-redesign/implementation-desktop-cta-closed.png`.
- Implementação desktop em hover: `qa/cases-redesign/implementation-desktop-cta-hover.png`.
- Implementação mobile fechada: `qa/cases-redesign/implementation-mobile-cta-closed.png`, 390 × 844 px em viewport 390 × 844 CSS px e densidade 1×.
- Comparação full-view combinada: `qa/cases-redesign/comparison-desktop-cta-open.png`.
- Comparação focada no CTA: `qa/cases-redesign/comparison-desktop-cta-focus.png`.
- Estado comparado: case Estúdios ativo, arquitetura aberta e header real da landing visível.

## Findings e histórico

- Pedido de produto: o link original tinha baixo contraste e pouca área clicável, podendo parecer um detalhe decorativo.
- Correção: o controle recebeu superfície azul discreta, borda, área clicável de 62 px, título e microcopy, seta circular e animação direcional suave.
- Hover: elevação de 2 px, aumento de contraste e halo contido reforçam a resposta interativa.
- Estado aberto: a animação para, a seta gira e o texto muda para “Ocultar”, reduzindo distração enquanto o detalhamento está visível.
- A alteração é uma evolução intencional sobre a referência aprovada. A comparação focada confirma mais affordance sem alterar painel, imagem, navegação ou arquitetura.
- Nenhuma divergência P0, P1 ou P2 foi encontrada após a mudança.

## Superfícies de fidelidade

- Fontes e tipografia: Satoshi e a hierarquia do painel foram preservadas; o CTA usa 15 px no desktop e 14 px no mobile, com microcopy de 11 px.
- Espaçamento e layout: o botão ocupa a largura do painel sem deslocar a composição; no mobile, permanece dentro do card e pode quebrar o título em duas linhas.
- Cores e tokens: o azul já usado no case foi reaproveitado em opacidade moderada; contraste e foco permanecem legíveis.
- Imagem e ativos: nenhum asset visual foi alterado; a seta existente foi mantida.
- Copy e conteúdo: “Explorar arquitetura e processo” e “Veja o fluxo completo por dentro” explicam a ação e o benefício antes do clique.
- Acessibilidade: foco visível, `aria-expanded` verificado em `false` e `true`, label atualizado por estado e animação neutralizada por `prefers-reduced-motion` global.

## Validação funcional

- Hover desktop capturado e inspecionado.
- Clique abriu a arquitetura e atualizou `aria-expanded="true"`.
- Estado aberto interrompeu a animação direcional e girou a seta.
- Mobile 390 × 844 sem overflow horizontal (`overflowX: 0`).
- Console verificado sem erros após as interações.
- `node --check script.js` e `git diff --check` passaram.

final result: passed

---

# Design QA — seção de cases

## Resultado

**final result: passed**

A seção implementada preserva a direção visual aprovada: um único palco editorial, painel sólido sobreposto, navegação inequívoca entre três cases e expansão da arquitetura dentro da mesma superfície. Não restaram divergências P0, P1 ou P2.

## Fonte visual e evidências

- Fonte de verdade visual: `C:\Users\Eliseu Santos\.codex\generated_images\019fe259-02fe-75b1-88d7-1544d85aefd0\exec-dda3815a-0cad-47c1-94e4-dfc8de19d9ec.png`
- Referência: 1440 × 1280 px.
- Implementação desktop: viewport e captura em 1440 × 1280 CSS px, densidade efetiva 1×.
- Implementação mobile: viewport e captura em 390 × 844 CSS px.
- Comparação completa normalizada: `qa/cases-redesign/comparison-desktop-open-normalized.png`
- Comparação focada na arquitetura: `qa/cases-redesign/comparison-desktop-details.png`
- Captura desktop aberta: `qa/cases-redesign/implementation-desktop-open-top.png`
- Capturas mobile: `qa/cases-redesign/implementation-mobile-open-top.png` e `qa/cases-redesign/implementation-mobile-open-details.png`

## Fidelidade por superfície

- Tipografia: hierarquia, pesos e contraste coerentes com a referência e com o sistema existente da landing.
- Espaçamento: palco, painel sobreposto, seletor, controles e arquitetura mantêm ritmo consistente em desktop e mobile.
- Cores e superfícies: fundo escuro e acento verde/azul preservados; o painel usa superfície sólida com transparência mínima, conforme solicitado.
- Imagem: asset existente preservado, com recorte responsivo e sem perda visível de qualidade.
- Conteúdo: títulos, contexto, fluxo da solução e resultado estão ligados ao case ativo.
- Ícones e affordances: setas, contador, chips e estado ativo tornam o comportamento de carrossel explícito.
- Interações: abrir/fechar arquitetura, trocar pelos chips, anterior/próximo e atualização do contador foram verificados.
- Responsividade: a composição vira uma pilha legível no mobile; o fluxo muda para grade e não há overflow horizontal.
- Acessibilidade: botões mantêm rótulos, `aria-expanded` acompanha a arquitetura e `aria-pressed` acompanha o case ativo.

## Histórico de comparação

### Iteração 1

- [P2] O palco estava aproximadamente 6–8% mais estreito e o espaço vertical superior era maior que na referência.
- Correção: container ampliado para 1280 px, padding vertical reduzido e distância entre introdução e palco ajustada.
- Evidência pós-correção: `qa/cases-redesign/comparison-desktop-open-normalized.png`.

### Verificação final

- Nenhuma divergência P0, P1 ou P2.
- [P3] A tipografia do detalhamento está levemente mais compacta que no mockup; a diferença melhora a leitura dentro da landing real e não muda a hierarquia.
- [P3] O recorte da foto varia alguns pixels por responsividade; o foco e a composição permanecem equivalentes.

## Testes executados

- Estúdios → arquitetura aberta e fechada.
- Troca direta para FIAP e Eucalyptus pelos seletores.
- Navegação anterior/próximo e contador 1/3, 2/3 e 3/3.
- Reset da arquitetura ao trocar de case.
- Desktop 1440 × 1280 e mobile 390 × 844.
- Console do navegador verificado sem erros.
- `node --check script.js` e `git diff --check` executados sem falhas.

---

# Design QA — seção Solução com três produtos conectados

## Resultado

final result: passed

---

# Design QA — Solução com seções independentes e alternadas

## Fonte visual, implementação e estado

- Fonte visual aprovada: `C:\Users\Eliseu Santos\.codex\generated_images\019fe24d-2e1a-75c0-ae4b-06bc3712291c\exec-d551f985-5e0c-4303-a626-f67337cf26ef.png`.
- Dimensões da fonte: 971 × 1619 px.
- Implementação: `index.html` e `styles.css`, servidos em `http://127.0.0.1:4173/#solucao`.
- Viewports planejados: desktop 1440 × 1200 CSS px e mobile 390 × 844 CSS px, DPR 1.
- Screenshot browser-rendered da implementação: indisponível.
- Estado esperado: seção Solução revelada, Sites com texto à esquerda, CRM com texto à direita, Automação & IA com texto à esquerda.

## Evidência disponível

- O servidor local respondeu HTTP 200 após ser reiniciado.
- O HTML servido contém uma instância de cada superfície nova: `product-visual--sites`, `product-visual--crm`, `product-visual--automation` e `solution-end`.
- `node --check script.js` e `git diff --check` passaram.
- A tentativa de captura pelo navegador interno foi recusada pela política de segurança de URL local. Por isso, não existe comparação visual combinada válida entre a fonte e a implementação.

## Superfícies de fidelidade

- Tipografia: mapeada para as famílias locais Satoshi e JetBrains Mono; verificação visual bloqueada.
- Espaçamento e layout: a estrutura foi alterada para três seções independentes, com 112 px de intervalo no desktop e empilhamento no mobile; verificação visual bloqueada.
- Cores e tokens: superfícies azul, lilás e verde existentes foram preservadas somente atrás de cada demonstração; verificação visual bloqueada.
- Imagens e ativos: marca Kommo e ícones Lucide locais foram preservados; verificação de recorte e nitidez bloqueada.
- Copy e conteúdo: mantidos os três produtos, uma frase por produto e um único CTA final.
- Interações: o CTA continua apontando para WhatsApp; hover, foco e comportamento responsivo não puderam ser exercitados no navegador.

## Findings

- [P1] Captura visual e teste responsivo indisponíveis.
  - Local: seção `#solucao`.
  - Evidência: o navegador interno recusou a inspeção automatizada da URL local por política de segurança.
  - Impacto: não é possível confirmar ausência de sobreposição, clipping, overflow ou divergências de escala contra o mockup aprovado.
  - Correção necessária: recarregar a prévia local no navegador do app e executar a comparação desktop/mobile quando a inspeção estiver disponível.

## Comparação focada

- Bloqueada pelo mesmo motivo; não há screenshot browser-rendered para recortar ou combinar com a fonte.

## Histórico

- Iteração atual: HTML e CSS implementados; servidor reiniciado; validações estáticas aprovadas; QA visual bloqueada antes da primeira comparação.

final result: blocked

---

# Design QA — Processo “Clareza antes do código”

Data: 2026-08-11

## Fonte visual e estado comparado

- Fonte visual autoritativa: `C:\Users\Eliseu Santos\.codex\generated_images\019fef00-b248-71d2-aa35-538bafecbf60\exec-6273f0b4-5c44-4ca8-81b4-08dafccb3318.png`.
- Fonte: 1487 × 1058 px, normalizada com Lanczos para 1425 × 1013 px na comparação desktop.
- Implementação desktop: `qa/process-redesign/implementation-desktop-final.png`, 1425 × 1013 px, viewport solicitado de 1440 × 1024 CSS px, densidade 1×.
- Implementação mobile: `qa/process-redesign/implementation-mobile-390.png`, `qa/process-redesign/implementation-mobile-board-390.png` e `qa/process-redesign/implementation-mobile-assurance-390.png`, 375 × 812 px visíveis sob viewport solicitado de 390 × 844 CSS px, densidade 1×.
- Estado: acesso direto a `#processo`, header fixo visível, animações concluídas e nenhuma interação ativa.
- Comparação full-view combinada: `qa/process-redesign/comparison-desktop-final.png`.
- Evidência focada: as duas capturas mobile isolam a trilha de marcos e o fechamento/garantia; no desktop, todo o texto, os ícones e as bordas permanecem legíveis na comparação full-view, então não foi necessário um recorte adicional.

## Histórico de comparação e correções

- Iteração inicial — P1: o conteúdo começava cerca de 80 px abaixo do mockup e a placa ficava compacta demais, alterando a composição acima da dobra. Evidência: `qa/process-redesign/comparison-desktop-before.png`.
  - Correção: redistribuição do padding superior/inferior da seção, redução do título, ajuste da margem antes da placa e aumento do espaço interno do trilho.
- Iteração intermediária — P2: largura da placa, escala do título e transição para Cases ainda apresentavam leve deriva. Evidência: `qa/process-redesign/comparison-desktop-iteration-1.png`.
  - Correção: container limitado a 1240 px, título calibrado, altura da placa ajustada e respiro inferior equilibrado.
- Pós-correção: a comparação final alinha introdução, placa, marcos, fechamento e início de Cases sem diferenças P0, P1 ou P2 acionáveis.

## Superfícies de fidelidade

- Fontes e tipografia: Satoshi e JetBrains Mono locais preservadas; pesos, hierarquia, quebras e alinhamento central correspondem ao mockup. A pequena diferença de rasterização da imagem gerada é classificada como P3.
- Espaçamento e ritmo: introdução, placa, linha horizontal, três colunas, rodapé de garantia e transição para Cases estão proporcionais à fonte; desktop permanece horizontal e mobile vira uma trilha vertical coerente.
- Cores e tokens: fundo branco/frio, azul Eliseu.io, verde de garantia, bordas translúcidas e sombra azul-cinza correspondem à direção aprovada; contraste de texto permanece legível.
- Imagens e ativos: a seção não exige raster adicional. Logo existente preservado e os cinco ícones vêm da biblioteca Lucide local já adotada pelo projeto; não há SVG artesanal, emoji ou placeholder.
- Copy e conteúdo: eyebrow, título, lead, três passos e os dois textos de fechamento correspondem ao mockup aprovado. Os blocos “saída”, “diagnóstico e prioridades”, “proposta clara” e “sistema adotado” foram removidos integralmente.
- Acessibilidade: heading semântico, lista de etapas com `role=list/listitem`, ícones decorativos ocultos e ausência de overflow horizontal no viewport mobile.

## Validação funcional

- O link de navegação “Cases” foi acionado e resolveu corretamente para `#cases`.
- A seção não contém controles interativos próprios; o header fixo e os CTAs existentes continuam visíveis.
- Cinco ícones foram renderizados na seção.
- Nenhum erro ou aviso foi encontrado no console.
- `node --check script.js` e `git diff --check` passaram.

## Follow-up polish

- P3 opcional: refinar alguns pixels da escala dos ícones e da suavidade da sombra após avaliação no monitor final do usuário; não bloqueia fidelidade ou uso.

final result: passed

A implementação preserva a tese visual aprovada: três produtos independentes, claramente separados e conectáveis, com densidade suficiente para explicar rapidamente Sites, CRM com Kommo e Automação & IA.

## Fonte visual e evidências

- Fonte visual: `C:\Users\Eliseu Santos\.codex\generated_images\019fe24d-2e1a-75c0-ae4b-06bc3712291c\exec-977601a7-05e9-48a4-802a-2f39e0baaf42.png`.
- Implementação desktop: `qa/solution-redesign/implementation-desktop-final.png`, viewport de 1440 × 1064 CSS px.
- Implementação mobile: `qa/solution-redesign/implementation-mobile-crm.png` e `qa/solution-redesign/implementation-mobile-automation.png`, viewport de 390 × 844 CSS px.
- Comparação combinada: `qa/solution-redesign/comparison-final.png`.

## Fidelidade e correções

- Layout: introdução editorial à esquerda e três superfícies empilhadas à direita preservam a composição aprovada.
- Tipografia: a headline mantém presença; nomes de produto e kickers monoespaçados sustentam leitura rápida.
- Cores: azul, lilás e verde distinguem os produtos sem voltar ao visual escuro pesado rejeitado nas iterações anteriores.
- Copy: cada frente funciona sozinha e a combinação das três é apresentada como escolha, não como um processo obrigatório.
- P1 corrigido: “CRM com Kommo” permanece em uma linha no desktop.
- P1 corrigido: o acesso por `#solucao` respeita o header fixo por meio de `scroll-margin-top`.
- P2 corrigido: em 390 px, os produtos viram cards verticais; o funil do Kommo usa três linhas e Automação & IA usa matriz 2 × 2.

## Validação final

- CTA confirmado em `https://wa.me/5511916192015`, com nova aba e `rel="noopener"`.
- Link “Solução” acionado no navegador local.
- Nenhum overflow horizontal em 1440 px ou 390 px.
- Nenhum erro ou aviso no console.
- Foco visível, headings semânticos, descrições acessíveis e `prefers-reduced-motion` preservados.
- `git diff --check` e `node --check script.js` passaram.

Não restam diferenças P0, P1 ou P2 relevantes para a implementação solicitada.

---

# Design QA — correção de fidelidade da seção Solução

## Fonte visual, estado e normalização

- Fonte visual aprovada: `C:\Users\Eliseu Santos\.codex\generated_images\019fe24d-2e1a-75c0-ae4b-06bc3712291c\exec-977601a7-05e9-48a4-802a-2f39e0baaf42.png`, 1469 × 1071 px.
- Evidência do defeito reportado: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-0f295665-a6de-40c5-852e-12861ef91892.png`, 1035 × 911 px.
- Implementação desktop final: `qa/solution-redesign/fidelity-fix/implementation-desktop-1440.png`, 1425 × 1053 px em viewport de 1440 × 1064 CSS px, DPR 1.
- Implementação no breakpoint reportado: `qa/solution-redesign/fidelity-fix/implementation-breakpoint-1035.png` e `implementation-breakpoint-1035-lower.png`, 1020 × 887 px em viewport de 1035 × 900 CSS px, DPR 1.
- Implementação mobile: `implementation-mobile-site.png`, `implementation-mobile-crm.png` e `implementation-mobile-automation.png`, 375 × 812 px em viewport de 390 × 844 CSS px, DPR 1.
- Estado: seção revelada, header persistente e atalho flutuante pertencentes ao shell real da landing.
- Normalização: a comparação principal redimensiona referência e implementação para células de 1440 × 1064 px; a comparação do defeito usa células de 1035 × 900 px.

## Evidências de comparação

- Referência × implementação final: `qa/solution-redesign/fidelity-fix/comparison-reference-vs-final.png`.
- Defeito reportado × breakpoint corrigido: `qa/solution-redesign/fidelity-fix/comparison-bug-vs-fix-1035.png`.
- Não foi necessário outro recorte focado: a segunda comparação já amplia especificamente tipografia, identidade da LP e começo da pilha de produtos; as capturas inferiores confirmam CRM e Automação & IA.

## Histórico das correções P0/P1/P2

- P1 — Em aproximadamente 1035 px, a coluna editorial e a pilha continuavam lado a lado; “CRM com Kommo” invadia o funil e a copy era comprimida.
- Correção — O breakpoint estrutural passou para 1060 px. Nessa faixa, a introdução vira uma composição horizontal própria e a pilha ocupa toda a largura.
- Evidência pós-correção — `implementation-breakpoint-1035.png` e `implementation-breakpoint-1035-lower.png` não apresentam sobreposição, corte ou overflow.
- P1 — Sites e Automação & IA usavam números e abreviações no lugar das iconografias da referência.
- Correção — Foi incorporado o pacote Lucide local, com ícones de monitor, fábrica, métricas, mensagem, agente, calendário, conclusão e conectores.
- Evidência pós-correção — O navegador encontrou 16 SVGs do pacote e nenhum placeholder `data-lucide` remanescente.
- P1 — A demonstração de Sites reproduzia a identidade e a proposta da própria eliseu.io, impedindo o visitante B2B de se projetar no exemplo.
- Correção — A demonstração agora usa a empresa fictícia “NORTE OPS”, com promessa operacional B2B, CTA de diagnóstico e provas ilustrativas de produtividade e redução de trabalho manual.
- P2 — A faixa de Automação & IA era comprimida pela altura fracionária e podia cortar a copy.
- Correção — As três faixas passaram a usar alturas mínimas orientadas pelo conteúdo; no mobile, os quatro nós formam uma matriz 2 × 2.

## Superfícies de fidelidade

- Tipografia: headline, títulos dos produtos, kickers e microcopy permanecem legíveis em 1440, 1035 e 390 px, sem colisão ou truncamento.
- Espaçamento e layout: a pilha conserva a composição da referência no desktop e muda antes que o conteúdo fique apertado; CRM e Automação & IA crescem pelo conteúdo.
- Cores e tokens: azul, lilás e verde preservados; previews escuros mantêm contraste e o vidro segue restrito aos conectores.
- Imagens e ativos: logotipo Kommo real preservado; iconografia vem de biblioteca local e a LP B2B é uma interface responsiva nítida, não uma captura esticada.
- Copy e conteúdo: cada produto continua independente e conectável; o exemplo de Sites agora comunica valor, prova e conversão para um comprador B2B fictício.
- Acessibilidade: headings semânticos, descrições dos previews, foco visível e `prefers-reduced-motion` preservados.

## Validação final

- Nenhum overflow horizontal em 1440, 1035 ou 390 px.
- Link mobile “Solução” e menu responsivo acionados no navegador local.
- CTA principal permanece em `https://wa.me/5511916192015`, com nova aba e `rel="noopener"`.
- Nenhum erro ou aviso no console.
- `node --check script.js` e `git diff --check` passaram.

Não restam diferenças P0, P1 ou P2 acionáveis após a correção.

final result: passed

---

## Gate atual — seções independentes e alternadas

O relatório “Design QA — Solução com seções independentes e alternadas” é o registro autoritativo da implementação mais recente. As aprovações anteriores acima pertencem a versões antigas da seção e não aprovam este redesign. A captura browser-rendered desktop/mobile continua indisponível devido ao bloqueio de segurança da URL local no navegador interno.

final result: blocked

---

## Gate atual — Processo “Clareza antes do código”

O relatório “Design QA — Processo ‘Clareza antes do código’” acima é o registro autoritativo da implementação atual. A captura browser-rendered desktop/mobile, a comparação combinada, o teste de navegação e a verificação do console foram concluídos. O gate bloqueado anterior pertence exclusivamente a uma versão antiga da seção Solução e não se aplica a este redesign do Processo.

final result: passed

---

## Gate atual — linha semiótica vertical da seção Problema

O relatório “Design QA — linha semiótica vertical da seção Problema” acima é o registro autoritativo desta alteração. A referência, o ativo vertical, as capturas mobile e desktop, a comparação combinada, o overflow e o console foram verificados no navegador local.

final result: passed

---

# Design QA — conector segmentado da seção Solução

Data: 2026-08-25

## Fonte visual, implementação e estado

- Fonte visual selecionada: `qa/solution-connector/reference-option-3.png`, 1024 × 1536 px.
- Implementação desktop do fluxo: `qa/solution-connector/implemented-segmented-flow.png`, 1440 × 1024 px, viewport 1440 × 1024 CSS px, densidade 1×.
- Implementação desktop do CTA: `qa/solution-connector/implemented-segmented-cta.png`, 1440 × 1024 px, viewport 1440 × 1024 CSS px, densidade 1×.
- Implementação mobile: `qa/solution-connector/implemented-segmented-mobile-flow.png` e `qa/solution-connector/implemented-segmented-mobile-cta.png`, 390 × 844 px, viewport 390 × 844 CSS px, densidade 1×.
- Estado: seção `#solucao` revelada, animação do conector concluída, header fixo e CTA final visíveis.
- Comparação full-view combinada: `qa/solution-connector/design-qa-comparison.png`.
- Comparação focada: as capturas desktop do CTA e mobile isolam a transição azul → verde, o encaixe trapezoidal e o comportamento responsivo; não foi necessário outro recorte.
- Normalização: a fonte vertical e as capturas reais foram dimensionadas proporcionalmente dentro da mesma prancha, sem distorção. A comparação prioriza o sistema do conector, pois a referência gerada resume a seção em uma proporção diferente da landing real.

## Findings e histórico

- O mock selecionado define uma haste azul firme de 8 px, com cortes diagonais brancos, desaparecendo sob cada mock e reaparecendo nos espaços entre eles.
- Implementação: o conector usa duas hastes contínuas alinhadas no mesmo eixo — azul até a saída de Automação & IA e degradê apenas no trecho final — com três cortes diagonais e sem qualquer círculo ou marcador arredondado.
- Adaptação solicitada: o trecho final transita de `#176df1` para `#1fca6b`, exatamente a cor de fundo do CTA, e termina num encaixe trapezoidal verde integrado ao centro do botão.
- Responsividade: no mobile, o eixo permanece central e é mascarado atrás das áreas de copy e dos mocks; o CTA continua centralizado e o conector não atravessa texto.
- Nenhuma divergência P0, P1 ou P2 permanece acionável na primeira comparação pós-implementação.

## Superfícies de fidelidade

- Fontes e tipografia: não foram alteradas; Satoshi, pesos, quebras e hierarquia da seção permanecem iguais à landing real.
- Espaçamento e layout: o eixo passa pelo centro do container, mantém 8 px de espessura e encaixa no centro geométrico do CTA com desvio inferior a 0,01 px nos dois viewports.
- Cores e tokens: azul `#176df1`, transição intermediária `#1d91d7` e verde final `#1fca6b`; o último stop corresponde ao fundo do CTA.
- Imagens e ativos: os três mocks, marca Kommo, ícones e imagens existentes não foram alterados. O conector permanece SVG decorativo responsivo porque depende das posições reais dos componentes.
- Copy e conteúdo: copy, títulos, labels e CTA permanecem integrais.
- Acessibilidade: SVG segue `aria-hidden`, nenhum círculo semântico foi introduzido, a animação respeita `prefers-reduced-motion` e não há overflow horizontal.

## Validação funcional

- Desktop 1440 × 1024 e mobile 390 × 844 verificados no navegador.
- Zero círculos no conector; três cortes diagonais presentes; largura computada de 8 px.
- CTA confirmado centralizado, com `href` existente preservado, sem acionamento externo durante o teste.
- `overflowX` negativo pela largura reservada da scrollbar, sem conteúdo ultrapassando o viewport.
- Nenhum erro de console.
- `node --check script.js` e `git diff --check` passaram.

## Follow-up polish

- P3 opcional: reduzir a haste para 7 px em telas abaixo de 360 px caso o monitor final faça o eixo parecer pesado; não bloqueia leitura ou fidelidade.

final result: passed

---

## Gate atual — seta final do conector da seção Solução

O relatório “Design QA — seta final do conector da seção Solução” é o registro autoritativo desta alteração. A evidência enviada, as capturas desktop e mobile, a comparação combinada, o degradê, o espaçamento, o alinhamento e o console foram verificados no navegador local.

final result: passed
