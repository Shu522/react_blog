import { useState } from "react";
import { CiHeart } from "react-icons/ci";

const Blog = (props) => {
  const [title, setTitle] = useState([
    "떡볶이 맛있겠다",
    "슈 너무 귀여워",
    "ㅂㅂ",
  ]);
  const changeTitle = () => {
    setTitle((v) =>
      v.map((text, index) =>
        index === 2 ? (text === "ㅂㅂ" ? "ㅎㅇ" : "ㅂㅂ") : text
      )
    );
  };

  const [heart, setHeart] = useState(0);
  const up = () => {
    setHeart((v) => v + 1);
  };

  return (
    <>
      <div className="bg-black p-5 text-white text-xl font-bold">Blog</div>
      <h3 className="font-bold">
        {title[0]}{" "}
        <button onClick={up} className="text-lg text-blue-700">
          <CiHeart />
        </button>{" "}
        <span className="font-thin">{heart}</span>
      </h3>
      <p className="border-b">{props.date}</p>
      <h3 className="font-bold">{title[1]}</h3>
      <p className="border-b"> {props.date}</p>
      <h3 className="font-bold">{title[2]}</h3>
      <button
        onClick={changeTitle}
        className="text-left border border-gray-400 bg-gray-400 w-10 p-1"
      >
        변경
      </button>
      <p className="border-b">{props.date}</p>
    </>
  );
};

export default Blog;
