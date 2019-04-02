# Design Patterns  

### 1. Module

    The Module Pattern is one of the most common design patterns used in JavaScript and for good reason. 
    The module pattern is easy to use and creates encapsulation of our code.
    Modules are commonly used as singleton style objects where only one instance exists. 
    The Module Pattern is great for services and testing/TDD.
    There are many different variations of the module pattern so for now I will be covering the basics and the Revealing Module Pattern in ES5.
    
    Something to note, the next version of JavaScript ES6 has a new specification for asynchronous module loading.
    You can use the module patterns that will be covered with the new ES6 module loading syntax. 

### 2. Singleton 
        
      The Singleton Pattern limits the number of instances of a particular object to just one. 
     This single instance is called the singleton.

     Singletons are useful in situations where system-wide actions need to be coordinated from a single central place.
     An example is a database connection pool. The pool manages the creation, destruction, 
     and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.

     Singletons reduce the need for global variables which is particularly important in JavaScript because 
     it limits namespace pollution and associated risk of name collisions.
