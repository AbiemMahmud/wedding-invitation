import { Clock } from "lucide-react";

const CommentBubble = () => {
  return (
    <div className="bg-green-100 p-2 rounded-md text-start">
      <div>
        <h2 className="font-semibold text-green-800 text-sm">Surya</h2>
        <p className="flex items-center gap-2 my-1">
          <Clock size={12} />
          <span className="text-xs">Sabtu, 06 Juli 2024 14:32:24</span>
        </p>
      </div>
      <div className="">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet odit
          minima reiciendis dicta soluta ullam sed atque itaque repellendus iste
          sint dignissimos, voluptatibus voluptates dolor incidunt culpa
          nesciunt commodi maxime.
        </p>
      </div>
    </div>
  );
};

export default CommentBubble;
