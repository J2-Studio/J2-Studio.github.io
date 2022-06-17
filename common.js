var checkCookie = function () {
	if (localStorage && !localStorage.getItem("checkShowCookieNotification")) {
    	$('.cookie-policy-notification')[0].style.visibility = 'visible';
    	$(".accept-cookie-btn").on("click",function(){
        	$('.cookie-policy-notification')[0].style.visibility = 'hidden';
        	localStorage.setItem("checkShowCookieNotification", "YES");
    	})
  	} 
};


$(document).ready(function () {
	checkCookie();
});