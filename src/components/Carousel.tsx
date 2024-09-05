import gallery_1 from "@assets/images/asset1.jpg";
import gallery_2 from "@assets/images/asset2.jpg";
import gallery_3 from "@assets/images/asset3.jpg";
import gallery_4 from "@assets/images/asset4.jpg";
import gallery_5 from "@assets/images/asset5.jpg";
import gallery_6 from "@assets/images/asset6.jpg";
import gallery_7 from "@assets/images/asset7.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import "./styles/carousel.css";

interface PictureListProps {
  pictures: string[];
  current: number;
  onClickList: (index: number) => void;
}

interface PictureDisplayProps {
  pictures: string[];
  current: number;
}

const Carousel = () => {
  const [currentShow, setShow] = useState(0);
  const picturesUrl = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
  ];

  const switchImage = (n: number) => {
    setShow((prev) => prev + n);
  };

  const clickList = (index: number) => {
    setShow(index);
  };

  return (
    <div>
      {/* Display all of images */}
      <PictureList
        pictures={picturesUrl}
        current={currentShow}
        onClickList={clickList}
      />

      {/* Controller and display */}
      <div className="flex justify-between items-center gap-2 w-full entrance">
        {/* Left Button */}
        <button
          disabled={currentShow === 0}
          className={`disabled:opacity-30 flex justify-center items-center bg-slate-600/50 hover:bg-slate-600/80 rounded-full cursor-pointer size-10`}
          onClick={() => switchImage(-1)}
        >
          <ChevronLeft />
        </button>
        <PictureDisplay pictures={picturesUrl} current={currentShow} />
        <button
          disabled={currentShow === picturesUrl.length - 1}
          className="flex justify-center items-center bg-slate-600/50 hover:bg-slate-600/80 disabled:opacity-30 rounded-full cursor-pointer size-10"
          onClick={() => switchImage(1)}
        >
          <ChevronRight />
        </button>
      </div>
      <div></div>
    </div>
  );
};

function PictureList({ pictures, current, onClickList }: PictureListProps) {
  return (
    <div className="my-4 p-4 whitespace-nowrap overflow-x-auto entrance">
      {pictures.map((pic, index) => {
        return (
          <div
            key={index}
            id={`gallery_${index}`}
            className={`inline-block  mx-4 ${
              current === index && "border-4 border-blue-500 rounded-xl"
            }`}
            onClick={() => onClickList(index)}
          >
            <img
              src={pic}
              key={index}
              className="rounded-md"
              width={50}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

function PictureDisplay({ pictures, current }: PictureDisplayProps) {
  return (
    <div className="w-1/2">
      {pictures.map((pic, index) => {
        return (
          <div
            key={index}
            className={`w-full ${
              current === index ? "block" : "hidden"
            } fade-animation`}
          >
            {/* <div className="bg-amber-300 h-60"></div> */}
            <img src={pic} alt="" className="rounded-lg" />
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
