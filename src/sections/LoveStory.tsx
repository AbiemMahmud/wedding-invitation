import Card from "../components/Card";
import Timeline from "../components/Timeline";

const LoveStory = () => {
  return (
    <Card className="flex justify-center py-20 p-6 text-center">
      <div className="w-full">
        <h1 className="mb-6 font-display text-3xl">Kisah Cinta</h1>

        {/* Disini akan diisi timeline */}
        <div>
          <Timeline />
        </div>
      </div>
    </Card>
  );
};

export default LoveStory;
