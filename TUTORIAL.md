# Frampton Comes Alive: Event-Driven Functional Programming in JavaScript


## Bargain Basement Prices

I've written a few posts on various topics related to functional programming in JavaScript. Mostly covering foundational topics in functional programming. What are monads? What is functional composition and currying? What are functional data structures? In this post we are going to look at applying these concepts in a simple JavaScript project.

So, we've arrived at the point where I promote my own crap. Yes, the libraries we will be using are ones I wrote and have used in production. However, the abstractions they provide are common. These same patterns can be implemented with a number of other libraries. The two driving motivators behind writing the libraries we will be using is to provide common constructs from functional languages and to provide the tools necessary to implement the Elm architecture in JavaScript (because sometimes it's easier to convince people to try a new programming pattern than a new programming language).

It is no secret that I am a functional programming advocate. I feel functional approaches work very well when writing front-end applications where we are constantly dealing with unreliable data and asynchronous interactions. We are moving beyond simple map, reduce and filter. We are going to be looking at writing code that is as stateless as possible. This means isolating side effects and explicitly passing application state to functions that need it.

### Death to our Framework Overlords

One could build on the patterns we explore in this post to build a purely functional application in JavaScript. No framework required. Frameworks rely on abstract data structures to encapsulate state and operations on that state in order to provide the maximum amount of abstraction for client code. You can't sit down to write an application in something like Ember or Angular without a solid understanding of how those frameworks are doing things. The framework will do a lot for you, but you have to do things just so, following the opinions of the framework, in order to get things done. Often, tutorials will move quickly and say "Trust me, we'll get back to that" in order to keep things moving. It's almost like learning a new language. We're not going to do that. We are going to use smaller abstractions that can be composed to solve larger problems.

One of the main things we try to avoid with functional programming is large amounts of mutable state. This precludes us from implementing the kinds of massive abstractions you get with frameworks. We implement abstractions and reuse code on a smaller scale. You can pick up a functional library (think underscore or lodash) and start using the functions it provides inside of an existing project without understanding all of the functions they provide or even the optimal way to combine and use those functions together.

We are going to be looking at patterns for writing applications in a functional manner. We aren't just going to sprinkle things in the way you might with underscore or lodash. We are going to be using more substantial abstractions. We are going to cover a number of primitive abstractions, each of which could be used independently, then we are going to combine some of those abstractions to build a small widget.


## Our Basic Abstractions

To get things started we need a place to write some code. Create a directory to start a new project. Inside of this directory I create two subdirectories, one called "src" and one called "tests". I also create a new HTML file called "index.html". We also need some toys. NPM is the place for all the toys. "npm install frampton" should get us started.

```
npm install --save frampton
```


### Values that Change with Time



```
const Fr = Frampton;
const Signal = Fr.Signal;

```


## An Event-Driven World



```
```


## The Dirty Corner

The thing that often causes the most errors in our applications is I/O. Traditionally in JavaScript we have been used to performing I/O all over the place. Anytime we interact with the DOM we are performing I/O. When we query the DOM there is no guarantee the element we are querying is actually there. We constantly edit, add and remove elements from the DOM. We get data from the user. We read files. We communicate with servers through AJAX.

```
const Task = Fr.Data.Task;
```


## Elm Architecture in JavaScript
