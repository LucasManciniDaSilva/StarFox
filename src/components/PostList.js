import React, { Component } from "react";
import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Fox Mcloud",
          avatar: "https://i.ytimg.com/vi/NBYLyRVVS0g/hqdefault.jpg"
        },
        date: "04 Jun 2019",
        content: "Open the wings. Check your G-Diffuser system",
        comments: [
          {
            id: 2,
            author: {
              name: "Falcon Lombardi",
              avatar: "https://i.ytimg.com/vi/_kd3PBa6Z1A/hqdefault.jpg"
            },
            date: "04 jun 2019",
            content: "Falco here. I'm fine"
          },
          {
            id: 2,
            author: {
              name: "Peppy Hare",
              avatar: "https://i.ytimg.com/vi/rtGlYDVp7DA/maxresdefault.jpg"
            },
            date: "04 jun 2019",
            content: "This is Peppy. All systems go. "
          },
          {
            id: 4,
            author: {
              name: "Slippy Toad",
              avatar: "https://i.ytimg.com/vi/_zHV9prpEco/hqdefault.jpg"
            },
            date: "04 jun 2019",
            content: "Slippy here, I'm ok."
          },
          {
            id: 5,
            author: {
              name: "Fox Mcloud",
              avatar: "https://i.ytimg.com/vi/NBYLyRVVS0g/hqdefault.jpg"
            },
            date: "04 jun 2019",
            content: "I see em’ up ahead. Let's rock and roll!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
