import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs'
import parse from "html-react-parser";
import "../style/news.css";

const PostPage = () => {
    const navigate = useNavigate();
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
            <BsArrowLeft onClick={() => navigate(-1)} size={30} style={{color: 'white', cursor: 'pointer',
             position: 'absolute', top: '0', left: '0'}} />
            <section className="post-row">
                <article>
                    <h3 className="post-header">{post.title && parse(post.title.rendered)}</h3>
                   <div className="post-text">{post.content && parse(post.content.rendered)}</div>
                </article>
                <figure>
                    <img src={image} alt={post.title?.rendered} />
                </figure>
            </section>
        </section>
    );
}

export default PostPage