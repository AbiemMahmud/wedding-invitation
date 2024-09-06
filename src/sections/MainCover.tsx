import { MailOpen } from "lucide-react";
import { useSetPlay } from "src/contexts/PlayContext";
import FlowMain from "@assets/decorations/flow-main1.png";
import FlowMain2 from "@assets/decorations/flow-main2.png";
import FlowerImg from "@assets/decorations/flower2.png";
import { useEffect, useState } from "react";

const MainCover = () => {
  const [nama, setNama] = useState("");
  const setPlay = useSetPlay(); // konteks untuk memutar musik
  const openInvitation = () => {
    setPlay(true);
    const element = document.getElementById("cover");
    if (element) {
      const toY = element.getBoundingClientRect().top + 150;
      window.scrollTo({ top: toY, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const queryString = window.location.search;
    const queryObj = new URLSearchParams(queryString);
    const nama_undangan = queryObj.get("kepada");

    if (nama_undangan) {
      setNama(nama_undangan);
    }
  }, []);

  return (
    <div
      id="main-cover"
      className={`flex justify-center items-center bg-slate-50 bg-center relative bg-cover w-full h-screen font-body text-center`}
      // style={{ backgroundImage: `url(${Cover})` }}
    >
      <div
        className="top-0 absolute bg-contain bg-no-repeat w-full h-5/6"
        style={{ backgroundImage: `url(${FlowMain})` }}
      ></div>
      <div
        className="right-0 bottom-0 absolute bg-contain bg-no-repeat bg-right-bottom w-full max-w-56 h-2/6"
        style={{ backgroundImage: `url(${FlowMain2})` }}
      ></div>
      <div
        className="right-0 top-0 absolute bg-contain bg-no-repeat bg-right-top w-full max-h-96 h-full"
        style={{ backgroundImage: `url(${FlowerImg})` }}
      ></div>
      <div
        className="left-0 bottom-0 absolute bg-contain bg-no-repeat rotate-180 bg-right-top w-full max-h-96 h-full"
        style={{ backgroundImage: `url(${FlowerImg})` }}
      ></div>
      <div className=""></div>
      <div className="z-10">
        <div className="">
          <h1 className="my-8">Undangan Pernikahan</h1>
          <h1 className="my-2 font-display text-2xl sm:text-5xl">
            Ahmad Fauzi
          </h1>
          <h1 className="my-2 font-display text-2xl sm:text-5xl">&</h1>
          <h1 className="my-2 font-display text-2xl sm:text-5xl">
            Putri Patrisia
          </h1>
        </div>
        <div className="my-16">
          {nama && (
            <>
              <p className="mb-2">Kepada Yth. Bapak/Ibu/Saudara/i:</p>
              <p className="font-semibold text-xl">{nama}</p>
            </>
          )}
        </div>
        <div>
          <button
            className="flex items-center gap-2 bg-white border border-slate-400 hover:bg-slate-400 mx-auto px-4 py-1 rounded-2xl w-auto hover:text-slate-200 transition-colors duration-200 hover"
            onClick={openInvitation}
          >
            <MailOpen strokeWidth={1} size={16} />
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCover;
