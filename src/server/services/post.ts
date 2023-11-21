import { wait } from "~/utils";

export const PostService = {
  getFavouritePosts: async (userId: number) => {
    await wait(1200);

    if (userId !== 1) throw new Error("Access Denied");

    return [
      { id: 1, title: "My first post" },
      { id: 2, title: "My second post" },
    ];
  },

  getAllPosts: async (userId: number) => {
    await wait(1200);

    if (userId !== 1) throw new Error("Access Denied");

    return [
      { id: 1, title: "My first post" },
      { id: 2, title: "My second post" },
      { id: 3, title: "My third post" },
      { id: 4, title: "My fourth post" },
    ];
  },
};
