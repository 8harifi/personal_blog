function changeBar(x) {
    x.classList.toggle("change");
};

function toggleNav() {
    var sidenav = document.getElementById("sidenav"),
    main = document.getElementById("main");
    sidenav.style.width = sidenav.style.width === "250px" ? '0' : '250px';
    main.style.marginLeft = main.style.marginLeft === "250px" ? '0' :  '250px';
};

function topNavItemActivator() {
    if (document.location.pathname == "/") {
        document.getElementById("top_nav_home").classList = "topnav active";
    } else if (document.location.pathname == "/search/") {
        document.getElementById("top_nav_search").classList = "topnav active";
    };
};


function openSearchBar() {
    const searchIcon = document.getElementById("top_nav_search");
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.name = "q";
    searchBar.placeholder = "search..";
    searchIcon.parentNode.replaceChild(searchBar, searchIcon);
};

window.onload = function(){
    topNavItemActivator();
};