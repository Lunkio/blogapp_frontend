import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
    switch(action.type) {
        case 'INIT_BLOGS':
            return action.data
        case 'ADD':
            return [...state, action.data]
        case 'LIKE':
            const likedBlog = action.data
            const id = action.data.id
            return state.map(blog => blog.id !== id ? blog : likedBlog)
        case 'COMMENT':
            const commentedBlog = action.data
            const blogId = action.data.id
            return state.map(blog => blog.id !== blogId ? blog : commentedBlog)
        case 'REMOVE':
            return state.filter(blog => blog.id !== action.data)
        default: return state
    }

}

export const addBlog = (blog, user) => {
    return async dispatch => {
        let newBlog = await blogService.create(blog)
        newBlog = { ...newBlog, user: user }
        dispatch({
            type: 'ADD',
            data: newBlog
        })
    }
}

export const addLike = (id, blog) => {
    return async dispatch => {
        const likedBlog = { ...blog, likes: blog.likes + 1 }
        const updatedBlog = await blogService.update(id, likedBlog)
        dispatch({
            type: 'LIKE',
            data: updatedBlog
        })
    }
}

export const addComment = (id, comment) => {
    return async dispatch => {
        const updatedBlog = await blogService.addComment(id, comment)
        dispatch({
            type: 'COMMENT',
            data: updatedBlog
        })
    }
}

export const removeBlog = (id, token) => {
    return async dispatch => {
        blogService.setToken(token)
        await blogService.remove(id)
        dispatch({
            type: 'REMOVE',
            data: id
        })
    }
}

export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INIT_BLOGS',
            data: blogs
        })
    }
}

export default blogReducer