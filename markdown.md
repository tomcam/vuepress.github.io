# Markdown in VuePress: a visual guide

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

### Keyword highlighting

The above example is valid YAML. You could follow the 3 backticks with the word `yaml`
to show it with keyword highlighting:

    ```yaml
    title: Welcome to Example.com
    ```
 The result would show like this:
 
````yaml
 title: Welcome to Example.com
````
 
 Many, many languages are supported. Here are a few examples:

#### bash

    ```bash
    echo hello, world.
    ```
 The result would show like this:
 
```bash
 echo hello, world.
``` 
#### Javascript
 
    ```js
    document.write('hello, world.)
    ```
    
```js
  document.write('hello, world.)
```
  
 #### Markdown 
 
   ```markdown
    ### hello, world.
    ```
    
 ```markdown
  ### hello, world.
 ```
 
  #### Python
 
   ```py
    print("hello, world.")
    ```
    
 ```py
  print("hello, world.")
 ```
 
