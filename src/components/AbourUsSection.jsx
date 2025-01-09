import React from 'react';
import Button from './Button';
import AboutUsSection from '../assests/images/about-us-section.png';

function AbourUsSection() {
  return (
    <div>
      <div 
        className="h-[567px] relative mt-[85vh] bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${AboutUsSection})` }}
      >
        <div className="bg-[#ffffff] w-[578px] h-[431px] rounded-3xl py-12 px-11 absolute right-[60px] top-[75px] flex flex-col justify-around">
          <h2 className="text-[5rem]">About Us</h2>
          <p className="text-[2.2rem]">
            Our recipes are the heart and soul of our culinary community, and they
            reflect our commitment to providing you with memorable and delightful
            dining experiences.
          </p>
          <Button text="Learn More" width={200} height={55} />
        </div>
        <div className="absolute bottom-[60px] left-[50px] text-[1.5rem] font-medium text-primaryColor bg-[#ffffff] w-[233px] p-8 rounded-[8px]">
          50+ Quick Food Recipes That Easy To Do!
        </div>
      </div>
    </div>
  );
}

export default AbourUsSection;
