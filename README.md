Simple demonstration of tagify.js creating select element with options

Use a simple HTTP server to view the form requests
````
$ npm install http-server -g

$ http-server
````

Add some tags and click submit. View the request in your browsers tools to view how the data is sent to the server using URLencoded data.

### Form data
example of an URL encoded HTTP Post using `<select multiple>` `<option selected>` created from the tagify data
```	
title	A+blog+post+about+cars
tags	
0	cars
1	ford
2	mustang
keywords	
0	cars
1	car
2	classic+cars
3	ford+mustang
body	This+is+a+blog+post+about+the+ford+mustang+card
```