
    $("#search-btn").on("click", function() {
      var searchedCustomer = $("#customer-search").val().trim();
      searchedCustomer = searchedCustomer.replace(/\s+/g, "").toLowerCase();

      $.get("/api/customers/" + searchedCustomer, function(data) {
        console.log(data);
        if (data) {
          $("#info").show();
          $("#name").text(data.name);
          $("#phone").text(data.name);
          $("#email").text(data.role);
          $("#uniqueId").text(data.age);
        }
        else {
          $("#name").text("It's all happening.");
          $("#info").hide();
        }
      });
    });