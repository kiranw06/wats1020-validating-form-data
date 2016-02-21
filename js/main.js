/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).ready(function(){
  $('#order-form').validate({
    //  This method enables letter only vaildation
    submitHandler: function(form) {
        // If form is valid, submit it!
        $.validator.addMethod( "lettersonly", function( value, element ) {
         return this.optional( element ) || /^[a-z]+$/i.test( value );
        }, "Letters only please" );
        form.submit();
    },  
     rules: {
       "your-name": {
         minlength: 2,
         maxlength: 128,
         lettersonly: true
       },
       "your-zip": {
         required: true,
         minlength: 5,
         digits: true
       },
       "your-state": {
         required: true,
         lettersonly: true,
         maxlength: 2
       },
       "card-holder-name": {
         required: true,
         minlength: 2,
         maxlength: 128,
         lettersonly: true
       },
       "card-number": {
         required: true,
         creditcard: true
       },
       "expiry-month": {
        required: true,
        range: [01,12]
       },
       "expiry-year": {
        required: true, 
        range: [15, 23]
       },
       "cvv": {
         required: true,
         maxlength: 3,
         minlength: 3,
         digits: true
       }
     },
    //  Custom messages that are required for specific questions
    messages: {
      "your-name": {
         required: "Please don't forget to tell us your name."
       },
        "card-holder-name": {
         required: "Please don't forget to tell us the name on your card."
       },
      "your-state": {
         lettersonly: "Oops! Please enter a valid state abbreviation."
       },
       "expiry-month": {
        range: "Please select an expiration month"
       }
    }
  });
  // This method delivers custom error messages more efficently 
      $.extend(jQuery.validator.messages, {
        required: "Oops! Looks like you've forgotten a required feild.",
        email: "Hmm... This email adress is invalid, please enter a vaild email adress.",
        digits: "Digits only please.",
        lettersonly: "Letters only please.",
        creditcard: "Hmm... This credit card number is invalid, lets try that again.",
        maxlength: jQuery.validator.format("This entry is a bit too long, please use {0} characters or less."),
        minlength: jQuery.validator.format("This entry is a bit too short, please use at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter an expiration year")
      });  
});
