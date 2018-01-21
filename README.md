# vuelogin

> This is an application build in vue framework. login app

## Required Files
> Before you can start using the aplication, You need an environment file, a json file that holds the database `firebase` credetials. All the creadentials are provided once you creaate a firebase application.
Create the file inside the config folder and structure it as shown below:-

``` json
  {
  "firebase": {
    "apiKey": "API KEY HERE",
    "authDomain" : "AUTHDOMAIN.firebaseapp.com",
    "databaseURL" : "https://DBURL.firebaseio.com",
    "projectId" : "vue-login-ID",
    "storageBucket" : "vue-login-ID.appspot.com",
    "messagingSenderId" : "MESSAGE-ID"
  }
  }
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
