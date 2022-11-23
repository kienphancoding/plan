import clsx from "clsx";
import { useState, useEffect } from "react";
import style from "./Home.module.scss";

const Home = () => {
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  const [play, setPlay] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [todaySecond, setTodaySecond] = useState(() => {
    const jsonStorage = JSON.parse(localStorage.getItem("time")) ?? [];
    const lastItem = jsonStorage[jsonStorage.length - 1];
    let temp = 0;
    if (
      !!localStorage.getItem("time") &&
      lastItem.name === `${date}/${month}/${year}`
    ) {
      temp = lastItem.time;
    }
    return temp;
  });

  useEffect(() => {
    if (!!localStorage.getItem("time")) {
      const jsonStorage = JSON.parse(localStorage.getItem("time"));
      const lastItem = jsonStorage[jsonStorage.length - 1];
      //check ngay moi hay cu
      //neu moi ( khac ) thi se them phan tu moi vao . neu giong thi cong vao va luu moi khi second thay doi
      if (lastItem.name === `${date}/${month}/${year}`) {
        //update du lieu va luu
        lastItem.time = todaySecond;
        localStorage.setItem("time", JSON.stringify(jsonStorage));
      } else {
        //tao phan tu moi
        const newStorage = [
          ...jsonStorage,
          { name: `${date}/${month}/${year}`, time: todaySecond },
        ];
        localStorage.setItem("time", JSON.stringify(newStorage));
      }
    } else {
      localStorage.setItem(
        "time",
        JSON.stringify([{ name: `${date}/${month}/${year}`, time: 0 }])
      );
    }
  }, [todaySecond]);

  //cứ mỗi giây trôi qua thì đồng hồ lại chạy
  useEffect(() => {
    let timerId = setInterval(() => {
      if (play) {
        setTodaySecond((prev) => prev + 1);
        setSeconds((prev) => prev + 1);
      }
    }, 1000);

    //clean up func
    return () => clearInterval(timerId);
  }, [play]);
  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.clock)}>
        <h1 className={clsx(style.title)}>Total today</h1>
        <div className={clsx(style.time)}>
          {todaySecond >= 60 ? Math.floor(todaySecond / 60) : "00"}:
          {todaySecond % 60 < 10 ? "0" + (todaySecond % 60) : todaySecond % 60}
        </div>
        <h1 className={clsx(style.title)}>Now</h1>
        <div className={clsx(style.time)}>
          {seconds >= 60 ? Math.floor(seconds / 60) : "00"}:
          {seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}
        </div>
        {!play && (
          <div onClick={() => setPlay(true)} className={clsx(style.btn)}>
            Start
          </div>
        )}
        {play && (
          <div onClick={() => setPlay(false)} className={clsx(style.btn)}>
            Pause
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
