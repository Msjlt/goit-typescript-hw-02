import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <BallTriangle color="#00BFFF" height={50} width={50} />
    </div>
  );
};

export default Loader;
