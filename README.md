
## Table of Contents

1. [What is this app?](#id-section1)
2. [Technologies Used](#id-section2)
3. [Notes](#id-section3)
4. [Improvements WIP](#id-section4)

<hr>

<div  id='id-section1'/>

### What is this app?

This *full-stack* application is intended to provide a swifter means to look up PSAPs* for calltakers & dispatchers for Louisville MetroSafe**. This application renders a full list of PSAPs hosted on a secure **MongoDB** database upon loading the root URL. Staff at MetroSafe will have the ability to add PSAPs (which will be removed from app once the full list of PSAPs are added) and will have the ability to search for a specific PSAP by *county name*.

<hr>

<div id='id-section2' />

### Technologies Used

* `React.js`
* `CSS3`
* `HTML5`
* `Express.js`
* `React-Router`
* `Heroku Deployment`

<hr>

<div id='id-section3' />

### Notes

* \* **PSAPs**: 'public safety answering points'.
* \** **MetroSafe**: The 911 communication center for Jefferson County in Kentucky.
* This application is currently deployed on [Heroku](https://www.heroku.com/) and can be found [here](https://shrouded-brushlands-00969.herokuapp.com/).

<hr>

<div id='id-section4' />

### Improvements WIP

*The bullets below detail improvements that I intend to make in the future.*

- [ ] Add validation in the `express.js` backend to deter potential half-submissions of PSAPs.
- [ ] Look into ways to get the Heroku app to run faster upon loading.
- [ ] Look into smarter searching, such as pulling up search results as the user types.