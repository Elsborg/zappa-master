import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
/*
The SlideItem component is a single slide in a carousel, displaying an image and some text. It accepts a post object as a prop and uses data from this object to display the image and the title and content of the slide.

The component first sets a default value for the image variable to be used if the post object doesn't contain any featured media. Then it checks if the post object contains a wp:featuredmedia key in its _embedded property, and if it does, it sets the image variable to the source URL of the featured media.

The component then returns an article element containing the image and the title and content of the slide, which are parsed from the post.title.rendered and post.content.rendered properties of the post object using the html-react-parser library.
*/

export default function SlideItem({ post }) {
    const navigate = useNavigate();
    
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <section className="grid-container">
        <article onClick={() => navigate(post.slug)}>
            <img src={image} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
        </article>
        </section>
    );
}