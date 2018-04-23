# Adding "feature" markup to the home page

The Vuepress default theme has markup that displays a headline-like feature, and a smaller
headline-like text explanation. These are added using YAML markup called `feature` that, again,
is unique to the Vuepress default theme.

Here it is isolated:

```yaml
features:
- title: Parking 
  details: Plenty of free parking at night and free validation during the business day
```

* Update your README.md file to look like this, with that
addition in context:

```yaml
---
home: true
heroText: Springfield Dim Sum
heroImage: heroImage: /img/springfield-dim-sum-800px.png
features:
- title: Parking 
  details: Plenty of free parking at night and free validation during the business day
---

## Location and Directions
  
```

When you update README.md and save it, you'll see this:

![Screen shot of home page with hero text](/assets/img/default1-feature1.png)

