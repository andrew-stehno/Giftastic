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

    $('button').click(function() {
        let userGuess = $(this).text();
        console.log("User guess: " + userGuess);
    })
};

displayButton();

function displayToon() {
    let toonName = "popeye" //$(this).attr('data-name');
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + toonName + "&api_key=5cNPBW2r8qsG6j7a1J7zLiTiFOncxnzA&limit=10&rating=g"; 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        let giphy = response.data;
        
    })
};

displayToon();



