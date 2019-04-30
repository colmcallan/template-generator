# Note Generator

>I built this tool to reduce our After Call Work metric in Sky Ireland, our agents would be required to type up their interactions with a customer on their account and thus this measurement of time used is exceptionally incosistant and the cost behind it was massive aswell.
>It was also used to reduce our Average Handling Time metric in our department 

## UX

The functionality of this site is a heavily front-end. No data is stored anywhere, once a new session begins previous actions are erased. It will never be used on a device smaller than a desktop/laptop screen so the need for a responsive design for smaller screens was not required.

**In order for this to be achieved, I incorporated the following:**
- Each product accociated with it's own button and sub button for steps taken to resolve the issue
- A modal with the text area within it to create a more appealing method of viewing the note generated
- The Modal has a clear text button which will erase all content generated for the agent 
- A refresh page button to reload everything back to standard and clear the text area
- Information about the band and it's members, to give the user an overview of their lives
- A tour page so users can book the band for various upcoming events 
- Social media links for users to follow to stay up to date with any news the band may have


 ### Wireframe Mockups
 





## Technologies Used

- **HTML5** - This was used as the layout to fully build the website
- **CSS** - This was used to style the website 
- **[Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)** - This was used to get the layout up and running quickly and also use grids to help with the responsive design if a desktop's resolution settings where different to others
- **[JavaScript](https://www.javascript.com/)** - This was used for the refresh page button and the clear text button inside the modal
- **[JQuery](https://jquery.com/)** - This was used with all of the buttons for selection which lead to the several outcomes and steps taken

## Testing

I have thoroughly tested this website and worked out any small design bugs that have occured best to my knowledge. I have also tried to submit blank contact forms and forms with incorrect email addresses which gave me an error message on each field to show that the required attribute within my form is working as it should, it also won't allow the user to submit without their name. 

**Devices Used:**
- Wyse Terminal - Windows 8 Enterprise
-	HP Laptop 15-bs0xx – Windows 10
-	iPad Air 2 – iOS 12
-	macbook pro 13"- macOS Mojave
-	Microsoft Surface Pro 2 - Windows 10

**Browsers Used:**
-	Chrome 
-	Firefox
-	Microsoft Edge
-	Safari

### Issues/Bugs
Nothing found or to be reported.

### Validation
All files passed validation testing at https://validator.w3.org/nu

## Deployment
My website is currently deployed on Github Pages - https://colmcallan.github.io/template-generator/

## Credits

### Content



### Acknowledgements
- [Code Institute](https://www.codeinstitute.net/) for using bootstrap columns and layout functionality.
- [W3schools.com](https://www.w3schools.com/howto/howto_css_modal_images.asp) - I used their modal design for the text area.
