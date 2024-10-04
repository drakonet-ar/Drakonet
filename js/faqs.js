
document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.glassfaq');
    const mainfaq = document.getElementById('mainfaq');
    let activeFaq = null;


    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            if (activeFaq && activeFaq !== faq) {
                activeFaq.style.height = '50px';
                activeFaq.classList.remove('expanded');
                const activeP = activeFaq.querySelector('p');
                activeP.classList.remove('visible-faqs');
                activeP.classList.add('invisible-faqs');
                mainfaq.style.height = '1000px';
                const offset = faq.offsetTop - 200; 
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
            if (faq.style.height === '300px') {
                faq.style.height = '50px';
                faq.classList.remove('expanded');
                const offset = faq.offsetTop - 200; 
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
                const activeP = activeFaq.querySelector('p');
                activeP.classList.remove('visible-faqs');
                activeP.classList.add('invisible-faqs');
                activeFaq = null;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                mainfaq.style.height = '1000px';

            } else {
                faq.style.height = '300px';
                faq.classList.add('expanded');
                activeFaq = faq;
                mainfaq.style.height = '1200px';
                const offset = faq.offsetTop - 200; // Ajuste de 50px hacia arriba
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
                const activeP = activeFaq.querySelector('p');
                activeP.classList.add('visible-faqs');
                activeP.classList.remove('invisible-faqs');
            }
        });
    });
});
