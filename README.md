## Built with

- React
- Material-UI v4

## Quick start with React Scripts

- Download the theme
- Make sure your NodeJS and npm versions are up to date
- Install dependencies: `npm install`
- Start the server: `npm run start`
- Views are on: `localhost:3000`
- Build on production: `npm run build`

## Folder structure

In the root folder there are 2 folders:

- **public** *Here are the public assets, images and `index.html` file.*
- **src** *Here is the main business logic of the theme.*
- **|----components** *The reusable and stand-alone components are stored here, by following [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)*
- **|----|----atoms** *These are small functional components that are not using any other atomic components*
- **|----|----molecules** *Tese are those functional components which have dependencies from other atoms*
- **|----|----organisms** *These are the functional components that are using other molecules and atoms*
- **|----layouts**
- **|----|----Main** *The main layout: header navigation, the main container and footer part*
- **|----|----Minimal** *The minimal layout*
- **|----theme** *In this folder there are overrides of the default color palette and typography coming from MUI*
- **|----views** *All the views/pages that are available. Here are the combination and composition of re-usable components and pages representations.*


## Landing Pages Built For Customization

Landing page examples can be used out of the box, but since they’re built on flexible components, you can also create new pages all your own with ease. Copy-paste a section here, a component there, switch up a few variables, and you have an entirely new landing!
