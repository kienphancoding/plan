import cx, { clsx } from "clsx";
import { useRef, useEffect, useState } from "react";
import { songs } from "./Songs";
import style from "./Music.module.scss";
import {
  faPlay,
  faPause,
  faBackwardStep,
  faForwardStep,
  faRotateRight,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Music = () => {
  const [play, setPlay] = useState(true); // true la hien nut play
  const [indexSong, setIndexSong] = useState(0); // vi tri hien tai cua bai hat
  const [loopSong, setLoopSong] = useState(false); // lap lai bai hat

  const types = ["Japan", "China", "Lofi"];
  const [indexTypes, setIndexTypes] = useState(types[0]);

  const filterSongs = songs.filter((x) => {
    return x.type === indexTypes;
  });
  const [dataBackground, setDataBackground] = useState(filterSongs[0].img);

  const handlePlay = () => {
    setPlay(false);
  };

  const handlePause = () => {
    setPlay(true);
  };

  const handleNextSong = () => {
    setIndexSong(indexSong === filterSongs.length - 1 ? 0 : indexSong + 1);
  };

  const handlePrevSong = () => {
    setIndexSong(indexSong === 0 ? filterSongs.length - 1 : indexSong - 1);
  };

  const handleLoopSong = () => {
    setLoopSong(!loopSong);
  };

  const handleRandomSong = () => {
    for (let i = 0; i < songs.length; i++) {
      let random = Math.floor(Math.random() * songs.length);
      let temp;
      temp = songs[i];
      songs[i] = songs[random];
      songs[random] = temp;
    }
    setIndexSong(indexSong === 0 ? indexSong + 1 : 0);
  };

  const noRef = useRef(1);
  const RefWidth = useRef();

  //fixed bug chuyen type
  useEffect(() => {
    //set lai bai dau
    setIndexSong(() => 0);

    //set lai image
    setDataBackground(
      indexSong > filterSongs.length - 1
        ? filterSongs[0].img
        : filterSongs[indexSong].img
    );
  }, [indexTypes]);

  //   scroll into view
  useEffect(() => {
    const timeScrollIntoView = setTimeout(() => {
      document.getElementsByClassName(cx(style.activeItem))[0].scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 300);
    return () => clearTimeout(timeScrollIntoView);
  }, [indexSong]);

  //event set currtime song
  const checkWidth = (e) => {
    let width = RefWidth.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    let progress = offset / width;
    noRef.current.currentTime = progress * noRef.current.duration;
  };

  //set width current time song
  useEffect(() => {
    const timeSetWidth = setInterval(() => {
      document.getElementsByClassName(cx(style.duration))[0].style.width = `${
        (Math.floor(noRef.current.currentTime) /
          Math.floor(noRef.current.duration)) *
        100
      }%`;
    }, 500);
    return () => clearInterval(timeSetWidth);
  }, []);

  //loop song
  useEffect(() => {
    const timeCheckLoop = setInterval(() => {
      if (
        Math.floor(noRef.current.currentTime) ===
          Math.floor(noRef.current.duration) &&
        loopSong === true
      ) {
        noRef.current.currentTime = 0;
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [loopSong, indexSong]);

  //auto next song
  useEffect(() => {
    const timeCheckLoop = setInterval(() => {
      if (
        Math.floor(noRef.current.currentTime) ===
        Math.floor(noRef.current.duration)
      ) {
        handleNextSong();
      }
    }, 100);

    return () => clearInterval(timeCheckLoop);
  }, [indexSong]);

  useEffect(() => {
    setDataBackground(filterSongs[indexSong].img);
  }, [indexSong]);

  //play or pause
  useEffect(() => {
    if (play === false) {
      noRef.current.play();
    } else {
      noRef.current.pause();
    }
  }, [play, indexSong, loopSong, indexTypes]);

  return (
    <div
      style={{
        backgroundImage: `url(${
          indexSong > filterSongs.length - 1
            ? filterSongs[0].img
            : dataBackground
        })`,
      }}
      className={cx(style.wrapper)}
    >
      <div className={clsx(style.select)}>
        {types.map((x, index) => {
          return (
            <div
              onClick={() => setIndexTypes(types[index])}
              className={
                x === indexTypes
                  ? clsx(style.itemSelect, style.itemSelectActive)
                  : clsx(style.itemSelect)
              }
              key={index}
            >
              {x}
            </div>
          );
        })}
      </div>
      <div className={cx(style.list)}>
        {filterSongs.map((x, index) => {
          return (
            <div
              onClick={() => {
                setIndexSong(index);
              }}
              className={
                index === indexSong
                  ? clsx(style.item, style.activeItem)
                  : clsx(style.item)
              }
              key={index}
            >
              {x.name}
            </div>
          );
        })}
      </div>

      <audio
        ref={noRef}
        src={
          indexSong > filterSongs.length - 1
            ? filterSongs[0].src
            : filterSongs[indexSong].src
        }
      />
      <div
        className={cx(style.durationBar)}
        ref={RefWidth}
        onClick={checkWidth}
      >
        <div className={cx(style.duration)}></div>
      </div>
      <div className={cx(style.menu)}>
        <button
          onClick={handleLoopSong}
          className={loopSong === true ? cx(style.activeLoop) : cx(style.loop)}
        >
          <FontAwesomeIcon className={cx(style.icon)} icon={faRotateRight} />
        </button>
        <button onClick={handlePrevSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faBackwardStep} />
        </button>
        {play && (
          <button onClick={handlePlay}>
            <FontAwesomeIcon className={cx(style.icon)} icon={faPlay} />
          </button>
        )}

        {!play && (
          <button onClick={handlePause}>
            <FontAwesomeIcon className={cx(style.icon)} icon={faPause} />
          </button>
        )}

        <button onClick={handleNextSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faForwardStep} />
        </button>
        <button onClick={handleRandomSong}>
          <FontAwesomeIcon className={cx(style.icon)} icon={faShuffle} />
        </button>
      </div>
    </div>
  );
};

export default Music;
