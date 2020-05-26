This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Exercise - Fruit CRUD

Continue your amazing fruit journey in App.js:

* Create a simple form with two inputs - for fruit name & color
* On submit:
  * Create a copy of your fruits array & store the new fruit in that one 
  * Add your updated fruits array to localStrorage
    * don't forget to "stringify" it before :)
  * Lastly: Also update the state using setState

### Testing

* Check in the browser -> Tab "Application" if it receives your added fruits
* Reload the page to see if your added fruits persist


### Outsourcing

* Now outsource your fruit item into a separate component Fruit.js
* The Fruit component should be a functional component please (no class)
  => functional because it does not manage state
* In App.js: Render `<Fruit>` components and pass in the fruit data as prop
* In your Fruit componet: Fetch your fruit item from props and display it

### Bonus

Use the color of the fruit as background color for your fruit card:

  * create a css class in your App.css for each fruit color that you use 
  * assign the class dynamically to your fruit item using className={`<yourFruitColor>`}
  * check if all your fruits now have their color as background


Implement full CRUD (Create-Read-Update-Delete):

* Editing: When clicking a fruit - change the color
  * Open a prompt dialog using JS prompt function to take the color as string
  * Update color of fruit in state & local storage
* Delete: Add a little X in your fruit card
  * On click: Delete the fruit item from state & local storage


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
