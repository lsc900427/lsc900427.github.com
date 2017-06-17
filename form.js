var formsc = (function() {

    var METHOD = {
        form : document.querySelector('.form_wrap'),
        email : document.querySelector('.form_mail'),
        id : document.querySelector('.form_id'),
        subject : document.querySelector('.form_subject'),
        message : document.querySelector('.form_message'),
        re_mail : /^([\w\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/,
        a : 2
    }

    return {
        checkemail: function () {

            if (METHOD.re_mail.test(METHOD.email.value) === !true) {
                alert('유효한 이메일 주소를 입력해주세요.');
                return METHOD.email.focus();
            } else if (METHOD.id.value === "") {
                alert('이름을 입력해주세요.');
                return METHOD.id.focus();
            } else if (METHOD.subject.value === "") {
                alert('제목을 입력해주세요.');
                return METHOD.subject.focus();
            } else if (METHOD.message.value === "") {
                alert('메세지를 입력해주세요')
                return METHOD.message.focus();
            }

            /*
            METHOD.form.submit();
            a = 1
            if (a = 1) {
            alert("전송이 완료되었습니다.")
            location.href = "http://www.naver.com"
            */

            METHOD.form.submit();
            alert("전송이 완료되었습니다.");
            //location.href = "https://makenjoy.net"
        }
    }
})();

<form id="foo" class="ui form container form_wrap" action="./pdo.php" method="post" enctype="multipart/form-data">
    <div class="field">
    <input class="form_id" type="text" placeholder="Name*" name="name" value="">
    </div>
    <div class="field">
    <input class="form_mail" placeholder="Email*" name="email" value="">
    </div>
    <div class="field">
    <input class="form_subject" type="text" placeholder="Subject*" name="subject" value="">
    </div>
    <div class="field">
    <textarea class="form_message" placeholder="Message*" name="message" value=""></textarea>
    </div>
    <input type="submit" value="SEND" class="ui submit button sb" />
    <!--
    <input type="button" value="SEND" class="ui submit button sb" onclick="formsc.checkemail()" /> -->
    </form>
    (function() {


/* 170529_1731_Shawn
AJAX Using jQuery + Javascript
*/


var request;
var formsc = $("#foo").submit(function(event){


    event.preventDefault();


    if (request) {
        request.abort();
    }
    var $form = $(this);
    var $inputs = $form.find("input, select, button, textarea");
    var serializedData = $form.serialize();
    var METHOD = {
        form : document.querySelector('.form_wrap'),
        email : document.querySelector('.form_mail'),
        id : document.querySelector('.form_id'),
        subject : document.querySelector('.form_subject'),
        message : document.querySelector('.form_message'),
        re_mail : /^([\w\.-]+)@([a-z\d\.-]+)\.([a-z\.]{2,6})$/,
        a : 2,
        reset : function() {
            METHOD.company.value = '';
            METHOD.email.value = '';
            METHOD.cellphone.value = '';
            METHOD.budget.value = '';
        }
    }





    if (METHOD.re_mail.test(METHOD.email.value) === !true) {
        alert('ìœ íš¨í•œ ì´ë©”ì¼ ì£¼ì†Œë¥¼ ìž…ë ¥í•´ì£¼ì„¸ìš”.');
        return METHOD.email.focus();
    } else if (METHOD.id.value === "") {
        alert('ì´ë¦„ì„ ìž…ë ¥í•´ì£¼ì„¸ìš”.');
        return METHOD.id.focus();
    } else if (METHOD.subject.value === "") {
        alert('ì œëª©ì„ ìž…ë ¥í•´ì£¼ì„¸ìš”.');
        return METHOD.subject.focus();
    } else if (METHOD.message.value === "") {
        alert('ë©”ì„¸ì§€ë¥¼ ìž…ë ¥í•´ì£¼ì„¸ìš”')
        return METHOD.message.focus();
    }

    request = $.ajax({
        url: "./pdo.php",
        type: "post",
        data: serializedData
    });

    request.done(function (response, textStatus, jqXHR) {
        $('#myModal').modal('toggle');
        METHOD.reset();
        alert('ì „ì†¡ì„ ì™„ë£Œí•˜ì˜€ìŠµë‹ˆë‹¤.');
    });


    request.fail(function (jqXHR, textStatus, errorThrown) {
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
    });

    request.always(function () {
        $inputs.prop("disabled", false);
    });

});


$(document).ready(function() {
    /* 170529_1704_Hoon
    content animate jquery use
    */
    $('.solution-offset').addClass('opacity_0');
    $('.hosting-offset').addClass('opacity_0');
    $('.integration-offset').addClass('opacity_0');
    $('.service-offset').addClass('opacity_0');
    $('.team-offset').addClass('opacity_0');
    $('.about-offset').addClass('opacity_0');
    $('.contact-offset').addClass('opacity_0');
    $('.about-offset-left-1').addClass('opacity_0');
    $('.about-offset-right-1').addClass('opacity_0');
    $('.about-offset-left-2').addClass('opacity_0');
    $('.about-offset-right-2').addClass('opacity_0');
});

/* 170529_1704_Hoon
ë©”ë‰´ë°”ì´ë™ scrollevent jquery use
*/
$('.j-menu-itema').click(function(){
    var aa = $('.contents__second').offset().top
    $(window).width() >= 1024 ? $('html,body').stop().animate({scrollTop: $(this).offset().top = aa - 60}, '100') : $('html,body').stop().animate({scrollTop: $(this).offset().top = aa - 273}, '100');
});
$('.j-menu-itemb').click(function(){
    var bb = $('.contents__third').offset().top
    $(window).width() >= 1024 ? $('html,body').stop().animate({scrollTop: $(this).offset().top = bb - 60}, '100') : $('html,body').stop().animate({scrollTop: $(this).offset().top = bb - 273}, '100');
});
$('.j-menu-itemc').click(function(){
    var cc = $('.contents__fourth').offset().top
    $(window).width() >= 1024 ? $('html,body').stop().animate({scrollTop: $(this).offset().top = cc - 60}, '100') : $('html,body').stop().animate({scrollTop: $(this).offset().top = cc - 273}, '100');
});
$('.j-menu-itemd').click(function(){
    var dd = $('.contents__fifth').offset().top
    $(window).width() >= 1024 ? $('html,body').stop().animate({scrollTop: $(this).offset().top = dd - 60}, '100') : $('html,body').stop().animate({scrollTop: $(this).offset().top = dd - 273}, '100');
});






window.onload = function() {

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('menu-bar').ClassList.add('a');
    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        document.getElementById('menu-bar').ClassList.remove('a');
    }

    /* 170529_1704_Hoon
    scrollì‹œ animateíš¨ê³¼
    */
    var service = $('.service-offset').offset().top;
    if( $(document).scrollTop() > (service - 900) ) {
        $('.service-offset').addClass('opacity_1 animated zoomInDown');
    }
    var solution = $('.solution-offset').offset().top;
    if( $(document).scrollTop() > (solution - 700) ) {
        $('.solution-offset').addClass('opacity_1 animated fadeInLeft');
    }
    var hosting = $('.hosting-offset').offset().top;
    if( $(document).scrollTop() > (hosting - 700) ) {
        $('.hosting-offset').addClass('opacity_1 animated fadeInUp');
    }
    var integration = $('.integration-offset').offset().top;
    if( $(document).scrollTop() > (integration - 700) ) {
        $('.integration-offset').addClass('opacity_1 animated fadeInRight');
    }


    var team = $('.team-offset').offset().top;
    if( $(document).scrollTop() > (team - 800) ) {
        $('.team-offset').addClass('opacity_1 animated zoomInDown');
    }




    var about = $('.about-offset').offset().top;
    if( $(document).scrollTop() > (about - 900) ) {
        $('.about-offset').addClass('opacity_1 animated zoomInDown');
    }
    var about1 = $('.about-offset-left-1').offset().top;
    if( $(document).scrollTop() > (about1 - 700) ) {
        $('.about-offset-left-1').addClass('opacity_1 animated fadeInLeft');
    }
    var about2 = $('.about-offset-right-1').offset().top;
    if( $(document).scrollTop() > (about2 - 700) ) {
        $('.about-offset-right-1').addClass('opacity_1 animated fadeInRight');
    }
    var about3 = $('.about-offset-left-2').offset().top;
    if( $(document).scrollTop() > (about3 - 700) ) {
        $('.about-offset-left-2').addClass('opacity_1 animated fadeInLeft');
    }
    var about4 = $('.about-offset-right-2').offset().top;
    if( $(document).scrollTop() > (about4 - 700) ) {
        $('.about-offset-right-2').addClass('opacity_1 animated fadeInRight');
    }




    var contact = $('.contact-offset').offset().top;
    if( $(document).scrollTop() > (contact - 900) ) {
        $('.contact-offset').addClass('opacity_1 animated zoomInDown');
    }
}




window.onscroll = function() {
    /* 170529_1704_Hoon
    ìµœìƒë‹¨ ë©”ë‰´ë°” ìŠ¤í¬ë¡¤ ì´ë²¤íŠ¸
    */
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('menu-bar').ClassList.add('a');

    } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
        document.getElementById('menu-bar').ClassList.remove('a');
    }




    /* 170529_1704_Hoon
    ë©”ë‰´ë°”ì´ë™ scrollevent jquery use
    */
    var service = $('.service-offset').offset().top;
    if( $(document).scrollTop() > (service - 950) ) {
        $('.service-offset').addClass('opacity_1 animated zoomInDown');
    }
    var solution = $('.solution-offset').offset().top;
    if( $(document).scrollTop() > (solution - 700) ) {
        $('.solution-offset').addClass('opacity_1 animated zoomIn');
    }
    var hosting = $('.hosting-offset').offset().top;
    if( $(document).scrollTop() > (hosting - 700) ) {
        $('.hosting-offset').addClass('opacity_1 animated zoomIn');
    }
    var integration = $('.integration-offset').offset().top;
    if( $(document).scrollTop() > (integration - 700) ) {
        $('.integration-offset').addClass('opacity_1 animated zoomIn');
    }


    var team = $('.team-offset').offset().top;
    if( $(document).scrollTop() > (team - 950) ) {
        $('.team-offset').addClass('opacity_1 animated zoomInDown');
    }




    var about = $('.about-offset').offset().top;
    if( $(document).scrollTop() > (about - 950) ) {
        $('.about-offset').addClass('opacity_1 animated zoomInDown');
    }
    var about1 = $('.about-offset-left-1').offset().top;
    if( $(document).scrollTop() > (about1 - 700) ) {
        $('.about-offset-left-1').addClass('opacity_1 animated zoomIn');
    }
    var about2 = $('.about-offset-right-1').offset().top;
    if( $(document).scrollTop() > (about2 - 700) ) {
        $('.about-offset-right-1').addClass('opacity_1 animated zoomIn');
    }
    var about3 = $('.about-offset-left-2').offset().top;
    if( $(document).scrollTop() > (about3 - 700) ) {
        $('.about-offset-left-2').addClass('opacity_1 animated zoomIn');
    }
    var about4 = $('.about-offset-right-2').offset().top;
    if( $(document).scrollTop() > (about4 - 700) ) {
        $('.about-offset-right-2').addClass('opacity_1 animated zoomIn');
    }




    var contact = $('.contact-offset').offset().top;
    if( $(document).scrollTop() > (contact - 950) ) {
        $('.contact-offset').addClass('opacity_1 animated zoomInDown');
    }
};