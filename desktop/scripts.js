document.getElementById("index").onclick = changeReferenceURL;
document.getElementById("about").onclick = changeReferenceURL;
document.getElementById("gallery").onclick = changeReferenceURL;
document.getElementById("contact").onclick = changeReferenceURL;
document.getElementById("blog").onclick = changeReferenceURL;
document.getElementById("abc").onclick = changeReferenceURL;


function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
    	var cookie = cookies[i];
    	var eqPos = cookie.indexOf("=");
    	var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    	document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function changeReferenceURL(elementId) {
  setCookie();
  this.href=this.href + "?count=" + getCookie('count') + "&actionTime=" + (new Date).getTime();
  return true;
}

function changeReferenceFormActionURL(elementId) {

  setCookie();
  this.newsletter.action = this.newsletter.action + "?count=" + getCookie('count') + "&actionTime=" + (new Date).getTime();
  return true;
} 

function setCookie() {
    var previousCount = getCookie("count");
    if (previousCount == "" || previousCount == 'NaN') {
         previousCount = 0;
    }
    var actualCount = parseInt(previousCount) + 1;
    document.cookie = "count=" + actualCount;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
