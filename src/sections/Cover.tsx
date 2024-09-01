import { FC, useEffect } from "react";
import Card from "../components/Card";
import { countDownHandler } from "src/utils/countdown";

const Cover: FC = () => {
  useEffect(() => {
    setInterval(countDownHandler, 1000);
  });
  return (
    <Card className=" text-center p-4 py-20" id="cover">
      <div>
        <div className="mb-16">
          <h1 className="mb-6">Undangan Pernikahan</h1>
          <h1 className="font-display text-5xl">Ahmad Fauzi Maulana</h1>
          <h1 className="font-display text-5xl my-4">&</h1>
          <h1 className="font-display text-5xl">Putri Patrisia</h1>
        </div>
        <div className="mb-4 flex gap-8 justify-center">
          <div>
            <p>Minggu</p>
            <p>29 September 2024</p>
          </div>
          <div className="relativ bot w-[2px] bg-slate-900"></div>
          <div>
            <p>Sabtu</p>
            <p>12 Oktober 2024</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="">
            <p className="text-pink-700 text-3xl font-bold" id="days">
              7
            </p>
            <p>HARI</p>
          </div>
          <p className="text-pink-700 text-3xl self-start font-bold">:</p>
          <div className="">
            <p className="text-pink-700 text-3xl font-bold " id="hours">
              09
            </p>
            <p>JAM</p>
          </div>
          <p className="text-pink-700 text-3xl self-start font-bold">:</p>
          <div className="">
            <p className="text-pink-700 text-3xl font-bold" id="minutes">
              32
            </p>
            <p>MENIT</p>
          </div>
          <p className="text-pink-700 text-3xl self-start font-bold">:</p>
          <div className="">
            <p className="text-pink-700 text-3xl font-bold" id="seconds">
              18
            </p>
            <p>DETIK</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Cover;
