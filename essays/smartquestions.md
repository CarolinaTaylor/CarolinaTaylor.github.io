---
layout: essay
type: essay
title: "Smart questions get you smart answers."
# All dates must be YYYY-MM-DD format!
date: 2023-09-05
published: true
labels:
  - Engineering
  - Stack Overflow
  - Coding
  - Technical questions
---
<img width="300px" class="rounded float-start pe-4" src="../essays/questionmeme.jpg">

## How can you get answers?

Have you ever been in a situation where you wanted to ask a question in class, but didn't because you were afraid of sounding stupid or being judged?
As aspiring programmers, it's important not only to know how to ask the right questions but also to learn how to use online forums effectively without causing any harm. One of the most valuable resources available to us is StackOverflow, which is a thriving online community and the go-to platform for programmers and developers.
You can still use tools like Google to help with your search. However, don't solely rely on the name of the forum, newsgroup, or mailing list. Look for a FAQ or charter to ensure your question is relevant. It's also a good idea to review previous discussions before posting so you can get a sense of the forum's culture. Generally, public forums are better places to ask questions than private ones. This is because there are more potential respondents and a larger audience. Hackers are more likely to answer questions that benefit many people rather than just a few.

When looking for answers to technical and other questions, Stack Overflow is a valuable resource that many open-source projects prefer. However, it is recommended to start with a Google search first as it indexes in real time. This increases the chances of finding similar questions that have already been asked, and Stack Exchange sites often appear at the top of the search results. Super User is the go-to forum for general-purpose computing questions. If your question is not related to code or programs that you interact with only over a network connection, it is likely to be answered here. For programming questions, Stack Overflow is the best option, while Server Fault is the ideal platform for server and network administration queries. Several projects have their own particular sites, such as Android, Ubuntu, TeX/LaTeX, and SharePoint. For an up-to-date list, check the Stack Exchange site.

If you are a newbie and need help with Linux, check out your local user group or your distribution's Web forum or IRC channel. These are great places to start, especially for common or simple problems. When asking for help, make sure to use a subject header that is clear and concise, with the object specifying the thing or group having the problem and the deviation describing the unexpected behavior. Be specific in describing your problem, including the symptoms, environment, research you've done, diagnostic steps taken, recent changes, and if possible, provide a way to reproduce the issue. When asking for help with code, provide a minimal bug-demonstrating test case. Remember to describe what you did leading up to the problem and what the machine and software did before the issue occurred. Avoid asking for help without giving any indication of what the problem might be.

Here is an example of a good question found in Stack Overflow:


[Question on StackOverflow](https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it).

```
What are Null Pointer Exceptions (java.lang.NullPointerException) and what causes them?

What methods/tools can be used to determine the cause so that you stop the exception from causing the program to terminate prematurely?
```
Answer
```
There are two overarching types of variables in Java:

Primitives: variables that contain data. If you want to manipulate the data in a primitive variable you can manipulate that variable directly. By convention primitive types start with a lowercase letter. For example variables of type int or char are primitives.

References: variables that contain the memory address of an Object i.e. variables that refer to an Object. If you want to manipulate the Object that a reference variable refers to you must dereference it. Dereferencing usually entails using . to access a method or field, or using [ to index an array. By convention reference types are usually denoted with a type that starts in uppercase. For example variables of type Object are references.

Consider the following code where you declare a variable of primitive type int and don't initialize it:

int x;
int y = x + x;
These two lines will crash the program because no value is specified for x and we are trying to use x's value to specify y. All primitives have to be initialized to a usable value before they are manipulated.

Now here is where things get interesting. Reference variables can be set to null which means "I am referencing nothing". You can get a null value in a reference variable if you explicitly set it that way, or a reference variable is uninitialized and the compiler does not catch it (Java will automatically set the variable to null).

If a reference variable is set to null either explicitly by you or through Java automatically, and you attempt to dereference it you get a NullPointerException.

The NullPointerException (NPE) typically occurs when you declare a variable but did not create an object and assign it to the variable before trying to use the contents of the variable. So you have a reference to something that does not actually exist.

Take the following code:

Integer num;
num = new Integer(10);
The first line declares a variable named num, but it does not actually contain a reference value yet. Since you have not yet said what to point to, Java sets it to null.

In the second line, the new keyword is used to instantiate (or create) an object of type Integer, and the reference variable num is assigned to that Integer object.

If you attempt to dereference num before creating the object you get a NullPointerException. In the most trivial cases, the compiler will catch the problem and let you know that "num may not have been initialized," but sometimes you may write code that does not directly create the object.

For instance, you may have a method as follows:

public void doSomething(SomeObject obj) {
   // Do something to obj, assumes obj is not null
   obj.myMethod();
}
In which case, you are not creating the object obj, but rather assuming that it was created before the doSomething() method was called. Note, it is possible to call the method like this:

doSomething(null);
In which case, obj is null, and the statement obj.myMethod() will throw a NullPointerException.

If the method is intended to do something to the passed-in object as the above method does, it is appropriate to throw the NullPointerException because it's a programmer error and the programmer will need that information for debugging purposes.

In addition to NullPointerExceptions thrown as a result of the method's logic, you can also check the method arguments for null values and throw NPEs explicitly by adding something like the following near the beginning of a method:

// Throws an NPE with a custom error message if obj is null
Objects.requireNonNull(obj, "obj must not be null");
Note that it's helpful to say in your error message clearly which object cannot be null. The advantage of validating this is that 1) you can return your own clearer error messages and 2) for the rest of the method you know that unless obj is reassigned, it is not null and can be dereferenced safely.

Alternatively, there may be cases where the purpose of the method is not solely to operate on the passed in object, and therefore a null parameter may be acceptable. In this case, you would need to check for a null parameter and behave differently. You should also explain this in the documentation. For example, doSomething() could be written as:

/**
  * @param obj An optional foo for ____. May be null, in which case
  *  the result will be ____.
  */
public void doSomething(SomeObject obj) {
    if(obj == null) {
       // Do something
    } else {
       // Do something else
    }
}
Finally, How to pinpoint the exception & cause using Stack Trace

What methods/tools can be used to determine the cause so that you stop the exception from causing the program to terminate prematurely?

Sonar with find bugs can detect NPE. Can sonar catch null pointer exceptions caused by JVM Dynamically

Now Java 14 has added a new language feature to show the root cause of NullPointerException. This language feature has been part of SAP commercial JVM since 2006.

In Java 14, the following is a sample NullPointerException Exception message:

in thread "main" java.lang.NullPointerException: Cannot invoke "java.util.List.size()" because "list" is null

List of situations that cause a NullPointerException to occur
Here are all the situations in which a NullPointerException occurs, that are directly* mentioned by the Java Language Specification:

Accessing (i.e. getting or setting) an instance field of a null reference. (static fields don't count!)
Calling an instance method of a null reference. (static methods don't count!)
throw null;
Accessing elements of a null array.
Synchronising on null - synchronized (someNullReference) { ... }
Any integer/floating point operator can throw a NullPointerException if one of its operands is a boxed null reference
An unboxing conversion throws a NullPointerException if the boxed value is null.
Calling super on a null reference throws a NullPointerException. If you are confused, this is talking about qualified superclass constructor invocations:
class Outer {
    class Inner {}
}
class ChildOfInner extends Outer.Inner {
    ChildOfInner(Outer o) { 
        o.super(); // if o is null, NPE gets thrown
    }
}
Using a for (element : iterable) loop to loop through a null collection/array.

switch (foo) { ... } (whether its an expression or statement) can throw a NullPointerException when foo is null.

foo.new SomeInnerClass() throws a NullPointerException when foo is null.

Method references of the form name1::name2 or primaryExpression::name throws a NullPointerException when evaluated when name1 or primaryExpression evaluates to null.

a note from the JLS here says that, someInstance.someStaticMethod() doesn't throw an NPE, because someStaticMethod is static, but someInstance::someStaticMethod still throw an NPE!
```
The user received other 12 useful answers, with this answer got over 4k likes witch means that other people were having the same question, and the found this helpful.
