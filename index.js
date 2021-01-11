$(document).ready(function(){

$("#ex").focus(function(){
	$(this).attr("placeholder", "MM / YY")
});
$("#ex").focusout(function(){
	$(this).attr("placeholder", "Expiration date")
});

$('#cn').mask('0000 0000 0000 0000');
$('#ex').mask('00 / 00');
$('#cvv').mask('0000');


// PAYMENT VALIDATION

var cnValidation = false;
$("#cn").blur(function(){
	var result = $('#cn').validateCreditCard();
	if (result.luhn_valid == true) {
		$("#cn").css({"border-color":"#2ecc71"});
		cnValidation = true;
	}else{
		$("#cn").css({"border-color":"#e74c3c"});
		cnValidation = false;
	}
});

var exValidation = false;
$("#ex").blur(function(){
	var mm = $('#ex').val().substring(0, 2);
	var yy = $('#ex').val().substring(5, 7);
	if (mm > 0 && mm < 13 && yy  >= moment().format('YY')) {
		$("#ex").css({"border-color":"#2ecc71"});
		exValidation = true;
	}else{
		$("#ex").css({"border-color":"#e74c3c"});
		exValidation = false;
	}
});

var cvvValidation = false;
$("#cvv").blur(function(){
	var cvv = $('#cvv').val().length;
	if (cvv >= 3) {
		$("#cvv").css({"border-color":"#2ecc71"});
		cvvValidation = true;
	}else{
		$("#cvv").css({"border-color":"#e74c3c"});
		cvvValidation = false;
	}
});

$("#payment-submit").click(function(e){
	if (cnValidation == true && exValidation == true && cvvValidation == true) {
	}else{
		e.preventDefault();
		$("#payment-error").fadeIn(500);
	}
});

$("#payment-error-close").click(function(){
	$("#payment-error").fadeOut(300);
})

});