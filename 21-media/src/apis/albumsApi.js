import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// DEV ONLY!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

// createApi => return slice, thunk, action, auto generated hooks ....
const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
    // function fetch cua browser
    // day la dang Override lai function do
    fetchFn: async (...args) => {
      await pause(1000);
      return fetch(...args);
    },
  }),
  // tao type khac cua request tu client
  // them vao endpoints
  endpoints(builder) {
    return {
      //build.query => make a query
      //url => the label in store
      //params => params add to the url (after the "?")
      //method => GET, POST, ...
      //body => add neu can (VD: createuser thi se them body)
      fetchAlbums: builder.query({
        // arg (3rd item)=> user object
        providesTags: (result, error, user) => {
          // return [{ type: "Album", id: user.id }];
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UserAlbums", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            method: "GET",
            url: "/albums",
            params: {
              userId: user.id,
            },
          };
        },
      }),
      // useFetchAlbumsQuery() => this hook is auto generated
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          // return [{ type: "Album", id: user.id }];
          return [{ type: "UserAlbums", id: user.id }];
        },
        query: (user) => {
          return {
            method: "POST",
            url: "/albums",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, album) => {
          // return [{ type: "Album", id: album.userId }];
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            method: "DELETE",
            url: `/albums/${album.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
