$(document).ready(function(){

    var slaiderShares = $('#shares .item-shares'),
        mainLogoElement = document.querySelector('#header .main__logo'),
        form = $("#form");

    function checkSizeWindow(){
        if(document.documentElement.clientWidth <= 940 && 
            document.documentElement.clientWidth > document.documentElement.clientHeight){
            $('#header .sl__slide').css('height', document.documentElement.clientWidth + 'px');
        };
    };
    function addClass(){

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $("#shares").find(".item-shares.active").removeClass("active");
            $(this).addClass('active');
        } 
    };


    /*============= плaвная прокрутка к карте ===================*/

    $('.map__scroll').on('click','a', function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    /*реализация адаптивности при горизонтально повёрнутом экране*/

    checkSizeWindow();
    $(window).on('resize', checkSizeWindow);

    /*================== событие для .sl__shares =================*/

    slaiderShares.each( function(i, el){
        $(el).on('click', addClass);
    });

    /*================== datepicker init =================*/

    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy"
    });


    $(".bth-calendar").on("click", function(){
        form.addClass('opened').animate({"opacity": "1"}, 600);
    });

    form.find(".cross").on("click", function(){
        form.animate({"opacity": "0"}, 600, function(){
            form.removeClass('opened');
        });
    });

    $("input[type=button").on("click", function(){

        $("#form").submit(function(){
            console.log("!!!");
            if (form.find("input[name=name]").val() === '' || form.find("input[name=tel]").val() === '' || form.find("input[name=date]").val() === ''){
                console.log("!!!!");
                return false;
            }
        }); 

        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            form.trigger("reset");
        });

        return false;
    });

});

