<?php
$conn = new mysqli("localhost", "root", "", "users");
if($conn->connect_error){
    die("Ошибка: " . $conn->connect_error);
}
print("okey");
$sql = "INSERT INTO user ('name', 'email', 'password') VALUES ('Tom', 'ev@mail.ru', 'dfdfdf')";
if($conn->query($sql)){
    echo "Данные успешно добавлены";
} else{
    echo "Ошибка: " . $conn->error;
}
$conn->close();
?>