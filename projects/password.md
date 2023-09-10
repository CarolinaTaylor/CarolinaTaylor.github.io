---
layout: project
type: project
image: projects/password.jpg
title: "Password Matching"
date: 2022
published: true
labels:
  - Java
  - Programing
  - Security
summary: "As part of my first project in ICS 111 we created a simple password check code."
---

As part of my ICS 11 class, we were tasked with developing a code that matches user input with stored data in memory. If the password matches, the user gains access. However, if the user fails to guess the password, they have only three additional attempts to try different passwords before the program terminates.

This code defines a Java method named userPasswordMatch that takes two string parameters: user and pass. The purpose of this method is to check if the provided user and pass match predefined values.

Here's an explanation of how the code works:

Several pairs of predefined user and pass values are declared at the beginning of the method. These pairs are hardcoded into the method and represent valid username-password combinations.

The if statement is used to check if the provided user and pass match any of the predefined pairs. It does this by using the equals method to compare the input user and pass with each predefined user and pass combination.

If any of the combinations match, the if statement evaluates to true, and the method returns true. This indicates that the provided user and pass are valid and match one of the predefined pairs.

If none of the predefined combinations match, the method reaches the return false statement outside the if block, indicating that the provided user and pass do not match any of the predefined pairs.

In essence, this code is a basic authentication mechanism that checks if the user-provided user and pass match any of the predefined username-password pairs. If a match is found, it returns true, indicating successful authentication; otherwise, it returns false.

```cpp
public static boolean userPasswordMatch(String user , String pass) {
String user1 ="alpha";
String user2 ="beta";
String user3 ="gamma";
String user4 ="delta";
String pass1 ="alpha1";
String pass2 ="beta1";
String pass3 ="gamma1";
String pass4 ="delta1";

 
    if (((user.equals(user1) && pass.equals(pass1)
    ||user.equals(user2)&& pass.equals(pass2)
               || user.equals(user3)&& pass.equals(pass3)
                  || user.equals(user4) && pass.equals(pass4)))){
   
  return true;
      }
   
return false;
}

```
