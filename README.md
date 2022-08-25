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
