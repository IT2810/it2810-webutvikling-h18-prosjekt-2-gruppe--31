# " it2810-webutvikling-h18-prosjekt-2-gruppe--31" 
In this project we made an interactive exhibition with responsive web design. The exhibition features several different combinations of pictures, audio and text. By using the interactive features of the website, the user is able to create his or her own art exhibition.

## Description of the app structure
We chose to divide the app into a couple of different react components. When creating the components, we tried to make each component as general as possible. We organized each component, with the corresponding css, in its own folder. Below follows a description of each of the components.

`App.js`:
As benefits a react app, the App component acts as a placeholder for the rest of the app. In here, we render the dropdown, audio, text and pictures. The app component also has logic for connecting the dropdown menu and exhbition. Also, the state of the system is found in th App. If we were to create a large, more advanced app, we would of course not include all the logic in App. However, as this app is rather small, we did so here. The App.js also contains lists that acts as the source for the pictures/text/audio in the exhibition.

`Audioplayer.js`:
Audioplayer.js simply contains a react wrapper for an HTML component, input is a source path.

`PictureSlideShow.js`:
Contains the component for the picture slideshow in the exhibition. It contains two components, ImageSlider and ImageSlideshow. The ImageSlider class contains the rendering of the exhbition, while the other class is used as a component for rendering the slideshow with the four different picture options.

`Words.js`:
This component acts mainly as a placeholder for the text in the exhbitions. It has a category and index as input, and it find the right text given the category. It then sets the right state for the title, author and content.

`Dropdownbutton.js`: 
The dropdownbutton takes input from App.js, and sets the category for the button accordingly. The onClick function, triggered when something in the dropdown is press, updates the canvas with the appropriate pictures, text and audio.

## Documentation

### Contents and functionality
We chose to used dropdown buttons for selecting the different input for the exhibition. The dropdown button was chosen because we thought it provided the simplest and most good looking way of changing the input for the slideshow. We added a small slideshow under the "featured" picture in order to make it easy for the user to change between the different pictures in the category. The app will select the text and audio accordingly.

All this gives an intuitive way of switch between the different artworks, and should be familiar to people used to interacting with digital photo albums.

We chose to start the page with a blank page. This should encourage the user to select categories from the dropdown on the top of the page. The user should quickly realize how to combine different text, audio and pictures. Each picture, audio and text category has four different entries.

The pictures are SVG files, the audio format is MP3s and the texts are saved as JSON, text and pictures are saved in `public/SVG` and `public/words`, while audio is streamed from the web.


### Technologies

#### REACT
The project is made using REACT, a JavaScript library for building responsive and modern user interfaces. REACT components are reusable and is well adapted for layering and SPA applications. It also uses the Virtual DOM, meaning it only renders specific pieces of DOM when a change has occurred. This was perfect for our virutal art exhibition. There is an in-memory data structure cache that allowed this selective rendering. The selective rendering makes the app faster as well. The components themselves are made using ES6 and JSX. JSX is JavaScript that incorporates HTML so that the REACT subcomponents can be rendered with the desired HTML-tags.

#### AJAX
Ajax is short for short for "Asynchronous JavaScript And XML” and using it means a web page can be updated without reloading. Basically, it allows for data to be requested and received form a server, after the page has loaded. This was perfect for us, as we wanted to only load the required data when wanted. Ajax is also used to send data to a server, again without having to refresh the page. It is uses a combination of browser XMLHttpRequest object so that is can request data from a web server on the one side, and JavaScript plus HTML DOM for display or use of the data. 

Despite its name, AJAX applications commonly used to transport data such as JSON text or even plain text. We used the fetch-api to "implement" ajax, and to fetch the requied text and pictures. It is a simple and powerful api, and it makes it easy to add callback functions for setting the state of the application / adding data after we are sure the data is properly fetched. The callback is implemented using the .then functions in javascript. We could have included error handling in the fetch .then callbacks, but we chose not to. The fetch api excellently suited our task of fetching text and pictures, as it was easy to use and get started with. The audio is handled using the HTML audio tag.


### Responsive Web Design
The exhibition display default for desktop shows the soundbar and the pictures to the left, and the text to the right. On mobile the text will move to be below the soundbar, meaning one column of content rather than two. This behavior will also show is if the window becomes narrow enough.
Along with the placement of elements, the text size of the text and dropdown buttons changes. If the window becomes sufficiently small enough, the small triangles will disappear to make more space for the button text. 



### Testing

The app has been tested in Google Chrome and Mozilla Firefox for desktop.  For the mobile units we tested in Safari for iPhone7, as well as Chrome for Samsung S8. We have also had some persons test the website to see if they found any bugs. The behavior and layout remains consistent across browsers and devices. 

## Sources 
### Image sources:
* [Flaticon](https://www.flaticon.com/)
* [The Craft Chop](http://thecraftchop.com/)


### Audio sources:
* [Soundbible](https://soundbible.com/)
* [mfiles](https://www.mfiles.co.uk/)

### Text sources:
* [English for students](http://www.english-for-students.com/Short-Moral-Stories-for-Kids.html)
* [Poets.org](https://www.poets.org/poetsorg/poems?field_poem_themes_tid=1456)
* Twitter
* Reddit

## Dependencies
* React
* Node.js

## Built with
node.js

## Contributing
* Thea Tokstad
* Katrine Lie Holm
* Jack Syvertsen
