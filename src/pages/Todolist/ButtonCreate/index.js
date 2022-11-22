import clsx from "clsx";
import { memo } from "react";
import style from "./ButtonCreate.module.scss";

const ButtonCreate = ({ handleCreate }) => {
  return (
    <button onClick={handleCreate} className={clsx(style.btn)}>
      Tạo
    </button>
  );
};

export default memo(ButtonCreate);
