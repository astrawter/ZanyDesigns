$(document).ready(function() {
    var number = "";
    var newnumber = "";
    var operator = "";
    var percent = "";
    var answer = $("#answer");
    var testNumLength = function(number) {
        if (number.length > 20) {
            answer.text(number.substr(number.length - 20, 20));
            if (number.length > 30) {
                number = "";
                answer.text("Error");
            }
        }
    };
    //ANSWER BOX
    answer.text("0");

    //REGULAR BUTTONS
    $(".numbers").click(function() {
        number += $(this).text();
        answer.text(number);
        testNumLength(number);
    });

    $(".operators").click(function() {
        operator = $(this).text();
        newnumber = number;
        number = "";
        answer.text(newnumber);
    });

    //CLEARS
    $("#clear,#clearall").click(function() {
        number = "";
        answer.text("0");
        if ($(this).attr("id") === "clearall") {
            newnumber = "";
        }
    });

    //EQUAL Button
    $(".equals").click(function() {
        if (operator === "+") {
            number = (parseInt(number, 10) + parseInt(newnumber, 10)).toString(10);
        } else if (operator === "-") {
            number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);
        } else if (operator === "÷") {
            number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);
        } else if (operator === "x") {
            number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);
        } else if (operator === "%") {
            /*if(number === ""){
             percent = (parseInt(number, 10) / 100);
             number = percent;
             }else if{ */
            percent = (parseInt(number, 10) / 100);
            number = (parseInt(newnumber, 10)-(parseInt(newnumber, 10) * percent));
        }
        answer.text(number);
        testNumLength(number);
    });
});
