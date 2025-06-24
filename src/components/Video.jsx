import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Video = ({ video }) => {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video.videoId}`}>
        <div className="flex flex-col">
          <div className="relative overflow-hidden rounded-xl hover:rounded-none">
            <img
              src={video?.thumbnails?.[0]?.url}
              alt={video?.title}
              className="w-full h-auto"
            />
            {video?.lengthSeconds && <Time time={video.lengthSeconds} />}
          </div>
          <div className="flex space-x-2 mt-2">
            <div className="flex items-start">
              <div className="flex w-10 h-10 items-center justify-between mt-2 overflow-hidden ">
                <img
                  src={video?.author?.avatar[0]?.url}
                  alt={video?.author?.title}
                  className="w-full h-full rounded-full overflow-hidden"
                />
              </div>
            </div>
            <div className="mt-2">
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
  {video?.author?.title}
  {(Array.isArray(video?.author?.badge) && video.author.badge.length > 0 && video.author.badge[0]?.type === "VERIFIED_CHANNEL") ||
   (Array.isArray(video?.author?.badges) && video.author.badges.length > 0 && video.author.badges[0]?.type === "VERIFIED_CHANNEL") ? (
    <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
  ) : null}
</span>
              <div className="flex text-gray-500 text-[12px] ">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
