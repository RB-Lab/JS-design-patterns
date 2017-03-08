# JS Design Patterns

In this "bookish" repo I collected JavaScript applications of the design patterns
you can often hear about. I provided examples that I found in many source on the web.
The files with such examples usually named as:
```
[design-pattern]-[source-name].js
```
For each of such example source mentioned in the beginning of the file.

I also provided here examples of patterns usage from my practice. I place such examples in 
two types of files:
```
[design-pattern]-imho.js
```
and 
```
[design-pattern]-imho-ee.js # or it may be a folder
```
In files of first type I putted the most simple examples of design pattern. At the end of
such files there is a comment `WHY YOU SHOULDN'T USE THIS CODE IN PRODUCTION` that explains 
all simplifications made in the example code and what's the problem with them. In `-ee` 
(enterprise edition) files I putted the same examples but written in a way that kinda 
applies all good practice that will be useful in a large codebase but maybe make code less 
understandable for education purposes. 

## OOP Design Patterns

### Creational Patterns

#### [Abstract Factory](./examples/abstarct-factory)

> **What it does:** abstracts creation of an object behind the common interface, 
> so you can select its class dynamically.
> 
> **When do you need it:** when you know that you need an instance of one of 
> somehow similar classes but which class you need you'll know only in runtime.

#### Factory

> **What it does:** creates an object.
> 
> **When do you need it:** just when you don't want constructor to be visible 
> _or_ when you don't want constructor to exist.

#### Builder
Separates object construction from its representation

#### Factory Method
Creates an instance of several derived classes

#### Prototype
A fully initialized instance to be copied or cloned

#### Singleton
A class of which only a single instance can exist

### Structural Patterns

#### Adapter
Match interfaces of different classes

#### Bridge
Separates an object’s interface from its implementation

#### Composite
A tree structure of simple and composite objects

#### Decorator
Add responsibilities to objects dynamically

#### Facade
A single class that represents an entire subsystem

#### Flyweight
A fine-grained instance used for efficient sharing

#### Proxy
An object representing another object

### Behavioral Patterns

#### Chain of Responsibility 
A way of passing a request between a chain of objects

#### Command
Encapsulate a command request as an object

#### Interpreter
A way to include language elements in a program

#### Iterator
Sequentially access the elements of a collection

#### Mediator
Defines simplified communication between classes

#### Memento
Capture and restore an object's internal state

#### Observer
A way of notifying change to a number of classes

#### State
Alter an object's behavior when its state changes

#### Strategy
Encapsulates an algorithm inside a class

#### Template Method
Defer the exact steps of an algorithm to a subclass

#### Visitor
Defines a new operation to a class without change

## Functional Design Patterns

### Monades

## Large Scale Design Patterns

### CQRS

### CRDT

## Reference
- http://www.dofactory.com/javascript/design-patterns
- http://robdodson.me/javascript-design-patterns/
- https://fsharpforfunandprofit.com/fppatterns/
