// Obtém o ano atual
const anoAtual = new Date().getFullYear();

// Obtém o parágrafo que contém o ano de copyright
const paragrafoRodape = document.querySelector('#footer p.lead');

// Conteúdo do parágrafo de copyright
paragrafoRodape.textContent = `© Copyright ${anoAtual}, Tindog.`
