---
layout: default
type: portfolio
---

<div id="portfolio">

    <div class="page__intro" style="background-image: url(/assets/images/headers/workIntro.png);">
        <div>
            <div class="wrapper">
                <h2>Portfolio</h2>
            </div>
        </div>
    </div>

    <div class="wrapper">

        <ul class="portfolio-items">
            {% assign items = site.categories.portfolio | sort: 'date' %}
            {% for item in items %}
                <li class="{% if site.portfolio.categories == dev %}dev-item{% endif %}">
                    <a href="{{ post.url }}" title="{{ post.title }}"></a>
                        <img src="{{ post.image }}" alt="{{ post.title }}" />

                    <div class="item-mask">
                        <h3>{{ post.title }}</h3>
                        <p>{{ post.intro }}</p>
                    </div>
                </li>
            {% endfor %}
        </ul>
    </div>
</div>
