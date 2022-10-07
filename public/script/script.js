var toggler = document.getElementById("toggler");
var logo = document.getElementById("logo");
var sidebar = document.getElementById("sidebar");
var pagecontent = document.getElementById("page-content");

toggler.addEventListener("click", (e) => {
    sidebar.classList.toggle("hidden");
    logo.classList.toggle("hidden");
    pagecontent.classList.toggle("marginleft");
});

