# G2 Weather Forecast Exercise

## Exercise Description

This is a simple react app that retrieves the weather forecast from [Open Weather Map](https://openweathermap.org/).

## User
### How to use it

The App consists of a textfield where you must enter the city from which you wish to consult the weather forecast in the format **_City, Country Code_** for example `london,uk`, once entered, you must press the button to obtain the weather forecast.

## Developer
### Commands

All commands should be run at the project directory:

-Use **npm start** to run the app in development mode. Open `http://localhost:3000` to view it in the browser.

-Use **npm test** to run the test runner in the interactive watch mode.

-Use **npm run build** to build the app for production, the result will be stored at the **build** folder.

### Deploy to GitHub pages

GitHub provides a free hosting for static web apps or documentation sites. This can be done by 4 simple steps

`Note your react app code should be already pushed to the github account`

1. **Add homepage**
    Open the **package.json** file and add *homepage* property
    `"homepage":"https://yourusername.github.io/repository-name"`
    replace the above url with your github username and repository name.

2. **Install github pages**
    We need to install the package for github pages
    `npm install --save gh-pages`

3. **Deploy script**
    Open the **package.json** file and add
    ```"scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d build", }```
    Now in the terminal run **_npm run deploy_**

4. **Setup source**
    Finally once you deployed at the GitHub repository go to settings tab and scroll down to GitHub Pages and then choose a branch to gh-pages.

That's it! You can now see your react app like the URL configured at step 1