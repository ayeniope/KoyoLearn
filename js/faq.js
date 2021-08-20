//FAQ
const faqs = document.querySelectorAll('.question-item');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})