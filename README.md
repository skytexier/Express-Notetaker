# Express Note Taker

## Description
This application uses Express.js to create a note-taking webpage where users can create new notes, save said notes and delete said notes. 
The motivation behind creating this application was to better understand Express routing and how to create helper functions to handle many requests made through our routes. 
This application aims to recreate a generic note app, however this time through a live server unlike most note applications which may be built into an OS. It works perhaps in similar ways by creating a database, reading previous entries from that database
and ultimately writing new information to that database.

The hardest part of creating this application was getting the helper functions to work together, considering this application was built with a predefined script in the background to handle note creation, deletion and saving on the webpage. Learning how to transfer that data into Express proved challenging, but thankfully a few peers and our class 
provided a lot of useful tools/tips for creating those helper functions/functions in general.

## Table of Contents
- [Installation](#installation)
- [Link to Walkthrough](#live-(HEROKU))
- [Usage/Examples](#usage)
- [Credits](#credits)
- [License](#license)


## Live-(HEROKU)

- [https://secret-everglades-51366.herokuapp.com/](https://secret-everglades-51366.herokuapp.com/)

## Installation

The required installs for this application are listed in the package dependencies, so running `npm i` to install these packages is necessary.
Besides that no installation is require as this server runs on Heroku or on localhost depending how you want to run it.


## Usage/Examples
Here a user can type in a title for their note and add subtext, then they can click the save icon in the top right to save said note.
![alt text](./Assets/example1.png)

As pictured this server will save all notes and allow for the deletion of notes too.
![alt text](./Assets/example2.png)

## Credits
A lot of stackoverflow for debugging.
- [https://stackoverflow.com/](https://stackoverflow.com/)
W3Schools on writing errors and understanding how to create error responses.
- [https://www.w3schools.com/js/js_errors.asp](https://www.w3schools.com/js/js_errors.asp)
Better understanding concat string methods.
- [https://www.w3schools.com/jsref/jsref_concat_string.asp](https://www.w3schools.com/jsref/jsref_concat_string.asp)
Geeksforgeeks to better understand res functions and Node.js in general
- [https://www.geeksforgeeks.org/express-js-res-json-function/](https://www.geeksforgeeks.org/express-js-res-json-function/)
- [https://www.geeksforgeeks.org/nodejs/?ref=lbp](https://www.geeksforgeeks.org/nodejs/?ref=lbp)

For this assignment I had to refer back to a lot of course work and some solved solutions as I missed a week of class due to a family emergency, besides this I also referred to [Ish](https://github.com/ianad389) once again for his notes on how to set up the helper functions although we ended up doing them slightly differently. 

## License
MIT License
 
Copyright (c) [2022] [Sky Hamilton Texier]
 
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

