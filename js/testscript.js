
function startTimerTest() {  
    $(".test_button_active").hide();
    setInterval(function () {
        var my_timertest = document.getElementById("my_timertest");
        var time = my_timertest.innerHTML;
        var arr = time.split(":");  

        var m = arr[0];
        var s = arr[1];
        if(m == 7) {
            $.ajax({

                url: "/testfile",
                method: "get",
                data: {
                    testsavol: 0,
                    testnumber: 0,
                    testjavob: 0
                },
                dataType: "Text",
                success: function (e) {
                    if (e != '') {
                        $("#my_timertest").fadeIn(500);
                        $("#my_timertest").text('6:59');
                        
                    }
                    $("#testblock").html(e)
        
                }
            });
        }
        else if (s == 0) {
            if (m == 0) {
                alert("Сиз учун белгиланган вақт тугади!");
                $("#my_timertest").text('59:00');
                $("#my_timertest").fadeOut(300);
                var n = document.getElementById("number").value,
                    s = 'outtime',
                    j = 'outtime'
                $.ajax({

                    url: "/testfile",
                    method: "get",
                    data: {
                        testsavol: s,
                        testnumber: n,
                        testjavob: j
                    },
                    dataType: "Text",
                    success: function (e) {
                        $("#testblock").html(e)
                    }
                })
                return;
            }
            m--;
            if (m < 10) m = "0" + m;
            s = 59;
        }
        else s--;
        if (s < 10) s = "0" + s;
        document.getElementById("my_timertest").innerHTML = m + ":" + s;
    }, 1000);
}

function answerTest() {
    var s = document.getElementById("savol").value,
        n = document.getElementById("number").value,
        j = document.querySelector('input[name="javob"]:checked').value;

    $.ajax({

        url: "/testfile",
        method: "get",
        data: {
            testsavol: s,
            testnumber: n,
            testjavob: j
        },
        dataType: "Text",
        success: function (e) {
            if ("<br/>" == e.substr(0, 5)) {
                $("#my_timertest").text('59:00');
                $("#my_timertest").fadeOut(300);
            }
            $("#testblock").html(e)

        }
    })




}
function answerTestNo() {
    var s = document.getElementById("savol").value,
        n = document.getElementById("number").value;
    j = document.querySelector('input[name="javob"]:checked').value;

    $.ajax({

        url: "/testfile",
        method: "get",
        data: {
            testsavol: s,
            testnumber: n,
            testjavob: 0
        },
        dataType: "Text",
        success: function (e) {
            if ("<br/>" == e.substr(0, 5)) {
                $("#my_timertest").text('59:00');
                $("#my_timertest").fadeOut(300);
            }
            $("#testblock").html(e)

        }
    })




}
