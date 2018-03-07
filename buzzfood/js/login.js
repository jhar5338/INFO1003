$(document).ready(function() {
	$("form#login").submit(function(e) {
		e.preventDefault();

		var dataPass = $("form#login").serialize();
		console.log(dataPass);
		$.ajax({
			url : "php/login.php",
			type : "GET",
			data : dataPass,
			success : function(data) {
				//data  = JSON.stringify(data);
				//data = $.trim(data);
				console.log(data);
				/* NOTE: the data setting is different to the data parameter of the success setting. 
				The data setting is the data to be passed to the server database.
				The data parameter is the data that is returned from the server.
				Look at the console to observe this difference
				*/
				
				
				/* NOTE: when testing for the data returned, be sure to include a \n escape character for the end of line */

				/* The output of the script is checked, and a different action (in this case an alert box) is taken depending on the result.*/
				if (data === "success\n") {
					var logout = document.createElement("button");
					var text = document.createTextNode("Logout");
					logout.appendChild(text);
					var login = document.getElementById("bigbutton");
					navbar-fixed.replaceChild(logout,login);
					
				}
				else {
					alert("Invalid username or password");
				}
			}
		});
	});
});
