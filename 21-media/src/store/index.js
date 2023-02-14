import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/UsersSlice";
// use for connect API from RTK
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "../apis/albumsApi";
import { photosApi } from "../apis/photosApi";

// 1 . import
// 2. them reducer
// 3. add middle ware
// 4. setupListeners & export

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer, // trung ten voi reducerPath ("albums") de API con su dung HOAC dung [albumsApi.reducerPath]
    [photosApi.reducerPath]: photosApi.reducer,
  },
  // thuc thi hanh dong tai middleware truoc khi reach "reducer"
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware);
  },
});

// ????????
setupListeners(store.dispatch);

export * from "./thunks/FetchUsers";
export * from "./thunks/AddUsers";
export * from "./thunks/RemoveUser";

export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../apis/albumsApi";

export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from "../apis/photosApi";
