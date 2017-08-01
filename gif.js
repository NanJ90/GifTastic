var topics= [
"alexander mcqueen",
"beauty",
"cara delevingne",
"chanel",
"christian dior",
"dress",
"emily ratajkowski",
"gucci",
"jessica stam",
"jewelry",
"jourdan dunn",
"julia nobis",
"karlie kloss",
"kate moss",
"kate upton",
"louis vuitton",
"makeup",
"marc jacobs",
"miranda kerr",
];

$(document).on("click",".btn-info",function() {

        var topics = $(this).attr("data-topic");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=d0fbf00281f04f65b1e0d7399d176bcf";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(queryURL);	
        	console.log(response);

        var results = response.data;
        for (var i = 0; i < results.length; i++){
        
                var topicDiv = $("<div>");
                
                var p = $("<p>").text("Rating: "+ results[i].rating);
           
                var gif = $("<img>")
                gif.attr("src",results[i].images.fixed_height_still.url);
               	gif.attr("data-still",results[i].images.fixed_height_still.url);
               	gif.attr("data-animate",results[i].embed_url);
               	gif.attr("data-state","still");
                topicDiv.append(p);
                topicDiv.append(gif);
        
                $("#gifs-view").prepend(topicDiv);
                          
        	}
      	});
      });

function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {

          var a = $("<button>");
          a.addClass("topic btn-info");
          a.attr("data-name", topics[i]);
          a.text(topics[i]);
          $("#buttons-view").append(a);
        }
      }

$("#topics-form").on("submit", function(event) {
        event.preventDefault();      
        var topic= $("#topic-input").val().trim();
        topics.push(topic);

        renderButtons();

      });
     
      renderButtons();

$(".gif").on("click", function() {
 
      		var state = $(this).attr("data-state");
 
				      if (state === "still") {
				        $(this).attr("src", $(this).attr("data-animate"));
				        $(this).attr("data-state", "animate");
				      } else {
				        $(this).attr("src", $(this).attr("data-still"));
				        $(this).attr("data-state", "still");
				         }
				    });