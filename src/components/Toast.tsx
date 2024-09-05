import { FC, ReactNode, useEffect, useRef } from "react";
import "./styles/animation.css";
import ReactDOM from "react-dom";

interface ToastProps {
  children: ReactNode;
  show: boolean;
}
const Toast: FC<ToastProps> = ({ children, show }) => {
  const hasMounted = useRef(false);
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
    setTimeout(() => (hasMounted.current = true), 3000);
  }, []);
  return ReactDOM.createPortal(
    <div
      className={`${getAnimationClass()} p-4 py-2 rounded-lg bg-slate-900/70 -translate-x-1/2 left-1/2 fixed z-50 text-center text-slate-100 bottom-10 min-w-9 toast`}
    >
      {children}
    </div>,
    document.body
  );
};

export default Toast;
