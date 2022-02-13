# etch-a-sketch
Created as part of the Odin Project curriculum.

*Testing a new format for my project README*

**Introduction**

The goal for this project is to create and etch-a-sketch using pure Javascript. I adapted the idea into a demonstration of a piece of Artwork I created a few years ago. 

The piece is called *Portal* and is an epoxy-resin light painting/sculpture. The piece is actually two different paintings seperated by a two-way mirror. A bottom phosphorescent painting and a top transparent, hologram like painting. The piece takes on a different look depending on how light hits the surface. It shifts between displaying a holographic mirror and displaying a pool of glow that you can seemingly step into. 

The piece is one of my favorites out of my collection, but I've always had difficulty getting the idea across without people seeing it in person. I found code to be a great way to demonstrate the piece digitally. 

**Functionality**

- Hovering over the grid lights the tile up and leaves behind a random transparent gradient. The color will continue to change with different passes. 
- Hovering over the glow grid fades the tile in as though it was charged with light. The tiles slowly fade away. 
- Shifting the opacity slider will change the *light conditions*. There are two grids layered over each other, under 50% opacity deactivates pointer events for the top grid and activates them for the grid below.
- Middle levels of opacity mean you can see both grids and swap between interacting between them.
- Change the grid dimensions to reset the grid. 
- You are able to adjust the size of the image to accomadate different screen sizes.

**Process**

Similarly to the my last project (*See: odin-rockpaperscissors-JS*), I was interested in taking the given project a step further. Last time, however, I spent a lot of time looking up tutorials and adapting open source code. This time I was more interested in utilizing the knowledge I already have to create something interesting but simple. I still did some googling to get an idea of how to style gradients and create random colors so I can better represent my artwork, but I spent more time trying to clean my code and keep the app running smoothly. 

The etch-a-sketch grid was relatively simple to figure out. I made one pretty quickly within the first hour or two of starting out, but there were a couple issues that I ran into. 

First and foremost, I wanted to avoid creating functions that were too long. I wasn't exactly successful at first, but once I created a long function that worked the way I wanted it to, I would then break it down. 

Since there's a lot of styles involved, the program needs to iterate through a lot of dynamically created Divs and apply/change styles and backgrounds to each of them individually. I used a *for loop* to create the divs and initially used that same loop to apply styles via event listeners. This worked, but the program would run quite slowly when increasing the dimensions of the grid, and it made for a very long function. 

One of the other main issues involved resetting the dynamically created divs when changing the grid dimensions. Adjusting the dimensions just increased the total number of Divs instead of resetting the total. At first I tried adding a *.removeChild* function to an event listener at the end of the *createPortalGrid* functions. It seemed to work fine. However, when I tried breaking the functions apart into smaller ones, I found It better to create a unique *reset()* function and call it when adjusting the slider. 

Finally, I decided to limit the dimensions of the grid to 32x16. I initially wanted to go as high as 128x64. Even after breaking the functions down, I found there were too many styles and simple animations for it to run smoothly. Even at 32x16, I found it better to adjust a few styles to be applied to the parent as opposed to each individual div in the grid. 

**Closing thoughts**

Ultimately, I'm very happy with how this turned out. It runs well, and does a great job of demonstrating how my artwork looks in real life. I'm sure there's more I can do to clean up the code, so I do plan on returning to this in the future, as I do have some ideas as to how I could implement this in a site for my work. 

