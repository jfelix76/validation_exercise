Test project to explore how to implement sync/async validators

Install homebrew

$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

$ brew update

$ brew doctor

Add to your .bash_profile (or env variables)

export PATH="/usr/local/bin:$PATH"

$ source ~/.bash_profile ** Be sure to open new terminal window session to realize the new changes

Install Node

$ brew install node

$ npm install -g grunt-cli

Install Ionic (latest)

http://ionicframework.com/docs/intro/installation/

Create new Ionic app - select super

$ ionic start angular-validators

Clone / download new project

https://github.com/jfelix76/validation_exercise.git

Copy src/ to angular-validators/src dir

$ cp 'location-of-new-download-or-clone' 'validation_exercise/src'

Change directory to new project and update

$ cd 'new validation_exercise root dir'

$ npm install

Run app

$ ionic serve

