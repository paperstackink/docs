---
layout: Content
group: Components
title: Dynamic components
order: 3
---

# Dynamic components

It’s possible to dynamically determine which component is rendered with the built-in `<‎Component>`.
The `is` attribute is the name of a component in your project. Any other attributes are passed to the component.

It can be used to dynamically render an icon:

```
// Pages/Index.stencil
<ButtonWithIcon icon="ArrowUp">
	Click me
</ButtonWithIcon>
```

```
// Components/ButtonWithIcon.stencil
<button class="text-gray-900">
	<Component
		class="w-4 h-4 text-gray-700"
		#is="icon"
	/>
	<slot />
</button>
```

It might be useful to bind all properties of a record as attributes:

```
// Pages/Index.stencil
@‎each(page in $pages.Articles)
	<Component
		is="{‎{ page.component }}"
		#bind="page"
	/>
@‎endeach
```

> In this example it’s assumed that each page has a ‘component’ property specified with [custom data](/docs/v0/data#custom-data).
