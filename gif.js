// var topics= [
// "alexander mcqueen",
// "beauty",
// "cara delevingne",
// "chanel",
// "christian dior",
// "dress",
// "emily ratajkowski",
// "gucci",
// "jessica stam",
// "jewelry",
// "jourdan dunn",
// "julia nobis",
// "karlie kloss",
// "kate moss",
// "kate upton",
// "louis vuitton",
// "makeup",
// "marc jacobs",
// "miranda kerr",
// ];

// function displayGifs() {
$("button").on("click",function() {

        var topics = $(this).attr("data-topic");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=37c902b92c944962af80ae11653d4c09";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(queryURL);
        	console.log(response);

//         var results = response.data;

//         var topicDiv = $("<div>");
        
//         var p = $("<p>").text("Rating: "+ results[i].rating);
   
//         var gif = $("<img>")
//         gif.attr("src",results[i].images.fixed_width.url)
       	
//         topicDiv.append(p);
//         topicDiv.append(gif);

//         $("#gifs-view").prenpend(topicDiv);
        });

      });

// function renderButtons() {
//         $("#buttons-view").empty();
//         for (var i = 0; i < topics.length; i++) {

//           var a = $("<button>");
//           a.addClass("topic");
//           a.attr("data-name", topics[i]);
//           a.text(topics[i]);
//           $("#buttons-view").append(a);
//         }
//       }

// $("#add-topic").on("click", function(event) {
//         event.preventDefault();      
        
//         var topic= $("#topic-input").val().trim();
//         topics.push(topic);

//         renderButtons();

//       });

//       $(document).on("click", ".topic", displayGifs);

     
//       renderButtons();