### " it2810-webutvikling-h18-prosjekt-2-gruppe--31" 

App.js:
Main class
Renders a dropdownmenu with 3 buttons which dynamically updates the render with new pictures, sound or text


Audioplayer.js:
Contains a simple react wrapper for an HTML component, input is a source path.

PictureSlideShow.js:
Contains the entire pictureslideshow functionality, and audioplayer. input is an array of pictures.
Returns the slideshow, including audiplayer and the index of selected picture (just a count for now)
Contains two classes, ImageSlider and ImageSlideshow

Words.js:
Contains the functionality to show the right text. Has input category and index and finds the right texts for the category. Then sets the right state for title, author and content. 

Dropdownbutton.js: 
Contains the code for the dropdownbuttons. Takes input from App.js and sets the category for the button. OnClick updates the canvas and sets the appropriate pictures, texs and sound.

## Documentation

# AJAX
Vi har valgt å bruke fetch()-metoden til å laste ned bildene og JSON-tekstene. Det er en enkel metode for å hente bildene for så og oppdatere state'en av resultatet. 

# Responsive web design


# Testing

## Sources 
# Image sources:
Flaticon
The Craft Chop
svg images

# Audio sources:
soundbible.com
mfiles.co.uk

# Text sources:


## Dependencies
React
Node.js
AJAX

# Built with
node.js

## Contributing
Thea Tokstad
Katrine Lie Holm
Jack Syvertsen