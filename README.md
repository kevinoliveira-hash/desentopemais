# Desentope Mais — site principal

Site institucional estático de **https://desentopemais.com.br/**.
Repositório: https://github.com/kevinoliveira-hash/desentopemais

Esta pasta corresponde à **raiz do repositório**, sem uma subpasta `site-principal` no GitHub. O projeto `desentope-mais-campinas`, no diretório vizinho, pertence a outro domínio.

## Estrutura

- `index.html`: conteúdo, contatos, links de orçamento e dados estruturados.
- `style.css`: estilos responsivos, acessibilidade e identidade visual.
- `script.js`: menu móvel e medição existente do Google Ads, sem bloquear os contatos.
- `imagens/`: fotos reais originais e versões menores usadas na página.
- `robots.txt` e `sitemap.xml`: descoberta e indexação do domínio principal.
- `vercel.json`: cabeçalhos e cache de imagens. Sem etapa de build ou dependências.

Abra `index.html` no navegador para revisar o visual. Links de contato e perguntas frequentes funcionam mesmo sem JavaScript. Para verificar a publicação, use a implantação da Vercel vinculada à branch `main`.

## Configuração comercial

Telefone/WhatsApp: **(19) 98265-1179**. E-mail: **desentopemais1@gmail.com**. Os links de WhatsApp levam mensagens específicas do serviço e não dependem de scripts. Ao alterar o número, atualize os links `tel:` e `wa.me`, os textos visíveis e o JSON-LD no HTML.

Foram mantidas as informações comerciais existentes: atendimento 24h, sem taxa de visita e cidades atendidas. Não há avaliações inventadas, contadores de clientes ou promessa de prazo fixo.

## Medição

Preservados o ID existente `AW-18498129474` e o rótulo de ligação `MI-RCNq9iJ4dEMKczPRE`. A tag só é carregada no domínio principal (com ou sem `www`), após o carregamento da página. Cliques seguem imediatamente, mesmo se a tag falhar ou for bloqueada. O evento de ligação mede o clique, não uma ligação concluída.

`whatsapp_click` registra apenas um evento de clique. A conversão de WhatsApp precisa ser configurada e validada na conta de anúncios; nenhum rótulo foi inventado. A validade dos identificadores não foi verificada na conta do Google Ads.

## Publicação

A integração Vercel existente usa a raiz deste repositório. Não é necessário mover a pasta de Campinas nem criar outro projeto. Confirme no painel da Vercel que o domínio `desentopemais.com.br` está associado ao projeto `desentopemais` e acompanhe o status da implantação após atualizar `main`.

Não envie `.env`, tokens ou credenciais ao repositório.
