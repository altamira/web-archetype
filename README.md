Altamira Web Project
====================

Instructions to setup and compile this project:

### This steps setup a web app

1. Download and install [Node JS](http://nodejs.org/)

2. Clone this repository at your git home

3. Setup the environment

```javascript
cd <GIT_HOME>
git clone https://github.com/altamira/web-archetype.git <you project name>
cd <your project name>
npm install -g yo
npm install -g generator-angular
bower install
cd bower_components/overthrow
npm install
grunt
cd ../..
npm install
```
4. Environment ready, run it

```javascript
grunt serve
```
