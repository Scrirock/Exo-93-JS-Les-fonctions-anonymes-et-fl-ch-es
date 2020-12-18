let bAlert = document.getElementById("alert");
let somme = document.getElementById("somme");

bAlert.addEventListener("click", () => alert("Hello world"));
document.body.addEventListener("keypress", (event) => {

   if (event.key === "Enter"){
       alert("Hello world");
   }

});

somme.addEventListener("click", () => {
    let div = document.createElement("div");
    div.innerHTML = 5+6;
    document.body.append(div);
});