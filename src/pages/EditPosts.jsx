import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { useParams, useNavigate } from "react-router-dom"

const EditPosts = () => {

    const { slug } = useParams()
    const navigate = useNavigate()
    const [post, setPosts] = useState([]);

    useEffect(() => {
        if (slug)
            appwriteService.getPosts((slug)).then((post) => {
                if (post) {
                    setPosts(post)
                } else {
                    navigate('/')
                }
            })
    }, [slug, navigate])


    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null

}

export default EditPosts