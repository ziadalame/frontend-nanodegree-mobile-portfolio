## Website Performance Optimization portfolio project

### Getting started

To run the project, check the dist folder.

#### Part 1: Optimize PageSpeed Insights score for index.html

To check for speed:
- Use the following code to get a public url that you can enter inte (google page speed)[https://developers.google.com/speed/pagespeed/insights/]

First start a local server using python
```
python -m SimpleHTTPServer 8000
```

Keep the above terminal window open and open a new one.
Make sure you are in the project directory

```
cd dist
./ngrok http 8000
```

The above code will generate a 2 public links that you can use. One link is secure (with https), the other is not.
Use any of the links to check for speed. I am getting 94/100 when testing on both desktop and mobile.

For testing purposes, after getting this public link, you can change the public links in the Gruntfile.js.
After that, run the command:
```
grunt speed
```

The above comman will log the speed in your terminal, instead of visiting the site every time.


#### Part 2: Optimize Frames per Second in pizza.html

### Achieving 60 fps

- Removed all constant variables that are being created from inside the loops to outside.
- Calculated the exact number of pizzas required to be rendered to stop over rendering of unseen and used elements.

### Resizing in less than 5ms

- Moved all constant variables created inside the loop to outside.
- Instead of getting the width of every pizza, I get the width of 1 pizza and apply it to all pizzas. This saves time instead of looping through elemnts and getting properties.

#### Contribution
This project is licensed under the MIT license.