import Gift from "./sections/Gift";
import Cover from "./sections/Cover";
import DetailEvent from "./sections/DetailEvent";
import DetailGrooms from "./sections/DetailGrooms";
import Gallery from "./sections/Gallery";
import Greeting from "./sections/Greeting";
import MainCover from "./sections/MainCover";
import Comment from "./sections/Comment";
import Closing from "./sections/Closing";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import { CircleX } from "lucide-react";

/**
 * Desain awal website undangan pernikahan
 * baru jadi layout, cover sama card component
 *
 * 27/8:
 * Timeline lyaout selesai
 * Scrollspy navigasi selesai
 *
 * 28/8:
 * Asset sudah ada
 * Link lokasi dan google calendar selesai
 *
 * 29/8:
 * countdown selesai
 * ornamen/dekorasi selesai
 * gallery selesai
 *
 * Todo:
 * lokasi dan calendar perlu di ralat
 * Fungsi gallery/carousel (done)
 * Tambah fungsi untuk buka undangan
 * Tambah layout modal untuk musik
 * Tambah modal untuk gift
 * Sambung ke database untuk comment
 * Link instagram, lokasi, dll (done)
 * Asset yang akan digunakan (done)
 * Tambah ornamen wedding-ish untuk dekorasi (done)
 * (opt) perbaiki desain dan layout / standarisasi
 */
function App() {
  return (
    <>
      <MainCover />
      <main className="p-4 w-full font-body">
        <Cover />
        <Greeting />
        <DetailGrooms />
        <DetailEvent />
        {/* <LoveStory /> */}
        <Gallery />
        <Gift />
        <Comment />
        <Closing />
      </main>
      <Modal
        className="mb-20 p-4"
        trigger={
          <button className="border-2 border-slate-900 p-2">Coba Klik</button>
        }
      >
        <div className="border-2 border-slate-900 bg-white p-2 rounded-xl">
          <header className="flex justify-between items-center p-2 border-b-2">
            <h1 className="font-semibold text-xl">Gift</h1>
            <CircleX
              size={24}
              className="cursor-pointer meta-close stroke-red-600"
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
                <span className="text-blue-500 hover:underline cursor-pointer">
                  4730698181
                </span>{" "}
                a.n AHMAD FAUZI MAULANA
              </div>
            </div>
            <div>
              <h2 className="font-semibold">Kirim Kado Langsung</h2>
              <p>Anda dapat mengirimkan kado secara langsung ke alamat:</p>
              <p className="my-4 text-amber-700">
                Reni Jaya Jl. Swadaya Gg.Rinem Rt04 Rw05 No.88 Kel. Pondok Benda
                Kec. Pamulang-Tangerang Selatan
              </p>
            </div>
          </main>
          <footer className="border-t-2 meta-close">This is footer</footer>
        </div>
      </Modal>
      <NavBar />
    </>
  );
}

export default App;
