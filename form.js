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
