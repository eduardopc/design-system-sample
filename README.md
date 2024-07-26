# Monorepo - Sample Design System

Project built using TS, Stitches and Radix to build the components

### How to show the tokens/components

In the root folder, you can run the command to build all the packages in the watch mode using turbo:

```js
npm run dev
```

In case the Storybook not goes up automatically, you can up the Storybook through the __packages/docs__ folder and run the command:

```js
npm run dev
```

### How to create new shared packages

To create a new package you should go to the __packages__ folder and start a new npm project on there using `npm init -y`, remember to change the package name using the same prefixx used in the other packages.

Packages that should be private must to change the property private to true inside of the `package.json` of the corresponding package.

Once everything is done (remember to always build the new package and after that you can install the dependencies in the root of the project) you can import the new package inside of the other packages.

### How to generate a CHANGELOG

This command will map all touched packages to be generated the changelog:

```js
npm run changeset
```

After that, run the command below to generate the changelog inside of the respective package:

```js
npm run version-packages
```