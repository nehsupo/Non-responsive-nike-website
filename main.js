let btn2 = document.querySelector('.menu');
const aside = document.querySelector('#asideMenu');
let div1 = document.querySelector('.feature1');
let div2 = document.querySelector('.feature2');
let div3 = document.querySelector('.feature3');
let colorP = document.querySelector('.changeColor')


$(".menu").click(function(){
    if(!$("#asideMenu").hasClass("show")){
        $("#asideMenu").animate({left:"0"},500)
        $("#asideMenu").addClass("show")
        $('.menu').text("zwiń menu");
    }
    else {
        $("#asideMenu").animate({left:"-640px"},500)
        $("#asideMenu").removeClass("show");
        $('.menu').text("rozwiń menu");
    }
})

$(".page1").click(function(){
$('html, body').animate({
    scrollTop: $("#jump").offset().top
}, 1000);
});

$(".home").click(function(){
    $('html, body').animate({
        scrollTop: $("nav").offset().top
    }, 1000);
    });
    $('.learnMore').click(function(){
        $('html, body').animate({
            scrollTop: $("#jump").offset().top
        }, 2000);
    })
    $('#close').click(function(){
        $("#asideMenu").animate({left:"-640px"},500)
        $("#asideMenu").removeClass("show");
        $('.menu').text("rozwiń menu");
    })

  
    $(window).scroll(function(){
    if (scrollY > 930) {
        $('.feature1').animate({marginLeft: "0"},4000)
    }
})

    $(window).scroll(function(){
    if (scrollY > 1300) {
        $('.exampleList').animate({marginLeft: "0"},4000)
    }
})
        const colorChange = () => {
        let random = Math.floor(Math.random()* 255);
        let random1 = Math.floor(Math.random()* 255);
        let random2 = Math.floor(Math.random()* 255);
        colorP.style.color = `rgb(${random},${random1},${random2})`;
    }

    
    
    window.setInterval(colorChange,1000)