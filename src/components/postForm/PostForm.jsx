import React, { useCallback } from 'react'
import { useForm } from "react-hook-form"
import { Button, Input, Button, RTE } from "../index"
import appwriteService from "../../appwrite/config"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const PostForm = () => {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || '',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    return (
        <div>PostForm</div>
    )
}

export default PostForm