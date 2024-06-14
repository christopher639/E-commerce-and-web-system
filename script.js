document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementsByClassName('submit-btn');

    submitButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});