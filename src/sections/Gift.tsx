import { CircleX, GiftIcon } from "lucide-react";
import Card from "../components/Card";
import Modal from "src/components/Modal";
import { useState } from "react";
import Toast from "src/components/Toast";

const Gift = () => {
  const [showToast, setShowToast] = useState(false);

  const copyToClip = () => {
    navigator.clipboard.writeText("4730698181");
    console.log("copy it");

    setShowToast(true);

    setTimeout(() => {
      console.log("hello");

      setShowToast(false);
    }, 3000);
  };
  return (
    <Card className="py-20 p-4 text-center" id="gift">
      <div className="mx-auto w-10/12">
        <h1 className="mb-8 font-display text-3xl">Gift</h1>

        <Modal
          id="gift"
          className="mb-20 p-4"
          trigger={
            <div className="bg-green-500 p-2 rounded-md w-full text-white">
              <GiftIcon size={36} className="mx-auto" />
              <p>Kirimkan Kado</p>
            </div>
          }
        >
          <div className="border-2 border-slate-900 bg-white mx-auto mt-12 p-2 rounded-xl max-w-96">
            <header className="flex justify-between items-center p-2 border-b-2">
              <h1 className="font-semibold text-xl">Gift</h1>
              <CircleX
                size={24}
                className="cursor-pointer modal-close stroke-red-600"
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
                    onClick={copyToClip}
                  >
                    4730698181
                  </span>{" "}
                  a.n AHMAD FAUZI MAULANA
                </div>
              </div>
              <div>
                <h2 className="font-semibold">Kirim Kado Langsung</h2>
                <p>Anda dapat mengirimkan kado secara langsung ke alamat:</p>
                <p className="my-4 text-amber-700">
                  Reni Jaya Jl. Swadaya Gg.Rinem Rt04 Rw05 No.88 Kel. Pondok
                  Benda Kec. Pamulang-Tangerang Selatan
                </p>
              </div>
            </main>
            <footer className="flex justify-end border-t-2">
              <button className="bg-red-600 m-4 px-4 py-2 rounded-lg text-white modal-close">
                Tutup
              </button>
            </footer>
          </div>
        </Modal>
        <Toast show={showToast}>Nomor rekening berhasil disalin</Toast>
      </div>
    </Card>
  );
};

export default Gift;
