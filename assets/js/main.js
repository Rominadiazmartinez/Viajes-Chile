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
    
})