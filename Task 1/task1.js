var UserName = prompt("Введите имя пользователя:");
alert ("Привет, "+UserName+"!");

const Name = () => {
    let Name = document.getElementById('Name').value ;
    document.getElementById('addedName').innerHTML = 'Привет-медвед, ' + Name +'!' ;
};