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
