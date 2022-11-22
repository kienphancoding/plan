import { useState } from "react";

import clsx from "clsx";
import style from "./Todolist.module.scss";

import ButtonCreate from "./ButtonCreate";
import CreateTodolist from "./Create";
import ReadTodolist from "./Read";

const Todolist = () => {
  const [create, setCreate] = useState("");
  const [createList, setCreateList] = useState(() => {
    return JSON.parse(localStorage.getItem("todolist")) ?? [];
  });

  const handleCreate = () => {
    if (create !== "") {
      setCreateList((prev) => {
        const newJob = [...prev, create];

        //save to localstorages
        localStorage.setItem("todolist", JSON.stringify(newJob));

        return newJob;
      });
      setCreate("");
    }
  };

  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.create)}>
        <CreateTodolist
          create={create}
          setCreate={setCreate}
          handleCreate={handleCreate}
        />
        <ButtonCreate handleCreate={handleCreate} />
      </div>
      <div className={clsx(style.read)}>
        <ReadTodolist createList={createList} setCreateList={setCreateList} />
      </div>
    </div>
  );
};

export default Todolist;
