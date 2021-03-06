import React from 'react'
import Body from '../components/body/Body';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GetApiPosts = () => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(
                err => {
                    console.log(err)
                })
    }, [])

    return (
        <div>
            {post.map(post => (
                <Body
                    key={post.id}
                    post_id={post.id}
                    post_date={new Date(parseInt(post.added_date)).toDateString()}
                    post_title={post.title}
                    post_text={post.content}
                    post_image={post.post_image}
                />
            ))}
        </div >
    )
}

export default GetApiPosts



