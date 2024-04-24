import React, { useEffect, useState } from 'react'
import { Postcard, container as Container } from '../components'
import appwriteService from "../appwrite/config"

const AllPosts = () => {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            setPosts(posts.document)
        })
    }, [])


    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts