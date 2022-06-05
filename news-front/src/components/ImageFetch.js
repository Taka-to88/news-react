import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ImageFetch = () => {

    const [image, setImage] = useState()

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/news/",{
            responseType: 'blob',
            headers: {
                Authorization: "Token db914bc93940b1495680992ff1ba4e3e0f37372a",
            },
        })
        .then(res => {setImage([URL.createObjectURL(res.data)])})
    }, [])

    return (
            <img src={image} width="500" />
    )
}

export default ImageFetch;