# cero-a-produccion

# Course Outline
## Hello world
### Storybook configuration [Components]
- `npx sb init`
- Choose that is a React project
- `yarn storybook`
### Design Tokens [Components]
- Create tokens.js file
- Create script to tranform the tokens into custom properties
- Add brand colors to tokens*
### Atoms & Molecules [Components]
- Create Paragraph Atom
- Create Button Atom
- Create Heading Atom
- Create Icon Atom
- Create Picture Atom*
- Create ButtonIcon Molecule
### Redux configuration [Web]
- Create ButtonIcon Molecule
- Create Spacer's Layout
### Lint and styling [Components, Web]
- Add a modified version of [EditorConfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)
1. Install ESLint and create a config file following the instructions [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
2. Install Prettier `yarn add --dev prettier`
3. Install the prettier configuration along ESLint following [these](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) instructions
4. Finally configure the precommit hook with lint-staged [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)
5. TODO: Configure stylelint
### Folder Structure [Web]
### Environment variables [Web]

## Connecting both worlds
### Developing an Organism [Components]
### Configuring Hapi [Api]
### Environment variables [Api]
### Configuring Mongoose [Api]
### Folder Structure [Api]
### Developing a Service [Api]

## Logging & Events
### Events in Components [Web]
### Error handling [Web]
### Logging requests [Api]
### Error handling [Api]

## Testing
### Unit testing [Web]
### Snapshot testing [Web]
### Visual tests [Components, Web]
### Integration test [Web]
### Unit testing [Api]
### Integration test [Api]
### End-to-end tests [Web]

## i18n
### Supporting languages [Web]
### Supporting languages [Api]

## Bundling
### Webpack configuration [Web]
### Frontend Optimisation [Web]

## Emailing layer
### Email template system [Api]
### Setup email service [Api]

## Continuous integration & deployment
### Docker
### Kubernetes
### Jenkins


# Notes
## Atomic Design
- Atom: A atom is a component that composed by an unique Atom with/ without HTML tags or just HTML tags.
- Molecule: A molecule is a component that is composed by at least 2 diffent atoms.
