console.log('hey from javaScript');


function getContent() {
    var firstName = document.getElementById("firstNameTxa").value;
    var lastName = document.getElementById("lastNameTxa").value;
    document.getElementById("name").innerHTML = "Hej, " + firstName + " " + lastName;
}