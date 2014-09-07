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
        <h2>Development Work</h2>

        <ul class="portfolio-items">
            {% for post in site.categories.teaching %}
                <li>
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