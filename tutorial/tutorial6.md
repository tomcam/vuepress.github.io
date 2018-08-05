# Displaying code in Markdown
## Code listings in Markdown files

If you're writing technical documentation you may want a way to delineate blocks of 
code, sometimes known as a *code fence*. The result is also known as a *code block*.

### Creating a code block, aka code fence

The simplest way to show code is to wrap it between two lines consisting of 3 backticks in a row:
    
    ```
    title: Welcome to Example.com
    ```

And the result would be:

 ```
 title: Welcome to Example.com
 ```

You can get exactly the same effect by preceding each line of code with exactly 4 spaces.

### Highlighting code

You can highlight lines of code easily. Immediately after the three
tickmarks (or any language specifier, explained in the next section), 
enclose the line numbers in curly braces. You can include ranges, and
you can specify multiple expressions separated by commas. 

For example, you'd use `{5}` to specify line 5, `{12-17}` to specify
lines 12 through 17. The example below highlights lines 5 and 6, 
12 through 17, and line 19:

##### Markdown:


	```javascript{5-6,12-17,19}
	export function getLocalVueByMode (mode) {
	  const localVue = createLocalVue()
	  localVue.use(Router)

	  // register global component
	  localVue.component('OutboundLink', mockComponent('outbound-link'))

	  // register page component in root route.
	  localVue.component(i18nSiteData.pages[0].key, mockComponent('page-component'))
	  localVue.component(simpleSiteData.pages[0].key, mockComponent('page-component'))

	  // data mixin
	  if (mode === 'i18n') {
	    localVue.mixin(dataMixin(i18nSiteData))
	  } else {
	    localVue.mixin(dataMixin(simpleSiteData))
	  }

	  return localVue
	}

##### Result:

```javascript{5-6,12-17,19}
export function getLocalVueByMode (mode) {
  const localVue = createLocalVue()
  localVue.use(Router)

  // register global component
  localVue.component('OutboundLink', mockComponent('outbound-link'))

  // register page component in root route.
  localVue.component(i18nSiteData.pages[0].key, mockComponent('page-component'))
  localVue.component(simpleSiteData.pages[0].key, mockComponent('page-component'))

  // data mixin
  if (mode === 'i18n') {
    localVue.mixin(dataMixin(i18nSiteData))
  } else {
    localVue.mixin(dataMixin(simpleSiteData))
  }

  return localVue
}
```



### Vue code inside code blocks

If you're documenting Vue.js itself, see [Escaping](https://vuepress.vuejs.org/guide/using-vue.html#escaping).

### Keyword highlighting for computer languages

Suppose you're documenting YAML. You could follow the 3 backticks with the word `yaml`
to show it with keyword highlighting:

    ```yaml
    title: Welcome to Example.com
    ```
 The published result would show like this:
 
````yaml
 title: Welcome to Example.com
````
 
Many, many languages are supported. Here are a few examples:

#### bash

Markdown source:

    ```bash
    echo hello, world.
    ```
Published result:

```bash
 echo hello, world.
``` 
#### Javascript

Markdown source:

    ```js
    document.write('hello, world.)
    ```
    
Published result:

```js
  document.write('hello, world.)
```
  
#### Markdown 
 
Markdown source:

     ```markdown
      ### hello, world.
     ```
    
Published result:

```markdown
### hello, world.
```
 
#### Markdown (alternative)
 
Markdown source:

     ```md
      ### hello, world.
     ```
    
Published result:

```md
### hello, world.
```
 
#### Python
 
Markdown source:

    ```python
    print("hello, world.")
    ```

Published result:

```python
print("hello, world.")
```

### Languages with keyword highlighting support in VuePress

VuePress gets its keyword highlighting support through the [Prism](prismjs.com) Javascript library.

::: tip
There are too many languages to make an exhaustive list here, but you can find them
in the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json)
under `languages`.
:::

Here are many of the most common ones.
 
| Language      | Tag          |
| ------------- |:-------------| 
| Applecript    | applescript  |
| Asciidoc      | asciidoc     |
| ASP.NET       | aspnet       |
| batch files   | batch        |
| CSS           | css          |
| Go            | go           |
| HTTP          | http         |
| Java          | java         |
| Javascript    | js           |
| JSON          | json         |
| Markup        | markup       |
| Markdown      | markdown     |
| Markdown      | md           |
| Objective-C   | objectivec   |
| PHP           | php          |
| Powershell    | powershell   |
| Python        | py           | 
| Ruby          | ruby         |
| SASS          | sass         |
| SQL           | sql          |
| Swift         | swift        |
| VB.NET        | vbnet        |
| Vim           | vim          |
| Wiki          | yaml         |

Complete list can be found in the "languages" node of 
the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json).


