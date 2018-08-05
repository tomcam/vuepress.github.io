# Creating sidebars for the default theme

The default VuePress theme has extensive sidebar support. 
The sidebar helps you navigate through the site efficiently
and is built automatically from headers on the current page.

A typical `config.js` might start with the following declarations: (or it could be empty):


```javascript
module.exports = {
	title: 'VuePress tutorial',
	description: 'VuePress examples'
}
```

Theme-specific information like the sidebar goes into the logically named
`themeConfig` declaration:


module.exports = {
	title: 'VuePress tutorial',
	description: 'VuePress examples',
	themeConfig: {
		sidebar: [
			{
				'/',
				'/chapter1.md'
			}
		]
	}
}

