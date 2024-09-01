import Card from "../components/Card";
import CommentBubble from "../components/CommentBubble";

const Comment = () => {
  return (
    <div id="comment">
      <Card className="py-20 p-4 text-center">
        <div className="mx-auto w-10/12">
          <h1 className="mb-8 font-display text-3xl">Ucapan & Doa</h1>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name"
              id="name"
              className="bg-amber-200 p-2 rounded-md"
              placeholder="Nama Anda"
            />
            <textarea
              name="comment"
              id="comment"
              className="bg-amber-200 p-2 rounded-md h-52"
              placeholder="Tuliskan ucapan dan doa"
            />
            <input
              type="submit"
              value="Kirimkan Ucapan"
              className="bg-amber-600 p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-2 my-4 h-72 overflow-scroll">
            <CommentBubble />
            <CommentBubble />
            <CommentBubble />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Comment;
