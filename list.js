$(document).ready(function() {
    $("#collapseButton").html("Universities in" + selectedOption);
    var newUrl = "http://universities.hipolabs.com/search?country=" + selectedOption
    $.get(newUrl,function(response, status) {
        if(status == "success") {
            $("#universityList").html("");
            for (let index = 0; index < response.length; index++) {
            $("#universityList").append(
                `<a target="_blank" href="${response[index].web_pages[0]}"
                 class="list-group-item list-group-item-action">${response[index].name}</a>`);
            
            }
        }
    });

  $("#target").change(function(){

    var selectedOption = $('#target').find(":selected").val();
    var selectedOption = $('#target').find(":selected").text();
    $("#collapseButton").html("Universities in" + selectedOption);
    var newUrl = "http://universities.hipolabs.com/search?country=" + selectedOption
    $.get(newUrl,function(response, status) {
        if(status == "success") {
            $("#universityList").html("");
            for (let index = 0; index < response.length; index++) {
            $("#universityList").append(
                `<a target="_blank" href="${response[index].web_pages[0]}"
                 class="list-group-item list-group-item-action">${response[index].name}</a>`);
            
            }
        }
    });
  });

  $("#target").change(function(e){
    var selectedOption = $("option:selected", this);
    var valueSelected = this.value;
    $("#collapsedButton").html(Universities)
  });

   $.get("http://universities.hipolabs.com/search?country=&quot;" + selectedCountryValue , function(response, status) {
      if (status == "success" && data != null && data != undefined) {
          for (let index = 0; index < data.length; index++) {
              $("#universityList").append(`<a target="_blank" href="${data[index].web_pages[0]}" class="list-group-item list-group-item-action">${data[index].name}</a>`);

          }
      } else {
          alert("Can't load the Universities")
      }
  });


});