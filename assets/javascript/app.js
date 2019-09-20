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
        $('body').append(btnDiv);
    }   
    displayToon();
    // $('button').click(function() {
    //     let userGuess = $(this).text();
    //     console.log("User guess: " + userGuess);
    //     displayToon();
    // })
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

            let rating = results[i].rating;

            let p = $('<p>').text("Rating: " + rating);

            let image = $('<img>');
            image.attr('src', results[i].images.fixed_height.url);
            
            gifDiv.prepend(p);
            gifDiv.prepend(image);

            $('body').append(gifDiv);
        } 
    })
})
};





