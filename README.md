Altamira Web Project
====================

Instructions to setup and compile this project:

### This steps setup a web app

* Download and install [Node JS](http://nodejs.org/)

* Setup the environment

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
```
* Environment ready, run it

```javascript
grunt serve
```
