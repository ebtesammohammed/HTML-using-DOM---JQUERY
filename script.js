let body = $("body");
let alertButton = $("<button> nice message </button>");
alertButton.prependTo(body);
alertButton.click(function () {
  alert("Good Morning");
});

let textButton = $("#text-button");
textButton.click(function () {
  let textButtonMessage = $("#text-box").val();
  alert(textButtonMessage);
});

let boxDiv = $("#box").css({
  width: "100px",
  height: "100px",
  "background-color": "blue",
});

boxDiv.mouseenter(function () {
  boxDiv.css({ "background-color": "purple" });
});
boxDiv.mouseleave(function () {
  boxDiv.css({ "background-color": "silver" });
});

let paragraphText = $("<p> Hello World!!</p>");
paragraphText.appendTo(body);
paragraphText.click(function () {
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);

  let randomRGB = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  paragraphText.css({ color: randomRGB });
});

let spanButton = $("<button> my name </button>");
spanButton.appendTo(body);
let nameDiv = $("<div></div>");
nameDiv.appendTo(body);
let myNameSpan = $("<span>Ebtesam Mohammed</span>");

spanButton.click(function () {
  myNameSpan.appendTo(nameDiv);
});

let myFriendArray = [
  "Robert",
  "Jeremiah",
  "Brooke",
  "Iman",
  "Charles",
  "Sharp",
  "Fatima",
  "Rachell",
  "Naomi",
  "Niki",
];
let myFriendButton = $("#my-friend-button");
let myFriendList = $("#my-friend-list");

myFriendButton.click(function () {
  for (let i = 0; i < myFriendArray.length; i++) {
    let myCurrentFriend = $("<li>" + myFriendArray[i] + "</li>");
    myCurrentFriend.appendTo(myFriendList);
  }
});
