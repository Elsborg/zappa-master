import parse from "html-react-parser";

export default function SlideItem({ post }) {
    let image = "https://cederdorff.github.io/img/logo512.webp";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <section className="grid-container">
        <article>
            <img src={image} alt={post.title.rendered} />
            <h2>{parse(post.title.rendered)}</h2>
            {parse(post.content.rendered)}
        </article>
        </section>
    );
}