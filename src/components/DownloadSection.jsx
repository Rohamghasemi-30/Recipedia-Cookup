import React from 'react';
import DownloadImage from '../assests/images/Download-section.png';
import Button from './Button';

function DownloadSection() {
  return (
    <div>
      <div className="mt-28">
        <div className="bg-primaryColor h-[420px] text-white flex flex-col justify-between relative p-[80px] rounded-3xl">
          <p className="font-semibold text-[4.4rem] w-[75%]">
            Embrace the joy of cooking with get it on your iPhone or Android Your
            kitchen adventure begins now!
          </p>

          <div className="flex gap-[40px]">
            <Button text="App Store" width={150} height={55} />
            <Button text="Google Play" width={150} height={55} />
          </div>
          <img src={DownloadImage} alt="" className="absolute bottom-0 right-0" />
        </div>
      </div>
    </div>
  );
}

export default DownloadSection;
