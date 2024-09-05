import { FormEvent, useEffect, useState } from "react";
import Card from "../components/Card";
import CommentBubble from "../components/CommentBubble";
import supabase from "src/config/supabase";
import Toast from "src/components/Toast";

const Comment = () => {
  const [showToast, setShowToast] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const trimName = name.trim();
    const trimText = text.trim();

    if (trimName === "" || trimText === "") {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }

    const { data } = await supabase
      .from("Comment")
      .insert({ name: name, text: text })
      .select();

    if (data) {
      setName("");
      setText("");
      setComments([...data, ...comments]);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      const { data } = await supabase
        .from("Comment")
        .select()
        .order("created_at", { ascending: false });

      if (data) {
        setComments(data);
      }
    };

    getComments();
  }, []);

  return (
    <div id="comment">
      <Card className="py-20 p-4 text-center">
        <div className="mx-auto w-10/12">
          <h1 className="mb-8 font-display text-3xl entrance">Ucapan & Doa</h1>
          <div className="flex flex-col gap-2 entrance">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              id="name"
              className="bg-amber-100 p-2 rounded-md"
              placeholder="Nama Anda"
            />
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              name="comment"
              id="comment"
              className="bg-amber-100 p-2 rounded-md h-52"
              placeholder="Tuliskan ucapan dan doa"
            />
            <input
              onClick={(e) => submitForm(e)}
              type="submit"
              value="Kirimkan Ucapan"
              className="bg-amber-400 hover:bg-amber-600 p-2 rounded-md duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 my-4 h-72 overflow-y-scroll entrance">
            {comments &&
              comments.map((comment) => {
                return <CommentBubble comment={comment} key={comment.id} />;
              })}
          </div>
        </div>
      </Card>
      <Toast show={showToast}>Mohon is field yang tersedia</Toast>
    </div>
  );
};

export default Comment;
