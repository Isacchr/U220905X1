console.log('hey from javaScript');


function getContent() {
    var x = document.getElementById("myTextarea").value;
    document.getElementById("name").innerHTML = "Hej, " + x;
}