export const userBlogAdder = {
    name: 'Test User',
    username: 'tester',
    token: 'abcdefg'
}

export const userNoBlogAdder = {
    name: 'Random User',
    username: 'random',
    token: 'qwerty'
}

export const userWithOneBlog = [
    {
        blogs: [
            {
                title: 'Title',
                author: 'Author',
                url: 'url',
                id: '1234',
            },
        ],
        id: '4321',
        name: 'Jest Enzyme',
        username: 'tester'
    }
]

export const userWithoutBlogs = {
    blogs: [],
    id: '5432',
    name: 'No Blogs',
    username: 'tester2'
}

export const userWithTwoBlogs = {
    blogs: [
        {
            title: 'First',
            author: 'Author',
            url: 'url',
            id: '1234',
        },
        {
            title: 'Second',
            author: 'Another Author',
            url: 'url',
            id: '2345'
        }
    ],
    id: '4321',
    name: 'Jest Enzyme',
    username: 'tester'
}

export const users = [
    {
        blogs: [],
        id: '5432',
        name: 'No Blogs',
        username: 'tester2'
    },
    {
        blogs: [
            {
                title: 'First',
                author: 'Author',
                url: 'url',
                id: '1234',
            },
            {
                title: 'Second',
                author: 'Another Author',
                url: 'url',
                id: '2345'
            }
        ],
        id: '4321',
        name: 'Jest Enzyme',
        username: 'tester'
    }
]