# Redux Toolkit example with react

# Packages to be installed

1. npm install @reduxjs/toolkit react-redux
2. npm install date-fns
   1. import { parseISO, formatDistanceToNow } from "date-fns" used to show "less than a minute ago"

# Initiating redux project structure

1. Create src/app/store.js file: it will be single redux store for the entire app
2. Import this store in index.js file and wrap the entire app in a Provider component
3. Create src/features/posts/postsSlice.js - this will contain the posts and associated features
4. Create src/features/users/usersSlice.js - this will contain the users and associated features

# Lesson 1 Screenshot

<img width="415" alt="image" src="https://user-images.githubusercontent.com/1153078/186733828-c4aeff65-8d77-4bf7-98db-24553fbb889c.png">

