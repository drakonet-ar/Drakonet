const BotonIdioma = document.getElementById('boton-desplazable-flags');
const TextToChange = document.querySelectorAll("[data-section]");


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
        // Array con los nuevos textos para cada elemento
        const newTexts = [
            "Coponent",
            "Courses",
            "About Us",
            "FAQ",
            "Contact"
        ];

        // Obtener todos los elementos con la clase 'glass'
        const glassElements = document.querySelectorAll('.glass');

        // Cambiar el atributo data-text de cada elemento usando los textos del array
        glassElements.forEach((element, index) => {
            if (newTexts[index]) { // Verifica que el índice exista en el array
                element.setAttribute('data-text', newTexts[index]);
            }
        });

    } else {
        ChangeLenguaje('es');
        localStorage.setItem('selectedLanguage', 'es'); // Guarda 'es' en localStorage
        // Array con los nuevos textos para cada elemento
        const newTexts = [
            "Componentes",
            "Cursos",
            "Propósito",
            "Preguntas Frecuentes",
            "Contacto"
        ];

        // Obtener todos los elementos con la clase 'glass'
        const glassElements = document.querySelectorAll('.glass');

        // Cambiar el atributo data-text de cada elemento usando los textos del array
        glassElements.forEach((element, index) => {
            if (newTexts[index]) { // Verifica que el índice exista en el array
                element.setAttribute('data-text', newTexts[index]);
            }
        });

    }
};

window.onload = function () {
    const savedLanguage = localStorage.getItem('selectedLanguage'); // Recupera el idioma de localStorage

    if (savedLanguage) {
        ChangeLenguaje(savedLanguage); // Aplica el idioma guardado
        if (savedLanguage === 'en') {
            BotonIdioma.classList.add('active'); // Asegura que el botón esté activo si el idioma es inglés
            // Array con los nuevos textos para cada elemento
            const newTexts = [
                "Coponent",
                "Courses",
                "About Us",
                "FAQ",
                "Contact"
            ];

// Obtener todos los elementos con la clase 'glass'
const glassElements = document.querySelectorAll('.glass');

// Cambiar el atributo data-text de cada elemento usando los textos del array
glassElements.forEach((element, index) => {
    if (newTexts[index]) { // Verifica que el índice exista en el array
        element.setAttribute('data-text', newTexts[index]);
    }
});

        }
    } else {
        ChangeLenguaje('es'); // Idioma por defecto
        // Array con los nuevos textos para cada elemento
        const newTexts = [
            "Componentes",
            "Cursos",
            "Propósito",
            "Preguntas Frecuentes",
            "Contacto"
        ];

// Obtener todos los elementos con la clase 'glass'
const glassElements = document.querySelectorAll('.glass');

// Cambiar el atributo data-text de cada elemento usando los textos del array
glassElements.forEach((element, index) => {
    if (newTexts[index]) { // Verifica que el índice exista en el array
        element.setAttribute('data-text', newTexts[index]);
    }
});

    }
};




