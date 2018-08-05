# Table syntax in Markdown

VuePress uses [GitHub-style table markdown](https://help.github.com/articles/organizing-information-with-tables).

### Table syntax simplified

Tables consist of a two-line required header, then zero or more rows.

* At least one header consisting of a line surrounded by pipe characters: `| Header |`
* A line of dashes surrounded by pipe characters: `| ------ |`
* Zero or more rows text surrounded by pipe characters, like this: `| Row 1 |`

Let's put it all together.

### Simple table example

To get a table that looks like this:

##### Result:

| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 1, Column 2            |


You'd use the following markdown:

##### Markdown:

```markdown
| Header                |                            |
| --------------------- | -------------------------- |
| Row 1, Column 1       | Row 1, Column 2            |
```

### Minimum table: a header only

The absolute minimum table would consist of a single header with no rows:

##### Markdown:

```markdown
| Header                |           
| --------------------- | 
```

##### Result:

| Header                |           
| --------------------- | 

### Table with one header and one row:

Let's extend the previous example with one row:

##### Markdown:

    | Header                |                            
    | --------------------- | 
    | Single cell           |

##### Result:

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

##### Markdown:

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

    | Column 1| Column 2         |
    | ------------ | --- |
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


