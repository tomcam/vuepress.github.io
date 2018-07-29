# Vuepress SEO: improving your search engine rankings

<!-- Illustrations
      - vue-js-google-search.png: Results of rsearching vor vue.js in Google. Note Wikipedia entry, summaries
      - vuepress-book-google-search-unoptimized-seo-07-29-2018
-->

<!-- Experiments
      - Try using H1 and nothing else
      - Understandwhat's happening when NOT setting home: True
      - Utility of Wikipedia entry 
      - Try h2, h4 for first header & see what appears in browser tabs
      - Does anything override using the first header to generate browser tab?
-->


## Description shown by search engines


## Text of browser tab

The text of the first header appears in your browser tab. It's assembled from two sources:

1. The first header on your page
2. The [title defined in config.js](./config-title.md)

They're separated using the vertical pipe character and a space on each side.
So if your site is titled `Awesome Guitars` and page consists of

```md
# About the Fender Performer

All geniuses agree the best guitar is the Fender Performer.
#
```

Then the browser tab will probably read as `Awesome Guitars | About the Fender Performer`.
The operative phrase is "probably" because this behavior isn't specified by 
any standards documents.

## Favicon

## Good organization makes great SEO

Both people and search engines love well-organized sites. In general:

* Keep to one topic per page
* The first header of the page should be an H1 (A single `#` starts the header) and should contain the keyphrase
users are most likely to search for
* There should be only one H1
* Subordinate topics should be hierarchically organized, so H2 subtitles would be second-most important and H3s would be
third most important

All of these principles are general and your mileage may vary. If a hugely influential Instgrammer, 
former US president, or FIFA star happens to mention your site online, it will rocket to the
top of search at least temporarily no matter how badly it's search engine optimized.

## Open source helps

If you're willing to make the source pages of your book publicly viewable on GitHub, you'll get a huge SEO booost.
