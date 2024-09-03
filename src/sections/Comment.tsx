import { FormEvent, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CommentBubble from "../components/CommentBubble";
import supabase from "src/config/supabase";

const Comment = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const nameRef = useRef("");
  const textRef = useRef("");

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    const trimName = name.trim();
    const trimText = text.trim();

    if (trimName === "" || trimText === "") {
      console.log(name);
      console.log(text);

      alert("Mohon isi dengan nama dan komentar / doa");
      return;
    }

    const { data, error } = await supabase
      .from("Comment")
      .insert({ name: name, text: text })
      .select();

    if (data) {
      setName("");
      setText("");
      setComments([...comments, ...data]);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      const { data, error } = await supabase.from("Comment").select();

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
          <h1 className="mb-8 font-display text-3xl">Ucapan & Doa</h1>
          <div className="flex flex-col gap-2">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              id="name"
              className="bg-amber-200 p-2 rounded-md"
              placeholder="Nama Anda"
            />
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              name="comment"
              id="comment"
              className="bg-amber-200 p-2 rounded-md h-52"
              placeholder="Tuliskan ucapan dan doa"
            />
            <input
              onClick={(e) => submitForm(e)}
              type="submit"
              value="Kirimkan Ucapan"
              className="bg-amber-600 p-2 rounded-md cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-2 my-4 h-72 overflow-y-scroll">
            {comments &&
              comments.map((comment) => {
                return <CommentBubble comment={comment} key={comment.id} />;
              })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Comment;
