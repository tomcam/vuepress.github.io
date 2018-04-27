# Adding a description to your site

Add [config.js](./config1.md) the `description` attribute to your site
to create the [description meta tag](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML),
which is often used by search engines to display a description for your site.

## The title is available in markdown as $site.description

Your markdown can refer to the `$site.description` attribute like this:

```
This site's description: {{ $site.description }}
```

It can also be used in headers as shown in the example below.

## Short example project using $site.description

Here is a complete VuePress site using `$site.description`:

* Create the file `/.vuepress/config.js` with the following contents:

###### file /.vuepress/config.js
```javascript
module.exports = {
    description: "Springfield's best Chinese food!"
}
```

* Create the minimal home page shown here:

###### file ./README.md

::: v-pre
```markdown
## Welcome to {{ $site.description }} 
```
::: v-pre

* Run `vuepress dev` to see the generated page:

![Screen shot of home page without title from config.js](/assets/img/config-description.png)


* Here is the source code for the generated page in your browser:

```html{7}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    <title></title>
  <meta name="description" content="Springfield's best Chinese food"></head>
  <body>
    <div id="app"></div>
  <script type="text/javascript" src="/assets/js/app.js"></script></body>
</html>
```
