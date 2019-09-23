// Main array of characters:================================

let topics = ["Bugs Bunny", "Tweety", "Popeye", "Elmer Fudd", "Yosemite Sam", "Woody Woodpecker",
 "Foghorn Leghorn", "Sylvester", "Marvin the Martian", "Tasmanian Devil", "Bluto", "Wile E Coyote"];

// Globally scoped vairiables:==============================

let btnDiv = $('<div id="toon">');
let gifDiv = $('<div id="giphy">');

// Display button function:=================================

function displayButton() {

    $('#toon').empty();

    for (let i = 0; i < topics.length; i++) {

        let a = $('<button>');

        a.addClass('character');
        a.attr('data-name', topics[i]);
        a.text(topics[i]);
        btnDiv.append(a);
        console.log(topics[i]);
        $('#buttons').append(btnDiv);
    }   
    displayToon();
};

displayButton();

function displayToon() {
    $('.character').click(function () {
    let toonName = $(this).attr('data-name');
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + toonName + "&api_key=5cNPBW2r8qsG6j7a1J7zLiTiFOncxnzA&limit=10&rating=r"; 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        let results = response.data;

        for (let i = 0; i < results.length; i++) {
            let gifDiv = $('<div>');

            let rating = results[i].rating.toUpperCase();

            let p = $('<p>').text("Rating: " + rating);

            let image = $('<img>');
            //image.attr('src', results[i].images.fixed_height.url);
            image.attr({'src': results[i].images.fixed_height_still.url, 'data-still':results[i].images.fixed_height_still.url, 'data-animate': results[i].images.fixed_height.url, 'data-state': "still", class: "gif"});
            
            gifDiv.prepend(p);
            gifDiv.prepend(image);

            $('#giphies').prepend(gifDiv);
        } 
    
    })
    
})
};

$('#add-toon').click(function (event) {
    event.preventDefault();

    let toon = $('#new-toon').val().trim();

    topics.push(toon);

    $('#new-toon').val("");
    
    displayButton();
})

function stillOrNot() {
    $('.giphy').click(function () {

        let state = $(this).attr("data-state");

        if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }   else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
    })
    
};



