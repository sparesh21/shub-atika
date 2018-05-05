function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function isValidMobile(mobile)
{
	//var pattern = new RegExp('^[7-9][0-9]{9}$');
	
	if((jQuery.trim( mobile )).length==0 || mobile.length > 20)
	{ 
		return true;
	}
	else{
		var pattern = new RegExp('[^0-9-+ ]');
		return pattern.test(mobile);
	}
	//return pattern.test(mobile);	
}

function isOnlyText(name)
{
	var pattern = new RegExp('^[a-zA-Z \s]*$');
	return pattern.test(name);
}


function validateName(name)
{
	if($("#"+name).val()=='' || (jQuery.trim( $("#"+name).val() )).length==0){
		$("#"+name).val('');
		$("#"+name).attr("placeholder", "Please enter your Name");
		$("#"+name).addClass("error");
		return false;
	}
	else if(!isOnlyText($("#"+name).val())){
		$("#"+name).val('');
		$("#"+name).attr("placeholder", "Only text is allowed");
		$("#"+name).addClass("error");
		return false;
	}
	else{
		return true;
	}
}

function validateEmail(email)
{
	if(!isValidEmailAddress($("#"+email).val()))
	{
		$("#"+email).val('');
		$("#"+email).attr("placeholder", "Please enter your valid Email-ID");
		//valid_form = 'false';
		$("#"+email).addClass("error");
		return false;
	}else
	{
		return true;
	}
}

function validateMobile(mobile)
{
	if(isValidMobile($("#"+mobile).val()))
	{
		$("#"+mobile).val('');
		$("#"+mobile).attr("placeholder", "Enter valid Mobile No.");
		$("#"+mobile).addClass("error");
		return false;
	}else{
		return true;
	}
}

function validateCity(city)
{
	if($("#"+city).val()=='' || (jQuery.trim( $("#"+city).val() )).length==0){
		$("#"+city).val('');
		$("#"+city).attr("placeholder", "Please enter your city");
		$("#"+city).addClass("error");
		return false;
	}
	else if(!isOnlyText($("#"+city).val())){
		$("#"+city).val('');
		$("#"+city).attr("placeholder", "Only text is allowed");
		$("#"+city).addClass("error");
		return false;
	}
	else{
		return true;
	}
}

function validateCountry(country)
{
	if($('#'+country).val() == "")
	{ 
		$('#'+country).addClass("error"); 
		$('#'+country).append($('<option>', {
		    value: 'err',
		    text: 'Please Select Country'
		}));
		$('#'+country).val("err");
		return false;
	}
	else if($('#'+country).val() == "err" )
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validateProject(project)
{
	if($('#'+project).val() == "")
	{ 
		$('#'+project).addClass("error"); 
		$('#'+project).append($('<option>', {
		    value: 'err',
		    text: 'Please Select Project'
		}));
		$('#'+project).val("err");
		return false;
	}
	else if($('#'+project).val() == "err" )
	{
		return false;
	}
	else
	{
		return true;
	}
}

function validateMessage(message)
{
	if($("#"+message).val()==''|| (jQuery.trim( $("#"+message).val() )).length==0 ){
		$("#"+message).val('');
		$("#"+message).attr("placeholder", "Please enter Message");
		$("#"+message).addClass("error");
		return false;
	}
	else if($("#"+message).val().length > 200)
	{
		$("#"+message).val('');
		$("#"+message).attr("placeholder", "Max limit is 200 Characters");
		$("#"+message).addClass("error");
		return false;
	}
	else{
		return true;
	}
}


$(document).ready(function(){
	
	var valid_form = 'true';
	var submit_wait = 'false';
	
	$("#name").focusin(function(){
		$(this).attr("placeholder", "Full Name");
		$(this).removeClass("error");
	});
	
	$("#name").blur(function(){
		validateName('name');
	});
	
	$("#email").focusin(function(){
		$(this).attr("placeholder", "Email Id");
		$(this).removeClass("error");
	});
	
	$("#email").blur(function(){		
		validateEmail('email');
	});
	
	$("#mobile").focusin(function(){
		$(this).attr("placeholder", "Phone No.");
		$(this).removeClass("error");
	});
	
	$("#mobile").blur(function(){		
		validateMobile('mobile');
	});
		
	$("#city").focusin(function(){
		$(this).attr("placeholder", "City");
		$(this).removeClass("error");
	});
	
	$("#city").blur(function(){
		validateCity('city');
	});
	
	$("#country").blur(function(){
		validateCountry('country');
	});
	
	$("#country").focusin(function(){
		$(this).removeClass("error");
		$("#country option[value='err']").remove();
	});
	
	$("#country").change(function(){
		$("#country option[value='err']").remove();
		if($("#country  option:selected").text()==''){
			$("#country").val('');
		}
	});
	
	$("#country").click(function(){	$("#country option[value='err']").remove();	});
	
	$("#project").blur(function(){
		validateProject('project');
	});
	
	$("#project").focusin(function(){
		$(this).removeClass("error");
		$("#project option[value='err']").remove();
	});
	
	$("#project").change(function(){
		$("#project option[value='err']").remove();
		if($("#project  option:selected").text()==''){
			$("#project").val('');
		}
	});
	
	$("#project").click(function(){	$("#project option[value='err']").remove();	});
	
	$("#enquiry_submit").click(function(){
		
		//event.preventDefault();
		
		if(submit_wait == 'true')
		{
			event.preventDefault();
		}
		
		valid_form = 'true';
		
		if(!validateName('name'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateEmail('email'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateMobile('mobile'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateCity('city'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateCountry('country'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateProject('project'))
		{
			valid_form = 'false';
			event.preventDefault();
		}

				
		/*console.log('Name: '+ validateName($("#name").val()) );
		console.log('Email: '+ validateName($("#email").val()) );
		console.log('attending: '+ validateName($("#attending").val()) );
		console.log('persons: '+ validateName($("#persons").val()) );
		console.log('mobile: '+ validateName($("#mobile").val()) );
		
		console.log(valid_form );*/
		
		if(valid_form == 'true')
		{
			$("#enquiry_submit").attr('value', 'Please Wait');
			submit_wait = 'true';
			
			$.ajax({
					type: 'POST',  
				    url: 'submit.php', 
				    data: { 
				    		name: jQuery.trim($('#name').val()),
				    		email: jQuery.trim($('#email').val()),
				    		mobile: jQuery.trim($('#mobile').val()),
							city: jQuery.trim($('#city').val()),
				    		country: $('#country').val(),
				    		project: $('#project').val(),
							form_type: $('#form_type').val()
				          },
					success: function(data){
						var str = String(data).replace(/ /g,'');
						
						if(str == 'success')
						{
							$("#response").html("Thank you! We will get back to you soon!");
							$("#enquiry_form").trigger("reset");
							setTimeout(function(){ $("#response").html(""); }, 3000);
						}else{
							$("#response").html(data);
						}
						submit_wait = 'false';
					}	
			});
		}
		
		
	});
	
	//for bookings start
	
	$("#name1").focusin(function(){
		$(this).attr("placeholder", "Full Name");
		$(this).removeClass("error");
	});
	
	$("#name1").blur(function(){
		validateName('name1');
	});
	
	$("#email1").focusin(function(){
		$(this).attr("placeholder", "Email Id");
		$(this).removeClass("error");
	});
	
	$("#email1").blur(function(){		
		validateEmail('email1');
	});
	
	$("#mobile1").focusin(function(){
		$(this).attr("placeholder", "Phone No.");
		$(this).removeClass("error");
	});
	
	$("#mobile1").blur(function(){		
		validateMobile('mobile1');
	});
		
	$("#city1").focusin(function(){
		$(this).attr("placeholder", "City");
		$(this).removeClass("error");
	});
	
	$("#city1").blur(function(){
		validateCity('city1');
	});
		
	$("#country1").blur(function(){
		validateCountry('country1');
	});
	
	$("#country1").focusin(function(){
		$(this).removeClass("error");
		$("#country1 option[value='err']").remove();
	});
	
	$("#country1").change(function(){
		$("#country1 option[value='err']").remove();
		if($("#country1  option:selected").text()==''){
			$("#country1").val('');
		}
	});
	
	$("#country1").click(function(){	$("#country1 option[value='err']").remove();	});
	
	$("#project1").blur(function(){
		validateProject('project1');
	});
	
	$("#project1").focusin(function(){
		$(this).removeClass("error");
		$("#project1 option[value='err']").remove();
	});
	
	$("#project1").change(function(){
		$("#project1 option[value='err']").remove();
		if($("#project1  option:selected").text()==''){
			$("#project1").val('');
		}
	});
	
	$("#project1").click(function(){	$("#project1 option[value='err']").remove();	});
	
	$("#booking_submit").click(function(){
		
		//event.preventDefault();
		
		if(submit_wait == 'true')
		{
			event.preventDefault();
		}
		
		valid_form = 'true';
		
		if(!validateName('name1'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateEmail('email1'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateMobile('mobile1'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateCity('city1'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateCountry('country1'))
		{
			valid_form = 'false';
			event.preventDefault();
		}
		
		if(!validateProject('project1'))
		{
			valid_form = 'false';
			event.preventDefault();
		}

				
		/*console.log('Name: '+ validateName($("#name").val()) );
		console.log('Email: '+ validateName($("#email").val()) );
		console.log('attending: '+ validateName($("#attending").val()) );
		console.log('persons: '+ validateName($("#persons").val()) );
		console.log('mobile: '+ validateName($("#mobile").val()) );
		
		console.log(valid_form );*/
		
		if(valid_form == 'true')
		{
			$("#booking_submit").attr('value', 'Please Wait');
			submit_wait = 'true';
			
			$.ajax({
					type: 'POST',  
				    url: 'submit.php', 
				    data: { 
				    		name: jQuery.trim($('#name1').val()),
				    		email: jQuery.trim($('#email1').val()),
				    		mobile: jQuery.trim($('#mobile1').val()),
							city: jQuery.trim($('#city1').val()),
				    		country: $('#country1').val(),
				    		project: $('#project1').val(),
							form_type: $('#form_type1').val()
				          },
					success: function(data){
						var str = String(data).replace(/ /g,'');
						
						if(str == 'success')
						{
							$("#response1").html("Thank you! We will get back to you soon!");
							$("#booking_form").trigger("reset");
							setTimeout(function(){ $("#response1").html(""); }, 3000);
						}else{
							$("#response1").html(data);
						}
						submit_wait = 'false';
					}	
			});
		}
		
		
	});
	
	//for bookings end
	
	//for contact-us start
		
	$("#name2").focusin(function(){
		$(this).attr("placeholder", "Full Name");
		$(this).removeClass("error");
	});
	
	$("#name2").blur(function(){
		validateName('name2');
	});
	
	$("#email2").focusin(function(){
		$(this).attr("placeholder", "Email Id");
		$(this).removeClass("error");
	});
	
	$("#email2").blur(function(){		
		validateEmail('email2');
	});
	
	$("#message").focusin(function(){
		$(this).attr("placeholder", "Message");
		$(this).removeClass("error");
	});
	
	$("#message").blur(function(){
		validateMessage('message');
	});
	
		
	$("#contact_submit").click(function(){
		
		if(submit_wait == 'true')
		{
			event.preventDefault();
		}
		
		valid_form = 'true';
		
		if(!validateName('name2'))
		{
			valid_form = 'false';
			event.preventDefault('name2');
		}
		
		if(!validateEmail('email2'))
		{
			valid_form = 'false';
			event.preventDefault('email2');
		}
		
		if(!validateMessage('message'))
		{
			valid_form = 'false';
			event.preventDefault('message');
		}
		
		if(valid_form == 'true')
		{
			$("#contact_submit").attr('value', 'Please Wait');
			submit_wait = 'true';
			
			$.ajax({
					type: 'POST',  
				    url: 'submit.php', 
				    data: { 
				    		name: jQuery.trim($('#name2').val()),
				    		email: jQuery.trim($('#email2').val()),
				    		message: jQuery.trim($('#message').val()),
							form_type: $('#form_type2').val()
				          },
					success: function(data){
						var str = String(data).replace(/ /g,'');
						
						if(str == 'success')
						{
							$("#response2").html("Thank you! We will get back to you soon!");
							$("#contact_form").trigger("reset");
							setTimeout(function(){ $("#response2").html(""); }, 3000);
						}else{
							$("#response2").html(data);
						}
						submit_wait = 'false';
					}	
			});
		}
		
		
	});
	
	//for contact-us end
	
});