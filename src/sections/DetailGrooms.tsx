import Card from "../components/Card";
import { Instagram } from "lucide-react";
import Man from "@assets/images/cutout_man_bride.png";
import Woman from "@assets/images/cutout_woman_bride.png";

const DetailGrooms = () => {
  return (
    <div id="detail">
      <Card className="py-20 p-4 text-center">
        <p className="mb-4">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
        <p className="">
          Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Anda untuk
          menyaksikan momen berharga dalam hidup kami:
        </p>

        {/* Mempelai pria */}
        <div>
          <div className="flex justify-center items-center my-12 bg-amber-300 foto-mempelai mx-auto rounded-full w-40 h-40">
            <div
              className="size-36 bg-cover rounded-full"
              style={{ backgroundImage: `url(${Man})` }}
            ></div>
          </div>
          <h1 className="font-display text-5xl mb-4">Ahmad Fauzi Maulana</h1>
          <p className="mb-4">Putra Dari Bapak Hendra & Ibu Nawiyah</p>
          <a href="https://www.instagram.com/fauziiimaulanaaa" target="_blank">
            <div className="size-12 bg-amber-200 flex justify-center cursor-pointer items-center rounded-full mx-auto">
              <Instagram size={24} className="" />
            </div>
          </a>
        </div>
        <h2 className="font-display text-4xl my-8">&</h2>

        {/* Mempelai wanita */}
        <div>
          <div className="flex justify-center items-center my-12 bg-amber-300 foto-mempelai mx-auto rounded-full w-40 h-40">
            <div
              className="size-36 bg-cover rounded-full"
              style={{ backgroundImage: `url(${Woman})` }}
            ></div>
          </div>
          <h1 className="font-display text-5xl mb-4">Putri Patrisia</h1>
          <p className="mb-4">Putri Dari Bapak Mamat & Ibu Nancuh</p>
          <a href="https://www.instagram.com/putri.ptrcia" target="_blank">
            <div className="cursor-pointer size-12 bg-amber-200 flex justify-center items-center rounded-full mx-auto">
              <Instagram size={24} className="" />
            </div>
          </a>
        </div>
      </Card>
    </div>
  );
};

export default DetailGrooms;
