import { useState } from "react";

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];
function NewFactForm() {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    return (<form class="fact-form ">
        <input type="text" value={text} placeholder="Share a fact with the world..." onChange={(e) => setText(e.target.value)} />
        <span>{200 - text.length}</span>
        <input type="text" value={source} placeholder="Trustworthy source..." onChange={(e) => setSource(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose category:</option>
            {CATEGORIES.map((el) => <option value={el.name}>{el.name}</option>)}


        </select>
        <button class="btn btn-large">Post</button>
    </form>)

}
export default NewFactForm;  