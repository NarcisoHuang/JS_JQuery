function setEven(){
    $("li").css("color", "black");
    $("span").css("font-weight", "");
    var $evenItems = $("li:even");
    $evenItems.css("color", "red");
    $("span:contains(Even)").css("font-weight", "bold");
    $(".label").html("Even");
}

function setOdd(){
    $("li").css("color", "black");
    $("span").css("font-weight", "");
    var $oddItems = $("li:odd");
    $oddItems.css("color", "red");
    $("span:contains(Odd)").css("font-weight", "bold");
    $(".label").html("Odd");
}

function setFirst4(){
    $("li").css("color", "black");
    $("span").css("font-weight", "");
    var $first4 = $("li:lt(4)");
    $first4.css("color", "red");
    $("span:contains('First 4')").css("font-weight", "bold");
    $(".label").html("First 4");
}