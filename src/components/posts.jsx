import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchNews } from "../features/newsSlice";

const News = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector((state) => state.news);
  const [isFetching, setIsFetching] = useState(false);

  const handleFetch = () => {
    setIsFetching(true);
    setTimeout(() => {
      dispatch(fetchNews()).finally(() => setIsFetching(false));
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-4"> Latest Tech News Just a Tap Away </h1>
      <button
        onClick={handleFetch}
        disabled={status === "loading" || isFetching}
        className={`p-3 rounded-xl border ${
          status === "loading" || isFetching
            ? "cursor-not-allowed bg-gray-400"
            : "bg-pink-400 hover:bg-pink-600 cursor-pointer"
        }`}
      >
        {isFetching ? "fetching...." : "Fetch News"}
      </button>
      {status === "failed" && <p> Error: {error} </p>}
      {status === "succeeded" && (
        <ul className=" mt-4 m-2 p-3">
          {articles.slice().map((article) => (
            <li
              key={article.title}
              className="animate-fade-in border mb-2 rounded-md p-2"
            >
              <strong>{article.source.name}</strong>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
