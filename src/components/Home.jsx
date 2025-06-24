import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
import ListItems from "./Listitems";

const Home = () => {
  const { data, loading, error } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!Array.isArray(data) || data.length === 0)
    return <div>No videos found.</div>;

  return (
    <div className="flex mt-20 dark:mt-14.5">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] w-[85%] overflow-y-scroll overflow-x-hidden scrollbar-thin dark:scrollbar-thumb-gray-800 dark:scrollbar-track-slate-400">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {!loading && data.map((item, idx) => {
            if (item.type !== "video") return null;
            return (
              <Video key={item.video?.videoId || idx} video={item?.video} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
