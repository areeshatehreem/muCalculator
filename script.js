let array = ["smart", "lazy", "active", "dumb", " Gawkish,"]

function myFunction() {
    let name = document.querySelector("input").value;
        
    let random = Math.floor(Math.random() * array.length);
//alert(array[random]);
document.querySelector(".box").innerHTML = "you are " + array[random]
}
//document.querySelector(".box").innerHTML = array;
