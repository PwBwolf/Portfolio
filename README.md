#Seed application

##### node.js and angular 2 basic setup.
___

Clone down into local repo.


In the root directory of the project run the following commands.
```
npm install
```
then...
```
npm run gulp
```
then..
```
npm start
```

### Basic Commands
---
1. **npm run start**
⋅⋅* Will run the application in "node ./bin/www".
2. **npm run vendor**
⋅⋅* Will run the gulp task to build necessary third party libraries script file to be referenced in the html.
3. **npm run gulp**
⋅⋅* Will run the gulp clean task which cleans out the public/js/ section of the application, this holds the production version code.
4. **npm run build:production**
⋅⋅* Will run the gulp clean, minify the code and the build the system.js build file for production.