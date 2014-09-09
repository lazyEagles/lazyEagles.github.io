
function setPosition() {
  var width = window.innerWidth || 
              document.documentElement.clientWidth ||
              document.body.clientWidth;

  var height = window.innerHeight || 
               document.documentElement.clientHeight ||
               document.body.clientHeight;

  var clockcol_width = Math.ceil(width / 10 * 8);

  var img_width = Math.floor(clockcol_width / 10);
  var img_height = Math.floor(img_width*4/3);

  var lazyE_width = Math.floor(img_height);
  var lazyE_height = Math.floor(lazyE_width / 4);

  function setImgSize(id, w, h) {
    document.getElementById(id).width = w;
    document.getElementById(id).height = h;
  }
  setImgSize("hour_10", img_width, img_height);
  setImgSize("hour_1", img_width, img_height);
  setImgSize("colon_1", img_width, img_height);
  setImgSize("min_10", img_width, img_height);
  setImgSize("min_1", img_width, img_height);
  setImgSize("colon_2", img_width, img_height);
  setImgSize("sec_10", img_width, img_height);
  setImgSize("sec_1", img_width, img_height);

  setImgSize("lazyE", lazyE_width, lazyE_height);

  document.getElementById("clockcol").style.width = clockcol_width +"px";
  document.getElementById("clockcol").style.position = "fixed";
  document.getElementById("clockcol").style.right = clockcol_width / 8 +"px";
  document.getElementById("clockcol").style.top = Math.floor(height/2.5 - img_height/2) +"px";

  document.getElementById("lazyEcol").style.width = Math.ceil(lazyE_width * 1.2)+"px";
  document.getElementById("lazyEcol").style.position = "fixed";
  document.getElementById("lazyEcol").style.right = clockcol_width / 8 +"px";
  document.getElementById("lazyEcol").style.top = Math.floor(height/2.5 + img_height) +"px";
}

window.addEventListener("load", function(){setPosition();}, false);
window.addEventListener("resize", function(){setPosition();}, false);
