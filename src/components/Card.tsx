import { ComponentProps, FC, ReactNode, RefObject } from "react";
import FlowerImage from "@assets/decorations/flower.png";
import FlowTop from "@assets/decorations/flow.png";
import FlowBottom from "@assets/decorations/flow2.png";

interface CardProps extends ComponentProps<"div"> {
  children: ReactNode;
  innerRef?: RefObject<HTMLDivElement>;
}
const Card: FC<CardProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={`${className} relative max-w-2xl mx-auto mb-4 bg-white shadow-md shadow-slate-800/30 rounded-2xl`}
      {...rest}
    >
      <div
        className="top-0 left-0 z-10 absolute bg-contain bg-no-repeat rounded-t-2xl w-full h-full"
        style={{ backgroundImage: `url(${FlowTop})` }}
      ></div>
      <img
        className="relative z-20 w-full"
        src={FlowerImage}
        alt="Flower Image"
      />
      <div className="relative z-10">{children}</div>
      <div
        className="bottom-0 left-0 z-[1] absolute bg-contain bg-no-repeat bg-bottom rounded-b-2xl w-full h-full"
        style={{ backgroundImage: `url(${FlowBottom})` }}
      ></div>
    </div>
  );
};

export default Card;
