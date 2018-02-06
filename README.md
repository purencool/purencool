# Purencool Local Installation

This project allows for a base install using Vagrant Beetbox and an initial install of Drupal 8

All the websites modules can be managed by Composer and Git Workflow even on shared hosting for small websites.

## Profiles
Out of the box, this will install Purencool custom base profile. If you want to install a core profile then navigate to .beetbox/config.yml and comment out purencool_base and change it for one that is more
suitable.

#### Purencool base
This profile is a standard profile created by Drupal 8 core that has extra modules installed and uses Bootstrap as the default theme. We have removed comments as they are not needed all the time.

## Installation
Installation is relatively easy and you can have a Drupal website ready in no time, just follow the instructions.

#### Local developer requirements
To get a local installation of this software your Operating System will need the following software installed; 

1. Vagrant 
2. Git
3. Composer


#### Website Installation


1. Clone master branch of this repo 
2. From the command line navigate cloned repo
3. Make the `configure` file an executable
4. From the command prompt `bash configure`

Once it is configured navigate to http://purencool.local/user and the username and password is;   
username : admin
password: admin

#### Reinstall a profile

If you want to reinstall a profile it is really easy **(note this will destroy your entire website)** 

1. Navigate to `.beetbox/config.yml`
2. Change profile name by commenting it out
3. In the websites root directory type `vagrant ssh`
4. Then type `drush si` 

## Headless Drupal using react example
There is a number of ways to get react to display a website. One simple way is to copy the React code into a webserver directory. This system has a built in tool to see a React example in action.  

1. Clone master branch of this repo 
2. From the command line navigate cloned repo
3. Make the `configure` file an executable
4. From the command prompt `bash configure`
5. Checkout react branch by `git checkout headless-drupal-using-react`
6. Update drupal configuration  http://purencool.local/admin/config/development/configuration 
7. Go back to the command line `composer update`
8. In your browser navigate to http://purencool.local/react/index.html 
