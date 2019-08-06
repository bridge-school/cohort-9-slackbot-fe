This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Connecting to the backend

To connect to your backend use the `request` function from `backend-request/index.js`. There is an example of how this is used in `App.js`. This will handle requests being made locally and in production.

Please avoid connecting your frontend directly to firebase, connections to firebase should be handled through your backend.

## Deployments

Everytime you merge a pull request to master, it will run the tests and deploy. You can view your frontend at `project-name-frontend.bridgeschoolapp.io`. This is where your Product Owner will verify and approve the work you're doing!


## Project Workflow

### Setting up

- Clone your git repos directly (do not fork!)
- Follow the setup instructions for each repo in the respective READMEs
- Run the app

### Development Workflow

- Pick a feature / part of a feature from your project board and assign it to yourself. Move the ticket into in progress and make sure your whole team knows you are working on it.
- Pull the most recent version of master and create a branch off it
    - For a feature: `feat/<name of your feature>`
    - For a bug: `bug/<name of bug>`
    - For a chore: `chore/<name of chore>`
- Work on your ticket
- Once you are ready to get some feedback on your code, push your branch
    - `git push origin <name of your branch>`
- Go to GitHub and create a Pull Request
    - The title should be formatted as `[Feature/Bug/Chore][Ticket #] Title of what you did`
    - In the description make sure to link to the ticket and include any relevant screenshots
    - Describe all the changes you have made
- Assign your team members for review, once you have one approval you can merge your code
- Your code will be automatically deployed to the development environment

### General Tips

- Break your features into small chunks of work
- Try to keep PRs as small and single purpose as possible
- Use your class time to break up work, review PRs and make sure everyone leaves with an idea of what they are working on
- Bug people to review your PRs!
- If you have many PRs open, prioritize getting them reviewed and merged over starting new work
