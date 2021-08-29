function changeBar(x) {
    x.classList.toggle("change");
};



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


// function openSearchPopup() {
//     document.getElementById("searchPopup").style.display = "block";
// };
  
//   function closeSearchPopup() {
//     document.getElementById("searchPopup").style.display = "none";
// };

function toggleSearchPopup() {
    var searchPopup = document.getElementById("searchPopup");
    if (searchPopup.style.display == "none") {
        searchPopup.style.display = "block";
    } else if (searchPopup.style.display == "block") {
        searchPopup.style.display = "none";
    }else {
        searchPopup.style.display = "none";
    };
};


window.onload = function(){
    topNavItemActivator();
};