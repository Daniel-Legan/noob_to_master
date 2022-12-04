# noob to master

As our world becomes more digital, gamers too can have difficulty connecting with one another. That's why I created **noob to master**. With **noob to master**, users can connect with one another and establish a local connection. By bringing users together, the application promotes in-person interactions accelerating growth for both parties. 

## Approach
*Duration: Two Week Sprint*

I created a [wire-frame](https://www.figma.com/file/x2PLvrnopEzxTwrgSk1RIu/Noob-to-Master?node-id=0%3A1&t=XAGg2VOoas4L6JDu-0), [ERD](https://app.dbdesigner.net/designer/schema/0-noob-to-master), and [scope documents](https://docs.google.com/document/d/1uNwpy_YTXstxOsEulTE25XW_ykuo1dBPTjAU5g-Kcis/edit) before coding begun. I had a chance to test Google Maps API and Google AutoComplete API prior to building which assured development could continue with success.

## Demo

## Getting Started

#### Installation 
- Run `npm install`.
- Create a database named **`noob_to_master`**.
- Create tables and insert the values into the `games` table with the data listed in the *database.sql* file.
- Run the server: `npm run server`.
- Run the client: `npm run client`.
- Navigate to `localhost:3000`.

## Usage

1. Find the menu icon on the top left make your way to the registration modal to register.
2. Depending on your role, your dashboard may be different. Navigate to `FIND MASTER` if you registered as a noob.
3. Find local masters to the game you are struggling with. Be sure to send a thoughtful message with your request.
4. Navigate to `REQUESTS` to see all the requests you've sent. You may cancel requests or wait till a master responds to your request.
5. Navigate to `INVITES` to see all the invites you've received if you are of role master.
6. Accept or reject invites how you see fit to establish a connection with the noob user.
7. Clear out connections from your list if it gets too large.
8. Swap roles and/or games at any time by checking out `GAME AND ROLE`!

## Technologies/Languages

JavaScript, React, Redux/Saga, Node, Express, PostgreSQL, HTML5, CSS3, Axios, Passport, Material-UI, Git, GitHub, [sweetalert2](https://sweetalert2.github.io/), [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview), [Google Places API](https://developers.google.com/maps/documentation/javascript/place-autocomplete).

## Future Plans
I originally wanted to have a rating system to so that noobs would have more confidence in who they contact from the map view. I also wanted to have the ability to upload a profile picture to help personalize their profile. I also wanted to have a live chat messaging system. However, two weeks was not enough time to build these features into the application while still producing a polished product. Finding appropriate examples for the API's that would work in the application and establishing connection between different user types was more important for the concept the application provides. 

## Acknowledgement
Thanks to [Prime Digital Academy](https://www.primeacademy.io/), my cohort mates, and my family for your help and encouragement.

## Find Me
[LinkedIn](https://www.linkedin.com/in/daniel-legan-365120241/)
