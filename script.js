document.getElementById('toRegister').addEventListener('click', function () {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('registerForm').classList.add('active');
});

document.getElementById('toLogin').addEventListener('click', function () {
    document.getElementById('registerForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Отправка данных на сервер (псевдокод)
    console.log('Вход:', { email, password });
    alert('Данные отправлены для входа!');
});

// Обработка формы регистрации
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Отправка данных на сервер (псевдокод)
    console.log('Регистрация:', { name, email, password });
    alert('Данные отправлены для регистрации!');
});
// Получаем элементы формы
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toRegisterLink = document.getElementById('toRegister');
const toLoginLink = document.getElementById('toLogin');

// Переключение между формами
toRegisterLink.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

toLoginLink.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

// Обработка формы входа
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Простая проверка на корректность данных (замените на реальную логику)
    if (email === 'user@example.com' && password === 'password123') {
        alert('Вы успешно вошли!');
        window.location.href = 'dashboard.html'; // Переход на страницу после входа
    } else {
        alert('Неверный email или пароль.');
    }
});

// Обработка формы регистрации
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    if (!name || !email || !password) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Простая проверка на корректность данных (замените на реальную логику)
    alert(`Вы успешно зарегистрировались как ${name}!`);
    loginForm.classList.add('active');
    registerForm.classList.remove('active'); // Возвращаемся к форме входа
});