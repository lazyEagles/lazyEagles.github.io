
function getPic(num) {
  if (num == 0) { return "zero.png"; }
  if (num == 1) { return "one.png"; }
  if (num == 2) { return "two.png"; }
  if (num == 3) { return "three.png"; }
  if (num == 4) { return "four.png"; }
  if (num == 5) { return "five.png"; }
  if (num == 6) { return "six.png"; }
  if (num == 7) { return "seven.png"; }
  if (num == 8) { return "eight.png"; }
  if (num == 9) { return "nine.png"; }
}

function getTime() {
  var myTime = new Date();
  var myHour = myTime.getHours();
  var myMin = myTime.getMinutes();
  var mySec = myTime.getSeconds();
  var myHour10 = Math.floor(myHour / 10);
  var myHour1 = myHour % 10;
  var myMin10 = Math.floor(myMin / 10);
  var myMin1 = myMin % 10;
  var mySec10 = Math.floor(mySec / 10);
  var mySec1 = mySec % 10;
//  var displayTime =  
//    myHour10+""+myHour1+":"+myMin10+""+myMin1+":"+mySec10+""+mySec1;
//  document.getElementById("display_time").innerHTML = displayTime;
  var myDir = "pic/";
  document.getElementById("hour_10").src = myDir + getPic(myHour10);
  document.getElementById("hour_1").src = myDir + getPic(myHour1);
  document.getElementById("min_10").src = myDir + getPic(myMin10);
  document.getElementById("min_1").src = myDir + getPic(myMin1);
  document.getElementById("sec_10").src = myDir + getPic(mySec10);
  document.getElementById("sec_1").src = myDir + getPic(mySec1);
}

setInterval(function () { getTime(); }, 1000);
