---
layout: default
title: 你好，世界
---

{{ page.title }}
=======
我的第一篇文章
**params:**

  - account
  - pw
  - id `int`  -- _教材id_
  - params `array` -- _指定课程名称数组_
  
**response:**

  - success  `(0 or 1)`
  - info  `(string)`
  
{{ page.date | date_to_string }}

