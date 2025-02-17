import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiDotOutlineFill } from "react-icons/pi";

const API_URL = "https://pranavakumar.com/wp-json/wp/v2/posts?_embed=true";
const FALLBACK_IMAGE = "/assets/images/svg/banner2.png"; // Fallback if no featured image

const CricketNews = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className='pb-5'>
      <h1 className='md:text-[28px] text-[24px] mb-4'>Cricket News</h1>

      <div className='mt-4'>
        <div className='row gy-4 justify-center'>
          <div className='col-xl-10 col-md-9'>
            <div className="row gy-4">
              <div className="col-xl-7 news_slider">
                <OwlCarousel className='owl-theme' loop items={1} margin={10} nav dots={false}>
                  {posts.length > 0 ? (
                    posts.map((post) => {
                      // Check if featured image exists
                      const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || FALLBACK_IMAGE;

                      return (
                        <div key={post.id} className='item relative'>
                          <img 
                            src={featuredImage} 
                            alt={post.title.rendered} 
                            className='rounded-[10px]' 
                          />
                          <img src="/assets/images/svg/layer.png" alt="layer" className='absolute top-0 left-0' />
                          <div className='absolute bottom-10 px-4'>
                            <a href="#" className='text-white block text-lg mb-2 hover:!underline'>
                              {post.title.rendered}
                            </a>
                            <div className='text-white font-[300] text-sm d-flex items-center gap-3'>
                              <span>By {post._embedded?.author?.[0]?.name || "Unknown Author"}</span>
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
              </div>

              <div className='col-12 text-center border-b'>
                <a href="#" className="bg-[#0033A0] inline-block mb-4 text-white rounded py-2 px-[20px]">Read More</a>
              </div>
            </div>
          </div>
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
