# no_sleepy

A simple nodejs cli utility to keep your computer from falling asleep if domain settings cannot be changed. It works by
moving the mouse for you automatically at a configured interval which should keep your desktop/laptop for starting the
screen saver and locking the machine. This is particularly useful in environments where your system administrator
won't allow you to change those settings.

To install no_sleepy, I recommend installing it as a global NPM package so you can easily run it from the terminal from
any directory:

```
npm install -g no_sleepy
```

To run no_sleepy invoke it from the terminal as follows:

```
$ node index.js <SCREEN_SAVER_TIME>
```

For example, if your screensaver kicks in every 15 minutes, run

```
$ node index.js 15
```
