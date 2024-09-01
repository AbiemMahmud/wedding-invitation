import { ComponentProps, FC, ReactNode, useEffect, useState } from "react";
import $ from "jquery";

interface ModalProps extends ComponentProps<"div"> {
  children: ReactNode;
  trigger: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children, trigger, ...rest }) => {
  const [show, setShow] = useState(false);

  const triggerHandle = () => {
    console.log("Clicked!!");

    setShow((prev) => !prev);
  };

  useEffect(() => {
    $(".meta-close").on("click", triggerHandle);
  }, []);

  return (
    <div {...rest}>
      <div
        id="modal-trigger"
        className="cursor-pointer"
        onClick={triggerHandle}
      >
        {trigger}
      </div>
      <div id="modal-content" className={`${show ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
