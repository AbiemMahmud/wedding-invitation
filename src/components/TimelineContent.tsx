import { Heart } from "lucide-react";
import { FC } from "react";

interface TimelineContentProps {
  imageUrl: string;
  description?: string;
  isLast?: boolean;
}

const TimelineContent: FC<TimelineContentProps> = ({
  imageUrl,
  description,
  isLast = false,
}) => {
  return (
    <div className="flex gap-4">
      {/* Timeline ruler */}
      <div className="relative">
        {/* icon */}
        <div className="relative z-10">
          <div className="flex justify-center items-center bg-green-600 rounded-full size-8">
            <Heart className="fill-white stroke-white" size={16} />
          </div>
        </div>
        {/* ruler */}
        {!isLast && (
          <div className="top-0 bottom-0 left-1/2 z-[1] absolute bg-amber-300 w-1 -translate-x-1/2"></div>
        )}
      </div>

      {/* Content box */}
      <div className="float-end flex-grow bg-white mb-6 rounded-xl">
        {/* Picture container*/}
        {/* The Image */}
        <div className="relative">
          <div
            className="bg-cover bg-no-repeat bg-center rounded-t-xl w-full h-40"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="top-20 z-10 absolute bg-gradient-to-t from-white via-20% via-white to-transparent w-full h-24"></div>
        </div>
        <div className="p-4 text-sm">{description}</div>
      </div>
    </div>
  );
};

export default TimelineContent;
