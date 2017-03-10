# The Builder Design Pattern

### What it does
The builder pattern allows you to create complex objects in a more natural and
simple way, specifying only type of objects and it's content. Usually builder
can create different objects of similar types, providing common interface for
their creation. Often builders have "fluent interface".

### When you need it
Usually you need builder when you have to create objects with a complex, e.g.
tree-like structure, _composite_ objects etc. If there is a lot of optional
and/or repetitive steps in object creation, probably you also need a builder.

### implementation details
When you use fluid interface, final step usually retrieves the constructed
object.

### Real life examples
Our beloved jQuery often can act as builder:
```javascript
const a = $('<a>') // create an object of type 'DOMNode', with a tag name 'A'
	.attr('href', '#foo') // fill it with props
	.css('color', 'blue') // using common (fluid) interface
	.append('<span>foo</span>') // repetitively fills the object
	.append(' &ndash; ') // which have a tree-like structure
	.append('<b>is awesome!</b>')
	.get(0); // retrieves the constructed object
```
