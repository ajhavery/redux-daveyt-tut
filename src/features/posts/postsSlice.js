import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns"; // Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date

const initialState = [
  {
    id: 1,
    title: "learning redux toolkit",
    content: "T've heard a good things",
    date: sub(new Date(), { minutes: 10, seconds: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slices....",
    content: "The more I slice, the more I want a price",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // to ensure we don't have to enter properly formatted value in our
    // components to add a new post, we use prepareCallback
    postAdded: {
      reducer(state, action) {
        // can use state.push only in reduxToolkit
        // in all other places, use ...state and then modify required value
        state.push(action.payload);
      },
      // we abstract the format of the data to be provided in below function
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
