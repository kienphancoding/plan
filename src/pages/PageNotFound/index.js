import {
  faHouse,
  faLeftLong,
  faRotateBack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./PageNotFound.module.scss";

const PageNotFound = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <h1 className={clsx(style.title)}>Không tìm thấy trang</h1>
      <img
        className={clsx(style.img)}
        src="https://i.pinimg.com/564x/76/ea/65/76ea6548f69fa801a91ce0d6a9c0d339.jpg"
      />
      <div className={clsx(style.menu)}>
        <div
          data="Quay lại"
          onClick={() => window.history.back()}
          className={clsx(style.btn)}
        >
          <FontAwesomeIcon icon={faLeftLong} />
        </div>
        <Link data="Về trang chủ" to="/" className={clsx(style.btn)}>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <div
          data="Tải lại trang"
          onClick={() => window.location.reload()}
          className={clsx(style.btn)}
        >
          <FontAwesomeIcon icon={faRotateBack} />
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
