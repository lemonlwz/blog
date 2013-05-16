---
layout: page
title: coolicer lemon郑
tagline: Sky's the Limit
---
{% include JB/setup %}

appoint
=======
  
**params:**

<<<<<<< HEAD
  * account
  * pw
  * id `int`  -- _教材id_
  * params `array` -- _指定课程名称数组_
=======
  - account
  - pw
  - id `int`  -- _教材id_
  - params `array` -- _指定课程名称数组_
>>>>>>> 9735b66832e3a6df3e08e07c1270b646f94cfa62
  
**response:**

  * success  `(0 or 1)`
  * info  `(string)`

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
