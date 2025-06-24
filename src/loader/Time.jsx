import moment from "moment";
import React from "react";

const Time = ({ time }) => {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <div>
      <span className="absolute bottom-2 bg-black text-white px-2 py-1 rounded-md text-xs right-2">
        {videoTime}
      </span>
    </div>
  );
};

export default Time;
