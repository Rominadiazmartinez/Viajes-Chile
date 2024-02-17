$(document).ready(function(){

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $(function (){

        var navBar = $("nav");

        $(window).scroll(function(){
            console.log($(this).scrollTop());
            if( $(this).scrollTop() >200){
                navBar.addClass("bg-dark-subtle");
            }
            else{
                navBar.removeClass("bg-dark-subtle");
            }
        })
    })

    $("a").on("click", function(event){
        // console.log("salida de this.hash")

        if(this.hash !== ""){
            event.preventDefault()

            var hash = this.hash

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 2000, function(){                
            })
        }
    })

    var tarjeta = $(".tarjeta");

    function eventPink(){
        $(this).css({
            background: "pink"
        })
    }

    tarjeta.dblclick(function(){
        $(this).css({
            background: "pink",
            color:"black"
        })
    })

    $(".form-bot").click(function(event){
        alert("Formulario enviado")   
    })   
    
})