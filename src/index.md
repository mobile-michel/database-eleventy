---
title: Eleventy elements
layout: base
---

{% for element in elements %}
## {{ element.category }}
{{ element.catDescription }}
{% for item in element.items %}
- [{{ item.id }}]({{ item.link }}): {{ item.idDescription }}
{% endfor %}
{% endfor %}