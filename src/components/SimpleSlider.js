import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlideItem from "../components/SlideItem";
import { useEffect, useState } from "react";

/*
This is a React component that uses the react-slick library to create a slider (also known as a carousel) to display a list of posts retrieved from a WordPress API.

The component has a state called posts which is an array that is initially empty. The useEffect hook is used to fetch the list of posts from the API and update the posts state with the data.

The component then renders a Slider component from react-slick, passing in the options prop. The options prop is an object that contains various configuration options for the Slider component.

Inside the Slider component, the component maps over the posts array and renders a SlideItem component for each post, passing in the post prop. The SlideItem component is responsible for rendering each individual item in the slider.

The component also includes the necessary CSS imports for the react-slick library.
*/

export default function SimpleSlider({ options }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("http://zappa.mitmulti.dk/wp-json/wp/v2/posts?_embed");
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