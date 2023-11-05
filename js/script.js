$(document).ready(function()) {
    $("form#fillout-form").submit(function (event) {
        event.preventDefault();
        const name = $("#name").val();
        const answer1 = $("input:radio[name=question1]:checked").val();
        const answer2 = $("input:radio[name=question2]:checked").val();
        const answer3 = $("input:radio[name=question3]:checked").val();
        const answer4 = $("input:radio[name=question4]:checked").val();
        const answer5 = $("input:radio[name=question5]:checked").val();

        if (name.length === 0) {
            alert('State your full name:');
        } else if (answer1 === "Yes" && answer2 === "Yes") {    
          $("#suggestion1").slideDown();
        } else if (answer3 === "Yes" && answer4 === "Yes") {    
            $("#suggestion2").slideDown();
        } else if (answer5 === "Yes") {    
            $("#suggestion3").slideDown();
        };

        $(".user_name").text(name);
        $(this) [0].reset();
    }); 
});