# Portfólio — Jorge L. Andrade

Site estático em três idiomas. Sem build, sem dependências: é só HTML, CSS e duas imagens.

```
index.html          Português (página inicial)
en.html             English
es.html             Español
assets/style.css    Folha de estilo única, compartilhada pelas três páginas
assets/img/wide.jpg Banner do topo (desktop)
assets/img/hero.jpg Retrato vertical (usado no topo em telas ≤760px)
cv.pdf              ← VOCÊ ADICIONA: o currículo que o botão "Baixar currículo" aponta
```

## Publicar no GitHub Pages

1. Crie um repositório chamado `jorgeleandro.github.io` (troque pelo seu usuário do GitHub).
   Com esse nome exato, o site fica em `https://jorgeleandro.github.io` sem configuração extra.
2. Suba todos os arquivos desta pasta na raiz do repositório.
3. Em **Settings → Pages**, em *Source*, escolha `Deploy from a branch`, branch `main`, pasta `/ (root)`.
4. Aguarde um ou dois minutos e acesse o endereço.

Para usar um domínio próprio, adicione um arquivo `CNAME` na raiz contendo apenas o domínio
(ex.: `jorgeandrade.com.br`) e aponte o DNS para o GitHub Pages.

## Antes de publicar

- **Adicione o `cv.pdf`.** Os três idiomas apontam para o mesmo arquivo. Se quiser um currículo por
  idioma, troque o `href="cv.pdf"` de `en.html` e `es.html` para `cv-en.pdf` e `cv-es.pdf`.
- **Logos das empresas.** Cada bloco de experiência tem um comentário `<!-- LOGO: ... -->` indicando
  onde a imagem entra. Coloque os arquivos em `assets/img/` e substitua o `<p class="co">` pelo
  `<img>` indicado no comentário. Altura recomendada: 24px.
- **Números.** O site não usa nenhuma métrica não verificada — nada de `[X]`. Se quiser voltar com a
  faixa de indicadores (anos, site launches, endpoints, SLA), me diga com os números reais.

## Editar

- **Cores, fontes e espaçamentos** ficam nas variáveis CSS no topo de `assets/style.css`.
  Trocar o azul de acento é mudar uma linha: `--accent`.
- **Textos** ficam direto no HTML de cada idioma. Ao alterar um, altere os três.
- **Fontes**: Space Grotesk e JetBrains Mono, carregadas do Google Fonts. Sem internet, o navegador
  cai para a fonte do sistema e o layout continua correto.

## Acessibilidade e SEO

Já incluídos: `lang` por página, `hreflang` entre os três idiomas, link "pular para o conteúdo",
foco visível no teclado, alvos de toque de 44px ou mais, contraste de texto acima de 4.5:1,
`meta description` e tags Open Graph por idioma.
