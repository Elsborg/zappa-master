import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideItem from "../components/SlideItem";
import { useEffect, useState } from "react";

export default function SimpleSlider({ options }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://http://wordpress.kallemersh.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            setPosts(data);
        }
        getData();
    }, []);

    return (
        <section>
            <Slider {...options}>
                {posts.map(post => (
                    <SlideItem key={post.id} post={post} />
                ))}
            </Slider>
        </section>
    );
}