import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Raj Sharma" },
  { id: "2", name: "Jane Sharma" },
  { id: "3", name: "John Morray" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
