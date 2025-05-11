// Carrega traduções com base no idioma selecionado
async function loadLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();
    
    // Atualiza os textos na página
    document.getElementById("header-title").textContent = translations.header.title;
    document.getElementById("header-subtitle").textContent = translations.header.subtitle;
    document.getElementById("about-title").textContent = translations.about.title;
    document.getElementById("about-description").textContent = translations.about.description;
}

// Detecta o idioma do navegador ou usa padrão (inglês)
const userLang = navigator.language.split('-')[0] || 'en';
const languageSelector = document.getElementById("language-selector");

// Configura o idioma inicial
loadLanguage(userLang);

// Troca idioma quando o usuário seleciona
languageSelector.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
});
