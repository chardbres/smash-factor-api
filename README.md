# Smash Factor API: back-end API for the Smash Factor app!

## Links to relevant repositories and deployed sites
* #### Link to client-site repository: <https://github.com/chardbres/smash-factor-client>
* #### Link to deployed client site: <https://chardbres.github.io/smash-factor-client/#/>
* #### Link to deployed API site: <https://warm-waters-93478.herokuapp.com/>

## Links to Entity Resource Diagram (ERD)
* #### Link to ERD: <https://github.com/chardbres/smash-factor-api/blob/master/smash-factor_ERD.pdf>

## Description

This is the repository for the back-end of the Smash Factor client site, built with Expres and hosted on Herokut. Smash factor is an application built with React, for users to track their golf clubs by type, brand, loft, and stiffness, and the quality of their strokes with each.

## Technologies Unsed
* Express/MongoDB (JavaScript): all back-end API functionality
* Git/Github: version control
* cURL/Postman: testing of API routes independent of front-end client functionality
* Node.js/npm: necessary dependency packages for functionality
* Markdown: README and/or other documentation

## Timeline
* (2019-12-02): successfully deployed basic API template to heroku for testing purposes.
* (2019-12-03): created models for golf clubs and shots, and routes for clubs. Confirmed index, create, delete, and update functionality with Postman.
* (2019-12-04): completed all routes in club_routes.js.
* (2019-12-05): created a model and routes for shots related to each club, but could not properly deploy.

## Unsolved Problems / Wish-List
* Complete all functionality to add shot-tracking functionality to each club: models and routes

## Catalog of Expected routes
* Homepage: https://warm-waters-93478.herokuapp.com/
* Authorizations:
  - SIGN-UP: https://warm-waters-93478.herokuapp.com/sign-up
  - SIGN-IN: https://warm-waters-93478.herokuapp.com/sign-in
  - SIGN-OUT: https://warm-waters-93478.herokuapp.com/sign-out
  - CHANGE-PASSWORD: https://warm-waters-93478.herokuapp.com/change-passwords
* Club CRUD:
  - INDEX ( 'GET' ): https://warm-waters-93478.herokuapp.com/clubs
  - CREATE CLUB ( 'CREATE' ): https://warm-waters-93478.herokuapp.com/clubs
  - SHOW CLUB: ( 'GET' ): https://warm-waters-93478.herokuapp.com/clubs/:id
  - EDIT CLUB: ( 'UPDATE' ): https://warm-waters-93478.herokuapp.com/clubs/:id
  - DELETE CLUB: ( 'DELETE' ): https://warm-waters-93478.herokuapp.com/:id
