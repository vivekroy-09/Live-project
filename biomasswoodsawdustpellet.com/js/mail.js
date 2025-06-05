$(function($) {

	$("#contact-form form").on('submit', function(event) {
		var $form = $(this);	
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				//alert(data);
				let result = data.includes("Thank you for reaching us");
				if(result) {
					$('#contactsuccessmsg').html(data);
					$('#contactsuccessmsg').addClass('alert alert-success');
				} else {
					$('#contactsuccessmsg').html('Thank you for reaching us');
					$('#contactsuccessmsg').addClass('alert alert-success');
				}
				
				$("#contactsuccessmsg").show();
				setTimeout(function() { $("#contactsuccessmsg").hide(); }, 500000);
				$('#contact-form form')[0].reset();	
			}
		});
		event.preventDefault();	
	});
	
	$("#model-form form").on('submit', function(event) {
		var $form = $(this);	
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				//alert(data);
				let result = data.includes("Thank you for reaching us");
				if(result) {
					$('#modelsuccessmsg').html(data);
					$('#modelsuccessmsg').addClass('alert alert-success');
				} else {
					$('#modelsuccessmsg').html('Thank you for reaching us');
					$('#modelsuccessmsg').addClass('alert alert-success');
				}
				
				$("#modelsuccessmsg").show();
				setTimeout(function() { $("#modelsuccessmsg").hide(); }, 500000);
				$('#model-form form')[0].reset();	
			}
		});
		event.preventDefault();	
	});

	$("#homepopupenquiry-form form").on('submit', function(event) {
		var $form = $(this);	
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				let result = data.includes("Thank you for reaching us");
				if(result) {
					$('#homepopupenquirysuccessmsg').html(data);
					$('#homepopupenquirysuccessmsg').addClass('alert alert-success');
				} else {
					$('#homepopupenquirysuccessmsg').html('Thank you for reaching us');
					$('#homepopupenquirysuccessmsg').addClass('alert alert-success');
				}				
				$("#homepopupenquirysuccessmsg").show();
				setTimeout(function() { $("#homepopupenquirysuccessmsg").hide(); }, 5000);
				$('#homepopupenquiry-form form')[0].reset();	
			}
		});
		event.preventDefault();	
	});

	$("#innerenquiry-form form").on('submit', function(event) {
		var $form = $(this);	
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				let result = data.includes("Thank you for reaching us");
				if(result) {
					$('#innersuccessmsg').html(data);
					$('#innersuccessmsg').addClass('alert alert-success');
				} else {
					$('#innersuccessmsg').html('Thank you for reaching us');
					$('#innersuccessmsg').addClass('alert alert-success');
				}
				$("#innersuccessmsg").show();
				setTimeout(function() { $("#innersuccessmsg").hide(); }, 5000);
				$('#innerenquiry-form form')[0].reset();	
			}
		});
		event.preventDefault();	
	});

	$("#homeenquiry-form form").on('submit', function(event) {
		var $form = $(this);	
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				let result = data.includes("Thank you for reaching us");
				if(result) {
					$('#homesuccessmsg').html(data);
					$('#homesuccessmsg').addClass('alert alert-success');
				} else {
					$('#homesuccessmsg').html('Thank you for reaching us');
					$('#homesuccessmsg').addClass('alert alert-success');
				}
				$("#homesuccessmsg").show();
				setTimeout(function() { $("#homesuccessmsg").hide(); }, 5000);
				$('#homeenquiry-form form')[0].reset();	
			}
		});
		event.preventDefault();	
	});

	$("#sliderhomeenquiry-form form").on('submit', function(event) {
		var $form = $(this);	
		$.ajax({
			type: $form.attr('method'),
			url: $form.attr('action'),
			data: $form.serialize(),
			success: function(data) {
				let result = data.includes("Thank you for reaching us");
				if(result) {
					$('#sliderhomeenquirysuccessmsg').html(data);
					$('#sliderhomeenquirysuccessmsg').addClass('alert alert-success');
				} else {
					$('#sliderhomeenquirysuccessmsg').html('Thank you for reaching us');
					$('#sliderhomeenquirysuccessmsg').addClass('alert alert-success');
				}
				$("#sliderhomeenquirysuccessmsg").show();
				setTimeout(function() { $("#sliderhomeenquirysuccessmsg").hide(); }, 5000);
				$('#sliderhomeenquiry-form form')[0].reset();	
			}
		});
		event.preventDefault();	
	});

}($));
$(document).on({
    ajaxStart: function(){
        $("body").addClass("loading"); 
    },
    ajaxStop: function(){ 
        $("body").removeClass("loading"); 
    }    
});

Explain