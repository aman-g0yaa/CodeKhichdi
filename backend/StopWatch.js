
//seconds counter
var ss = setInterval(countSeconds, 1*1000);
setTimeout(function() { clearInterval(ss)}, 2*1000);
console.clear();

var seconds = 1;
function countSeconds(){
    console.log(seconds);
    seconds++;
    // console.clear();
}