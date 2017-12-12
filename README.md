# Observatory3_vue

> A Vue.js project

## Core skills:
    HTML
    CSS
    JAVAScript
   
## Useful tools:
    For text editing: Sublime text
    For multiple separate terminal sessions: Tmux

## Prerequisites:    
    [Git](https://git-scm.com/) (practice it [here](https://try.github.io/levels/1/challenges/1))
    [Node.js and npm](https://nodejs.org/) Node ^4.2.3, npm ^2.14.7 (nodejs-legacy for debian-based distributions)
    [Docker](https://docs.docker.com/)
    [Docker-Compose](https://docs.docker.com/compose/install/)
    [Bower](https://bower.io/) (npm install --global bower)
    [Grunt](http://gruntjs.com/) (npm install --global grunt-cli)

### For Linux:
    Installing [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/):     

### For Mac:

    Using the terminal [install Homebrew, Node.js and npm](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)
    Install [mongoDB](https://treehouse.github.io/installation-guides/mac/mongo-mac.html) (easiest is using Homebrew, type “brew install mongodb” in terminal)

### For Windows (tentative--no current developers are using Windows):

    Install [Node.js and npm](http://blog.teamtreehouse.com/install-node-js-npm-windows)
    Install [mongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
    
### After installing:
    In  “setup_sh.sh” edit USERNAME to your username.
    Save and run setup_sh.sh by typing “sudo ./setup_sh.sh” 
    Do the same with “docker_compose_yml.sh” file
    Under “/observatory-client/build/dev-server.js”  add code below

     watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
        stats: {
        colors: true,
        chunks: false
      }

### Commandline:
    *recommend to use Tmux*
    Open two different directory: one for observatory3 (http://localhost:9000), another for observatory-client ( http://localhost:8080),
    Run npm “npm start" for both observatory3 and observatory-client
    After editing the code, if observatory-client side npm doesn’t get updated, check “After installing” above.

    Once everything is up and running, start developing! DON’T forget to commit frequently on your personal fork. If you are not familiar with git, read prerequisite above about git. 

### Understanding Vue:
    Knowing the basics of JavaScript
    Vue basics (components, props, class/style binding)
    Vue router to add functionality
    Overview of how vueX  works (comparable to Redux) 
    Bootstrap4, particularly containers/components

### Developer Procedure:
    Learn basic HTML,CSS, Javascript, and git:
    Lynda.com, codecademy, hackerrank
    Setup dev environment
    Check on github if there is any issue that are assigned to you.
    Pull request from the upstream and commit.
    Work on the issue that are assigned. If there aren’t any, assign some issues that you want to work on to yourself.
    Push request after working on the issue to YOUR repository!!! Not upstream!
    Once your repo is ready to merge with the upstream. Talk with team manager and get it confirmed. 
    Repeat 3~7. 


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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
