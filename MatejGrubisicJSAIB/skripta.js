function upriLivo() {
    var livo = window.prompt("upisi boju");
    console.log(livo);
    document.getElementsByClassName("div1")[0].style.backgroundColor = livo;
    document.getElementsByClassName("div3")[0].style.backgroundColor = livo;
}
function upriDesno() {
    var desno = window.prompt("upisi boju");
    console.log(desno);
    document.getElementsByClassName("div2")[0].style.backgroundColor = desno;
    document.getElementsByClassName("div4")[0].style.backgroundColor = desno;
}
function sakrij() {
    document.getElementsByClassName("div1")[0].style.display = "none";
    document.getElementsByClassName("div2")[0].style.display = "none";
    document.getElementsByClassName("div3")[0].style.display = "none";
    document.getElementsByClassName("div4")[0].style.display = "none";
    document.getElementsByClassName("div5")[0].style.display = "none";
}
function pokazi() {
    document.getElementsByClassName("div1")[0].style.display = "block";
    document.getElementsByClassName("div2")[0].style.display = "block";
    document.getElementsByClassName("div3")[0].style.display = "block";
    document.getElementsByClassName("div4")[0].style.display = "block";
    document.getElementsByClassName("div5")[0].style.display = "block";
}
document.getElementById("slika1").addEventListener("click", function klik1(){
    alert("Uprili ste na sliku jaslica")
})
document.getElementById("slika2").addEventListener("click", function klik1(){
    alert("Uprili ste na sliku zvoncica")
})
document.getElementById("jaslice").addEventListener("click", function klik2(){
    document.getElementById("jaslice").style.fontSize = "20px";
    document.getElementById("jaslice").style.fontFamily = "verdana";
})
document.getElementById("zvoncici").addEventListener("click", function klik2(){
    document.getElementById("zvoncici").style.fontSize = "20px";
    document.getElementById("zvoncici").style.fontFamily = "verdana";
})
window.addEventListener("resize", rastegni);

function rastegni() {
    var visina = innerHeight;
    var sirina = innerWidth;
    document.getElementById("okvir").innerHTML = "sirina" + sirina + "visina" + visina;
}

document.addEventListener("keydown", function keyUpri(){
    window.alert("Uprili ste botun");
})