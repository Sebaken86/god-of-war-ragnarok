
// AOS
AOS.init();





// fancybox
Fancybox.bind("[data-fancybox]", {});





//slider
var slider = tns({
    container: '.my-slider',
    items: 1,
    responsive: {
        640: {
            gutter: 20,
            items: 5
        },
        700: {
            gutter: 30
        },
        900: {
            items: 5
        }
    }
    
});


document.getElementById("enlace").addEventListener("mouseover", porencima);
document.getElementById("enlace").addEventListener("mouseout", alquitar);

document.getElementById("span").addEventListener("mouseover", porencima);
document.getElementById("span").addEventListener("mouseout", alquitar);


document.getElementById("span-1").addEventListener("mouseover", porencima);
document.getElementById("span-1").addEventListener("mouseout", alquitar);

function porencima(){

    document.getElementById("enlace").style.color = "white";
    document.getElementById("span").style.color = "orange";
    document.getElementById("span-1").style.color = "orange";

}

function alquitar(){

    document.getElementById("enlace").style.color = "red";
    document.getElementById("span").style.color = "white";
    document.getElementById("span-1").style.color = "white";

}
