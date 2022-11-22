import clsx from "clsx";
import { useState, useEffect } from "react";
import style from "./Schedule.module.scss";

const Schedule = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [indexColumn, setIndexColumn] = useState();
  const [indexRow, setIndexRow] = useState();
  const [content, setContent] = useState(() => {
    return JSON.parse(localStorage.getItem("schedule")) ?? [];
  });

  const d = new Date();
  const day = d.getDay();

  useEffect(() => {
    setContent(JSON.parse(localStorage.getItem("schedule")) ?? []);
  }, [input, text, indexColumn, indexRow]);

  const handleCreate = () => {
    setContent((prev) => {
      // khoi tao hang moi
      const content = days.map((x) => {
        return {
          time: "",
          content: "",
          date: x,
        };
      });
      //luu vao storage
      localStorage.setItem("schedule", JSON.stringify([...prev, content]));
      //tra ve du lieu
      return [...prev, content];
    });
  };
  const handleSaveTime = (time) => {
    const jsonStorage = JSON.parse(localStorage.getItem("schedule"));
    //set gia tri
    jsonStorage[indexRow][indexColumn].time = time;
    //luu gia tri
    localStorage.setItem("schedule", JSON.stringify(jsonStorage));
  };

  const handleSaveText = (text) => {
    const jsonStorage = JSON.parse(localStorage.getItem("schedule"));
    //set gia tri
    jsonStorage[indexRow][indexColumn].content = text;
    //luu gia tri
    localStorage.setItem("schedule", JSON.stringify(jsonStorage));
  };

  return (
    <div className={clsx(style.wrapper)}>
      <h1 className={clsx(style.title)}>Schedule</h1>
      <div className={clsx(style.list)}>
        {days.map((x, index) => {
          return (
            <div
              className={
                day - 1 === index
                  ? clsx(style.item, style.active)
                  : clsx(style.item)
              }
              key={index}
            >
              <div className={clsx(style.date)}>{x}</div>
            </div>
          );
        })}
      </div>
      {content.map((y, i) => {
        return (
          <div className={clsx(style.list)} key={i}>
            {days.map((x, index) => {
              return (
                <div
                  className={
                    day - 1 === index
                      ? clsx(style.itemContent, style.active)
                      : clsx(style.itemContent)
                  }
                  key={index}
                >
                  <input
                    spellCheck="false"
                    value={
                      i === indexRow && indexColumn === index
                        ? input
                        : y[index].time
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      setInput(y[index].time);
                      setText(y[index].content);
                      setIndexRow(i);
                      setIndexColumn(index);
                    }}
                    onChange={(e) => {
                      setInput(e.target.value);
                      handleSaveTime(e.target.value);
                    }}
                    className={clsx(style.time)}
                  />
                  <textarea
                    spellCheck="false"
                    value={
                      i === indexRow && indexColumn === index
                        ? text
                        : y[index].content
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      setInput(y[index].time);
                      setText(y[index].content);
                      setIndexRow(i);
                      setIndexColumn(index);
                    }}
                    onChange={(e) => {
                      setText(e.target.value);
                      handleSaveText(e.target.value);
                    }}
                    className={clsx(style.task)}
                  ></textarea>
                </div>
              );
            })}
          </div>
        );
      })}

      <button className={clsx(style.btn)} onClick={handleCreate}>
        Create
      </button>
    </div>
  );
};

export default Schedule;
