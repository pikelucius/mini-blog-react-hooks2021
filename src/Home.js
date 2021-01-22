import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className='home'>
            <div className="blog-info">-Vid varje hämtning av extern data läggs en fördjöjning på 1 sekund på. För att simulera hämtning av stor datamängd med spinner/meddelande.</div>
            
            {error && <div>{error}</div>}
            {isPending && <div>Laddar...</div>}
            {blogs && <BlogList blogs={blogs} title='Alla Blogg-inlägg!'/>}
        </div>
    );
};

export default Home;
