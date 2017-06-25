#Twitter Clone App

This was one of my first major projects created 6 months ago. 
I recently became reunited with it's code base. 
I believe it will be great for me and others to review, refactor and learn from old code. 
I will be frequently updating this old project. 
If you just wish to view and play around with the app, download or clone the repository. 
After you do that, simple find the "twitter.html" file and open it in the browser. 
You will need a username and password to fully use the app. The username and password is "test" (try putting in the incorrect password as well).
You should be good to go. If you wish to contribute or play with the code, you will have to open the folder in your terminal. 
Once you are in the root of the folder, carefully type in "npm install" (Must have Node.js).
I encourage you to be familiar with "Webpack" and "Node.

Before you begin to start editing code, while in the root folder type carefully "webpack -w" or for webpack to serve and watch files type "webpack-dev-server".
Leave any issue reports here. 
Below is a list of the thought process I had while I was developing this app. 
Review my notes carefully to help you better understand the idea behind the app. HAPPY CODING!!

##Data

//this.state = {
    username: '',
    password: '',
    textarea(tweet box): '',
    tweets (list of tweets): [],
    favorites: 0
    display: 'hide'
}



##View
- User name and password input field
- Login button next to previous input fields
- Once logged in display Tweet Button
- List of tweets
- Star (showcasing number of favorites)
- Once tweet button is clicked show textarea
- Once user starts typing in textarea display send button.



##Behavior
Onchange Events:
- Username and Password
- Tweet: textarea (onChange: display send button)
Submit / Click Events:
- Once login button is clicked display tweets &
tweet button.
- Once tweet Button is clicked display textarea.
- Once send button is clicked push tweet to the user
tweets list.
- Once star is clicked highlight star and
increment counter next to the star.

