import { useState, useEffect } from "react"

function handleOnClick() {

}

function Post() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchposts() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            let json = await res.json()
            setPosts(json)
        }
        fetchposts()
    }, [])

    return (
        <div>
            {
                posts.map((el) => (
                    <div className="post" key={el.id}>
                        <h3>Post {el.id}</h3>
                        <p>{el.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default function Forum() {
    const [comments, setComments] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchposts() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            setPosts(json)
        }
        fetchposts()
    }, [])

    useEffect(() => {
        async function fetchcomments() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            let json = await res.json()
            setComments(json)
        }
        fetchcomments()
    }, [])

    return (
        <div className="divvone">
            <div className="header">
                <h1>CCL</h1>
                <h4>+++Cose a caso in Latino+++</h4>
                <h2>THE FORUM</h2>
            </div>
            <div className="divvetto">
                <div className="sidebar">
                    <h2>Posts</h2>
                    <div className="posts">
                        {
                            posts.map((el) => (
                                <div className="postID" key={el.id}>
                                    <h4>Post {el.id}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <main>
                    {Post}
                    <div className="comments">
                        {
                            comments.map((el) => (
                                <div className="comment" key={el.id}>
                                    <h3>Comment {el.id}</h3>
                                    <p>{el.body}</p>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}

//=============================================================================================================================

/*
import { useState, useEffect } from "react"

export default function Forum() {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function fetchposts() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let json = await res.json()
            setPosts(json)
        }
        fetchposts()
    }, [])

    useEffect(() => {
        async function fetchcomments() {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            let json = await res.json()
            setComments(json)
        }
        fetchcomments()
    }, [])

    return (
        <div className="divvone">
            <div className="header">
                <h1>CCL</h1>
                <h4>+++Cose a caso in Latino+++</h4>
                <h2>THE FORUM</h2>
            </div>
            <div className="divvetto">
                <div className="sidebar">
                    <h2>Posts</h2>
                    <div className="posts">
                        {
                            posts.map((el) => (
                                <div className="postID" key={el.id}>
                                    <h4>Post {el.id}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <main>
                    <div>
                        {
                            posts.map((el) => (
                                <div className="post" key={el.id}>
                                    <h3>Post {el.id}</h3>
                                    <p>{el.body}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="comments">
                        {
                            comments.map((el) => (
                                <div className="comment" key={el.id}>
                                    <h3>Comment {el.id}</h3>
                                    <p>{el.body}</p>
                                </div>
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    )
}
*/