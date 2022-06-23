/*

jQuery(document).ready(function($){
  
    nsZoomZoom(); 
     
    $( window ).resize(function() { 
      nsZoomZoom();
    });
     
   
    function nsZoomZoom() {
        var width = window.innerWidth;
        
        if(width > 1900) {
            
        $("body").css('width', '1900');
       htmlWidth = $('html').innerWidth();       
       bodyWidth = $('body').innerWidth();       
      
      
       if (htmlWidth < bodyWidth)
          scale = 1
       else {
          scale = htmlWidth / bodyWidth; 
       }
       var clientHeight = $('.category_body').innerHeight();

       
       // Req for IE9
       $("#large_screen").css('-ms-transform', 'scale(' + scale + ')');
       $("#large_screen").css('transform', 'scale(' + scale + ')');      
       $("#large_screen").css('transform-origin', 'top');
       $(".view_s").css('height', clientHeight+520);       
    } 
    } 

   }); 
 */
$(document).ready(function() {
    $(".qplay").click(function(e) {
        
        
        var id = e.target.id;        
        var obj = document.getElementById("Audio");        
        obj.src = "/mp3/soniy/"+id+".aac";             
        obj.play();
        $('.qplay').css({ "background": "none" });
        $('#'+id).css({ "background": "#f7f7f7","z-index":"999" });        
        
    });
});
 $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 400) {
        $('.zas_fixed').fadeIn();
    } else {
        $('.zas_fixed').fadeOut();
    }

});

function copyOyat(oyatid) {
    
    $('.copyoyat'+oyatid).html('кўчирилди');
}
function hideInfo(oyatid) {
    $('.block_so' + oyatid).hide();
}
function showInfo(oyatid) {
    $('.block_so' + oyatid).show();
}
function shareF(url) {        
    var surahid = document.getElementById("surahid");
    var sura = surahid.innerHTML;      
    return window.open("http://www.facebook.com/sharer/sharer.php?u=https://islom.uz/mano_tarjima/"+sura+"#" + url, "", "width=700,height=500");

}
function shareT(url) {    
    var text = document.getElementById("copy_oyat" + url);
    var urltext = text.getAttribute("data-clipboard-text");  
    return window.open("https://telegram.me/share/url?url=" + encodeURIComponent(urltext), "", "width=700,height=500");

}
var clipboard = new ClipboardJS('.copy_oyat');

clipboard.on('success', function (e) {
    console.log(e);
});

clipboard.on('error', function (e) {
    console.log(e);
});
 function wordsUz() {

    function Eliser(currentWord){

        if(currentWord[0]==='Е'){ //agar E bosh harfda Upper case bo'lib kelsa :           
            for(let z = 0; z<currentWord.length; z++){
                if(currentWord.charCodeAt(z)>=1040 && currentWord.charCodeAt(z)<=1071){
                    var E = currentWord.replace(/Е/i, "Ye"); //agar so'z upper case da bo'lsa, "YE" deb o'zgartir !                    
                    return E;   
                }
                else{
                    var E = currentWord.replace(/Е/i, "Ye"); //aks holda "Ye" deb o'zgartir !                    
                    return E;   
                }
            }                        
        }
        else if(currentWord[0]==='е'){//agar e bosh harfda lower case bolib kelsa:
            var e = currentWord.replace(/е/i, "ye");          
            return e;
        }       
        else{
            return currentWord;
        }
    }
     
     $('.latin').css({ "background": "#1CC465", "border-radius": "3px" });
     $('.krill').css({ "background": "none"});
     var textpps = document.getElementById("typelang");
     textpps.innerHTML = 'lotin';
     
     var replace = ["ts","oʻ", "Oʻ", "Gʻ", "gʻ", "'", "'", "sh", "Sh", "ch", "Ch", "yo", "Yo", "ya", "Ya", "yu", "Yu", "Q", "q", "E", "e", "R", "r", "T", "t", "Y", "y", "U", "u", "I", "i", "O", "o", 'P', "p", "A", "a", "S", "s", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l", "Z", "z", "X", "x", "V", "v", "B", "b", "N", "n", "M", "m", "C", "c", "", ""];

     var find = ["ц","ў", "Ў", "Ғ", "ғ", "ъ", "Ъ", "ш", "Ш", "ч", "Ч", "ё", "Ё", "я", "Я", "ю", "Ю", "Қ", "қ", "Э", "э", "Р", "р", "Т", "т", "Й", "й", "У", "у", "И", "и", "О", "о", 'П', "п", "А", "а", "С", "с", "Д", "д", "Ф", "ф", "Г", "г", "Ҳ", "ҳ", "Ж", "ж", "К", "к", "Л", "л", "З", "з", "Х", "х", "В", "в", "Б", "б", "Н", "н", "М", "м", "С", "с", "ь","ы"];

    var str = document.body.innerHTML;
    
    for (var i = 0; i < find.length; i++) {

        str = str.replace(new RegExp(find[i], "g"), replace[i]);   
    }
    let letterE = str.split(' ').map(Eliser).join(' ');  
    str = letterE;         
    document.body.innerHTML = str; 
    $('.krill').text('ЎЗ');

}


$(document).ready(function () {

    $.apScrollTop({
        'onInit': function (evt) {
            console.log('apScrollTop: init');
        }
    });

    // Add event listeners
    $.apScrollTop().on('apstInit', function (evt) {
        console.log('apScrollTop: init');
    });

    $.apScrollTop().on('apstToggle', function (evt, details) {
        console.log('apScrollTop: toggle / is visible: ' + details.visible);
    });

    $.apScrollTop().on('apstCssClassesUpdated', function (evt) {
        console.log('apScrollTop: cssClassesUpdated');
    });

    $.apScrollTop().on('apstPositionUpdated', function (evt) {
        console.log('apScrollTop: positionUpdated');
    });

    $.apScrollTop().on('apstEnabled', function (evt) {
        console.log('apScrollTop: enabled');
    });

    $.apScrollTop().on('apstDisabled', function (evt) {
        console.log('apScrollTop: disabled');
    });

    $.apScrollTop().on('apstBeforeScrollTo', function (evt, details) {
        console.log('apScrollTop: beforeScrollTo / position: ' + details.position + ', speed: ' + details.speed);

     
    });

    $.apScrollTop().on('apstScrolledTo', function (evt, details) {
        console.log('apScrollTop: scrolledTo / position: ' + details.position);
    });

    $.apScrollTop().on('apstDestroy', function (evt, details) {
        console.log('apScrollTop: destroy');
    });

});           


function azanX() {

    var azan = document.getElementById("Azan");
    azan.muted = true;
    $('.icon_azan').hide();
    $('.icon_azan_x').show();    
        $.ajax({
            url: "/azan",
            method: "get",
            data: {
                azan: 'off'
            },
            dataType: "Text"
        });
    
}

function saveM() {
    var idpost = document.getElementById("postid").innerHTML;
    
    if ($('.save_m').hasClass("toggled")) {    
        $('.save_m').css({ "border": "1px solid #eee", "color": "#666" });        
        $('.save_m').removeClass("toggled");                 
            $.ajax({
                url: "/savepost",
                method: "get",
                data: {
                    id: idpost,
                    method: 'off'
                },
                dataType: "Text",
                success: function (t) {
                    $(".text_save").html(t);
                }
            });     
    } else {               
            $.ajax({
                url: "/savepost",
                method: "get",
                data: {
                    id: idpost,
                    method: 'on'
                },
                dataType: "Text",
                success: function (t) {
                    $(".text_save").html(t);
                }
            });            
                  
        $('.save_m').css({ "border": "1px solid #0C8744", "color": "#0C8744" });
        $('.save_m').addClass("toggled");
    }       
}

function viewP(photos) {
    if(photos == 'photos1') {
        $('.photos1').show();
        $('.photos2').hide();
        $('.photos3').hide();
        $('.title_photos1').show();
        $('.title_photos2').hide();
        $('.title_photos3').hide();        

    } else if(photos == 'photos2') {
        $('.photos2').show();
        $('.photos1').hide();
        $('.photos3').hide();
        $('.title_photos2').show();
        $('.title_photos1').hide();
        $('.title_photos3').hide();
        if ($('.photos2').hasClass("active_slider")) {
            $('.photos2').attr('class', 'clearfix photos2');
            Slider2();
        }
    } else if(photos == 'photos3') {
        $('.photos3').show();
        $('.photos1').hide();
        $('.photos2').hide();
        $('.title_photos3').show();
        $('.title_photos2').hide();
        $('.title_photos1').hide();
        if ($('.photos3').hasClass("active_slider")) {
            $('.photos3').attr('class', 'clearfix photos3');
            Slider3();
        }
    }
}
function azanP() {

    $('.icon_azan').show();
    $('.icon_azan_x').hide();
    
        $.ajax({
            url: "/azan",
            method: "get",
            data: {
                azan: 'on'
            },
            dataType: "Text"
        });    
}
function goSet() {   
    setInterval(function () {     
        $('.settime').text('Qoravoy'); 
     }, 3000);
}
function sizeMa() {
    var size = parseInt($('.inmaqola_text').css('font-size')) + 2;
    $('.inmaqola_text').animate({fontSize: size}, 500);
}

function sizeMi() {
    var size = parseInt($('.inmaqola_text').css('font-size')) - 2;
    $('.inmaqola_text').animate({fontSize: size}, 500);
}

function readS() {

    if ($('.read_m').hasClass("toggled")) {
        $('.view_s').fadeOut(500);
        $('.read_m').css({"border": "1px solid #eee", "color": "#666"});
        $('.category_body').animate({zIndex:1 }, 500);
        $('.video_p').animate({ zIndex: 1 }, 500);
        $('.read_m').removeClass("toggled");
        $('.view_s').removeClass("toggled");
    } else {
        $('.view_s').fadeIn(500);
        $('.category_body').css({ "z-index": "1000" });
        $('.video_p').css({ "z-index": "1000" });
        $('.read_m').css({"border": "1px solid #0C8744", "color": "#0C8744"});
        $('.read_m').addClass("toggled");
        $('.view_s').addClass("toggled");

    }

}

var track_page = 1; //track user scroll as page number, right now page number is 1
var loading = false; //prevents multiple loads
var type = 'maqola';

load_contents(track_page, type); //initial content load

function scrollButton(type) {
    if (type == 'maqola2') {
        $('.maqola').css("color", "#C8C8C8");
        $('.maqola3').css("color", "#C8C8C8");
        $('.maqola2').css("color", "#1D7847");
        $('.carousel').hide();

    } else if (type == 'maqola3') {
    $('.maqola').css("color", "#C8C8C8");
    $('.maqola2').css("color", "#C8C8C8");
    $('.maqola3').css("color", "#1D7847");
    $('.carousel').hide();
}
else {
    $('.maqola3').css("color", "#C8C8C8");
    $('.maqola2').css("color", "#C8C8C8");
    $('.maqola').css("color", "#1D7847");
    $('.carousel').show();
}
    $("#content_results").html("");
    $('.loading-info').attr("id", type);

    if (loading == false) {
        var typelang = document.getElementById('typelang').innerHTML;
        if (typelang == 'lotin') {
            var textnext = "Yana maqolalar ko'rish";
            var textend = "Boshqa maqolalar yo'q";
        } else {
            var textnext = "Яна мақолалар кўриш";
            var textend = "Бошқа мақолалар йўқ";
        }

        loading = true;  //set loading flag on
        $('.loading-info').show(); //show loading animation
        $.get('/pagination', { page: 1, type: type, langtype: typelang }, function (data) {
            console.log(data);

            loading = false; //set loading flag off once the content is loaded
            if (data.trim().length == 0) {
                //notify user if nothing to load
                $('.loading-info').html(textend);
                return;
            }

            $('.loading-info').hide(); //hide loading animation once data is received
            $("#content_results").append(data); //append data into #results element
            $('.loading-info').html(textnext);
            
        }).fail(function (xhr, ajaxOptions, thrownError) { //any errors?
            //alert with HTTP error
        })
    }
}

function scrollPage(type) {
    track_page++;
    load_contents(track_page,type)

}

$(window).scroll(function () { //detect page scroll
    $('.loading-info').show();
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) { //if user scrolled to bottom of the page


    }
});

//Ajax load function
function load_contents(track_page,type) {

    var typelang = document.getElementById('typelang').innerHTML;
    if (typelang == 'lotin') {
        var textnext = "Yana maqolalar ko'rish";
        var textend = "Boshqa maqolalar yo'q";
    } else {
        var textnext = "Яна мақолалар кўриш";
        var textend = "Бошқа мақолалар йўқ";
    }
    if (loading == false) {
        loading = true;  //set loading flag on
        $('.loading-info').html('<div class=\"lds-ellipsis\"><div></div><div></div><div></div><div></div></div>'); //show loading animation
        $.get('/pagination', { page: track_page, type: type, langtype: typelang}, function (data) {
            console.log(data);

            loading = false; //set loading flag off once the content is loaded
            if (data.trim().length == 0) {
                //notify user if nothing to load
                $('.loading-info').html(textend);
                return;
            }

            $('.loading-info').hide(); //hide loading animation once data is received
            $("#content_results").append(data); //append data into #results element
            $('.loading-info').html(textnext);
            
        }).fail(function (xhr, ajaxOptions, thrownError) { //any errors?
            //alert with HTTP error
        })

    }
}
window.onload = function(){

    $('.photos2').hide();
    $('.photos3').hide();
    $('.title_photos2').hide();
    $('.title_photos3').hide();
    
    
    

   return startTimer();

}

function startTimer() {
    setInterval(function () {
        var prime_t = document.getElementById("prime_t");
        var prime_times = Number(prime_t.innerHTML);
        var prime_time = prime_times;
        var azan = document.getElementById("Azan");
        var azan_s = document.getElementById("azan_status");
        var azan_status = azan_s.innerHTML;

        if (prime_time == 22) {
            var prime_time = 2;
        }

        var my_timer = document.getElementById("timer_prayer" + prime_times);
        var time = my_timer.innerHTML;
        // var timestr = time.toTimeString();
        //alert(time);
        var arr = time.split(":");
        var cp1 = document.getElementById("cp" + prime_time);
        var tc1 = document.getElementById("tc" + prime_time);

        if (prime_times != 22) {
            $("#timer_prayer" + prime_time).show();
            cp1.classList.add('p_active');
            tc1.classList.add('c_active');
        }

        var c = arr[0];
        var m = arr[1];
        var s = arr[2];


        if (s == 0) {
            if (m == 0) {
                if (c == 0) {

                    if (prime_times != 22 || prime_times != 2) {

                        if (azan_status == 'on') {
                            azan.play();
                        }
                    }
                    $("#timer_prayer" + prime_time).hide();
                    cp1.classList.remove('p_active');
                    tc1.classList.remove('c_active');

                    if (prime_time == 6) {

                        prime_t.innerHTML = '1';
                        $("#header_prayer").stop().animate({ opacity: 0 }, 1000, function () {
                            $(this).css({ 'background-image': "url('/img/header_tong.jpg')" })
                                .animate({ opacity: 1 }, { duration: 1000 });
                        });

                    } else if (prime_times == 22) {
                        azan.stop();
                        prime_t.innerHTML = '3';
                        $("#header_prayer").stop().animate({ opacity: 0 }, 500, function () {
                            $(this).css({ 'background-image': "url('/img/header_peshin.jpg')" })
                                .animate({ opacity: 1 }, { duration: 500 });
                        });

                    }
                    else {
                        prime_t.innerHTML = prime_time + 1;

                        var thtime = prime_time + 1;
                        if (thtime == 2) {

                            $("#header_prayer").stop().animate({ opacity: 0 }, 1000, function () {
                                $(this).css({ 'background-image': "url('/img/header_quyosh.jpg')" })
                                    .animate({ opacity: 1 }, { duration: 1000 });
                            });
                        }
                        else if (thtime == 3) {

                            $("#header_prayer").stop().animate({ opacity: 0 }, 1000, function () {
                                $(this).css({ 'background-image': "url('/img/header_peshin.jpg')" })
                                    .animate({ opacity: 1 }, { duration: 1000 });
                            });
                        }
                        else if (thtime == 4) {

                            $("#header_prayer").stop().animate({ opacity: 0 }, 1000, function () {
                                $(this).css({ 'background-image': "url('/img/header_asr.jpg')" })
                                    .animate({ opacity: 1 }, { duration: 1000 });
                            });
                        }
                        else if (thtime == 5) {

                            $("#header_prayer").stop().animate({ opacity: 0 }, 1000, function () {
                                $(this).css({ 'background-image': "url('/img/header_shom.jpg')" })
                                    .animate({ opacity: 1 }, { duration: 1000 });
                            });
                        }
                        else if (thtime == 6) {

                            $("#header_prayer").stop().animate({ opacity: 0 }, 1000, function () {
                                $(this).css({ 'background-image': "url('/img/header_hufton.jpg')" })
                                    .animate({ opacity: 1 }, { duration: 1000 });
                            });
                        }
                    }

                    $("#timer_prayer" + prime_times).hide();


                }
                if (c < 10) c = "0" + c;
                m = 59;
                c--;
            }
            else m--;
            s = 59;
            if (m < 10) m = "0" + m;
        }
        else s--;

        if (s < 10) s = "0" + s;

        document.getElementById("timer_prayer" + prime_times).innerHTML = c + ":" + m + ":" + s;
    }, 1000);
}

function showSearch() {
    $('.search_input_b').hide();
    $('.reg_button').hide();
    $('.search_form').show();
    $('.search_form').children(":first").focus();
}
function hideSearch() {
    $('.search_input_b').show();
    $('.reg_button').show();
    $('.search_form').hide();    
}
function showRegform() {
    $('.regform').show();
    $('.signinform').hide(); 
}
function showSignform() {
    $('.regform').hide();
    $('.signinform').show(); 
}
function showForm() {  

    if ($('.reg_button').hasClass("toggled")) {
        $('#login-dp').hide();
        $('.reg_button').removeClass("toggled");
    } else {
        $('#login-dp').show();
        $('.reg_button').addClass("toggled");
    }
        
}
function hideForm() {
    $('#login-dp').hide();
}
function hideList() {
    $('.lesson-list').animate({right: "-305"}, 500);
}

function lessonList() {
    $('.lesson-list').animate({right: "0"}, 500);
}

$('.book1').click(function () {

    $(this).css({'color': '#00b9ff'});
    $('.author1').css({'color': '#999'});
    $('.author_info').hide();
    $('.book_info').show();
    //$('.info_book').css('height', '100%');

});
$('.author1').click(function () {

    $(this).css({'color': '#00b9ff'});
    $('.book1').css({'color': '#999'});
    $('.book_info').hide();
    $('.author_info').show();
    //$('.info_book').css('height', '100%');
});

$('#book_down_full').click(function () {
    $('#book_down_full').hide();
    $('.hr_book').hide();

    var Text = $('.info_book');
    var reducedHeight = Text.height();
    //Text.css('height', '100%');
    var fullHeight = Text.height();
    Text.height(reducedHeight);

    Text.animate({height: fullHeight}, 1000);
});


$('table tr').each(function () {
    $(this).find('th').first().addClass('first');
    $(this).find('th').last().addClass('last');
    $(this).find('td').first().addClass('first');
    $(this).find('td').last().addClass('last');
});

$('table tr').first().addClass('row-first');

function Fotoblock() {
    $('.menu-b').removeClass("active_button");
    $('.foto_button').addClass("active_button");
    $('#video_block_left').hide();
    $('#jurnalb').hide();
    $('#audiob').hide();
    $('#dasturb').hide();
    $('#fotob').show();            
    if ($('#fotob').hasClass("active_slider")) { 
        $('#fotob').attr('class','new_books media_all_block');
        Slider();
    }
          
}

function Videoblock() {
    $('.menu-b').removeClass("active_button");
    $('.video_button').addClass("active_button");
    $('#video_block_left').show();
    $('#jurnalb').hide();
    $('#audiob').hide();
    $('#dasturb').hide();
    $('#fotob').hide();
    
    
}

function Audioblock() {
    $('.menu-b').removeClass("active_button");
    $('.audio_button').addClass("active_button");
    $('#video_block_left').hide();
    $('#jurnalb').hide();
    $('#audiob').show();
    $('#dasturb').hide();
    $('#fotob').hide();
}

function Appblock() {
    $('.menu-b').removeClass("active_button");
    $('.app_button').addClass("active_button");
    $('#video_block_left').hide();
    $('#jurnalb').hide();
    $('#audiob').hide();
    $('#dasturb').show();
    $('#fotob').hide();
}

function Magazineblock() {
    $('.menu-b').removeClass("active_button");
    $('.magazine_button').addClass("active_button");
    $('#video_block_left').hide();
    $('#jurnalb').show();
    $('#audiob').hide();
    $('#dasturb').hide();
    $('#fotob').hide();
}

var radio = document.getElementById("myAudio");

function playAudio() {
    $('.play_radio').hide();
    $('.pause_radio').show();
    radio.load();
    radio.play();
}

function pauseAudio() {
    $('.pause_radio').hide();
    $('.play_radio').show();
    radio.pause();
}

function Volume() {
    $('.volume_radio').hide();
    $('.volume_radio2').show();
    radio.muted = true;
}

function noVolume() {
    $('.volume_radio2').hide();
    $('.volume_radio').show();
    radio.muted = false;
}
function allMenu() {
    if ($('.all_menu').hasClass("toggled")) {
        $('.menu_list').slideToggle(200);
        $('.all_menu').removeClass("toggled");
    } else {
        $('.menu_list').slideToggle(200);
        $('.all_menu').addClass("toggled");
    }
}
$(document).ready(function () {
$("#content-slider").lightSlider({
    auto: true,
    loop: true,
    item: 5,
    speed: 500,
    pause: 5000,
    keyPress: true
});
});
$(document).ready(function () {
    $("#content-slider2").lightSlider({
        auto: true,
        loop: true,
        item: 5,
        speed: 500,
        pause: 5000,
        keyPress: true
    });
    });
function Slider() {
    
    $('#image-gallery').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 14,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }        
    });   
}
function Slider2() {
    $('#image-gallery2').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 14,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        onSliderLoad: function () {
            $('#image-gallery2').removeClass('cS-hidden');
        }
    });
} 
function Slider3() {
    $('#image-gallery3').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 14,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        onSliderLoad: function () {
            $('#image-gallery3').removeClass('cS-hidden');
        }
    });
}

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        cv = selElmnt.options[j].value;
        c.innerHTML = "<a href='/region/" + cv + "' class='reg'>" + c.innerHTML + "</a>";
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;

                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= 350) {

        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");

    }
}

$(document).ready(function () {
   
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".media_menu_iymon", offset: 50});

    // Add smooth scrolling on all links inside the navbar
    $(".islom_link").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }  // End if
    });
});


$(function () {
    var audio, playPause = $('#playPause'), sArea = $('#sArea'), seekBar = $('#seekBar'), tProgress = $('#aPlayed'), tTime = $('#aTotal'), sHover = $('#sHover'), seekT, seekLoc, insTime = $('#insTime');

    // 1. Function to handle play and pause actions
    function play_pause() {
        if (audio.paused) {
            audio.play();
            $('#playPause i').attr('class', 'fa fa-pause');
        }
        else {
            audio.pause();
            $('#playPause i').attr('class', 'fa fa-play');
        }
    }

    // 2. Function to show hover layer ( Hover layer shows play time at the place of hover )
    function showHover(event) {
        var seekBarPos = seekBar.offset();
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());

        sHover.width(seekT);

        var cM = seekLoc / 60;

        var ctMinutes = Math.floor(cM);
        var ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

        if ((ctMinutes < 0) || (ctSeconds < 0))
            return;

        if (ctMinutes < 10)
            ctMinutes = '0' + ctMinutes;

        if (ctSeconds < 10)
            ctSeconds = '0' + ctSeconds;

        insTime.text(ctMinutes + ':' + ctSeconds).css({ 'left': seekT, 'margin-left': '-25px' }).fadeIn(0);
    }

    // 3. Function to hide hover layer
    function hideHover() {
        sHover.width(0);
        insTime.text('00:00').css({ 'left': '0px', 'margin-left': '0px' }).fadeOut(0);
    }

    // Add eventListener for playing audio from a particular time interval when there is click on div#sArea element ( Area between play/pause button and timer )

    sArea.on('click', function () {
        audio.currentTime = seekLoc;
        seekBar.width(seekT);
        hideHover();
    })

    // 4. Function to update the time upto which audio has been played currently
    function updateCurrTime() {
        var curMinutes = Math.floor(audio.currentTime / 60);
        var curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

        var durMinutes = Math.floor(audio.duration / 60);
        var durSeconds = Math.floor(audio.duration - durMinutes * 60);

        var playProgress = (audio.currentTime / audio.duration) * 100;

        if (curMinutes < 10)
            curMinutes = '0' + curMinutes;

        if (curSeconds < 10)
            curSeconds = '0' + curSeconds;

        if (durMinutes < 10)
            durMinutes = '0' + durMinutes;

        if (durSeconds < 10)
            durSeconds = '0' + durSeconds;

        // Show the play progress in the player ui
        tProgress.text(curMinutes + ':' + curSeconds);

        // Update the total time duration of audio file in the player ui
        tTime.text(durMinutes + ':' + durSeconds);

        // Set the seekbar width
        seekBar.width(playProgress + '%');

        // If audio has been played to its full length, then
        // 1. Show the play icon
        // 2. Set the seekbar width to 0
        // 3. Update the play progress to 00:00
        if (playProgress == 100) {
            $('#playPause i').attr('class', 'fa fa-play');
            seekBar.width(0);
            tProgress.text('00:00');
        }
    }

    // 5. Main function for making the audio player functional
    function initPlayer() {
        // Create an audio object
        audio = new Audio();
        var url_audio = document.getElementById("url_audio");
        // Add the URL of audio source file to be played
        audio.src = url_audio.innerHTML;

        // Set looping to false to avoid audio from playing again
        audio.loop = false;

        // Play or pause the audio when there is click on div#playPause element ( play/pause button )
        playPause.on('click', play_pause);

        // When there is hover on div#sArea element, then show the hover layer.
        // div#sArea element => Area between play/pause button and player timer
        sArea.mousemove(function (event) { showHover(event); });

        // When mouse is removed from div#sArea element hide the hover layer
        sArea.mouseout(hideHover);

        // When current played time is updated ( it is updated when audio is playing ), then update the current time text in player UI
        $(audio).on('timeupdate', updateCurrTime);
    }

    // Make the audio player functional
    initPlayer();

});


var uploadField = document.getElementById("file");

uploadField.onchange = function() {
    if(this.files[0].size > 10000001){
       alert("Файл ўлчами катта! Кўпи билан 10 МБ бўлиши керак.");
       this.value = "";
    };
};

