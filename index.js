import React from 'react'
import { createStore } from 'redux'

const blogState = [];

const addBlog = (name, bio, image) => ({
    type: "ADD_BLOG",
    blog: {
        title: name,
        desc: bio,
        img: image
    }
})

const editBlog = () => ({
    type: "EDIT_BLOG",
    blog: {
        title: "EDITED => BLOG-title",
        desc: "EDITED => BLOG-desc",
        img: "EDITED => BLOG-image"
    }
})

const deleteBlog = () => ({
    type: "DELETE_BLOG",
    blog: {
        title: "",
        desc: "",
        img: ""
    }
})

const blogReducer = (state = blogState , action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [...state, action.blog]

        case "EDIT_BLOG":
            return [...state, action.blog]

        case "DELETE_BLOG":
            return [...state, action.blog]

        default: 
            return  state;
    }
}

const store = createStore(blogReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addBlog("HELLO","DECRIPTION","PHOTO"));
store.dispatch(editBlog());
store.dispatch(addBlog("HELLO-2","DECRIPTION-2","PHOTO-2"));
store.dispatch(deleteBlog())



export const Counter = () => {
    return (
        <div>Counter</div>
    )
}

