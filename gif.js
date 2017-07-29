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
"model",
"prada",
"runway",
"shoes",
"victorias secret"];

function displayGifs() {

        var topic = $(this).attr("data-name");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&rating=&api_key=37c902b92c944962af80ae11653d4c09";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        var topicDiv = $("<div class = 'topic'>");
        var rating = response.rating;
        var pOne = $("<p>").text("Rating: "+ rating);
        topiDiv.append(pOne);
          
        var imgURL = $("<div ")
          // Creates an element to hold the image
          // Appends the image
          // Puts the entire Movie above the previous movies.

        });

      }

function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < topics.length; i++) {

          var a = $("<button>");
          a.addClass("topic");
          a.attr("data-name", topics[i]);
          a.text(topics[i]);
          $("#buttons-view").append(a);
        }
      }

$("#add-topic").on("click", function(event) {
        event.preventDefault();      
        var topic= $("#topic-input").val().trim();
        topics.push(topic);

        renderButtons();

      });

      $(document).on("click", ".topic", displayGifs);

     
      renderButtons();