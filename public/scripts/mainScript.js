$(function() {

    $("ul.navbar-nav > li").hover( 
        function(){
        $(this).addClass('hoverStyle');
    }, function(){
        $(this).removeClass('hoverStyle');
    });

    $("li.loginDropdown > a").on("click", () =>{
            $(".loginDropMenu").toggle("display");
        });

    $("li.regDropdown > a").on("click", () =>{
        $(".loginDropMenu").hide(400);
        $(".regDropMenu").show(400);
        $("li.loginDropdown > a").on("click", () =>{
            $(".regDropMenu").hide(400);
        });
    });

    $("li.userDropdown > a").on("click", () =>{
        $(".userDropMenu").toggle("display");
    });

});
