# Special features of VuePress Markdown

## Automatic table of contents generation

Anywhere you place the markup `[[toc]]` on a line by itself
VuePress generates a table of contents for the current file
in unordered (bullet) list format. For example:

##### Markdown:


```markdown
[[toc]]

## Let's talk about me

Now we're getting somewhere

## No, seriously. A little more about me

I think this is a healthy topic of conversation
### Can we go deeper?

But of course! Who doesn't love to hear about me?

```

##### Result:

***
* [Let's talk about me](#let-s-talk-about-me)  
* [No, seriously. A little more about me](#no-seriously-a-little-more-about-me)
  - [Can we go deeper?](#can-we-go-deeper)

## Let's talk about me

Now we're getting somewhere

## No, seriously. A little more about me

I think this is a healthy topic of conversation
### Can we go deeper?

But of course! Who doesn't love to hear about me?

***




