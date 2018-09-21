# " it2810-webutvikling-h18-prosjekt-2-gruppe--31" 
In this project we made an interactive exhibition with responsive web design. The exhibition features several different combinations of pictures, audio and text. By using the interactive features of the website, the user is able to create his or her own art exhibition.

## Description of the app structure

We chose to divide the app into a couple of different react components. When creating the components, we tried to make each component as general as possible. We organized each component, with the corresponding css, in its own folder. Below follows a description of each of the components.

`App.js`:
As benefits a react app, the App component acts as a placeholder for the rest of the app. In here, we render the dropdown, audio, text and pictures. The app component also has logic for connecting the dropdown menu and exhbition. Also, the state of the system is found in th App. If we were to create a large, more advanced app, we would of course not include all the logic in App. However, as this app is rather small, we did so here.


`Audioplayer.js`:
Audioplayer.js simply contains a react wrapper for an HTML component, input is a source path.

`PictureSlideShow.js`:
Contains the component for the picture slideshow in the exhibition. It contains two components, ImageSlider and ImageSlideshow. The ImageSlider class contains the rendering of the exhbition.

`Words.js`:
Again 
Contains the functionality to show the right text. Has input category and index and finds the right texts for the category. Then sets the right state for title, author and content. 

`Dropdownbutton.js`: 
Contains the code for the dropdownbuttons. Takes input from App.js and sets the category for the button. OnClick updates the canvas and sets the appropriate pictures, texs and sound.

## Documentation

### Contents and functionality 
In order to choose the different categories have we chosen to utilize a dropdown button solution. This allows the user to combine different categories of sounds, pictures and texts. To get a new artwork without changing the categories, the users can pick a new photo from the thumbnail. This picture will then be displayed, and the app will set the corresponding sound and text while keeping them within their respective categories. 

This gives an intuitive way to switch between the different artworks and is a familiar way to interact with digital collections of photos. 
The start page is a plain white page, it has some plain lines as placeholders for the picture, the thumbnails, an empty sound player and default content for the text. As the used picks categories, content will be loaded. There are three different categories for each media type, and four different pieces within each of the categories, and the user can play around, matching any category of one media type with any category of the other media types. 

The pictures are SVG files, the audio format is MP3s and the texts are saved as JSON, text and pictures are saved in `public/SVG` and `public/words`.


### Technologies

#### REACT
Our project is made using REACT, a JavaScript library for building user interfaces. REACT components are reusable and is well adapted for layering. It also uses the Virtual DOM, meaning it only renders specific pieces of DOM when a change has occurred. There is an in-memory data structure cache that allowed this selective rendering. The selective rendering makes the app faster as well. The components themselves are made using ES6 and JSX described above. JSX is JavaScript that incorporates HTML so that the REACT subcomponents can be rendered with the desired HTML-tags.

#### AJAX
Ajax is short for short for "Asynchronous JavaScript And XML” and using it means a web page can be updated without reloading. Furthermore, it allows for data to be requested and received form a server, after the page has loaded. As well as send data to a server in the background. It is uses a combination of browser XMLHttpRequest object so that is can request data from a web server on the one side, and JavaScript plus HTML DOM for display or use of the data. 

Despite its name, AJAX applications commonly used to transport data such as JSON text or even plain text. We have chosen to use the .fetch() method to download the SVG and JSON files. It is a simple API that makes it easy to set the state of a component according to the element that had been fetched. After the file has been loaded we use the .then() method to change the state of a component. The audio is handled using the HTML audio tag.


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
