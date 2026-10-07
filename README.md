# MarvinCode

Portfólio de Marcos Vinícius, desenvolvido em HTML, CSS e JavaScript, sem dependências de execução ou etapa de build.

## Executar localmente

Na pasta do projeto:

```sh
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador. O site também funciona em hospedagens estáticas como GitHub Pages; o domínio existente em `CNAME` foi preservado.

## Estrutura

- `index.html`: conteúdo, seções e metadados.
- `styles.css`: layout responsivo, identidade visual e animações.
- `script.js`: menu móvel, ano atual, revelação ao rolar e seção ativa.
- `images/`: imagens originais do portfólio.

## Conteúdo

Apresentação, projeto Deblando Mais Som, serviços, sobre e contato. Os links de WhatsApp e e-mail são os do projeto original. O link antigo de configurações do LinkedIn foi removido; adicionar um perfil público somente quando a URL correta estiver disponível.

## Acessibilidade e movimento

Navegação por teclado, foco visível, link para pular ao conteúdo e menu com estado acessível. Escape fecha o menu e devolve o foco ao botão. `prefers-reduced-motion` desativa as animações e a rolagem suave. Sem JavaScript, o conteúdo e os links continuam disponíveis. As animações de entrada executam uma vez; nenhuma biblioteca externa, canvas ou tela de carregamento bloqueia o conteúdo.

## Verificação

Validar em desktop e celular: ausência de rolagem horizontal, menu e Escape, navegação para seções, links de contato, imagens carregadas, ausência de erros no console e preferência por movimento reduzido.
