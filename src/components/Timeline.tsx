import image_1 from "@assets/images/story_1.jpg";
import TimelineContent from "./TimelineContent";

const Timeline = () => {
  return (
    <div className="w-full">
      <TimelineContent imageUrl={image_1} description="Firstime our meeting" />
      <TimelineContent
        imageUrl={image_1}
        description="Firstime our meeting"
        isLast={true}
      />
    </div>
  );
};

export default Timeline;
