# Adding a tagline to the home page

The default theme's home page template has a tagline that's meant to go just under the hero text. It looks like this:

![Screen shot of home page with 1 feature markup](/assets/img/default1-tagline-labeled.png)

```yaml
tagline: Healthy, Delicious Dim Sum 7 Days a Week!
```

:::
Make sure you have `home: true` in the YAML. This feature is only for home pages.
:::

In context, it would look something like this:

---
home: true
heroText: Springfield Dim Sum
heroImage: heroImage: /img/springfield-dim-sum-800px.png
features:
- title: Parking 
  details: Plenty of free parking at night and free validation during the business day
- title: Healthy Options 
  details: Vegan, vegetarian, and gluten-free options available on request.
- title: We do special events 
  details: We handle events as small as an office meeting to weddings and huge corporate events 
tagline: Healthy, Delicious Dim Sum 7 Days a Week!
---

## Location and Directions
```

It would look like this in production:

![Screen shot of home page with 1 feature markup](/assets/img/default1-tagline.png)
