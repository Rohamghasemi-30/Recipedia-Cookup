import React from "react";
import Button from "./Button";
import CommentBox from "./CommentBox";

import heroImage from "../assests/images/hero-image.png";
import tomato from "../assests/icons/Tomato.svg";
import garlic from "../assests/icons/Garlic.svg";
import broccoli from "../assests/icons/Broccoli.svg";
import userProfile from "../assests/images/user-profile.jpg";
import userProfile2 from "../assests/images/user-profile2.jpg";

function Header() {
  return (
    <header className="h-[70vh] flex justify-between items-center">
      <div className="left-part h-full flex flex-col justify-around w-1/2 leading-[80px] relative">
        <h1 className="font-bold text-[6.4rem]">
          Cooking Made Fun and Easy: Unleash Your Inner Chef
        </h1>
        <p className="leading-[24px] font-light text-gray text-[1.6rem]">
          Discover more than{" "}
          <span className="text-secondaryColor text-[1.6rem]">10,000 recipes</span> in your
          hand with the <br /> best recipe. Help you to find the easiest way to
          cook.
        </p>
        <Button width={250} height={75} text="Explore Recipes" />
        <img src={garlic} alt="" className=" absolute top-[60vh] left-[55vh]" />
      </div>
      <div className="right-part w-1/2 relative flex flex-col items-end">
        <img src={tomato} alt="" className=" self-start relative top-52" />

        <img src={heroImage} alt="" className=" max-w-[620px] relative z-0 right-0"/>
        <div className="row w-[1000px] h-[500px] flex absolute top-[30vh] gap-4">
          <CommentBox
            commentText='"The recipes here are not only delicious but also easy to follow."'
            userName="Sarah M."
            userImage={userProfile2}
            rating={5}
            top="20vh"
            left="42vh"
          />
          <CommentBox
            commentText='"I ve discovered a treasure trove of meatless recipes that have made my meals."'
            userName="Farellin J."
            userImage={userProfile}
            rating={5}
            top="6vh"
            left="70vh"
          />
        </div>
        <img src={broccoli} alt="" className="" />
      </div>
    </header>
  );
}

export default Header;
