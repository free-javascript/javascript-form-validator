javascript-form-validator
=========================

javascript form validation.

FAQ:

How to use:

1) Either name the form name mailsend or id as mailsend

2)You can use below parameter for modification for advance user

var validdata = {
	Formname : "mailsend",//formname
	Formid :"#mailsend",//formid
	validator: "",
	maxlen : 15,//max len for number input field
	master : "",
	minlen : 10, //minmum length for number input field
	minchar : 4 // minimum char length for input field
};

3) put valid.init(); for validation initialization
4) What to do after validation or if I want to put some filter

   a)Add class "valid" in input field which field you want to validate.

   b)For validation mail field add class "mail"

   c)For restrictiting input only numeric field add Class "numonly"

Any suggesion of improvment is most welcome.
