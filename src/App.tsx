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
import { useEffect } from "react";

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
 * 3/9:
 * comment, kurang format waktu
 * modal selesai
 * toast selesai
 * animasi modal dan toast
 * onclick copy rekening done
 *
 * Todo:
 * lokasi dan calendar perlu di ralat
 * Fungsi gallery/carousel (done)
 * Tambah fungsi untuk buka undangan
 * Tambah layout modal untuk musik
 * Tambah modal untuk gift (done)
 * Sambung ke database untuk comment (kurang format waktu)
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

      <NavBar />
    </>
  );
}

export default App;
