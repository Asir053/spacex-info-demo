# SpaceX Launches

## Demo Link

This app can be found [here](https://spacex-launches-info.herokuapp.com/).

## Dependencies

### Redux, Axios etc.

Redux, Axios, React-Redux, @reduxjs/toolkit these 4 are installed.

```
npm install --save redux

npm install --save react-redux

npm install axios

npm install @reduxjs/toolkit
```

### Bootstrap 5

```
npm i bootstrap@5.0.0-alpha1
```

### Dev Dependencies for eslint and prettier

```
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node
```

Airbnb style guide. The command below installs eslint-plugin-import, eslint-plugin-react, eslint-plugin-react-hooks, and eslint-plugin-jsx-a11y.

```
npx install-peerdeps --dev eslint-config-airbnb
```

### .prettierrc file for creating prettier rules

### Dependencies for unit testing

```
npm install --save-dev @testing-library/react

npm i --save-dev react-test-renderer

npm i --save-dev @testing-library/jest-dom
```

## Steps to deploy to Heroku

- Created a new application on Heroku.

- Selected GitHub as the deployment method.

- Connected to the repository.

- Enabled Automatic Deploys.

- Selected Main branch and clicked 'Deploy Branch'.

