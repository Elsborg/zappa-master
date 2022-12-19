import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "../style/news.css";

const PostPage = () => {
    const [post, setPost] = useState({});
    const params = useParams();
    console.log(params);
    const slug = params.slug;

    useEffect(() => {
        async function getPost() {
            const url = `http://zappa.mitmulti.dk/wp-json/wp/v2/posts?slug=${slug}&_embed`;
            const response = await fetch(url);
            const data = await response.json();
            setPost(data[0]);
        }
        getPost();
    }, [slug]);

    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <section className="post-container">
            <section className="post-row">
                <article>
                    <h3 className="post-header">{post.title && parse(post.title.rendered)}</h3>
                   <p className="post-text"> {post.content && parse(post.content.rendered)}</p>
                </article>
                <figure>
                    <img src={image} alt={post.title?.rendered} />
                </figure>
            </section>
        </section>
    );
}

export default PostPage