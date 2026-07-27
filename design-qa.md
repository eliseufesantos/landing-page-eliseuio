# Design QA — Redesign do hero Eliseu.io

## Fonte visual e estado

- Fonte estrutural: `qa\hero-redesign\reference-contentlead.png`
- Fonte original: 1654 × 1230 px.
- Fonte normalizada: `qa\hero-redesign\reference-normalized-1536.png`, redimensionada proporcionalmente para 1536 × 1142 px e recortada na parte inferior para 1536 × 1024 px.
- Implementação desktop: `qa\hero-redesign\03-redesign-v2.png`
- Implementação mobile: `qa\hero-redesign\04-mobile.png`
- Viewport desktop: 1536 × 1024 CSS px, DPR 1.
- Viewport mobile: 390 × 844 CSS px, DPR 1.
- Estado: topo da página, animação ativa, sem interação aberta.

## Evidências de comparação

- Antes × referência: `qa\hero-redesign\comparison-current-vs-reference.png`
- Redesign × referência: `qa\hero-redesign\comparison-reference-vs-redesign.png`
- Recorte focado em headline, explicação e CTA: `qa\hero-redesign\comparison-focused-hierarchy.png`

O recorte focado foi necessário porque a referência é usada como modelo de hierarquia, não como alvo de identidade visual. Ele permite comparar claramente a continuidade headline → explicação → CTA sem confundir diferenças intencionais de tipografia, cor e ilustração entre as marcas.

## Histórico de iterações

### Hero anterior

- P1 — O símbolo separava a headline da explicação e do CTA, quebrando a leitura da proposta.
- P1 — Dois CTAs dentro do hero competiam pela decisão principal.
- P2 — Três sinais adicionais e uma nota distante criavam ruído e deixavam a informação sobre a conversa quase imperceptível.

Correções:

- Reorganização para headline → explicação → CTA → garantia → elemento visual.
- Remoção do CTA secundário e dos três sinais.
- Redução da frase final para “Conversa inicial de 30 minutos, direto comigo.”, agora junto ao CTA.

### Primeira versão do redesign

Evidência: `qa\hero-redesign\02-redesign-v1.png`

- P2 — A transição para a seção escura aparecia cedo demais e deixava o terminal comprimido no fechamento do hero.

Correções:

- Ajuste do padding superior e inferior.
- Aumento controlado da área do símbolo 3 → 1, preservando seu papel secundário.

Evidência pós-correção: `qa\hero-redesign\03-redesign-v2.png`

## Superfícies de fidelidade

- Tipografia: a família e o peso da marca Eliseu.io foram preservados; a referência informa apenas a hierarquia e a compactação do bloco.
- Espaçamento: headline, explicação, CTA e garantia formam um único bloco contínuo; o terminal fecha a narrativa sem interrompê-la.
- Cores: azul da promessa e verde do CTA foram mantidos conforme os tokens existentes.
- Imagem: o terminal permanece nítido, com transparência limpa, sem halo verde e em escala secundária.
- Copy: nenhum sentido central foi alterado; a informação sobre a conversa foi encurtada para funcionar como garantia do CTA.

## Validação funcional e responsiva

- Exatamente um CTA no hero.
- Destino do CTA confirmado como `https://wa.me/+5511911652102`, abrindo em nova aba com `rel="noopener"`.
- CTA acionado no navegador local; nenhuma mensagem foi enviada.
- Favicon confirmado em `assets/favicon-terminal.png`.
- Três linhas de entrada e uma saída animada verificadas.
- Sem overflow horizontal em 1536 px ou 390 px.
- Nenhuma imagem quebrada.
- Nenhum erro ou aviso no console.
- Regra de `prefers-reduced-motion` preservada.

## Resultado

final result: passed

---

# Design QA — header translúcido e menu mobile

## Fonte visual e estado

- Fonte desktop: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-df3df670-0e17-4731-acad-2a54c1273aa2.png`, 1450 × 525 px.
- Fonte mobile fechada: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-83916993-10f6-4f00-a4c6-812a69d1cdba.png`, 390 × 513 px.
- Fonte mobile aberta: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-1648ef35-8d5e-4ac3-833a-32454721d3a4.png`, 497 × 836 px.
- Implementação desktop: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-dark-desktop-final.png`, 1425 × 891 px úteis.
- Implementação mobile fechada: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-dark-mobile-closed.png`, 375 × 812 px úteis.
- Implementação mobile aberta: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-dark-mobile-open.png`, 390 × 844 px.
- Viewport desktop: 1440 × 900 CSS px, DPR 1.
- Viewports mobile: 390 × 844 e 320 × 740 CSS px, DPR 1.
- Estados: topo da página, header em repouso; menu mobile fechado e aberto.

## Evidências de comparação

- Comparação combinada: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-dark-comparison.png`.
- A comparação usa recortes equivalentes do header desktop, do header mobile fechado e do conjunto header + painel aberto.
- Os recortes focados foram necessários porque as referências pertencem a outras marcas; elas são a fonte visual para geometria, translucidez e comportamento, enquanto logo, cores, copy e CTA seguem a identidade Eliseu.io e os requisitos do pedido.

## Histórico de iterações

### Primeira implementação

- P2 — o primeiro link recebia contorno de foco visível assim que o menu era aberto com o ponteiro.
- P2 — o ciclo inicial de `Tab` poderia alcançar o backdrop em vez de permanecer entre o botão de fechar e os links do modal.

Correções:

- O foco inicial passou para o próprio diálogo, sem contorno visual; o primeiro `Tab` segue para “Solução”.
- O ciclo de teclado foi fechado explicitamente entre botão e três atalhos.
- O backdrop deixou de ser um controle acessível duplicado; fechar continua disponível pelo botão circular, por clique fora e por `Escape`.

Evidência pós-correção: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-mobile-open-final.png`.

### Refinamento de densidade e contraste

- P2 — a cápsula clara de 1180 px deixava aproximadamente 215 px entre a navegação e os elementos laterais, reduzindo a coesão visual.
- P2 — os links de 15 px tinham menos presença que o logo e o CTA.

Correções:

- A cápsula passou para 820 × 64 px, reduzindo os intervalos laterais para aproximadamente 140 px.
- Os links passaram para 18 px, peso 650 e contraste de 90% de branco.
- O vidro claro foi substituído por grafite translúcido, com logo invertido e borda branca sutil.
- O mesmo tratamento escuro foi aplicado às cápsulas mobile, mantendo o painel aberto claro para separar níveis.

Evidência pós-correção: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-dark-comparison.png`.

## Superfícies de fidelidade

- Tipografia: Satoshi foi preservada; os links usam 18 px e peso 650, ficando proporcionais ao logo e ao CTA.
- Espaçamento e layout: cápsula desktop de 820 × 64 px com raio total; no mobile, cápsula principal e botão circular separados por 8 px; painel com 238 px de largura e 22 px de raio.
- Cores: vidro grafite translúcido, borda branca sutil e CTA verde reutilizam a identidade da Eliseu.io com contraste mais forte.
- Imagens e ícones: a variante invertida do logo foi usada sobre o fundo escuro; menu e fechar usam vetores locais baseados na linguagem Heroicons Outline, sem dependência de rede.
- Copy: o desktop contém somente logo, “Solução”, “Cases”, “Dúvidas” e “Conversar”; o painel mobile contém somente os três atalhos, sem CTA.

## Validação funcional, responsiva e de desempenho

- Sem overflow horizontal em 1440, 390 ou 320 px.
- Menu abre e fecha pelo botão, backdrop e `Escape`.
- `aria-expanded`, `aria-hidden`, bloqueio de rolagem e devolução de foco foram verificados.
- `Tab` e `Shift+Tab` permanecem contidos entre o botão de fechar e os três atalhos.
- O link “Dúvidas” fechou o modal, atualizou `#duvidas` e posicionou a seção a 112 px do topo.
- Nenhum erro ou aviso no console.
- Fallback sem `backdrop-filter` e regra de `prefers-reduced-motion` preservados.
- Nenhuma biblioteca ou fonte adicional foi carregada. Os dois novos ícones somam 435 bytes; a alteração adiciona apenas HTML, CSS e JavaScript nativos.

## Diferenças intencionais

- A referência desktop possui dois CTAs e não possui navegação central; a implementação segue o pedido explícito com três atalhos e um único CTA.
- A referência mobile aberta possui mais links e um CTA dentro do painel; a implementação remove esses itens conforme o pedido.
- A cor preta do CTA de referência foi substituída pelo verde de WhatsApp já adotado pela marca.

## Resultado

Não restam diferenças P0, P1 ou P2. A geometria, a translucidez, o comportamento modal, a responsividade e a acessibilidade foram verificadas fielmente contra as referências.

final result: passed

---

# Design QA — seção Dúvidas comuns

## Fonte visual e estado

- Fonte visual: `qa\faq\reference.png`
- Fonte: 1186 × 876 px.
- Implementação desktop: `qa\faq\implementation-desktop.png`, 1265 × 926 px.
- Implementação mobile: `qa\faq\implementation-mobile.png`, 375 × 812 px úteis.
- Viewport desktop: 1280 × 902 CSS px, DPR 1; a barra de rolagem deixa 1265 px úteis.
- Viewport mobile: 390 × 844 CSS px, DPR 1; a barra de rolagem deixa 375 px úteis.
- Estado comparado: todos os cards fechados, sem hover ou foco.
- Normalização: referência e implementação foram redimensionadas proporcionalmente para 640 px de largura no comparativo, sem interpolação assimétrica ou alteração de proporção.

## Evidências de comparação

- Comparação visual normalizada: `qa\faq\comparison.png`
- Captura desktop focada na seção: `qa\faq\implementation-desktop.png`
- Captura responsiva: `qa\faq\implementation-mobile.png`

O comparativo normalizado funciona também como recorte focado, porque todo o componente permanece legível e permite verificar título, largura, altura, intervalos, raios, divisores, numeração e ícones sem depender do restante da página.

## Achados

- Nenhuma diferença P0, P1 ou P2 permaneceu após a comparação.
- A quantidade de itens é intencionalmente diferente: a referência contém oito perguntas genéricas, enquanto a implementação preserva as seis perguntas reais já existentes no site.
- A paleta e a família tipográfica seguem os tokens da Eliseu.io, usando a referência como alvo de composição e ritmo.
- O botão flutuante do WhatsApp é um controle persistente do site e não pertence à seção; sua presença na captura não altera a estrutura do FAQ.

## Histórico de comparação

### Primeira comparação visual

- O título aparece sozinho e centralizado, conforme o pedido.
- Os cards desktop medem 920 × 82 px, com intervalos uniformes de 12 px.
- Os cards mobile medem 343 × aproximadamente 77 px, com intervalos uniformes e sem overflow horizontal.
- Não foram encontrados problemas P0, P1 ou P2; não foi necessária uma iteração corretiva após a comparação.

## Superfícies de fidelidade

- Tipografia: Satoshi foi preservada; o título usa peso 900 e as perguntas peso 800, mantendo hierarquia semelhante à referência.
- Espaçamento e layout: lista centralizada, cards simétricos, larguras e alturas uniformes, raios consistentes e ritmo vertical regular.
- Cores: fundo claro e cards em cinza frio reutilizam os tokens existentes, com contraste adequado para texto, divisores e chevrons.
- Imagens e ícones: a seção não depende de imagens raster; o chevron existente do design system do site foi preservado, com rotação no estado aberto.
- Copy: toda a copy introdutória foi removida; restou apenas “Dúvidas comuns” acima das perguntas reais.

## Validação funcional e responsiva

- Seis cards encontrados no desktop e no mobile.
- O primeiro card abriu, exibiu a resposta e fechou novamente.
- Todos os cards iniciam fechados.
- Nenhum overflow horizontal em 1280 px ou 390 px.
- Nenhum erro ou aviso no console.
- A hierarquia semântica mantém o título como `h2` e usa `details`/`summary` para o acordeão.

## Resultado

final result: passed

---

# Design QA — seção Sobre mim

## Fonte visual e estado

- Fonte visual: `C:\Users\Eliseu Santos\.codex\generated_images\019fa52a-6db6-78e1-a187-ee1b40b44d8e\call_XtjH2x8MPd82UCpHKQCRIC6b.png`
- Fonte: 1536 × 1024 px.
- Implementação desktop: `qa\about\implementation-desktop.png`
- Implementação desktop normalizada: `qa\about\implementation-desktop-normalized.png`
- Implementação mobile, parte superior: `qa\about\implementation-mobile-top.png`
- Implementação mobile, parte inferior: `qa\about\implementation-mobile-lower.png`
- Viewport desktop: 1536 × 1024 CSS px, DPR 1. A captura da página possui 1521 px úteis devido à barra de rolagem e foi normalizada com 15 px de preenchimento à direita, sem redimensionamento.
- Viewport tablet: 768 × 1024 CSS px, DPR 1.
- Viewport mobile: 390 × 844 CSS px, DPR 1, com 375 px úteis devido à barra de rolagem.
- Estado: seção Sobre mim em repouso, sem interação ou conteúdo expansível.

## Evidências de comparação

- Comparação completa, mock à esquerda e implementação à direita: `qa\about\comparison-full.png`
- Comparação focada no card, mock à esquerda e implementação à direita: `qa\about\comparison-about.png`

O recorte focado foi necessário para verificar com clareza tipografia, alinhamento das três colunas, divisórias, escala da fotografia, logos e ritmo interno do card.

## Histórico de iterações

### Primeira implementação

- P2 — O card estava 40 px mais estreito que o mock em 1536 px, comprimindo a primeira coluna e deslocando a primeira divisória.
- P2 — A altura do card estava aproximadamente 12 px abaixo da referência.

Correções:

- O limite do contêiner passou de 1440 px para 1480 px, produzindo um card de 1432 px, como no mock.
- As proporções das colunas foram ajustadas para aproximar as divisórias da referência.
- A altura mínima passou para 580 px.

Evidência pós-correção: `qa\about\comparison-about.png`.

## Superfícies de fidelidade

- Tipografia: Satoshi foi preservada; pesos, hierarquia e quebras do título acompanham o mock.
- Espaçamento e layout: card com 1432 × 580 px no desktop, três colunas, duas divisórias e bordas de 32 px; no tablet há duas colunas com credenciais abaixo; no mobile o conteúdo forma um cartão vertical.
- Cores: branco, cinzas frios, texto quase preto e azul de destaque reutilizam os tokens existentes do projeto.
- Imagens: a fotografia original foi usada com recorte circular nítido; os ativos reais de Kommo e FIAP foram preservados. A foto ficou deliberadamente menor que a referência, conforme o pedido original.
- Copy: título, dois parágrafos, descrições de Kommo e FIAP e citação de Leonardo da Vinci correspondem ao mock aprovado.

## Validação funcional e responsiva

- Nenhum overflow horizontal em 1536 px, 768 px ou 390 px.
- Todas as três imagens carregaram com dimensões naturais válidas.
- A seção não contém controles interativos; navegação e FAQ existentes não foram alterados.
- Nenhum erro ou aviso no console.
- A animação de entrada existente e a regra de `prefers-reduced-motion` foram preservadas.

## Resultado

final result: passed
