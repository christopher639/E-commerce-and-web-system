document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const submitBtn = document.querySelector('.submitBtn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            console.log("Login button clicked");
            window.location.href = 'index.html';
        });
    } else {
        console.error("Login button not found");
    }
});