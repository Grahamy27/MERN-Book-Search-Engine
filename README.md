# MERN-Book-Search-Engine

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## Description
I've significantly revamped my project by transitioning from a RESTful API setup to utilizing Apollo Server and GraphQL. Here's a summary of the key steps I've taken:

Apollo Server Setup: I've integrated Apollo Server into my Node.js/Express backend to handle GraphQL queries and mutations effectively.

GraphQL Schema Definition: I crafted a GraphQL schema, specifying types, queries, and mutations to facilitate data retrieval and manipulation, covering user accounts, book search, and management functionalities.

Apollo Provider Configuration: In ymy React frontend, I've configured Apollo Client and employed Apollo Provider to orchestrate state management and facilitate communication with the Apollo Server through GraphQL.

Authentication Middleware Refactoring: I've updated authentication middleware to align with GraphQL resolvers or directives, ensuring proper enforcement of authentication and authorization rules for GraphQL operations.

Deployment: Successfully deploying my application on Heroku involves ensuring smooth hosting of both the Apollo Server backend and the React frontend, with MongoDB Atlas serving as the database solution.

By making this transition, I've enhanced my project's efficiency, scalability, and maintainability. Utilizing GraphQL with Apollo Server and Client brings advantages such as optimized data fetching, minimized data over-fetching or under-fetching, and increased flexibility in querying and modifying data. This overhaul represents a significant architectural improvement, promising a more robust and adaptable application. Should you encounter any specific challenges or require further clarification on your refactoring journey, feel free to inquire!


## Installation Process
To run the application locally:

Clone the repository
Run the following commands in the terminal:
npm i
npm run build
npm run develop


## Technologies used

Concurrently
JavaScript
Express
apollo-express-server
bcrypt
graphql
jsonwebtoken
mongoose
@apollo/client
react
react-bootstrap
react-dom
react-router-dom
vite

## Licence

-- Licence: MIT

## Deployed

https://github.com/Grahamy27/MERN-Book-Search-Engine



