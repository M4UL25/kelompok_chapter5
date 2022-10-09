var toggler = document.getElementById("toggler");
var logo = document.getElementById("logo");
var sidebar = document.getElementById("sidebar");
var pagecontent = document.getElementById("page-content");

toggler.addEventListener("click", (e) => {
    sidebar.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    pagecontent.classList.toggle("marginleft");
});

function filter(value){
    let buttons = document.querySelectorAll(".button-option");
    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        }
        else{
            button.classList.remove("active");
        } 
    });
    
    let cards = document.querySelectorAll(".card");
    let ukuran = document.querySelectorAll(".ukuran");
    let i;

    for(i=0;i<cards.length;i++){
        if(value == "all"){
            cards[i].classList.remove("hide");
        }
        else{
            if(ukuran[i].innerHTML.toUpperCase() != value.toUpperCase()){
                cards[i].classList.add("hide");
            }
            else{
                cards[i].classList.remove("hide");
            }
        }
        
    }
}

function search(){
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".nama");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerHTML.toUpperCase().includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
        }else{
            cards[index].classList.add("hide");
        }
    })
}

/* 

let alerts = document.getElementById("alert");
setTimeout(()=>{
    alerts.classList.remove("show");
    alerts.classList.add("hide");
}, 2000) */


