document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Check if already logged in
    if (sessionStorage.getItem('dashboardAuth') === 'true') {
        window.location.href = 'index.html';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple hardcoded credentials for demonstration
        // In a real application, this should be validated against a backend
        if (username === 'admin' && password === 'admin123') {
            sessionStorage.setItem('dashboardAuth', 'true');
            window.location.href = 'index.html';
        } else {
            errorMessage.style.display = 'block';
            // Shake animation effect
            const loginContainer = document.querySelector('.login-container');
            loginContainer.style.animation = 'shake 0.5s';
            setTimeout(() => {
                loginContainer.style.animation = '';
            }, 500);
        }
    });

    // Add shake animation keyframes
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            50% { transform: translateX(10px); }
            75% { transform: translateX(-10px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
});
