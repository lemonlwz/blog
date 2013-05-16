---
layout: page
title: coolicer lemon郑
tagline: Sky's the Limit
---
{% include JB/setup %}

appoint
=======
  
**params:**

  - account
  - pw
  - id `int`  -- _教材id_
  - params `array` -- _指定课程名称数组_
  
**response:**

  - success  `(0 or 1)`
  - info  `(string)`

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
