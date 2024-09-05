import Card from "../components/Card";

const Closing = () => {
  return (
    <Card className="py-20 p-1 text-center">
      <div className="mx-auto w-10/12">
        <p>
          Kami sangat berharap saudara/i dapat bergabung dengan kami dalam acara
          ini dan berbagi kebahagiaan bersama. Kami menantikan kehadiran
          saudara/i dengan hangat. Terima kasih atas perhatian dan harapan baik
          saudara/i untuk hadir di acara kami.
        </p>

        <div className="my-8">
          <p>Hormat Kami</p>
          <p className="mt-4 font-bold">Ahmad Fauzi Maulana & Putri Patrisia</p>
        </div>

        {/* <div>
          <p>Turut Mengundang:</p>
          <p className="font-bold">1. Bapak Sopian (RT02)</p>
          <p className="font-bold">1. Bapak Sopian (RT02)</p>
          <p className="font-bold">1. Bapak Sopian (RT02)</p>
        </div> */}
      </div>
    </Card>
  );
};

export default Closing;
