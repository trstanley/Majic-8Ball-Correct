//GOAL: To create a digital "magic 8 ball" using javascript.
//1.  Create a <p> tag that has the text "Type your question here: "
//2.  Nest an input tag in the <p> tag you just created.  
//3.  Create a <button> with text that says "Tell me my future Magic 8 ball!"  Give that button an id of "button1"
//4.  Create an empty <p> tag under your button with an id of "answer"
//5.  Create an array that lists the possible answers your magic 8 ball will use to tell the future.  Remember that magic 8 balls can only answer yes or no questions

var answers = new Array(
    "Without a doubt",
    //Add more possible answers here.
    "No Way",
    "Most likely",
   "yes",
   "Outlook good",
   "Cannot predict now",
   "Ask again later"
    );
//6.  Below is the function that will randomly generate an answer from your array.

function fortune() {
var num = Math.round( (answers.length - 1) * Math.random());
return answers[num];
}
//7.  Use jQuery to create a click handler that will make an answer appear from the array when you click your button.
$('#button1').click( function(){
    $("#answer").text(fortune());
});
//CSS BONUS: 
//1.  Change the background image.
//2.  Give the p tags a different font.
//3.  Style your button so that it has a different background color and size.
//4.  Align the elements in your page so that they are centered.

//Javascript BONUS:
//1.  Create another fortune teller that predicits the future.  It could generate a person's "lucky number" or "nickname" or what kind of pet they should get.  Be as creative as you like.  You can use the same syntax from the magic 8 ball but change the items in the array and add new ids to your buttons and inputs.