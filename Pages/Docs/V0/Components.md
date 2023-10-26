---
template: Content
group: Components
title: Components
order: 1
---

# Components

Components are your own reusable HTML elements. They can be mixed with normal HTML and are a great way to avoid duplicating markup.

## Examples

**Low-level UI elements**: These are small, reusable elements that might appear on any page. It could be headlines, buttons, form elements or icons. They are especially useful when using Tailwind because you avoid repeating the classes everywhere.

```
// Components/Button.stencil
<button class="bg-gray-900 text-gray-100 rounded px-4 py-2">
	<slot />
</button>
```

**Sections**: These types of components are a larger block of markup that forms a section on a page. It could be cards, a newsletter signup form, or an author section.

```
// Components/Card.stencil
<div>
	<h3>{{ title }}</h3>

	<slot />

	@‎if(href)
		<a href="{‎{ href }}">
			Click here
		</a>
	@‎endif
</div>
```

**Layouts**: These are components that contain markup reused across multiple pages. Read more in the [layouts](/docs/v0/layouts) section.

## Defining components

All components are defined in the `Components`directory. Each file represents one component, and the file name is the component name.

> Component names should start with an uppercase letter to distinguish them from regular HTML elements. `<‎Button>` refers to a component while `<‎button>` refers to the HTML button element.

Components can be nested in subdirectories, but that won’t affect how the component is used. The purpose of nesting components in subdirectories is solely for organisation.

> All component names must be unique across your project, since components are automatically imported. You can’t have a `Component/Dark/Button.stencil` component and a `Component/Light/Button.stencil` component in the same project.   Instead, you can have `Component/Dark/DarkButton.stencil` and `Component/Light/LightButton.stencil` components.

## Using components

Components can be used in other components or in pages, both markdown and Stencil pages. All components are globally available without needing to be imported.

`Components/Button.stencil` can be used like this:

```
<Button>
	Click me
</Button>
```

## Attributes

It’s possible to modify each instance of a component with [attributes](/docs/v0/attributes). This means the same component can be used twice and render two different things based on its attributes.

The most common use case for attributes is to pass in data that should be rendered:

```
// Components/ImageWithDescription.stencil
<div>
	<img src="{‎{ image }}" />
	<p>{‎{ description }}</p>
</div>
```

```
// Pages/Index.stencil
<ImageWithDescription
	image="/images/books/value-price-and-profit.png"
	description="Value, Price and Profit is an economic exploration of the relationship between the value of commodities, their market prices and labor."
/>
```

Another common use case is to use an attribute to modify how the component renders:

```
// Components/ImageWithDescription.stencil
<div>
	<img src="{‎{ image }}" />
	@‎if(description)
		<p>{‎{ description }}</p>
	@‎endif
</div>
```

In this example, the description section is only rendered if a description is provided to the instance.

## Slots

Slots can also modify how the component renders. Using attributes, it’s not possible to pass in other markup - only raw data like strings or numbers. Using slots, it’s possible to pass in custom markup to a component. This is often used with low-level UI elements or in layouts.

Any children of the component will be inserted into the `<‎slot />` element.

```
// Components/Button.stencil
<button class="bg-gray-900 text-gray-100 rounded px-4 py-2">
	<slot />
</button>
```

```
// Pages/Index.stencil
<Button>
	<ArrowUpIcon />
	<span>Click me</span>
</Button>
```

```
// Output/index.html
<button class="bg-gray-900 text-gray-100 rounded px-4 py-2">
	<svg>...</svg>
	<span>Click me</span>
</button>
```

## Recursive components

It’s possible for a component to render another instance of itself recursively. However, it’s important to add some control flow that eventually stops the component chain.

Otherwise, an infinite loop is created, and your component will keep rendering itself forever.
