import {useState} from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title,
        setTitle] = useState('');
    const [body,
        setbody] = useState('');
    const [author,
        setauthor] = useState('Peter');
    const [isPending,
        setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title,
            body,
            author
        }
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h2>Skriv ny blogg-post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blogg titel</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <label>Blogg innehåll</label>
                <textarea required value={body} onChange={(e) => setbody(e.target.value)}></textarea>
                <label>Blogg författare</label>
                <select value={author} onChange={(e) => setauthor(e.target.value)}>
                    <option value="Peter">Peter</option>
                    <option value="Lollo">Lollo</option>
                    <option value="Åsa">Åsa</option>
                    <option value="Amanda">Amanda</option>
                    <option value="Emelie">Emelie</option>
                </select>
                {!isPending && <button>Lägg till Blogg-post</button>}
                {isPending && <button>Lägger till Blogg-post...</button>}
            </form>
        </div>
    );
}

export default Create;