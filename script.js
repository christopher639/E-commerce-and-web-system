document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const submitBtn = document.querySelector('.submitBtn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
            alert(" Login Successful");
        });
    } else {
        console.error("Login button not found");
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const loginBtn = document.querySelector('.loginBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
            console.log("Successfull login");
          
        });
    } else {
        console.error("Login button not found");
    }
});