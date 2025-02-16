import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { PiDotOutlineFill } from "react-icons/pi";
import { useState, useEffect } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

const API_URL = "https://pranavakumar.com/wp-json/wp/v2/posts"; 

const CricketNews = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://pranavakumar.com/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => {
        const updatedPosts = data.map((post) => ({
          ...post,
          featured_image_url: post.featured_image_url || "https://pranavakumar.com/wp-content/uploads/2025/02/default.webp", 
        }));
        setPosts(updatedPosts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  

  return (
    <div className="pb-5 custom-class">
      <h1 className="md:text-[28px] text-[24px] mb-4">Cricket News</h1>

      <div className="mt-4">
        <div className="row gy-4 justify-center">
          <div className="col-xl-10 col-md-9">
            <div className="row gy-4">
              <div className="col-xl-7 news_slider">
                <OwlCarousel className="owl-theme" loop items={1} margin={10} nav dots={false}>
                  {posts.map((post) =>  {
                    return(
                    <div className="item relative" key={post.id}>
                      <img 
                        src={post.featured_image_url} 
                        alt={post.title.rendered} 
                        className="rounded-[10px]" />

                      <img src="/assets/images/svg/layer.png" alt="layer" className="absolute top-0 left-0" />
                      <div className="absolute bottom-10 px-4">
                        <a href={`/post/${post.id}`} className="text-white block text-lg mb-2 hover:!underline">
                          {post.title.rendered}
                        </a>
                        <div className="text-white font-[300] text-sm d-flex items-center gap-3">
                          <span>By {post._embedded?.author?.[0]?.name || "Unknown Author"}</span>
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  )}
                </OwlCarousel>

                {posts.length > 0 && (
                  <div className="bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3">
                    <div>
                      <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">
                        Trending News <FaArrowTrendUp className="text-sm" />
                      </span>
                      <a href={`/post/${posts[0].id}`} className="font-[600] mt-3 text-black block hover:!underline">
                        {posts[0].title.rendered}
                      </a>
                      <div className="text-[#000000]/50 text-[10px] d-flex items-center gap-1">
                        <span>5 min read</span>
                        <span className="d-flex items-center gap-[2px]">
                          <PiDotOutlineFill />
                          {new Date(posts[0].date).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/images/svg/banner3.png"}
                        alt={posts[0].title.rendered}
                        className="max-w-[163px]"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="col-xl-5">
                <iframe
                  width="100%"
                  className="rounded-[10px]"
                  height="280"
                  src="https://www.youtube.com/embed/nnIvglfqp5U?si=xwchhhDdseuJrwFz"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <div className="row gx-3">
                  {posts.slice(1, 3).map((post) => (
                    <div className="col-12" key={post.id}>
                      <div className="bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex gap-3">
                        <div>
                          <a href={`/post/${post.id}`} className="text-[14px] block hover:!underline text-black mb-2">
                            {post.title.rendered}
                          </a>
                          <div className="text-[#000000]/50 text-[10px] d-flex items-center gap-1">
                            <span>5 min read</span>
                            <span className="d-flex items-center gap-[2px]">
                              <PiDotOutlineFill />
                              {new Date(post.date).toLocaleTimeString()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <img
                            src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/images/svg/banner4.png"}
                            alt={post.title.rendered}
                            className="max-w-[80px] rounded-[2px]"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-12 text-center border-b">
                <a href="/cricket" className="bg-[#0033A0] inline-block mb-4 text-white rounded py-2 px-[20px]">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-3">
            <img src="/assets/images/svg/banner5.png" alt="banner" className="mb-4 mx-auto" />
            <img src="/assets/images/svg/banner6.png" alt="banner" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketNews;
