---
title: 'Nick’s Micro Blog'
layout: 'layouts/archive.njk'
pagination:
  data: collections.items
  size: 10
  reverse: true
permalink: archive/{{ pagination.pageNumber }}/index.html
---

Hi folks, I’m [Nick](//rowlando.dev), and this is my Micro Blog. It’s made with [Eleventy](//11ty.dev), lives on [Netlify](//netlify.com).

You can see the source code, [here](https://github.com/rowlando/microblog) (with thanks to [Andy](https://hankchizljaw.com/wrote/jamstack-ifttt-and-netlify:-a-power-trio/)).
