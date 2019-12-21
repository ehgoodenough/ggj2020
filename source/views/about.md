### The View Directory ###

This is the directory of declarative views,
dictating what is rendered to the screen.

The views will read from the models, providing
statefulness and determining what should be
rendered. Some of the views will also attach
event listeners that call back to the models.

All of the files in this directory are either
js or less, one of each for each view.

For the top-level file, check out `Index.view.js`,
which decides which screen to render, such as
`screens/GameScreen.view.js`.
