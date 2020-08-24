# Software Requirements

## Vision

### What is the vision of this product? What pain point does this project solve? Why should we care about your product?
This product is an interactive escape room where users are given riddles to solve in order to escape a series of three rooms. Each room will have three riddles. People love escape rooms, but are stuck at home. This site gives users the ability to try an escape room from the comfort of their own homes. In addition to entertainment value, this game will also challenge users to think through a series of riddles. 

## Scope (In/Out)
 - IN - What will your product do
The app will take the user through an interactive escape room.
The user will be prompted to solve three riddles in each room.
The user will need to escape three rooms to win the game.
Incorrect answers will cause loss of life value; correct answers get the user one step closer to escaping.

 - OUT - What will your product not do.
This app will not be optimized for mobile use.
This app will not generate new riddles for repeat users. 


## Minimum Viable Product

Our MVP will entail:
 - Three rooms with three riddles each
 - Life value calculated based on wrong answers
 - Dynamically rendered life value image
 - User name input
 - Life value stored in local storage
 - About Us page

## Stretch

- Timer for each room, less and less time for rooms 2 and 3
- Animations for each level
- Riddle clues
- Animated Winners’ page
- High score table (date stored in local storage)
- Animation for when user loses life value
- Let user pick type of escape room (haunted house vs. zombie escape, for example)
Timer
Animation for welcome page (smoke animation)
Animation for About Us (smoke animation)

## Functional Requirements
1. User name input
1. Event listeners for correct and incorrect riddle guesses
1. User life value calculation and display
1. Automatically render next riddle/level

### Data Flow
List the functionality of your product. This will consist of tasks such as the following:
1. User name input
1. Event listeners for correct and incorrect riddle guesses
1. User life value calculation and display
1. Automatically render next riddle/level

### Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

### Welcome Page
- Required user input for name, which is stored in local storage

### Rooms
- Life value starts at 10 and is reduced for each incorrect guess
- First riddle automatically renders
- User’s name and life value are rendered onscreen
- User clicks within the room to solve the riddle (i.e. the answer to the riddle is a clock and the user has to click on a clock on screen “within the room”). 
  - Clicks are registered via event listeners. The users’ click is compared to the correct answer/image. 
  - Incorrect guesses result in loss of life value, which is reduced and updated and stored in local storage
  - Correct guesses do not impact life value and trigger the next riddle
- User must solve 3 riddles to advance to next room
- If life value decreases to zero, the game is over and the Loser Page is rendered

### Winner Page

- Displays user name and a congratulatory message
- Has a link to the About Us page

### Loser Page

- Displays user name and a message that they have lost the game
- Has a link to the About Us page

### About Us

- Features data on four teammates who created the game
