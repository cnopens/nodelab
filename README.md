# nodelab
---
***nodejs from base to advance***

## nodejs quick start

1. Nodejs-App-Init

```
How to start any new Node.js project:

$ npx license mit > LICENSE
$ npx gitignore node
$ npx covgen YOUR_EMAIL_ADDRESS
$ npm init -y

````

These four commands do everything that I was doing manually and more, setting up a project for success right from the start.

    npx license mit uses the license package to download a license of choice, in this case the MIT license
    npx gitignore node uses the gitignore package to automatically download the relevant .gitignore file from GitHub’s repo
    npx covgen uses the covgen package to generate the Contributor Covenant and give your project a code of conduct that will be welcoming to all contributors

If you’ve not seen npx before it looks locally to see if there is a command to run and executes it, if there is no local command it will try to download, install the command from npm, and run it. This is really useful when generating new projects and saves you from globally installing a bunch of npm packages that are only used in this setup mode.

    npm init -y accepts all of the default options that npm init asks you about

Tierney also suggested customising your npm init defaults so that the output of npm init -y is correct.

2. Customising npm init

``` Customising npm init
You can see your current npm config by entering npm config list on the command line. To just see the config that affects npm init you can grep for “init”:

npm config list | grep init

There are a number of defaults you can set; author name, author email, author url, the license, and the version. To set them, you can enter them on the command line or use npm config edit to open up the config file in your text editor. The command line is easy enough though, you can set all five defaults like so:

npm set init.author.name "Your name"
npm set init.author.email "your@email.com"
npm set init.author.url "https://your-url.com"
npm set init.license "MIT"
npm set init.version "1.0.0"

Once you have that customised to your liking, npm init -y will always produce the right settings.

```
3. Building your own init script

~There are some improvements that I’d make to Tierney’s commands, though I appreciate he was constrained by Twitter. Here’s a bash script I have come up with inspired by his tweet.

```
function node-project {
  git init
  npx license $(npm get init.license) -o "$(npm get init.author.name)" > LICENSE
  npx gitignore node
  npx covgen "$(npm get init.author.email)"
  npm init -y
  git add -A
  git commit -m "Initial commit"
}
```
To the original I’ve added fetching the license type, the author name and email from the npm init defaults. I’ve also initialised a new git repository and committed the results of this script as the “Initial commit”.

You can take this function and add it to your ~/.bash_profile. Then, either source ~/.bash_profile or open a new command line window and run node-project. Feel free to add or remove other bits as you see fit to create your perfect initialisation script.


## 问题汇总
TypeError: events.EventEmmitter is not a constructor




## nodejs +mongoose practice


参与

participant


## Resources

https://brainhub.eu/blog/javascript-frameworks-for-desktop-apps/

