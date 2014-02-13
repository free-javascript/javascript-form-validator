var validdata = {
	Formname : "mailsend",
	Formid :"#mailsend",
	validator: "",
	maxlen : 15,
	master : "",
	minlen : 10,
	minchar : 4
};
var valid =   (function (iv,dv){
	 var private_valid = function() {
		$(validdata.Formid + ' .valid').each(function(index, element) {//calling validation for every field
			 var dvalue = $(this).attr('value');
			 var ivalue = $(this).val();
				 if($(this).hasClass('mail')){//calling mail validation
					validator = valid.mail(ivalue);
				 }
				 else if($(this).hasClass('phone')){
					 validator = valid.phnnum(ivalue.length);
				 }
				 else{
					validator = valid.check(ivalue,dvalue,ivalue.length);
					return validator;
				 }
			 if(validator === false || validator == false){
				  this.focus();
				 if ($(this).val()==dvalue)
					this.val="";
				  return validator;
			 }
		  });
		  if(validator === false || validator == false){
			  return false;
		  }
		  else{
			  return true;
		  }
	}
	return {
		validatin: function(){
			return private_valid();
		},
		check: function(iv,dv,le){//check non empty field
			if(iv == dv || iv ==""){
				alert('Please Fill ' + dv);
				return false;
			}
			else{
				if(le < validdata.minchar){
				alert("Length to sort for "+dv);
				return  false;
				}
				else{
					return true;	
				}
			}
		},
		blurs: function(bf,df){//check and empty
			if(bf == df || bf ==""){
				return false;
			}
			else{
				return true;
			}
		},
		mail: function(mval){//check if mail id
			var atpos=mval.indexOf("@");
			var dotpos=mval.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mval.length)
			  {
				  alert("Not a valid e-mail address");
				  return false;
			  }
			 else{
			 	 return true;
			 }
		},
		phnnum: function(len){
			if (len < validdata.minlen || len > validdata.maxlen) {
				alert('Please inser proper length phone number');
				return false ;
			}
			 else{
				return true;
			 }
		},
		numonly: function(num){//allow numeric key only
			if(num!=8 && num!=13){
				if ( (num < 48 || num > 57)) {
				 	return false;
				}
				else{
				 	return true;
				}
			}
		},
	}
}());
