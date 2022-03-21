# Barker

This is my degree project, decided to create a dating like app for dogs and their owners. Where i've used a "the dog api" to provide the dog images and information about the fetched dog. I've used an npm packgade called "dog-names" to generate a name for each dog and made two function that generates a random age and height. That eventually gets used to create a coustom dog object to be sent to the firebase-firestore

The idea is that you as a user can match with a dog that is your height +6cm or -6cm, that you then can write to.

## Naming

- Filename: Use PascalCase e.g, `ButtonComponent.jsx`
- Component Naming: Use the filename as the component name e.g, `ButtonComponent`
- Reference Naming: Use PascalCase e.g,

```bash
import ButtonComponent from './ButtonComponent';
```

- Props Naming: Use all lower case.

```bash
<MyComponent color="blue" />
```

- Class & ID's: Use CamelCase e.g, `buttonWrapper`
  - Use BEM naming convention for modifier to change appearance, behavior or state e.g, `buttonWrapper--disabled` or `buttonWrapper_child--disabled`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npx cypress open`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
