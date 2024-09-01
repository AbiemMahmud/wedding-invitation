import { CalendarCheck, Map } from "lucide-react";
import Card from "../components/Card";

const DetailEvent = () => {
  return (
    <Card className="py-20 p-4 text-center">
      <div>
        <div className="">
          <h1 className="mb-4 font-display text-3xl">Acara</h1>
          <p>
            Kami bermaksud untuk mengundang saudara/i dalam acara pernikahan
            kami yang akan diselenggarakan pada:
          </p>
        </div>

        <div className="my-8">
          <div>
            <h1 className="font-semibold text-4xl">Akad Nikah</h1>
            <div className="my-2">
              <p className="font-light text-green-500">
                Minggu, 29 September 2024
              </p>
              <p className="font-light text-amber-500">09:00 - Selesai</p>
            </div>
            <p>Kediaman mempelai wanita</p>
            <p>
              Kp. Bulak Rt02/Rw 009, Villa Dago, Benda baru, Pamulang-Tangerang
              Selatan
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-2">
            {/* Tombol google calendar */}
            <div className="inline-block gap-2 bg-amber-100 p-2 rounded-md cursor-pointer">
              <a
                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Pernikahan+Ahmad+Fauzi+Maulana+%26+Putri+Patrisia&details=Lokasi+di+kediaman+mempelai+wanita&dates=20240929T090000+0700/20240929T100000+0700&location=https://maps.google.com/maps?q=-6.358579158782959%2C106.7268295288086&z=17&hl=en&trp=false&sprop&sprop=name:"
                target="_blank"
              >
                <div className="flex justify-center items-center gap-2">
                  <CalendarCheck size={16} />
                  <span>Simpan Tanggal</span>
                </div>
              </a>
            </div>
            <div className="inline-block gap-2 bg-amber-100 p-2 rounded-md cursor-pointer">
              <a
                href="https://maps.google.com/maps?q=-6.358579158782959%2C106.7268295288086&z=17&hl=en"
                target="_blank"
              >
                <div className="flex justify-center items-center gap-2">
                  <Map size={16} />
                  <span>Navigasi Map</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-semibold text-4xl">Resepsi</h1>
            <div className="my-2">
              <p className="font-light text-green-500">
                Sabtu, 12 Oktober 2024
              </p>
              <p className="font-light text-amber-500">09:00 - Selesai</p>
            </div>
            <p>Kediaman mempelai pria</p>
            <p>
              Reni Jaya Jl. Swadaya Gg.Rinem Rt04 Rw05 No.88 Kel. Pondok Benda
              Kec. Pamulang-Tangerang Selatan
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4 justify-center gap-2 mt-2">
            {/* Tombol google calendar */}
            <div className="inline-block gap-2 bg-amber-100 p-2 rounded-md cursor-pointer">
              <a
                href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Resepsi+Pernikahan+Ahmad+Fauzi+Maulana+%26+Putri+Patrisia&details=Lokasi+di+kediaman+mempelai+pria&dates=20241012T090000+0700/20241012T235900+0700&location=https://maps.google.com/maps?q=-6.358579158782959%2C106.7268295288086&z=17&hl=en&trp=false&sprop&sprop=name:"
                target="_blank"
              >
                <div className="flex justify-center items-center gap-2">
                  <CalendarCheck size={16} />
                  <span>Simpan Tanggal</span>
                </div>
              </a>
            </div>
            <div className="inline-block gap-2 bg-amber-100 p-2 rounded-md">
              <a
                href="https://maps.google.com/maps?q=-6.358579158782959%2C106.7268295288086&z=17&hl=en"
                target="_blank"
              >
                <div className="flex justify-center items-center gap-2">
                  <Map size={16} />
                  <span>Navigasi Map</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default DetailEvent;
