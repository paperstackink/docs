---
template: Content
group: Components
title: Attributes
order: 2
---

# Attributes

Attributes modify how a component is rendered. Data passed in via attributes can be printed on the page or used to conditionally render a section inside the component:

```
// Components/ImageWithDescription.stencil
<div>
	<img src="{‎{ image }}" />
	@‎if(description)
		<p>{‎{ description }}</p>
	@‎endif
</div>
```

```
<‎ImageWithDescription
	image="/images/books/value-price-and-profit.png"
	description="Value, Price and Profit is an economic exploration of the relationship between the value of commodities, their market prices and labor."
/>
```

## Overwriting and merging attributes

All attributes given to a component, that are not used inside the definition, will be applied to the root element:

```
// Components/Button.stencil
<button class="bg-black">
	<slot />
<button>
```

```
// Pages/Index.stencil
<Button type="button">
	Click me
</Button>
```

```
// Output/index.html
<button class="bg-black" type="button">
	Click me
</button>
```

However, if you do use an attribute inside the component definition, it won’t automatically be applied to the root element:

```
// Components/Button.stencil
<button class="bg-black">
	@‎if(variant equals 'primary')
		<PrimaryIcon />
	@‎endif
	<slot />
<button>
```

```
// Pages/Index.stencil
<Button variant="secondary">
	Click me
</Button>
```

```
// Output/index.html
<button class="bg-black">
	Click me
</button>
```

If you use an attribute that already exists on the root element, it will overwrite it:

```
// Components/Button.stencil
<button type="submit">
	<slot />
<button>
```

```
// Pages/Index.stencil
<Button type="button">
	Click me
</Button>
```

```
// Output/index.html
<button type="button">
	Click me
</button>
```

If you want to merge two attributes, you can do so manually:

```
// Components/Button.stencil
<button class="bg-black {‎{ class }}">
	<slot />
<button>
```

```
// Pages/Index.stencil
<Button class="text-white">
	Click me
</Button>
```

```
// Output/index.html
<button class="bg-black text-white">
	Click me
</button>
```

## Binding attributes

By default, all attributes are strings. If you need the attribute to be another data type, you can bind it:

```
// Src/Index.stencil
<List
	#items="$pages.Articles.pages"
	#maxSize="10"
/>
```

```
// Components/List.stencil
<div>
	<ul>
		@‎each(item, index in items)
			@if‎(index less than maxSize)
				<li class="{‎{ if item.order less than record.size then 'mt-4' else '' }}">
					{‎{ item }}
				</li>
			@‎endif
		@‎endeach
	</ul>

	@‎if(items.size greater than maxSize)
		<button>
			Show all
		</button>
	@‎endif
</div>
```

## Binding a record as attributes

A record can be bound so that all its properties become attributes on a component:

```
// Pages/Index.stencil
@for(page in $pages.Articles.pages)
	<PageLink #bind="page">
		{‎{ page.name.titleCase() }}
	</PageLink>
@endfor
```

```
// Components/PageLink.stencil
<a href="{‎{ href }}">
	<slot />
</a>
```
