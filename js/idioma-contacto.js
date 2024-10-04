const BotonIdioma = document.getElementById('boton-desplazable-flags');
const TextToChange = document.querySelectorAll("[data-section]");
const inputContacto1 = document.getElementById('input-contacto1');
const inputContacto2 = document.getElementById('input-contacto2');
const inputContacto3 = document.getElementById('input-contacto3');


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
    if (BotonIdioma.classList.contains('active')) {
        ChangeLenguaje('en');
        localStorage.setItem('selectedLanguage', 'en'); // Guarda 'en' en localStorage
        inputContacto1.placeholder = 'Full Name';
        inputContacto2.placeholder = 'Email';
        inputContacto3.placeholder = 'Write your message...';
    } else {
        ChangeLenguaje('es');
        localStorage.setItem('selectedLanguage', 'es'); // Guarda 'es' en localStorage
        inputContacto1.placeholder = 'Nombre Completo';
        inputContacto2.placeholder = 'Mail';
        inputContacto3.placeholder = 'Escriba su mensaje...';
    }
};

window.onload = function () {
    const savedLanguage = localStorage.getItem('selectedLanguage'); // Recupera el idioma de localStorage

    if (savedLanguage) {
        ChangeLenguaje(savedLanguage); // Aplica el idioma guardado
        if (savedLanguage === 'en') {
            BotonIdioma.classList.add('active'); // Asegura que el botón esté activo si el idioma es inglés
            inputContacto1.placeholder = 'Full Name';
            inputContacto2.placeholder = 'Email';
            inputContacto3.placeholder = 'Write your message...';
        }
    } else {
        ChangeLenguaje('es'); // Idioma por defecto
        inputContacto1.placeholder = 'Nombre Completo';
        inputContacto2.placeholder = 'Mail';
        inputContacto3.placeholder = 'Escriba su mensaje...';
    }
};


