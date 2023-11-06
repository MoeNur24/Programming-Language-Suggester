function handleFormSubmit(event) {
    event.preventDefault();

        // It will gather form data
        let name = document.getElementById("name").value;
        let answer1 = document.querySelector("input[name=question1]:checked").value;
        let answer2 = document.querySelector("input[name=question2]:checked").value;
        let answer3 = document.querySelector("input[name=question3]:checked").value;
        let answer4 = document.querySelector("input[name=question4]:checked").value;
        let answer5 = document.querySelector("input[name=question5]:checked").value;
        
        // Check for empty name 
        if (name.length === 0) {
            alert('State your full name:');
            // Check conditions and show suggestions

        } else if (answer1 === "Yes" && answer2 === "Yes") {    
          $("#suggestion1").slideDown();
        } else if (answer3 === "Yes" && answer4 === "Yes") {    
            $("#suggestion2").slideDown();
        } else if (answer5 === "Yes") {    
            $("#suggestion3").slideDown();
        };

        // Display user's name in suggestions 
        $(".user_name").text(name);

        // Reset the form
        $(this) [0].reset();
    }); 
});