---
title: Cheatsheet
layout: base
date: 2023-01-04
tags: [primary, item]
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