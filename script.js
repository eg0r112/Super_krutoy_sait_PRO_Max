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
    //console.log('Вход:', { email, password });
    //alert('Данные отправлены для входа!');
});

// Обработка формы регистрации
document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordTwo = document.getElementById('registerPasswordTwo').value;

    // Отправка данных на сервер (псевдокод)
    //console.log('Регистрация:', { name, email, password });
    //alert('Данные отправлены для регистрации!');
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
    // if (email === 'user@example.com' && password === 'password123') {
    //     alert('Вы успешно вошли!');
    //     window.location.href = 'dashboard.html'; // Переход на страницу после входа
    // } else {
    //     alert('Неверный email или пароль.');
    // }
});

// Обработка формы регистрации
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordTwo = document.getElementById('registerPasswordTwo').value;
    
    if (!name || !email || !password || !passwordTwo) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }
    else {
        if(password != passwordTwo) {
            alert("Пароли не совпадают!");
            return;
        }
        Reg();
    }

    
    // Простая проверка на корректность данных (замените на реальную логику)
    alert(`Вы успешно зарегистрировались как ${name}!`);
    loginForm.classList.add('active');
    registerForm.classList.remove('active'); // Возвращаемся к форме входа
});
let Scet = 1;
var User1;
var Email1;
var password1;

var User2;
var Email2;
var password2;

var User3;
var Email3;
var password3;

var UserAdm = Admin;


function Vhod() {
    var Email = document.querySelector("#loginEmail").value;    
    var Password = document.querySelector("#loginPassword").value;
    if(((Email==Email1)||(Email==Email2)||(Email==Email3)||(Email=="Admin@mail.ru"))||((Password==password1)||(Password==password2)||(Password==password3)||(Password=="Admin123")))
    {
        window.location.href = "Osnova.html";
    }
    else
    {
        alert("Пользователь не найден");
        return;
    }
}

function Reg() {
    switch (Scet) {
        case 1:
          User1 = document.querySelector("#registerName").value;
          Email1 = document.querySelector("#registerEmail").value;
          password1 = document.querySelector("#registerPassword").value;
          Scet++;
          window.location.href = "Osnova.html";
          break;
        case 2:
            User2 = document.querySelector("#registerName").value;
            Email2 = document.querySelector("#registerEmail").value;
            password2 = document.querySelector("#registerPassword").value;
            Scet++;
            window.location.href = "Osnova.html";
          break;
        case 3:
            User3 = document.querySelector("#registerName").value;
            Email3 = document.querySelector("#registerEmail").value;
            password3 = document.querySelector("#registerPassword").value;
            Scet++;
            window.location.href = "Osnova.html";
          break;
        default:
          alert("Ошибка! Превышен лимит пользователей!");
          return;
      }
}







