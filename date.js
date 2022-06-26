//This is a function expression declaring a function to get the date of the week
exports.getDate = function(){
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", options);
}

//A Function expression to get only the day of the week
exports.getDay = function(){
    var today = new Date();
    var options = {
        weekday: "long"
    }
    return today.toLocaleDateString("en-US", options);
}