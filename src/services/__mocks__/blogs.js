const blogs = [
    {
        id: "5a451df7571c224a31b5c8ce",
        title: "Kovakoodi1",
        author: "KovaAuthor",
        url: "eipä ole",
        likes: 1,
        user: {
            username: "Ismo",
            name: "Laitela",
            id: "5a437a9e514ab7f168ddf138"
        },
        comments: []
    },
    {
        id: "5a451e21e0b8b04a45638211",
        title: "Kovakoodi2",
        author: "KovaAuthor2",
        url: "eipä ole2",
        likes: 1,
        user: {
            username: "Ismo",
            name: "Laitela",
            id: "5a437a9e514ab7f168ddf138"
        },
        comments: []
    },
    {
        id: "5a451e30b5ffd44a58fa79ab",
        title: "Kovakoodi3",
        author: "KovaAuthor3",
        url: "eipä ole3",
        likes: 1,
        user: {
            username: "Seppo",
            name: "Taalasmaa",
            id: "5a437a9e514ab7f168ddf138"
        },
        comments: []
    }
]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll }