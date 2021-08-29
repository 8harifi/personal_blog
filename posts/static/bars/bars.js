function changeBar(x) {
    x.classList.toggle("change");
};

// function openSearch(x) {
//     const searchIcon = document.querySelector("a#top_nav_search");
//     const searchBar = document.createElement("form");
//     searchBar.action = "/search/";
//     searchBar.innerHTML = '<input type="text" placeholder="search..">';
//     searchIcon.parentNode.replaceChild(searchBar, searchIcon);
// };


function toggleNav() {
    var sidenav = document.getElementById("mySidenav"),
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

window.onload = function(){
    topNavItemActivator();
};