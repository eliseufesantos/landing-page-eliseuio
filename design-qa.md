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

### Refinamento de translucidez

- P2 — o grafite com 88% de opacidade criava contraste excessivo contra o fundo branco.
- Nova referência: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-b2286301-7895-4c27-a4e9-e5546e6070bc.png`.

Correções:

- A superfície passou para `rgba(58, 57, 54, 0.72)`, com 22 px de blur e saturação reduzida.
- A amostra neutra da referência mede RGB `(112, 111, 105)`; a implementação mede `(112, 111, 109)`.
- Borda e sombra foram suavizadas, preservando a leitura do logo e dos links.
- O estado após rolagem usa 80% de opacidade para manter contraste sobre seções mais complexas.

Evidências pós-correção:

- Comparação: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-light-glass-comparison.png`.
- Desktop: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-light-glass-desktop-top.png`.
- Mobile fechado: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-light-glass-mobile-closed.png`.
- Mobile aberto: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-light-glass-mobile-open.png`.

### Refinamento de cor e valorização da marca

- P2 — o cinza quente médio reduzia a separação visual da versão invertida do logo e competia com o azul do “.io”.
- Nova referência do estado anterior: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-e77dba78-70bf-4122-9baf-014651598763.png`.

Correções:

- A superfície passou para um vidro azul-acinzentado claro em `rgba(205, 218, 234, 0.72)`, com 22 px de blur e 130% de saturação.
- O logo original escuro voltou ao header, preservando o preto da marca e destacando o azul do “.io”.
- Os links passaram para tinta escura a 88% de opacidade; o estado após rolagem usa 84% de opacidade na superfície.
- O mesmo sistema cromático foi aplicado às cápsulas mobile e ao botão do menu, sem alterar geometria, espaçamento ou conteúdo.

Evidências pós-correção:

- Comparação antes/depois: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-color-comparison.png`.
- Desktop no topo: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-cool-glass-top.png`.
- Desktop após rolagem: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-cool-glass-desktop.png`.
- Mobile fechado: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-cool-glass-mobile-closed.png`.
- Mobile aberto: `C:\Users\ELISEU~1\AppData\Local\Temp\eliseu-header-cool-glass-mobile-open.png`.

## Superfícies de fidelidade

- Tipografia: Satoshi foi preservada; os links usam 18 px e peso 650, ficando proporcionais ao logo e ao CTA.
- Espaçamento e layout: cápsula desktop de 820 × 64 px com raio total; no mobile, cápsula principal e botão circular separados por 8 px; painel com 238 px de largura e 22 px de raio.
- Cores: vidro azul-acinzentado claro, borda branca sutil e CTA verde aproximam o header da paleta azul da Eliseu.io sem perder translucidez.
- Imagens e ícones: a versão original do logo foi usada sobre o vidro claro; menu e fechar usam vetores locais baseados na linguagem Heroicons Outline, sem dependência de rede.
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

---

# Design QA — seção Sobre, faixa editorial aberta

## Fonte visual e estado

- Fonte visual verdadeira: `C:\Users\ELISEU~1\AppData\Local\Temp\codex-clipboard-da6a1684-42b8-4c53-a1fa-f65e9fd85f92.png`
- Fonte: 1536 × 1024 px.
- Implementação desktop: `C:\Users\Eliseu Santos\.codex\visualizations\2026\07\27\019fa52a-6db6-78e1-a187-ee1b40b44d8e\about-implementation\about-desktop-1536x1024.png`
- Implementação mobile superior: `C:\Users\Eliseu Santos\.codex\visualizations\2026\07\27\019fa52a-6db6-78e1-a187-ee1b40b44d8e\about-implementation\about-mobile-390x844.png`
- Implementação mobile, credenciais e transição: `C:\Users\Eliseu Santos\.codex\visualizations\2026\07\27\019fa52a-6db6-78e1-a187-ee1b40b44d8e\about-implementation\about-mobile-proof-390x844.png`
- Evidência final do símbolo Kommo e do FAQ: `C:\Users\Eliseu Santos\.codex\visualizations\2026\07\27\019fa52a-6db6-78e1-a187-ee1b40b44d8e\about-implementation\about-proof-desktop-final.png`
- Viewport desktop: 1536 × 1024 CSS px, DPR 1; 1521 px úteis devido à barra de rolagem.
- Viewport mobile: 390 × 844 CSS px, DPR 1.
- Estado: seção Sobre em repouso; FAQ fechado na comparação visual.

## Evidências de comparação

- Comparação completa combinada: `C:\Users\Eliseu Santos\.codex\visualizations\2026\07\27\019fa52a-6db6-78e1-a187-ee1b40b44d8e\about-implementation\about-reference-vs-implementation.png`
- Comparação focada e normalizada da área Sobre: `C:\Users\Eliseu Santos\.codex\visualizations\2026\07\27\019fa52a-6db6-78e1-a187-ee1b40b44d8e\about-implementation\about-focused-reference-vs-implementation.png`

A comparação completa preserva 1536 × 1024 px nos dois lados. A comparação focada usa recortes de 1536 × 730 px, removendo apenas a diferença de rolagem e o shell persistente do header para alinhar retrato, narrativa e credenciais na mesma posição visual.

## Histórico de comparação e correções

### Primeira passagem

- P2 — A faixa de credenciais estava aproximadamente 55 px mais estreita que o mock.
- P2 — O retrato permanecia cerca de 75 px à esquerda do alvo e a narrativa cerca de 29 px à direita.
- P2 — O texto corrido ocupava largura excessiva e reduzia as quebras previstas na referência.

Correções:

- O contêiner passou a ocupar a largura da seção, mantendo 62 px de margem lateral no desktop.
- A grade principal passou para `0.78fr / 1fr`, com intervalo máximo de 60 px.
- O bloco de perfil recebeu compensação interna responsiva; a narrativa passou a 48 `ch`.
- A faixa azul-clara passou a 1398 × 192 px úteis no navegador, compatível com a referência considerando a barra de rolagem.

### Refinamento final

- P2 — O badge completo da Kommo deixava uma barra residual ao ser recortado como símbolo.
- P2 — O título do FAQ estava maior que o alvo e competia com a seção Sobre.

Correções:

- O símbolo oficial da Kommo foi isolado do ativo existente em `assets/kommo-mark.png`, com transparência limpa e sem redesenho aproximado.
- O título “Dúvidas comuns” passou a no máximo 52 px no desktop e mantém 40 px no mobile.
- A citação recebeu compensação horizontal apenas no desktop; o ajuste é removido nos breakpoints de tablet e mobile.

Evidências pós-correção: comparação focada e captura final das credenciais listadas acima.

## Superfícies de fidelidade

- Tipografia: Satoshi, pesos 850/900, quebras, line-height e largura de leitura reproduzem a hierarquia do mock.
- Espaçamento e layout: a transição curva permanece na borda da seção escura; a seção Sobre é aberta, sem card ou divisórias; retrato, narrativa e faixa de credenciais seguem a mesma grade da referência.
- Cores e tokens: fundo branco, faixa `#eef5ff`, FAQ `#f5f7fa`, texto carvão e azul de destaque preservam a identidade atual.
- Imagens e ativos: fotografia original preservada em recorte circular; FIAP original; símbolo Kommo derivado do ativo oficial já presente, sem halo ou faixa residual.
- Copy: nome, cargo, título, dois parágrafos, descrições das credenciais e citação correspondem ao mock aprovado.
- Responsividade: tablet empilha perfil e narrativa e organiza as credenciais em duas colunas; mobile usa uma coluna contínua, sem linhas divisórias e sem overflow.

## Validação funcional

- Página identificada como `eliseu.io — Sistemas digitais sob medida` em `http://127.0.0.1:4173/#sobre`.
- Conteúdo principal e seção Sobre presentes no snapshot do DOM; nenhum overlay de framework.
- Nenhum erro ou aviso relevante no console em desktop ou mobile.
- O primeiro item do FAQ foi acionado: atributo `open` passou de ausente para presente e a resposta ficou disponível.
- Seis itens de FAQ foram encontrados; a seção Sobre não adiciona controles artificiais.
- `git diff --check` passou sem erros.

## Diferenças intencionais

- O header translúcido persistente e o botão flutuante do WhatsApp pertencem ao shell real do site e não aparecem no mock gerado.
- O símbolo Kommo usa o ativo oficial isolado, em vez da aproximação gráfica produzida pelo gerador do mock.

Não restam diferenças P0, P1 ou P2 na seção implementada. A comparação focada confirma alinhamento, escala, ritmo vertical, cores, imagem, copy e credenciais.

final result: passed

---

# Design QA — continuidade Sobre mim → Dúvidas comuns

## Fonte visual e estado

- Fonte visual: `qa\about-faq-continuity\reference.png`
- Fonte: 1684 × 1258 px.
- Implementação desktop fechada: `qa\about-faq-continuity\implementation-closed.png`, 1669 × 1247 px úteis.
- Implementação desktop aberta: `qa\about-faq-continuity\implementation-open.png`, 1669 × 1247 px úteis.
- Implementação mobile: `qa\about-faq-continuity\implementation-mobile.png`, 375 × 812 px úteis.
- Viewport desktop: 1684 × 1258 CSS px, DPR 1.
- Viewport mobile: 390 × 844 CSS px, DPR 1.
- Estado principal comparado: todos os itens fechados; o estado aberto foi capturado separadamente.
- Normalização: referência e implementação foram redimensionadas proporcionalmente para 740 px de largura no comparativo, sem distorção.

## Evidências de comparação

- Comparação completa, referência à esquerda e implementação à direita: `qa\about-faq-continuity\comparison.png`
- Estado fechado focado na transição: `qa\about-faq-continuity\implementation-closed.png`
- Estado aberto focado na resposta e nos controles: `qa\about-faq-continuity\implementation-open.png`
- Breakpoint móvel: `qa\about-faq-continuity\implementation-mobile.png`

O comparativo completo mantém textos, curvas, faixa de credenciais, início do FAQ e primeiros cards legíveis; o estado aberto foi usado como recorte adicional para verificar altura, padding, divisor, cor e rotação do chevron.

## Histórico de iterações

### Primeira implementação

- P1 — a página podia reutilizar a versão anterior de `script.js`; nesse caso o atributo `open` mudava, mas a nova área animada permanecia com 0 px de altura.
- P2 — o limite entre Sobre mim e FAQ ainda precisava funcionar como uma passagem contínua, não como duas faixas apenas encostadas.

Correções:

- O script recebeu uma versão explícita na URL e o CSS ganhou fallback para `details[open]`, garantindo resposta visível mesmo sem a animação JavaScript.
- A faixa de credenciais passou a sobrepor a entrada do FAQ; o FAQ recebeu fundo azul-claro, curva superior ampla e espaçamento que preserva a leitura da faixa.

Evidência pós-correção:

- Ao abrir, o primeiro item terminou com aproximadamente 171 px de altura, opacidade 1 e `open=true`.
- Ao fechar, terminou com 0 px, opacidade 0 e `open=false`.
- Nenhum erro ou aviso foi registrado no console.

## Superfícies de fidelidade

- Tipografia: Satoshi, pesos e hierarquia existentes foram preservados; nenhuma copy mudou.
- Espaçamento e layout: faixa de credenciais com cantos de até 40 px, sobreposição controlada, FAQ com curva superior responsiva e cards uniformes.
- Cores e tokens: azul-claro deriva de `--blue-50`/`--blue-100`; azul de interação deriva de `--blue-500`/`--blue-700`.
- Imagens e ativos: fotografia, Kommo, FIAP e chevrons existentes foram preservados; nenhuma aproximação gráfica ou imagem nova foi introduzida.
- Copy: título, seis perguntas e todas as respostas permanecem idênticos.
- Interações: abertura e fechamento usam 440 ms com `cubic-bezier(0.22, 1, 0.36, 1)`; hover, foco e estado aberto compartilham a mesma linguagem de borda, sombra e azul.

## Validação funcional e responsiva

- Seis itens encontrados e todos iniciam fechados.
- Abertura e fechamento do primeiro item foram executados até o estado final.
- Fallback sem animação preservado para `prefers-reduced-motion`.
- Nenhum overflow horizontal em 1684 px ou 390 px.
- Nenhum erro ou aviso no console.
- A captura móvel confirma cards de 343 px, quebra de texto íntegra e continuidade da faixa azul.
- O ponteiro em segundo plano não forçou `:hover` de forma confiável; o estado foi verificado pelas regras aplicadas e pelo equivalente de foco visível.

Não restam diferenças P0, P1 ou P2. O gap de captura do hover é apenas uma limitação de evidência P3, não de implementação.

final result: passed

---

# Design QA — revisão da transição Sobre mim → Dúvidas comuns

## Ajustes solicitados

- A faixa de credenciais e citação voltou ao desenho original: fundo sólido `#eef5ff`, sem borda, sombra ou sobreposição.
- Os cantos externos superiores do FAQ foram removidos; o raio computado da seção é `0px`.
- A passagem entre as seções agora é feita apenas por um degradê vertical de branco para azul-claro.
- A distância entre a faixa de credenciais e o título “Dúvidas comuns” aumentou sem fundir os dois componentes.

## Evidências e métricas

- Referência anotada: `qa\about-faq-continuity\reference-revision.png`.
- Implementação desktop: `qa\about-faq-continuity\revision-closed.png`.
- Implementação mobile: `qa\about-faq-continuity\revision-mobile.png`.
- Comparação lado a lado: `qa\about-faq-continuity\comparison-revision.png`.
- Desktop: 179 px entre o fim da faixa e o início do título; `padding-top` do FAQ de 136 px.
- Mobile: 121 px entre o fim da faixa e o início do título; `padding-top` do FAQ de 96 px.
- A faixa original terminou com fundo `rgb(238, 245, 255)`, borda superior de 0 px, sombra `none` e raio `0 0 32px 32px`.
- Nenhum overflow horizontal foi encontrado em 1700 × 1030 px ou 390 × 844 px.

## Validação funcional

- Abertura do primeiro item terminou com aproximadamente 171 px de altura, opacidade 1 e `open=true`.
- Fechamento terminou com 0 px, opacidade 0 e `open=false`.
- Nenhum estado de animação permaneceu preso após 520 ms.
- `node --check script.js` e `git diff --check` passaram sem erros.

Não restam diferenças P0, P1 ou P2 em relação à revisão solicitada.

final result: passed

---

# Design QA — azul contínuo até o final do FAQ

## Evidências

- Fonte visual: `qa\about-faq-continuity\reference-revision.png`.
- Implementação no início do FAQ: `qa\about-faq-continuity\revision-blue-through-end-top.png`.
- Implementação no final do FAQ: `qa\about-faq-continuity\revision-blue-through-end-bottom.png`.
- Comparação completa: `qa\about-faq-continuity\comparison-blue-through-end.png`.
- Viewport: 1700 × 1030 CSS px, DPR 1.
- Estado: FAQ fechado, página estabilizada após a animação de entrada.

## Verificação visual

- Tipografia, copy, ativos, espaçamento e componentes permaneceram inalterados.
- O degradê agora progride de branco para `#edf6ff` e termina em `#eaf4ff`.
- A captura focada no final confirma que o azul permanece atrás do último card e alcança o limite com a seção escura seguinte.
- O raio externo do FAQ continua em `0px`, sem reintroduzir as curvas removidas.
- Não há overflow horizontal nem erros ou avisos no console.

Não foram encontradas diferenças P0, P1 ou P2 em relação ao ajuste solicitado.

final result: passed
