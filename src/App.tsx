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
import $ from "jquery";
import { useEffect } from "react";
import PlayContext from "./contexts/PlayContext";
import { ChevronUp } from "lucide-react";

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
 * animasi entrance selesai
 * format date time selesai
 *
 *
 * 5/9:
 * Musik dan controll selesai
 * animasi navbar selesai
 * main-cover selesai
 * lokasi dan kalender selesai
 *
 * 6/9:
 * kurangi delay pemutaran musik saat membuka undangan
 * perbaiki display link instagram
 * buat placeholder saat komentar kosong
 * buat fungsi untuk menambah nama tujuan dari undangan dengan parameter kepada
 *
 * Todo:
 * lokasi dan calendar perlu di ralat (done)
 * Fungsi gallery/carousel (done)
 * Tambah fungsi untuk buka undangan (done)
 * Tambah layout modal untuk musik (done)
 * Tambah modal untuk gift (done)
 * Sambung ke database untuk comment (done)
 * Link instagram, lokasi, dll (done)
 * Asset yang akan digunakan (done)
 * Tambah ornamen wedding-ish untuk dekorasi (done)
 * (opt) perbaiki desain dan layout / standarisasi
 */
function App() {
  // Fungsi untuk handle animasi entrance
  // Saat sebuah elemen terlihat di viewport
  const scrollEffect = () => {
    const elements = document.querySelectorAll(".entrance");
    const triggerBottom = (window.innerHeight * 5) / 6;
    if (elements) {
      elements.forEach((element) => {
        const boxTop = element.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    }
  };

  useEffect(() => {
    $(window).on("scroll", scrollEffect);

    scrollEffect();

    return () => {
      $(window).off();
    };
  }, []);
  return (
    <PlayContext>
      <MainCover />
      <main className="mb-12 p-4 w-full font-body">
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
      <UpArrowButton />
      <NavBar />
    </PlayContext>
  );
}

function UpArrowButton() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="right-6 bottom-14 fixed bg-green-600 p-2 rounded-lg cursor-pointer navbar"
      onClick={scrollTop}
    >
      <ChevronUp />
    </div>
  );
}

export default App;
