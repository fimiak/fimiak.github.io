James Greve Sudoku
November 6, 2014
README
fimiak.github.io

My application uses:
HTML
CSS
JavaScript
jQuery
Sass/SCSS
Hosted by Github


The site is meant to provide a simple, working version of Sudoku. My version uses html inputs to place values from an array. I use a series of checks on rows and columns to ensure the total value of the rows and columns werent over 45 or that any input was outside of 0 and 9. I have checks to make sure that inputs are valid (numbers) and that they are rule based (not messing up the game) with two different checks. 


I also have a readonly attribute added to the preset numbers so that they cannot be changed. I learned quite a lot about programming from this challenge, as most of my prior experience has been in HTML/CSS and simple javascript/jquery (ajax calls, event handlers, etc). 


The CSS is meant to be responsive/look go on any device, and I tested it with a few of my own and all seems ok. If I had more time I would aim for the best size and experience on each device, but for the moment I think the scale is ok. I made the initial board color using Sass math, but as SASS/SCSS is precompiled, I couldn't use the same technique to change the colors after the scss was compiled, so I did it in a plainer fashion. I chose funky font faces and colors for the purposes of this challenge. I also thought about adding bootstrap at first to handle the responsive bits but its ugly and the grid wasnt necessary.



I decided not to minify my css or js since readability is far more important than minification in this scenario. If I were to set this up for production I would do so using GulpJS. If I had more time I would probably put this on a server and host it which I might still do at some point. I would also add a random board generator.


Thanks for reading!