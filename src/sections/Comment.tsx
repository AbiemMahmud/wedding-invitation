import { FormEvent, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import CommentBubble from "../components/CommentBubble";
import { Prisma, PrismaClient } from "@prisma/client";

interface IComment {
  id: number;
  name: string;
  text: string;
}

const Comment = () => {
  const prisma = new PrismaClient();

  const [comments, setComments] = useState<IComment[]>([]);
  const nameRef = useRef("");
  const textRef = useRef("");

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    const name = nameRef.current.trim();
    const text = textRef.current.trim();
    if (name === "" || text === "") {
      alert("Mohon isi dengan nama dan komentar / doa");
      return;
    }
    prisma.comment.create({
      data: {
        name: name,
        text: text,
      },
    });
  };

  useEffect(() => {
    const loadComments = async () => {
      const comments = await prisma.comment.findMany();
      setComments(comments);
    };

    loadComments();
  }, []);

  return (
    <div id="comment">
      <Card className="py-20 p-4 text-center">
        <div className="mx-auto w-10/12">
          <h1 className="mb-8 font-display text-3xl">Ucapan & Doa</h1>
          <div className="flex flex-col gap-2">
            <input
              onChange={(e) => (nameRef.current = e.target.value)}
              type="text"
              name="name"
              id="name"
              className="bg-amber-200 p-2 rounded-md"
              placeholder="Nama Anda"
            />
            <textarea
              onChange={(e) => (textRef.current = e.target.value)}
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
