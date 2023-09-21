"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	  
	//  Moved focus to the Pickup Date text box
 	$("#pickup_date").focus();
	
   	//An event handler for the form submission
  	$("#reservation_form").submit((event) => {
    	// Get form input values for the user
	// Get and trim the value of the "Pickup Date" field, 
	// "No. Days" field, "Email" field chronologically
    
	const pickupDate = $("#pickup_date").val().trim();
    	const number_of_days = $("#days").val().trim();
    	const user_email = $("#email").val().trim();
  
    	// Validation field
	// Check if any of the fields are empty
	    if (
	      pickupDate === "" ||
	      number_of_days === "" ||
	      user_email === ""
	    ) {
	      alert("Please fill in all fields.");
	      event.preventDefault(); // Cancel form submission
		
		// Check if the "No_of_Days" is not a number
	    } else if (isNaN(number_of_days)) {
	      alert("The Number of days must be a numeric value.");
	      event.preventDefault(); // Cancel form submission
		
		// Check if the "user_email" match the email pattern or not
	    } else if (!emailPattern.test(user_email)) {
	      alert("Invalid email address.");
	      event.preventDefault(); // Cancel form submission
	
	    } else {
	      // When all the entries are valid, Put the trimmed value of "Pickup Date" field, 
		  // "No. Days" field, "Email" field back into control chronologically
	      $("#pickup_date").val(pickupDate);
	      $("#days").val(number_of_days);
	      $("#email").val(user_email);
	    
	    }
	  });
	}); // end ready
