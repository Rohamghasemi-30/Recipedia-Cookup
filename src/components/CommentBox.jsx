import React from "react";
import star from "../assests/icons/Star.svg";

function CommentBox({ commentText, userName, userImage, rating, top, left }) {
  const ratingStars = Array.from({ length: rating });

  return (
    <div className="w-[220px] h-[216px] bg-white shadow-comment absolute  rounded-xl p-[8px] flex flex-col justify-between" style={{top:top, left:left}}>
      <div className="flex"></div>
      <div className="inner-box bg-[#F1F3F7] w-full h-[143px] rounded-xl p-[14px] ">
        <div className="rating flex">
          {ratingStars.map((_, index) => (
            <img key={index} src={star} alt="star" className="w-4 h-4" />
          ))}
          <br />
        </div>
        <p className="text-[1.6rem]">
        {commentText}
        </p>
      </div>
      <div className="row flex items-center">
        <div className="profile flex items-center">
          <div
            className="w-[30px] h-[30px] rounded-full overflow-hidden"
            style={{
              backgroundImage: `url(${userImage})`,
              backgroundSize: "cover",
            }}
          ></div>
          <span className="ml-2 text-[1.6rem]">{userName}</span>
        </div>
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto"
        >
          <path
            d="M11.5063 18.3453L3.01888 10.6574C-1.59384 6.0447 5.18686 -2.81173 11.5063 4.35337C17.8257 -2.81173 24.5757 6.07545 19.9937 10.6574L11.5063 18.3453Z"
            stroke="black"
            strokeWidth="1.50225"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default CommentBox;
