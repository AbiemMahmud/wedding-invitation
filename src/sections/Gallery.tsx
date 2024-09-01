import Card from "../components/Card";
import Carousel from "src/components/Carousel";

const Gallery = () => {
  return (
    <div id="gallery">
      <Card className="py-20 p-4 text-center">
        <h1 className="mb-8 font-display text-2xl">Gallery</h1>
        <Carousel />
      </Card>
    </div>
  );
};

export default Gallery;
