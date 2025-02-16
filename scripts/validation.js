const loginForm = document.getElementById('loginForm');
    const validCredentials = {
        username: 'rogerin123@gmail.com',
        password: 'souflamengo'
    };

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (username === validCredentials.username && password === validCredentials.password) {
            window.location.href = 'home.html';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });