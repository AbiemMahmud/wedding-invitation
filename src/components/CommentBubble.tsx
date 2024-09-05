import { Clock } from "lucide-react";
import { FC } from "react";
import { formatToLocal } from "src/utils/datetime";

interface CommentBubbleProps {
  comment: IComment;
}
const CommentBubble: FC<CommentBubbleProps> = ({ comment }) => {
  return (
    <div className="bg-green-100 p-2 rounded-md text-start">
      <div>
        <h2 className="font-semibold text-green-800 text-sm">{comment.name}</h2>
        <p className="flex items-center gap-2 my-1">
          <Clock size={12} />
          <span className="text-xs">{formatToLocal(comment.created_at)}</span>
        </p>
      </div>
      <div className="">
        <p className="text-sm">{comment.text}</p>
      </div>
    </div>
  );
};

export default CommentBubble;
