# Eric Lajoie's Site

This is a [Jekyll](http://github.com/mojombo/jekyll) powered site.

## Structure

```
_layouts/default.html -- main layout
css/main.css -- main style sheet
projects/ -- project pages
woodworking/ -- woodworking pages
index.html -- main web page

```

### Development

When doing development, start the Jekyll server by running the following at the command line:

```
./start.sh
```

It should load the web page at http://localhost:4000.

To forcibly restart the jekyll server, press `Ctrl+C` in the terminal. When the prompt shows up again, re-run the `./start.sh` command. If it gives you an error about permissions, run `chmod +x ./start.sh` first.

### Deploy

To deploy, simply push to GitHub Pages. GitHub Pages supports Jekyll and will handle building it for you. If you want to build the files locally run:

```
bundle exec jekyll build
```


### Install Dependencies

To get started, you'll need jekyll installed

```
gem install jekyll
```

You may also need bundler

```
gem install bundler
```

Then you run

```
bundle install
```
