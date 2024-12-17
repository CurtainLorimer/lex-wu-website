---
title: The Wire Clippers | FRC 5902
publishDate: 2023-12-01 00:00:00
img: "https://i0.wp.com/wireclippers.org/wp-content/uploads/2024/03/IMG_1722_edited.jpg?w=1600&ssl=1"
img_alt: ""
description: |
  I'm the business captain, responsible for public relations, social media, and other endeavors (like a website built using Astro.)
tags:
  - WebDev
---

You probably wouldn't expect a robotics team to have a place for a front-end developer, but I definitely found one.

## WordPress

Our initial website started out with an outdated theme and a bunch of plugins weighing down the entire website. I took those out and started writing
new policies [for how to write stuff.](https://phswireclippers5902.github.io/website-guidelines/website/writing/)

## Astro Development

As someone who tasked themselves with putting any and all relevant documentation regarding the website and the robot onto a resource easily accessible by anyone who needs it, I pushed myself to create an Astro-based website.

Granted, it's not the best by any means. But it's an <a href="https://phswireclippers5902.github.io/website-guidelines/"> easily readable website </a>available for anyone to access. 

## Social Media

Once again, it's not the best - but it's something. 

I'm in charge of our social media accounts - which means that all the funny videos and posts have me behind the scenes.


<a class="card" href="https://wireclippers.org">
	<span class="titlecard">Website</span>
	<image class="img" src="https://i0.wp.com/wireclippers.org/wp-content/uploads/2024/03/IMG_1722_edited.jpg?w=1600&ssl=1" alt="Wire Clippers website" loading="lazy" decoding="async" />
</a>

<style>
	.card {
		display: grid;
		grid-template: auto 1fr / auto 1fr;
		height: 11rem;
		background: var(--gradient-subtle);
		border: 1px solid var(--gray-800);
		border-radius: 0.75rem;
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		text-decoration: none;
		font-family: var(--font-brand);
		font-size: var(--text-lg);
		font-weight: 500;
		transition: box-shadow var(--theme-transition);
	}

	.card:hover {
		box-shadow: var(--shadow-md);
	}

	.titlecard {
		grid-area: 1 / 1 / 2 / 2;
		z-index: 1;
		margin: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--gray-999);
		color: var(--gray-200);
		border-radius: 0.375rem;
	}

	img {
		grid-area: 1 / 1 / 3 / 3;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 50em) {
		.card {
			height: 22rem;
			border-radius: 1.5rem;
		}
    		.title {
			border-radius: 0.9375rem;
		}
	}
</style>