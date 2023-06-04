"use client";

"use client";

import { useState } from "react";

import {
  HiVideoCamera,
  HiVideoCameraSlash,
  HiPhoneXMark,
} from "react-icons/hi2";
import { FaMicrophoneSlash, FaMicrophone } from "react-icons/fa";

const Footer = () => {
  const [isMicroOn, setMircroOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  return (
    <div className="grid justify-items-center">
      <div className=" flex gap-12">
        {isCameraOn && (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => setIsCameraOn(false)}>
            <HiVideoCamera size={32} className="text-white" />
          </div>
        )}
        {!isCameraOn && (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => setIsCameraOn(true)}>
            <HiVideoCameraSlash size={32} className="text-white" />
          </div>
        )}
        {isMicroOn && (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => setMircroOn(false)}>
            <FaMicrophone size={32} className="text-white" />
          </div>
        )}
        {!isMicroOn && (
          <div
            className="bg-purple-500 p-3 cursor-pointer rounded-full"
            onClick={() => setMircroOn(true)}>
            <FaMicrophoneSlash size={32} className="text-white" />
          </div>
        )}
        <div className="bg-red-500 p-3 cursor-pointer rounded-full">
          <HiPhoneXMark size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
