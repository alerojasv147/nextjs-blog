const posts = [
    {title: 'Post 1', date: '2022-07-01', id: '1' },
    {title: 'Post 2', date: '2022-07-02', id: '2' },
    {title: 'Post 3', date: '2022-07-03', id: '3' }

]

export function getSortedPostsData() {
    // Sort posts by date
    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPostIds() {
    return posts.map((item) => {
        return {
            params: {
                id: item.id,
            },
        };
    });
}

export function getPostData(id) {
    // Combine the data with the id
    return posts.find(post => post.id === id)
}