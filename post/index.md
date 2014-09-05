---
layout: default
type: posts
---

<div id="posts-page">

    <div class="page__intro" style="background-image: url(/assets/images/headers/postsIntro.png);">
        <div>
            <div class="wrapper">
                <h2>Posts</h2>
            </div>
        </div>
    </div>

    <div class="wrapper">
        <div class="post-list">
            <ul>
                {% for post in site.categories.post %}
                    <li class="post-list__post">
                        <a href="{{ post.url }}">
                            <h2 class="post-list__title">{{ post.title }}</h2>
                            <p>{{ post.intro }} </p>
                            <time datetime="{{ post.date | date: "%Y-%m" }}">
                                {{ post.date | date: "%b, %Y" }}
                            </time>
                        </a>
                    </li>
                {% endfor %}
            </ul>
        </div>

    </div>

</div>