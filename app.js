const button=document.querySelector("#btn");
let mode=true;

button.addEventListener("click", () => {
    if(mode) {
        document.body.classList.add("black");
        button.innerText="Light";
        mode=false;

    } 
    else {
        document.body.classList.remove("black");
        button.innerText="Dark";
        mode=true;
    }
});