import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { memo } from "react";
import style from "./ReadTodolist.module.scss";
import { useEffect } from "react";

const ReadTodolist = ({ createList, setCreateList }) => {
  const handleDelete = (index) => {
    const temp = createList;
    const a1 = temp.slice(0, index);
    const a2 = temp.slice(index + 1, temp.length);
    const new_arr = a1.concat(a2);
    setCreateList(new_arr);
    localStorage.setItem("todolist", JSON.stringify(new_arr));
  };

  useEffect(() => {
    document.getElementsByClassName(clsx(style.item))[createList.length-1].scrollIntoView()
  }, [createList]);
  
  return (
    <div className={clsx(style.list)}>
      {createList.map((x, index) => {
        return (
          <div className={clsx(style.item)} key={index}>
            <p className={clsx(style.text)}>{index+1}.{x}</p>
            <div className={clsx(style.menu)}>
              <div
                className={clsx(style.btn)}
                onClick={() => handleDelete(index)}
              >
                <FontAwesomeIcon
                  className={clsx(style.icon)}
                  icon={faSquareCheck}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(ReadTodolist);
