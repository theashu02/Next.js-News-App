"use client";
import React, { useEffect, useState } from "react";
import api from "../(api)/api";

const News = ({ topic }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    api(topic)
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        console.log("Error getting an response from the API");
      });
  }, []);

  return (
    <section className="flex flex-col px-2 justify-center items-center">
      <h3 className=" font-bold text-center my-4">{topic} Updates</h3>
      <div className="news__wrapper py-5 px-2 flex flex-wrap justify-center items-center container gap-10">
        {data && data.value ? (
          data.value.map((ele, index) => (
            <div
              className="news__item flex flex-col max-w-[350px] w-full border-full-color p-2 rounded-xl"
              key={index}
            >
              <div className="news__item--img">
                <img
                  src={ele.image && ele.image.thumbnail.contentUrl}
                  alt={ele.name}
                  className="rounded-xl object-cover max-w-[350px] max-h-[200px] w-full h-full"
                />
              </div>

              <div className="news__item--info mt-4 text-ellipsis max-h-[110px] h-full">
                <div className="max-h-[50px] h-full overflow-hidden text-ellipsis">
                  <p className="text-ellipsis">{ele.name}</p>
                </div>
                <div className="news__item--content text-ellipsis overflow-hidden max-h-[200px] h-full mt-4">
                  <p className="text-slate-300 truncate">
                    {ele.description}
                  </p>
                </div>
              </div>
              <div className="news__item--footer mt-4 flex justify-between">
                <span className="text-xs text-slate-400 truncate">
                  {ele.provider[0].name}
                </span>
                <span className="text-xs text-slate-400 truncate">
                  {ele.datePublished}
                </span>
              </div>

              <div className="my-4">
                <a
                  href={ele.url}
                  target="_blank"
                  className="bg-primary text-white flex px-2 py-2 hover:bg-white hover:text-black rounded-full text-center justify-center ease-in duration-150 font-semibold"
                >
                  Read More...
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center absolute left-[50%] transform -translate-x-[50%] top-[50%] -translate-y-[50%]">
            Loading News...
          </p>
        )}
      </div>
    </section>
  );
};

export default News;
