import clsx from "clsx";
import style from "./CreateTodolist.module.scss";
import { memo, useEffect, useRef } from "react";

const CreateTodolist = ({ create, setCreate, handleCreate }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    setCreate(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [create]);

  return (
    <input
      className={clsx(style.input)}
      value={
        create === "" ? "" : create[0].toUpperCase().concat(create.slice(1))
      }
      onChange={handleChange}
      onKeyDown={handleEnter}
      ref={inputRef}
      spellCheck="false"
    />
  );
};

export default memo(CreateTodolist);
