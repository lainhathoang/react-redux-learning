import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// DEV ONLY!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// step 2
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // DEV ONLY!!
  await pause(1000);

  return response.data;
  // auto assign to payload data (action.payload) in reducer (fetchUser.fullfilled)
  // IF ERROR OCCURRED => an error is auto generated (error object) (action.error)
});

// =============================
// fetchUsers.pending === "users/fetch/pending"
// fetchUsers.fullfilled
// fetchUers.rejected
// => 3 attributes is AUTO ADDED
// =============================


export { fetchUsers };
// export sau do quay lai UserSlice de add extraReducers
