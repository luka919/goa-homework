let questions = document.querySelectorAll('.faq-question');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        let parent = this.parentElement;
        parent.classList.toggle('active');
    });
}