// Submit form without page redirect using ajax
$(() => {
  // function will get executed on click of submit button
  $("#submitBtn").click(function (e) {
    let form = $("#form");
    let url = form.attr("action");
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        // Success alert
        alert("Form Submited Successfully");
      },
      error: function (data) {
        // Error alert
        alert("Some Error");
      },
    });
  });
});


