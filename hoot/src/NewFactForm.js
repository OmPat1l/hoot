import { useState } from "react";
import Fact from "./Fact";

const CATEGORIES = [
    { name: "alumni", color: "#3b82f6" },
    { name: "firstyear", color: "#eab308" },
    { name: "secondyear", color: "#db2777" },
    { name: "thirdyear", color: "#14b8a6" },
    { name: "btech", color: "#f97316" },
    { name: "impressions", color: "#16a34a" },
    { name: "mindspark", color: "#ef4444" },
    { name: "zest", color: "#8b5cf6" },
];
function NewFactForm({ setFacts, setShowForm }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");

    //from stack overflow
    function isValidHttpUrl(string) {
        let url;
        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (text && isValidHttpUrl(source) && category && text.length <= 200) {

            const newFact = {
                id: Math.round(Math.rando() * 100),
                text,
                source,
                category,
                votesInteresting: 0,
                votesMindblowing: 0,
                votesFalse: 0,
                createdIn: new Date().getFullYear(),


            }
            setFacts((ele) => ([newFact, ...ele]));
            setCategory("");
            setFacts("");
            setSource("");
            setShowForm(false);



        }

    }

    return (<form class="fact-form " onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Share a fact with the world..." onChange={(e) => setText(e.target.value)} />
        <span>{200 - text.length}</span>
        <input type="text" value={source} placeholder="Trustworthy source..." onChange={(e) => setSource(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose category:</option>
            {CATEGORIES.map((el) => <option value={el.name}>{el.name}</option>)}


        </select>
        <button class="btn btn-large" >Post</button>
    </form>)

}
export default NewFactForm;  