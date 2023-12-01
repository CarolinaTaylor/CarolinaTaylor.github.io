---
layout: essay
type: essay
title: "Reflect on Design Patterns "
# All dates must be YYYY-MM-DD format!
date: 2023-11-29
published: true
labels:
  - Design
  - JavaScript
  - code
---



## Let's talk about Design Patterns

I have been using design patterns since the very beginning, but I have only recently realized how widely used they are. It's amazing how helpful they can be! When I was working on my final project in ICS 314, I implemented a react-router location.
```

import { useLocation } from 'react-router-dom';
```
As a web developer, I find the React-router-dom hook to be an excellent tool for accessing the current location of an object. It is especially valuable when building single-page applications, enabling us to significantly enhance the user experience of a React application. I highly recommend using the publish-subscribe design pattern in the publication.js file. This pattern helped me establish seamless communication between the server and connected clients, optimizing the application's performance, and contributing to an overall better user experience.

While designing the final project, it can be challenging to stick to just one design pattern. In my application, I incorporated multiple design patterns, such as the Composite pattern. My code creates an overall application structure, where React components like NavBar, Landing, ListStuff, Footer, etc., are combined to form the entire application layout.

I also used the AdminProtectedRoute components as decorators to add additional behavior to the rendering of components. These components check for authentication and user roles before rendering the protected content, which is a great example of the Decorator pattern.

In addition, I implemented the Observer pattern through the useTracker hook in the Meteor framework. This pattern allows React components to reactively observe changes in reactive data sources and update accordingly. The components subscribing to these changes act as observers.

