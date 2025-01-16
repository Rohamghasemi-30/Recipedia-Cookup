import React from "react";
import Star from "../assests/images/Star.png";
import Like from "../assests/images/Like.png";
import Share from "../assests/images/Share.png";
import useFetchPost from "../hooks/UseFetchPost";

function CommentPost() {
  const { recipes } = useFetchPost();

  return (
    <div className="flex flex-col gap-10">
      {recipes.map((data) => (
        <div
          className="w-[575px] h-[578px] py-10 px-8 flex flex-col justify-between rounded-3xl shadow-md mt-20"
          key={data.id}
        >

          <div className="profile flex items-center gap-9">
            <div
              className="w-20 h-20 rounded-full bg-cover"
              style={{ backgroundImage: `url("${data.userImage}")` }}
            ></div>
            <div>
              <h2 className="font-semibold text-[2.4rem]">{data.recepyName}</h2>
              <p className="font-light text-[1.6rem] text-[#7F7D7D]">
                {data.username}
              </p>
            </div>
          </div>

          <div className="recepy mt-6">
            <div className="stars mb-4">
              <img src={Star} alt="Rating Stars" />
            </div>
            <p className="font-light text-[1.6rem] leading-6 mb-5">
              {data.recepyDescription}
            </p>
            <div
              className="w-full h-[254px] rounded-xl bg-cover"
              style={{ backgroundImage: `url("${data.recepyImage}")` }}
            ></div>
          </div>

          <div className="flex gap-6 text-[2.4rem] mt-6">
            <div className="likes flex gap-2 items-center cursor-pointer">
              <img src={Like} alt="Likes Icon" /> {data.likes}
            </div>
            <div className="share flex gap-2 items-center cursor-pointer">
              <img src={Share} alt="Share Icon" /> Share
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentPost;
