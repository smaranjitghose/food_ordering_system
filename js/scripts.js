//************* BUSINESS LOGIC *********//
function Food(food, quantity, price, totalPrice) {
  this.food = food;
  this.quantity = quantity;
  this.price = price;
  this.totalPrice = totalPrice;
}

//**************UI LOGIC *********//

$("document").ready(function() {
  $("#location").click(function() {
    var location = prompt("Enter your location");
    $("#success").show();
    $("#myLocation").text(location);
  });
  //get quantity value
  var quantity = parseInt($("#quantity").text());
  var quantity2 = parseInt($("#quantity2").text());
  var quantity3 = parseInt($("#quantity3").text());
  var quantity5 = parseInt($("#quantity5").text());
  var quantity6 = parseInt($("#quantity6").text());
  var quantity4 = parseInt($("#quantity4").text());

  //increment
  $("#add").click(function() {
    quantity += 1;
    $("#quantity").text(quantity);
    $("#finalOrder").text(quantity);
    $("#price").text(quantity * 65);
  });
  $("#add2").click(function() {
    quantity2 += 1;
    $("#quantity2").text(quantity2);
    $("#price2").text(quantity2 * 65);
  });
  $("#add3").click(function() {
    quantity3 += 1;
    $("#quantity3").text(quantity3);
    $("#price3").text(quantity3 * 115);
  });
  $("#add4").click(function() {
    quantity4 += 1;
    $("#quantity4").text(quantity4);
    $("#price4").text(quantity4 * 125);
  });
  $("#add5").click(function() {
    quantity5 += 1;
    $("#quantity5").text(quantity5);
    $("#price5").text(quantity5 * 65);
  });
  $("#add6").click(function() {
    quantity6 += 1;
    $("#quantity6").text(quantity6);
    $("#price6").text(quantity6 * 65);
  });
  //decrement
  $("#subtract").click(function() {
    quantity -= 1;
    if (quantity < 1) {
      return (quantity = 1);
    }
    $("#quantity").text(quantity);
    $("#price").text(quantity * 65);
  });
  $("#subtract2").click(function() {
    quantity2 -= 1;
    if (quantity2 < 1) {
      return (quantity2 = 1);
    }
    $("#quantity2").text(quantity2);
    $("#price2").text(quantity2 * 65);
  });
  $("#subtract3").click(function() {
    quantity3 -= 1;
    if (quantity3 < 1) {
      return (quantity3 = 1);
    }
    $("#quantity3").text(quantity3);
    $("#price3").text(quantity3 * 115);
  });
  $("#subtract4").click(function() {
    quantity4 -= 1;
    if (quantity4 < 1) {
      return (quantity4 = 1);
    }
    $("#quantity4").text(quantity4);
    $("#price4").text(quantity4 * 125);
  });
  $("#subtract5").click(function() {
    quantity5 -= 1;
    if (quantity5 < 1) {
      return (quantity5 = 1);
    }
    $("#quantity5").text(quantity5);
    $("#price5").text(quantity5 * 65);
  });
  $("#subtract6").click(function() {
    quantity6 -= 1;
    if (quantity6 < 1) {
      return (quantity6 = 1);
    }
    $("#quantity6").text(quantity6);
    $("#price6").text(quantity6 * 65);
  });
  var foodOrder3 = new Food();
  var foodOrder4 = new Food();
  var foodOrder5 = new Food();
  var foodOrder6 = new Food();
  $("#orderbtn").click(function() {
    //order 1
    var food1 = $("#exampleModalCenterTitle").text();
    var quantity1 = parseInt($("#finalOrder").text());
    var price1 = parseInt($("#price").text());
    ttl = quantity1 * price1;
    var foodOrder1 = new Food(food1, quantity1, 65, price1);
    $("#tablehead").show();
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder1.food +
        "</td>" +
        "<td>" +
        foodOrder1.quantity +
        "</td>" +
        "<td>" +
        foodOrder1.price +
        "</td>" +
        "<td>" +
        foodOrder1.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  $(".githe1").click(function() {
    $(".myShoppingCart").hide();
    $("table").append(
      "<tr>" +
        "<td>" +
        foodOrder2.food +
        "</td>" +
        "<td>" +
        foodOrder2.quantity +
        "</td>" +
        "<td>" +
        foodOrder2.price +
        "</td>" +
        "<td>" +
        foodOrder2.totalPrice +
        "</td>" +
        "</tr>"
    );
    $("td").css("padding-left", "20px");
    $("th").css("padding-left", "20px");
  });
  $(".githe2").click(function() {
    $(".myShoppingCart").hide();
  });

  $(".githe3").click(function() {
    $(".myShoppingCart").hide();
  });
  $(".githe4").click(function() {
    $(".myShoppingCart").hide();
  });
  $(".githe5").click(function() {
    $(".myShoppingCart").hide();
  });
  $(".githe6").click(function() {
    $(".myShoppingCart").hide();
  });

  if (window.location.search.indexOf("hidemyShoppingCart=1") != -1) {
    $(".myShoppingCart").hide();
    $(".viewOrders").show();
  }

  //signup
  $("#signup-form").submit(function(event) {
    event.preventDefault();
    //user's data
    var username = document.getElementById("username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    var existingUsers = JSON.parse(localStorage.getItem("allEntries"));
    if (existingUsers == null) existingUsers = [];
    var user = {
      username: username,
      email: email,
      password: password
    };
    localStorage.setItem("user", JSON.stringify(user));
    existingUsers.push(user);
    localStorage.setItem("allEntries", JSON.stringify(existingUsers));
    this.reset();
    window.location.replace("../login.html");
  });
  //sign in
  $("#login-form").submit(function(event) {
    event.preventDefault();
    var email = document.getElementById("my-email").value;
    var password = document.getElementById("my-password").value;
    var usersData = JSON.parse(localStorage.getItem("allEntries"));
    var emailArray = [];
    var passwordArray = [];
    usersData.forEach(function(user) {
      emailArray.push(user.email);
      passwordArray.push(user.password);
    });
    if (emailArray.includes(email) && passwordArray.includes(password)) {
      window.location.replace("../hotelsPage.html");
      // alert("Logged in successfull");
      $("#logout").show();
      $("#log").hide();
    } else {
      alert("Incorrect email or password");
    }

    this.reset();
  });
});
