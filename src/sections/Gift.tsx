import { CircleX, GiftIcon } from "lucide-react";
import Card from "../components/Card";
import Modal from "src/components/Modal";
import { MouseEvent, useState } from "react";
import Toast from "src/components/Toast";

const Gift = () => {
  const [showToast, setShowToast] = useState(false);

  const copyToClip = async (e: MouseEvent) => {
    const text = e.currentTarget.textContent;
    if (!text) {
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <Card className="py-20 p-4 text-center" id="gift">
      <div className="mx-auto w-10/12">
        <h1 className="mb-8 font-display text-3xl entrance">Gift</h1>

        <Modal
          id="gift"
          className="mb-20 p-4 entrance"
          trigger={
            <div className="bg-amber-300 hover:bg-amber-600 p-2 rounded-md w-full">
              <GiftIcon size={36} className="mx-auto" />
              <p>Kirimkan Kado</p>
            </div>
          }
        >
          <div className="border-2 border-slate-900 bg-white mx-auto mt-12 p-2 rounded-xl w-5/6 max-w-96">
            <header className="flex justify-between items-center p-2 border-b-2">
              <h1 className="font-semibold text-xl">Gift</h1>
              <CircleX
                size={24}
                className="cursor-pointer modal-close stroke-red-600 hover:stroke-red-300"
              />
            </header>
            <main className="p-2">
              <div className="mb-8">
                <h2 className="font-semibold">Cashless Gift</h2>
                <p>
                  Anda dapat mengirimkan kado tanpa cash melalui metode dibawah
                  ini:
                </p>
                <div className="border-2 border-slate-300 my-4 p-2 rounded-md w-full">
                  BCA{" "}
                  <span
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={(e) => copyToClip(e)}
                  >
                    4730698181
                  </span>{" "}
                  a.n AHMAD FAUZI MAULANA
                </div>
              </div>
              <div>
                <h2 className="font-semibold">Kirim Kado Langsung</h2>
                <p>Anda dapat mengirimkan kado secara langsung ke alamat:</p>
                <p
                  className="my-4 text-green-700 hover:text-green-900 hover:underline cursor-pointer"
                  onClick={(e) => copyToClip(e)}
                >
                  Reni Jaya Jl. Swadaya Gg.Rinem Rt04 Rw05 No.88 Kel. Pondok
                  Benda Kec. Pamulang-Tangerang Selatan
                </p>
              </div>
            </main>
            <footer className="flex justify-end border-t-2">
              <button className="bg-red-600 hover:bg-red-800 m-4 px-4 py-2 rounded-lg text-white modal-close">
                Tutup
              </button>
            </footer>
          </div>
        </Modal>
        <Toast show={showToast}>Text berhasil disalin</Toast>
      </div>
    </Card>
  );
};

export default Gift;
