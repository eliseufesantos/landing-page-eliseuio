# Design QA — reforço do CTA de arquitetura dos cases

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
