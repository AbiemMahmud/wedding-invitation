import { MailOpen } from "lucide-react";

const MainCover = () => {
  const openInvitation = () => {
    const element = document.getElementById("cover");
    if (element) {
      const toY = element.getBoundingClientRect().top - 15;
      window.scrollTo({ top: toY, behavior: "smooth" });
    }
  };

  return (
    <div
      id="main-cover"
      className={`flex justify-center items-center bg-amber-300 bg-center bg-cover w-full h-screen font-body text-center`}
      // style={{ backgroundImage: `url(${Cover})` }}
    >
      <div>
        <div className="mb-16">
          <h1>Undangan Pernikahan</h1>
          <br />
          <h1 className="font-display text-6xl">Ahmad Fauzi Maulana</h1>
          <h1 className="font-display text-6xl">&</h1>
          <h1 className="font-display text-6xl">Putri Patrisia</h1>
        </div>
        <div>
          <button
            className="flex items-center gap-2 bg-white hover:bg-slate-400 mx-auto px-4 py-1 rounded-2xl w-auto hover:text-slate-200 transition-colors duration-200 hover"
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
