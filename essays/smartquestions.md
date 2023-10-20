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

References: variables that contain the memory address of an Object i.e. variables that refer to an Object. If you want to manipulate the Object that a reference variable refers to you must dereference it. Dereferencing usually entails using . to access a method or field, or using [ to index an array. By convention reference types are usually denoted with a type that starts in uppercase. For example, variables of type Object are references.

Consider the following code where you declare a variable of primitive type int and don't initialize it:

int x;
int y = x + x;
These two lines will crash the program because no value is specified for x and we are trying to use x's value to specify y. All primitives have to be initialized to a usable value before they are manipulated.

Now here is where things get interesting. Reference variables can be set to null which means "I am referencing nothing". You can get a null value in a reference variable if you explicitly set it that way, or a reference variable is uninitialized and the compiler does not catch it (Java will automatically set the variable to null). 
```
[continue reading the answer here](https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it).
The user received other 12 useful answers, with this answer getting over 4k likes which means that other people were having the same question, and they found this helpful.
