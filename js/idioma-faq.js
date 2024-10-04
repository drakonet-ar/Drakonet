const BotonIdioma = document.getElementById('boton-desplazable-flags');
const TextToChange = document.querySelectorAll("[data-section]");
const faqs = document.querySelectorAll('.glassfaq');
let activeFaq = null;

const ChangeLenguaje = async (language) => {
    try {
        const requestJson = await fetch(`../lenguajes/${language}.json`);
        const texts = await requestJson.json();
        

        for (const element of TextToChange) {
            const section = element.dataset.section;
            const value = element.dataset.value;

            // Check if the section exists in the JSON data
            if (texts[language][section]) {
                // Check if the value exists in the nested section of the JSON data
                if (texts[language][section][value]) {
                    element.innerHTML = texts[language][section][value];
                
                    faqs.forEach(faq => {
                        faq.addEventListener('click', () => {
                            if (activeFaq && activeFaq == faq) {
                                activeP.classList.add('visible-faqs');
                                activeP.classList.remove('invisible-faqs');
                            }
                        });
                    });

                } else {
                    console.error(`Translation not found for section: ${section}, value: ${value}`);
                }
            } else {
                console.error(`Translation not found for section: ${section}`);
            }
        }
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
};



BotonIdioma.onclick = function () {
    BotonIdioma.classList.toggle('active');
    location.reload();

    // Función para desplazar la ventana hacia arriba
function scrollToTop() {
    setTimeout(() => {
        window.scrollTo(0, 0); // Desplaza la ventana a la parte superior
    }, 100); // Espera 100 milisegundos
}

// Ejecutar la función al cargar la página
window.onload = scrollToTop;

    if (BotonIdioma.classList.contains('active')) {
        ChangeLenguaje('en');
        localStorage.setItem('selectedLanguage', 'en'); // Guarda 'en' en localStorage
    } else {
        ChangeLenguaje('es');
        localStorage.setItem('selectedLanguage', 'es'); // Guarda 'es' en localStorage
    }
};

window.onload = function () {
    const savedLanguage = localStorage.getItem('selectedLanguage'); // Recupera el idioma de localStorage

    if (savedLanguage) {
        ChangeLenguaje(savedLanguage); // Aplica el idioma guardado
        if (savedLanguage === 'en') {
            BotonIdioma.classList.add('active'); // Asegura que el botón esté activo si el idioma es inglés
        }
    } else {
        ChangeLenguaje('es'); // Idioma por defecto
    }
};


