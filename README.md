# Note Generator

>I built this tool to reduce our After Call Work metric in Sky Ireland, our agents would be required to type up their interactions with a customer on their account and thus this measurement of time used is exceptionally incosistant and the cost behind it was massive aswell.
>It was also used to reduce our Average Handling Time metric in our department 

## UX

The purpose of this project is to create a static **(front-end only)** website for a 1960’s rock band who have around 50 years experience of performing live at numerous events around the world. The target audiences for this website are fans of Black Sabbath and potential fans who would like to use the site to see and hear clips from their back catalog, and any new material as it becomes available.

**In order for the target audience to achieve these things when visiting my website, I incorporated the following:**
- Audio clips for visitors to listen to some of the bands songs; originally i used spotify for this, however the default design didn't suit my site so i used the <audio> attribute to host the songs.
- Video files so the visitors can view the band performing. Taken from the bands youtube page.
- A discography page that links to user to the itunes purchase site for each album.
- A sign up page for the user to register to receive information on new music releases, tours, ticket releases etc.
- Information about the band and it's members, to give the user an overview of their lives
- A tour page so users can book the band for various upcoming events 
- Social media links for users to follow to stay up to date with any news the band may have

>I have designed the webpage to suit the bands image and brand presence and also included a logo and pictures throughout, to give a good overall user experience.

 ### Wireframe Mockups
 
 These can be found at the following links below:
 [wire frame](https://github.com/colmcallan/milestone-project1/tree/master/Wire%20Frames)



## Features

### [Home Page](https://github.com/colmcallan/milestone-project1/blob/master/html/index.html)
- transparent header. I used this feature to make the text stand out against the "busy" background so none of the text would get lost in translation. 
- within the header, there's a call to action booking button for anyone who wishes to book the band after they listen to their song snippets. 
- there is also a sign up news letter button (hidden in nav bar on mobile) for any potential new fans to sign up to the latest news and information.
- I also added a read more button like in the band pages to ensure a better user experience on mobile and desktop, however especially mobile. 

### [Band Page](https://github.com/colmcallan/milestone-project1/blob/master/html/band.html)
- Modal - this feature will allow a user to click on the picture of each band member to get a closer view and also has a nice caption added at the bottom
- Blockquote - I removed the default blockqoute border as against the transparent div, it wasn't appealing to the design and border radius of the transparent box, so I applied a simple border to the transparent box with the same radius to ensure it cleanly wrapped into each section.
- Read More - this feature allows the user to choose whether or not they want to read more about each band member and also prevents the users experience from being a bad one as this information takes up quite a lot of the screen especially on a mobile device where information layout and efficiency is vital.

### [Videos Page](https://github.com/colmcallan/milestone-project1/blob/master/html/videos.html)
- In this section, the user can view several extrememly popular and well known singles from the band and experience what they're like live. 
- Originally the layout for this was to have a three video carousel, however, through testing on several mobile devices it wasn't suited for anything smaller than a tablet for usability with the right/left selection for videos and i went back to basics with the current format.
- We have a booking call to action option for the user as this is the second time they will have listened to the band on the website and it's to re-inforce the home page message of booking the band for whatever their booking is for. 

### [Albums Page](https://github.com/colmcallan/milestone-project1/blob/master/html/albums.html)
- This is where the user can see all albums of the original band members and each album artwork is linked directly to purchase the album on itunes.


### [Tour Page](https://github.com/colmcallan/milestone-project1/blob/master/tour.html)
- This is where fans and potential new fans can book the band during their upcoming tour and view sold out dates and available dates to book in the location. 
- The booking modal on this site was used from w3schools band section for bootstrap and changed to suit the theme of my webpage and design.

### All Pages
- Back to Top Button - this allows a user to navigate straight back to the top of the page if they would like to visit another section. It comes in extremely useful on a long section on a mobile device and saves accidental clicking on items on webpages and ease of use.
- Social Media Links - this feature allows users to follow the band on Facebook, Twitter and Youtube for all the latest news 
- Sign up - this allows users to sign up with their email address and register to receive information on new music releases, tours, ticket releases etc.

## Technologies Used

- **HTML5** - This was used as the layout to fully build the website
- **CSS** - This was used to style the website 
- **[Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)** - This was used to get the layout up and running quickly and also use grids to help with the responsive design
- **[JavaScript](https://www.javascript.com/)** - This was used to add picture modals for each of the band members
- **[JQuery](https://jquery.com/)** - This was used to add read more buttons within some of the pages and also used for the back to top button to add a smooth scroll and fade aswell.

## Testing

I have thoroughly tested this website and worked out any small design bugs that have occured best to my knowledge. I have also tried to submit blank contact forms and forms with incorrect email addresses which gave me an error message on each field to show that the required attribute within my form is working as it should, it also won't allow the user to submit without their name. 

**Devices Used:**
- Samsung Galaxy S8 – Android 8.0
-	Samsung Galaxy S7 - Android 8.0
- Samsung Galaxy S6 – Android  7.0
- Samsung Galaxy Note 9 - Android 9.0
- Samsung Galaxy S9 - Android 9.0
-	iPhone 8 – iOS 12.0
-	iPhone 7+ - iOS 12.0
-	HP Laptop 15-bs0xx – Windows 10
-	iPad Air 2 – iOS 12
-	macbook pro 13"- macOS Mojave

**Browsers Used:**
-	Chrome 
-	Firefox
-	Microsoft Edge
-	Safari

### Issues/Bugs
I only had one issue on the band and albums page, the background image would zoom in on mobile devices on both these pages. 
through research and trial and error this was resolved by setting the background size to auto in CSS. 

### Validation
All files passed validation testing at https://validator.w3.org/nu

## Deployment
My website is currently deployed on Github Pages - https://colmcallan.github.io/milestone-project1/

I was able to deploy the website here by going to my repository in which all the files are saved, clicking on settings at the top and scrolling down to the heading GitHub Pages. Underneath the heading there is a source and I chose master branch from the dropdown which allows you to host the website on GitHub Pages.
I didn't use any github themes for this project.
It was locally created using cloud9 and pushed into my github repository from there.
## Credits

### Content

The text for the section "Ozzy Osbourne" was taken from the Wikipedia article [Ozzy Osbourne](https://en.wikipedia.org/wiki/Ozzy_Osbourne)

The text for the section "Tony Iommi" was taken from the Wikipedia article [Tony Iommi](https://en.wikipedia.org/wiki/Tony_Iommi)

The text for the section "Geezer Butler" was taken from the Wikipedia article [Geezer Butler](https://en.wikipedia.org/wiki/Geezer_Butler)

The text for the section "Bill Ward" was taken from the Wikipedia article [Bill Ward](https://en.wikipedia.org/wiki/Bill_Ward_(musician)

The text for the section on the index page was taken from the wikipedia article [Black Sabbath](https://en.wikipedia.org/wiki/Black_Sabbath)
### Media Content
The photos used on this site were obtained from various sources and the references can be found [here](https://github.com/colmcallan/milestone-project1/tree/master/html/images)

The videos used on this site were taken from the [Black Sabbaths youtube page](https://www.youtube.com/channel/UCrx-X329UKv0Y06VhfpFVvw)

### Acknowledgements
- [Code Institute](https://www.codeinstitute.net/) for using bootstrap columns and layout functionality and proper use of media queries etc. 
- Rohan Hapani - The smooth scroll design using JQuery on [Codepen](https://codepen.io/desirecode/pen/MJPJqV/) really helped me with my back to top button.
- [W3schools.com](https://www.w3schools.com/howto/howto_css_modal_images.asp) - I used their modal description to add modal images to each of the band members pictures.
- [W3schools.com](https://www.w3schools.com/bootstrap/bootstrap_theme_band.asp) - I used their carousel method and ticket booking system and altered the design with CSS to suite the theme of my site.
- [W3schools.com] - I used this site as a great reference tool for assistance with some CSS queries I had with my media queries etc. 
