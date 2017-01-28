# RCB|RealChat

RealChat lets users within a defined area view send chat messages to each other. Chat rooms can be set to a particular set of coordinates.

##Views

![login](/images/login.png "Sign up and login")

![channel](/images/channels.png "Chatrooms")

![direct message](/images/dm.png "Users can send direct messages")

## Prerequisites

For local development you will need to install meteor.

### Install Meteor

For windows users go to [meteor website](https://www.meteor.com/install) and download the installer.

Mac users:

```
curl https://install.meteor.com/ | sh
```

### Run dev envionment

Clone the repository

```
git clone https://github.com/mqschwanda/RCB-RealChat.git
```
Navigate to directory and install dependencies

```
cd RCB-RealChat
meteor npm install --save babel-runtime
```
Start the app. The app is set to run on localhost:3000.

```
meteor
```
## Deploy with Heroku and use mLabs for management of server data 

Create heroku instance

```
heroku login
heroku apps:create realestchat
```

Set meteor buildpack for the heroku instance

```
heroku buildpacks:set https://github.com/jordansissel/heroku-buildpack-meteor.git
```

Create mLab instance

```
heroku addons:create mongolab:chatappdata
```

Get the mongolabURI value for the next step

```
heroku config | grep MONGOLAB_URI
```

Plug in the URI value below

```
heroku config:add MONGO_URL=<MONGOLAB_URI value>
heroku config:add ROOT_URL=https://realestchat.herokuapp.com
```

Check that the remotes exist and work

```
git remote -v
// The output should look like this
heroku https://git.heroku.com/foobar.git (fetch)
heroku https://git.heroku.com/foobar.git (push)
```

Deploy app

```
git push heroku master
```

## Authors

* [Mark Q S](https://github.com/mqschwanda) 
* [Meredith W](https://github.com/Meredith-W)
* [Jessy H](https://github.com/JesseHappel)
* [Stacy T](https://github.com/strentnj)

## Acknowledgments

* Thanks to Dan, Nate, Jimmy for their help and inspiring words!


