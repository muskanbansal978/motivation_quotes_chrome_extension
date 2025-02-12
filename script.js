document.addEventListener("DOMContentLoaded", function () {
    // Array of image filenames (stored in the same directory)
    let images = [
        "images/inspiration1.jfif",
        "images/inspiration2.jfif",
        "images/inspiration3.jfif",
        "images/inspiration4.jfif"
    ];

    let quotes = [
        "Believe in yourself and all that you are.",
        "Your limitation—it’s only your imagination.",
        "Push yourself, because no one else will do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn’t just find you. You have to go out and get it.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Little things make big days."
    ];

    let randomImage = images[Math.floor(Math.random() * images.length)];

    // Pick a random quote
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Set the image dynamically
    document.getElementById("quoteImage").src = randomImage;

    // Set the quote text dynamically
    document.getElementById("quoteText").innerText = randomQuote;
});
