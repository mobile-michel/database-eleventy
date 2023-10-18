---
title: Cheatsheet
layout: base
tags: primary
---
## Group Json datas by category

frameworks is the Json database

- assign list = frameworks | map: type | uniq
- for item in list
  - item
  - assign framework = frameworks | where: type, item
  - for item in framework
    - item.name
  - endfor
- endfor