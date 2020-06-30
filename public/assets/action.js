// jQuery that will "listen" to the html niceSurvey.html
$(document).ready(function(){
  alert("fef");
  $('form').on('submit', function(){
    alert("loool");
      // var item = $('form input');
      // console.log(item.serializeArray());

      $.ajax({
        type: 'POST',
        url: '/Lab1',
        data: $(this).serializeArray(),
        success: function(data){
          // do something with the data via front-end framework
          // Make the submit button red, disabled and saying Thank you
          //$("#bb").css("background-color", "red");
          //$("#bb").prop("disabled", "true");
          //$("#bb").text("Thank you!"); [like, gender, flaws, comment , field, recommendation]
        }
      });
      return false;
  });
});
