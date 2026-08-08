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
