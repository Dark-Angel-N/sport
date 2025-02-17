import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pranavakumar.com/wp-json/wp/v2/posts?slug=${slug}&_embed=true`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          setPost(data[0]); // WordPress API returns an array; slug is unique
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching post:", error);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div class="container"><p>Loading...</p></div>;
  if (!post) return <div class="container"><p>Post not found.</p></div>;

  // Format the modified date to "November 24, 2024, 15:25 IST"
  const modifiedDate = new Date(post.modified).toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }) + ' IST';

  // Get author details from embedded data
  const author = post._embedded?.author?.[0];
  const authorAvatar = author?.avatar_urls?.['48'];
  const authorName = author?.name || 'Unknown Author';

  return (
    <section>
    <div class="container">
      <h1>{post.title.rendered}</h1>
      
      {/* Meta Information */}
      <div className="post-meta" style={{ marginBottom: '20px' }}>
        <p><strong>Published By :</strong> Business Desk Sportscrazy.com</p>
        <p><strong>Last Updated:</strong> {modifiedDate}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {authorAvatar && (
            <img
              src={authorAvatar}
              alt={authorName}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            />
          )}
          <span>By {authorName}</span>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
    </section>
  );
};

export default SinglePost;
