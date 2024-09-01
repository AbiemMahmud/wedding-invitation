import { GiftIcon } from "lucide-react";
import Card from "../components/Card";

const Gift = () => {
  const clickHandle = () => {
    navigator.clipboard.writeText("Hello mokier");
    alert("Text copied");
  };
  return (
    <Card className="py-20 p-4 text-center" id="gift">
      <div className="mx-auto w-10/12">
        <h1 className="mb-8 font-display text-3xl">Gift</h1>
        <div
          className="bg-green-500 p-2 rounded-md w-full text-white"
          onClick={clickHandle}
        >
          <GiftIcon size={36} className="mx-auto" />
          <p>Kirimkan Kado</p>
        </div>
      </div>
    </Card>
  );
};

export default Gift;
