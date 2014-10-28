/*github url:https://github.com/free-javascript/javascript-form-validator
creator: Nirmal Bhagwani
*/

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
		 $(validdata.Formid + ' div.invalid-form-field').remove();
		 $(validdata.Formid + ' input').removeClass('invalid-field');
		$(validdata.Formid + ' .valid[type="text"]').each(function(index, element) {//calling validation for every field
			 var dvalue = $(this).attr('value');
			 var ivalue = $(this).val();

				 if($(this).hasClass('mail')){//calling mail validation
					validator = valid.mail(ivalue,this);
				 }
				 else if($(this).hasClass('phone')){
					 validator = valid.phnnum(ivalue.length,this);
					 if(validator === false || validator == false){
					 }
				 }
				 else{
					validator = valid.check(ivalue,dvalue,ivalue.length,this);
					//alert(validator == false);
					if(validator === false || validator == false){
						 this.focus();
						 if ($(this).val()==dvalue){
							 $(this).val("");
						 	 return validator;
						 }
						return validator;
					 }
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
		init:function(e){
			$(validdata.Formid+ ' input[type="text"]').on('focus',function(e){
				var a = $(this).attr('value');
				var b = $(this).val();
				if(a == b || a ==""){
					$(this).val("");
				}
			});
			$(validdata.Formid+ " input").on('blur',function(e){
				var a = $(this).attr('value');
				var b = $(this).val();
				if(a == b || b ==""){
					$(this).val(a);
				}
			});
			$(validdata.Formid).on('submit',function(e){
				valid.validatin();
				return false;
			});
			$('input[name="pageURL"]').val(document.URL);
			$('input.numonly').keypress(function(e) {
                return valid.numonly(e.keyCode);
            });
		},
		check: function(iv,dv,le,el){//check non empty field
			if(iv == dv || iv ==""){
				$(el).addClass('invalid-field').after('<div class="invalid-form-field">Please Fill '+dv+'</div>');
//				alert('Please Fill ' + dv);
				$(this).val("");
				return false;
			}
			else{
				if(le < validdata.minchar){
				$(el).addClass('invalid-field').after('<div class="invalid-form-field">Length to sort for '+dv+'</div>');
				//alert("Length to sort for "+dv);
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
		mail: function(mval,el){//check if mail id
			var atpos=mval.indexOf("@");
			var dotpos=mval.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mval.length)
			  {
				  $(el).addClass('invalid-field').after('<div class="invalid-form-field">Invalid Email Address</div>');
				 // alert("Not a valid e-mail address");
				  return false;
			  }
			 else{
			 	 return true;
			 }
		},
		phnnum: function(len,el){
			if (len < validdata.minlen || len > validdata.maxlen) {
				$(el).addClass('invalid-field').after('<div class="invalid-form-field">Phone Number too Sort.</div>');
			//	alert('Please inser proper length phone number');
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
