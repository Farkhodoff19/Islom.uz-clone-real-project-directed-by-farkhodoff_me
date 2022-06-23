function sendComment(p) {
    var text = document.getElementById("textcomment").value;
    var author = document.getElementById("authorcomment").value;
    
    if (grecaptcha.getResponse() == false) {
        $("#error_captcha").html("<div class=\"alert alert-danger\" role=\"alert\"><b>Хатолик. </b> reCAPTCHAни босинг.</div>"); 
    } else {        
    if(text.length > 0 && author.length > 0) {
            $.ajax({
                url: "/addcomment",
                method: "get",
                data: {
                    id: p,
                    text: text,
                    author: author,
                    captcha: grecaptcha.getResponse()
                },
                dataType: "Text",
                success: function (t) {                               
                    $("#form_comment").html(t);                                                            
                }
            });
            $.ajax({
                url: "/addcommenttg",
                method: "get",
                data: {
                    id: p,
                    text: text,
                    author: author
                },
                dataType: "Text"
            });
        }
    }
}