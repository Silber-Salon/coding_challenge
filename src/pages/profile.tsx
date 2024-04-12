import Head from "next/head";

import { api } from "~/utils/api";

export default function ProfilePage() {
  const { data: user } = api.user.getMe.useQuery();

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="User Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex  min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        {user ? <Profile {...user} /> : <p>loading...</p>}
      </main>
    </>
  );
}

type ProfileProps = { name: string; id: number };
function Profile(user: ProfileProps) {
  return (
    <div className="container flex flex-col items-center  justify-center  gap-12 px-4 py-16 text-white ">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
        Hello {user?.name}
      </h1>
      <FavouritePosts userId={user.id} />
      <Posts userId={user.id} />
    </div>
  );
}

function FavouritePosts({ userId }: { userId: any }) {
  const { data: posts } = api.post.getFavouritesByUser.useQuery({ userId });

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold">Favourite Posts</h2>
      {posts?.map((post, i) => (
        <div key={i} className="flex flex-col gap-4">
          <p className="font-bold text-white">{post.title}</p>
        </div>
      )) ?? <p>loading...</p>}
    </div>
  );
}

interface PostsProps {
  userId: number;
}
function Posts({ userId }: PostsProps) {
  const { data: posts } = api.post.getFavouritesByUser.useQuery();

  return (
    <div className="w-full max-w-2xl">
      <h2 className="text-2xl font-bold">All Posts</h2>
      {posts?.map((post) => (
        <div key={post.id} className="flex flex-col gap-4">
          <p className="font-bold text-white">{post.title}</p>
        </div>
      )) ?? <p>loading...</p>}
    </div>
  );
}
