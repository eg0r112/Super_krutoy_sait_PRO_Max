<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>КОД</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Личный кабинет</h2>
        <div id="formContainer">
            <!-- Форма входа -->
            <form id="loginForm" class="form active" action="db_connect.php" method="post">
                <h3>Вход</h3>
                <input type="email" class="WWod" id="loginEmail" placeholder="Email" name="emailll" required>
                <input type="password" class="WWod" id="loginPassword" placeholder="Пароль" name="password" required>
                <button type="submit" onclick="Vhod()">Войти</button>
                <p>Нет аккаунта? <span id="toRegister">Зарегистрироваться</span></p>
            </form>

            <!-- Форма регистрации -->
            <form id="registerForm" class="form" action="db_connect.php" method="post">
                <h3>Регистрация</h3>
                <input type="text" class="WWod" id="registerName" placeholder="Имя" name="login" required>
                <input type="email" class="WWod" id="registerEmail" placeholder="Email" name="emailll"  required>
                <input type="password" class="WWod" id="registerPassword" placeholder="Пароль" name="password" required>
                <input type="password" class="WWod" id="registerPasswordTwo" placeholder="Повторите пароль" name="password" required>
                <button type="submit" onclick="registerUser()">Зарегистрироваться</button>
                <p>Уже есть аккаунт? <span id="toLogin">Войти</span></p>
            </form>
        </div>
    </div>
<?php
$conn = new mysqli("localhost", "root", "", "users");
if($conn->connect_error){
    die("Ошибка: " . $conn->connect_error);
}
$login = $_POST['login'];
$email = $_POST['emailll'];
$password = $_POST['password'];
$sql = "INSERT INTO user (name, email, password) VALUES ($login, $email, $password)";
if($conn->query($sql)){
} else{
}
$conn->close();
?>
    <script src="script.js"></script>
</body>
</html>