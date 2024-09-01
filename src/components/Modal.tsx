import {
  ComponentProps,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import $ from "jquery";
import "./styles/animation.css";
import ReactDOM from "react-dom";

interface ModalProps extends ComponentProps<"div"> {
  children: ReactNode;
  trigger: ReactNode;
  id: string;
}

export const Modal: FC<ModalProps> = ({ children, trigger, id, ...rest }) => {
  const [show, setShow] = useState(false);
  const hasMounted = useRef(false);

  // handling trigger and closing
  const triggerHandle = () => {
    setShow((prev) => !prev);
  };

  const getAnimationClass = () => {
    if (!hasMounted.current) {
      return "first-render";
    }
    if (show) {
      return "fade-in";
    } else {
      return "fade-out";
    }
  };

  useEffect(() => {
    hasMounted.current = true;
    window.onload = () => {
      $(".modal-close").on("click", triggerHandle);

      return () => {
        $(".modal-close").off("click");
      };
    };
  }, []);

  return (
    <>
      <div {...rest}>
        <div
          id={`modal-trigger-${id}`}
          className="cursor-pointer"
          onClick={triggerHandle}
        >
          {trigger}
        </div>
      </div>
      {ReactDOM.createPortal(
        <div
          id={`modal-content-${id}`}
          className={`${getAnimationClass()} fixed  top-0 left-0 w-full h-full overflow-auto bg-slate-900/40 z-40`}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default Modal;
