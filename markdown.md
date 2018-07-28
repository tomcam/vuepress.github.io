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

### Vue code inside code blocks

If you're documenting Vue.js itself, see [Escaping](https://vuepress.vuejs.org/guide/using-vue.html#escaping).

### Keyword highlighting

The above example is valid YAML. You could follow the 3 backticks with the word `yaml`
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
in the PrismJS source file [components.json](https://github.com/PrismJS/prism/blob/master/components.json).
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

## Tables in VuePress Markdown

VuePress uses [GitHub-style table markdown](https://help.github.com/articles/organizing-information-with-tables).

### Table syntax simplified

Tables consist of a two-line required header, then zero or more rows.

* At least one header consisting of a line surrounded by pipe characters: `| Header |`
* A line of dashes surrounded by pipe characters: `| ------ |`
* Zero or more rows text surrounded by pipe characters, like this: `| Row 1 |`

Let's put it all together.

### Simple table example

To get a table that looks like this:

| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 1, Column 2            |

You'd use the following markdown:

    | Header                |                            |
    | --------------------- | -------------------------- |
    | Row 1, Column 1       | Row 1, Column 2            |

### Minimum table: a header only

The absolute minimum table would consist of a single header with no rows:

| Header                |           
| --------------------- | 

Markdown:

    | Header                |           
    | --------------------- | 

### Table with one header and one row:

Let's extend the previous example with one row:

| Header                |                            
| --------------------- | 
| Single cell           |

Markdown:

    | Header                |                            
    | --------------------- | 
    | Single cell           |

### Typical table with several rows

Most tables have multiple columns and rows, for example:

| Column 1        | Column 2         |
| --------------- | ---------------- |
| Row 1, Column 1 | Row 1, Column 2  |
| Row 2, Column 1 | Row 2, Column 2  |
| Row 3, Column 1 | Row 3, Column 2  |
| Row 4, Column 1 | Row 4, Column 2  |

Markdown:

    | Column 1        | Column 2         |
    | --------------- | ---------------- |
    | Row 1, Column 1 | Row 1, Column 2  |
    | Row 2, Column 1 | Row 2, Column 2  |
    | Row 3, Column 1 | Row 3, Column 2  |
    | Row 4, Column 1 | Row 4, Column 2  |

### Dash and space count don't matter

The number of dashes used to specify the header and the number of spaces surrounding
the pipe characters don't matter. Take the following table:

| Column 1     | Column 2         |
| ------------ | ---------------- |
| row 1        | 2nd column       |
| row 2        | 2nd column       |

You could use this crazy-ass markdown for it:

    | Column 1      | Column 2         |
    | ------------ | ---------------- |
    | row 1 | 2nd column  |
    | row 2    | 2nd column    |

Or you could use this markup:

    | Column 1     | Column 2         |
    | ------------ | ---------------- |
    | row 1        | 2nd column       |
    | row 2        | 2nd column       |

And they would both produce the same output.

### Aligning text within columns

Normally table text is left-aligned. You can change alignment by using colon characters
(`:`) in the second header row, which contains the dash characters (`-`). 

* **To left-align the column**, replace the leftmost dash with a colon
* **To right-align the column**, replace the rightmost dash with a colon
* **To center-align the column**, both the leftmost and rightmost dashes with a colon

Here's a table showing alignment:

| Alignment             | Column 2       | Column 3      |
| --------------------- |:--------------:| -------------:|
| Center align column 2 | *              |               |
| Right align column 3  |                | Boo           |
| Right align numbers   |                |   1           |
|                       |                | 123           |
|                       |                |     $456.67   |

Markdown:

    | Alignment             | Column 2       | Column 3      |
    | --------------------- |:--------------:| -------------:|
    | Center align column 2 | *              |               |
    | Right align column 3  |                | Boo           |
    | Right align numbers:  |                |   1           |
    |                       |                | 123           |
    |                       |                |     $456.67   |

For more details, see the 
[GitHub style documentation](https://help.github.com/articles/organizing-information-with-tables/).

## Emojis in VuePress markdown

VuePress includes emojis as part of its Markdown extensions. You include them in your text by surrounding 
an emoji code with colon characters. For example, you'd use `:smile:` for :smile:,
or `:thumbsup:` for :thumbsup:.

Here is a table with some common  emojis. For the full list of supported codes see the
[Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/).


| Emoji                 | Code             |
| --------------------- | ---------------- |
| :smile:               | `:smile:`        |
| :frowning:            | `:frowning;`      |
| :star: | `:star:` |
| :heart: | `:heart:` |
| :thumbsup: | `:thumbsup:` |
| :thumbsdown: | `:thumbsdown:` |
| :ok_hand: | `:ok_hand:` |
| :hand: | `:hand:` |
| :exclamation: | `:exclamation:` |
| :question: | `:question:` |
| :speech_balloon: | `:speech_balloon:` |
| :thought_balloon: | `:thought_balloon:` |
| :sunny: | `:sunny:` |
| :cloud: | `:cloud:` |
| :umbrella: | `:umbrella:` |
| :earth_africa: | `:earth_africa:` |
| :sound: | `:sound:` |
| :speaker: | `:speaker:` |
| :mute: | `:mute:` |
| :bell: | `:bell:` |
| :no_bell: | `:no_bell:` |
| :computer: | `:computer:` |
| :lock: | `:lock:` |
| :unlock: | `:unlock:` |
| :house: | `:house:` |
| :office: | `:office:` |
| :hospital: | `:hospital:` |
| :rocket: | `:rocket:` |
| :arrow_backward: | `:arrow_backward:` |
| :arrow_forward: | `:arrow_forward:` |

**Complete list:** [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/).
