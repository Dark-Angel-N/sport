import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiDotOutlineFill } from "react-icons/pi";

const API_URL = "https://pranavakumar.com/wp-json/wp/v2/posts?_embed=true";

// Fallback images as per your static content
const FALLBACK_SLIDER = "/assets/images/svg/banner2.png";
const FALLBACK_TRENDING = "/assets/images/svg/banner3.png";
const FALLBACK_TWO = "/assets/images/svg/banner4.png";

const CricketNews = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Determine which posts to use in each section
  const sliderPosts = posts.slice(0, 5);
  const trendingPost = posts[5];
  const twoPosts = posts.slice(6, 8);

  return (
    <div className='pb-5'>
      <h1 className='md:text-[28px] text-[24px] mb-4'>Cricket News</h1>
      <div className='d-flex flex-nowrap whitespace-nowrap overflow-x-auto scrolling items-center gap-4'>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Schedule</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>IND vs BAN</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Irani Cup</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Womens T20 WC</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>IRE vs SA</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>CPL 24</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>ENG vs PAK</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>IND vs NZ</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>WBBL</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>AUS vs Pak</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>Ranji Trophy</span>
        <span className='bg-[#E6EBF5] rounded px-2 py-[6px] text-xs'>BAN vs SA</span>
      </div>

      <div className='mt-4'>
        <div className='row gy-4 justify-center'>
          <div className='col-xl-10 col-md-9'>
            <div className="row gy-4">
              {/* Left Column: Slider & Trending News */}
              <div className="col-xl-7 news_slider">
              <OwlCarousel
                key={sliderPosts.length}  // forces re-mount when sliderPosts updates
                className='owl-theme'
                loop
                items={1}
                margin={10}
                nav
                dots={false}
              >
                {sliderPosts.length > 0 ? (
                  sliderPosts.map((post) => {
                    const featuredImage =
                      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                      FALLBACK_SLIDER;
                    return (
                      <div key={post.id} className='item relative'>
                        <img
                          src={featuredImage}
                          alt={post.title.rendered}
                          className="rounded-[10px] h-[300px] w-full object-cover"
                        />
                        <img
                          src="/assets/images/svg/layer.png"
                          alt="layer"
                          className='rounded-[10px] absolute top-0 left-0 h-[300px] w-full object-cover'
                        />
                        <div className='absolute bottom-10 px-4'>
                          <a
                            href="#"
                            className='text-white block text-lg mb-2 hover:!underline'
                          >
                            {post.title.rendered}
                          </a>
                          <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                            <span>
                              By {post._embedded?.author?.[0]?.name || "Unknown Author"}
                            </span>
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center">Loading...</p>
                )}
              </OwlCarousel>


                {/* Trending News Block */}
                {trendingPost && (
                  <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex items-center gap-3'>
                    <div>
                      <span className="bg-[#1E1E1E]/10 text-xs font-[700] d-inline-flex rounded py-1 px-2 items-center gap-1">
                        Trending News <FaArrowTrendUp className='text-sm' />
                      </span>
                      <a
                        href="#"
                        className='font-[600] mt-3 text-black block hover:!underline'
                      >
                        {trendingPost.title.rendered}
                      </a>
                      <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                        <span>57 min read</span>
                        <span className='d-flex items-center gap-[2px]'>
                          <PiDotOutlineFill />{" "}
                          {new Date(trendingPost.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          IST
                        </span>
                      </div>
                    </div>
                    <div>
                      <img
                        src={
                          trendingPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                          FALLBACK_TRENDING
                        }
                        alt="banner"
                        className='max-w-[163px]'
                      />
                      <div className='d-flex items-center gap-2 justify-end mt-2'>
                        <img src="/assets/images/svg/bookmark.svg" alt="bookmark" />
                        <img src="/assets/images/svg/share.svg" alt="share" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: YouTube & Two News Items */}
              <div className="col-xl-5">
                <iframe
                  width="100%"
                  className='rounded-[10px]'
                  height="280"
                  src="https://www.youtube.com/embed/nnIvglfqp5U?si=xwchhhDdseuJrwFz"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="row gx-3">
                  {twoPosts.length > 0 ? (
                    twoPosts.map((post) => {
                      const featuredImage =
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        FALLBACK_TWO;
                      return (
                        <div className="col-12" key={post.id}>
                          <div className='bg-[#E8E8E8]/50 mt-3 p-3 rounded d-flex gap-3'>
                            <div>
                              <a
                                href="#"
                                className='text-[14px] block hover:!underline text-black mb-2 text-justify'
                              >
                                {post.title.rendered}
                              </a>
                              <div className='text-[#000000]/50 text-[10px] d-flex items-center gap-1'>
                                <span>57 min read</span>
                                <span className='d-flex items-center gap-[2px]'>
                                  <PiDotOutlineFill />{" "}
                                  {new Date(post.date).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}{" "}
                                  IST
                                </span>
                              </div>
                            </div>
                            <div>
                              <img
                                src={featuredImage}
                                alt="banner"
                                className='max-w-[80px] rounded-[2px]'
                              />
                              <div className='d-flex items-center gap-2 justify-end mt-2'>
                                <img src="/assets/images/svg/bookmark.svg" alt="bookmark" />
                                <img src="/assets/images/svg/share.svg" alt="share" />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center">Loading...</p>
                  )}
                </div>
              </div>

              {/* Read More Button */}
              <div className='col-12 text-center border-b'>
                <a
                  href="/cricket"
                  className="bg-[#0033A0] inline-block mb-4 text-white rounded py-2 px-[20px]"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Advertisement Column */}
          <div className='col-xl-2 col-md-3'>
            <img src="/assets/images/svg/banner5.png" alt="banner" className='mb-4 mx-auto' />
            <img src="/assets/images/svg/banner6.png" alt="banner" className='mx-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CricketNews;
