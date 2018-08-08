## Adding a nav bar to the top of the page

The defaul theme lets you add a nav bar to the top of the page by
adding a `nav` declaration to the `themeConfig` object inside
`module.exports`.

### Direct links on the navbar

Here's a simple one with links to the home page
and a root-level Contact page:

```javascript
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contact', link: '/contact.md' },
    ]
  }
}
```
