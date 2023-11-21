import { wait } from "~/utils";

export const UserService = {
  getMe: async () => {
    await wait(1200);
    return { name: "John Doe", id: 1 };
  },
};
