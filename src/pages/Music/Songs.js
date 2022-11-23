import Song1 from "./songs/Japan/y2mate.com - A Town With An Ocean View Music Box  Kikis Delivery Service.mp3";
import Song2 from "./songs/Japan/y2mate.com - Always with me   Spirited Away OST Soundtrack.mp3";
import Song3 from "./songs/Japan/y2mate.com - Merry Go Round of Life  Howls Moving Castle Joe Hisaishi.mp3";
import Song4 from "./songs/Japan/y2mate.com - Path Of The Wind Totoro OST  Joe HisaishiPiano ver.mp3";
import Song5 from "./songs/Japan/y2mate.com - Spirited Away 2001  The Name of Life Instrumental Piano Inochi No Namae.mp3";
import Song6 from "./songs/Japan/y2mate.com - Spirited Away OST  Reprise  Again HQ.mp3";

import Song10 from "./songs/China/y2mate.com - Bloom Of Youth  清水淳一.mp3";
import Song11 from "./songs/China/y2mate.com - Đêm Đom Đóm Và Em  AniFace 夜萤火虫和你  EDM Tik Tok China Buồn Nhất.mp3";
import Song12 from "./songs/China/y2mate.com - Đồi Thổi Gió  羽肿  Windy Hill  Nhạc nhẹ không lời  Salyn.mp3";
import Song13 from "./songs/China/y2mate.com - Full Piano  Pinyin  Beat KaraĐông MiênTư Nam冬眠司南.mp3";
import Song14 from "./songs/China/y2mate.com - letter  iris  Nhạc Nền Tik Tok Được Yêu Thích Nhất.mp3.webm";
import Song15 from "./songs/China/y2mate.com - 리쌍 Leessang love9  행복을 찾앗 Instrumental  Nhạc gây nghiện trên Tiktok Trung Quốc  Douyin Music.mp3.webm";
import Song16 from "./songs/China/y2mate.com - 星茶会  Tiệc Trà Sao灰澈  Nhạc Douyin.mp3";

import Song20 from "./songs/Lofi/y2mate.com - Lofi Chill Không Lời  10 Bản Nhạc Lofi Giúp Bạn Học Bài Tốt Hơn.mp3";
import Song21 from "./songs/Lofi/y2mate.com - Your Smile  Một chút năng lượng cho ngày mới chill music mix.mp3";
import Song22 from "./songs/Lofi/y2mate.com - Youre the reason why i love lofi chill.mp3";

const songs = [
  {
    name: "A Town With An Ocean View Music Box",
    src: Song1,
    img: "https://i.pinimg.com/564x/a5/92/16/a5921646d720a6ed3af53249e696a76f.jpg",
    type: "Japan",
  },
  {
    name: "Always with me",
    src: Song2,
    img: "https://i.pinimg.com/736x/b6/46/37/b64637334bf14e6628917ddeaf9d3d6e.jpg",
    type: "Japan",
  },
  {
    name: "Merry Go Round of Life  Howls Moving Castle",
    src: Song3,
    img: "https://i.pinimg.com/736x/53/ef/64/53ef646e401f7a4bf46b962c0503be86.jpg",
    type: "Japan",
  },
  {
    name: "Path Of The Wind Totoro",
    src: Song4,
    img: "https://i.pinimg.com/736x/7e/6b/85/7e6b85cf6671596ce68326af1914878a.jpg",
    type: "Japan",
  },
  {
    name: "The Name of Life Instrumental Piano Inochi No Namae",
    src: Song5,
    img: "https://i.pinimg.com/564x/f6/e0/7a/f6e07ad7e72b97ede07b8e0e6c9696cd.jpg",
    type: "Japan",
  },
  {
    name: "Reprise",
    src: Song6,
    img: "https://i.pinimg.com/736x/6f/f2/42/6ff242a92a8975d4014929de8731425c.jpg",
    type: "Japan",
  },

  {
    name: "Bloom Of Youth",
    src: Song10,
    img: "https://i.pinimg.com/564x/fc/02/42/fc0242683341e23df5197b38d295b385.jpg",
    type: "China",
  },
  {
    name: "Đêm Đom Đóm Và Em",
    src: Song11,
    img: "https://i.pinimg.com/736x/6e/89/0e/6e890e780f9f0b5d29f2bb43368f564c.jpg",
    type: "China",
  },
  {
    name: "Đồi Thổi Gió",
    src: Song12,
    img: "https://i.pinimg.com/736x/30/51/ec/3051ec4b61bb635851e5dd7d0bd88f2f.jpg",
    type: "China",
  },
  {
    name: "Kara Đông Miên Tư Nam",
    src: Song13,
    img: "https://i.pinimg.com/564x/1e/0a/2a/1e0a2a4a9a6fb5c1256b69e7dcb36ef4.jpg",
    type: "China",
  },

  {
    name: "Letter  iris",
    src: Song14,
    img: "https://i.pinimg.com/564x/9b/b0/d1/9bb0d1be34ddd53ba15e404223faef26.jpg",
    type: "China",
  },
  {
    name: "Leessang love9",
    src: Song15,
    img: "https://i.pinimg.com/564x/45/32/08/4532082ac25fafcac509d0f861f3ecd9.jpg",
    type: "China",
  },
  {
    name: "Tiệc Trà Sao",
    src: Song16,
    img: "https://i.pinimg.com/736x/f9/21/e4/f921e43464015efa0dac3a73557d91bc.jpg",
    type: "China",
  },

  {
    name: "Cô gái ngồi học bài",
    src: Song20,
    img: "https://i.pinimg.com/474x/94/87/73/9487734a363c3ece03eab6274d11d5cc.jpg",
    type: "Lofi",
  },

  {
    name: "Your Smile",
    src: Song21,
    img: "https://i.pinimg.com/736x/f1/c3/06/f1c30628393b6dbe4816d8eb8eca355a.jpg",
    type: "Lofi",
  },
  {
    name: "Youre the reason why i love lofi",
    src: Song22,
    img: "https://i.pinimg.com/564x/b0/bc/14/b0bc14fbf961797ad0ed0606435f3734.jpg",
    type: "Lofi",
  },
];

export { songs };
