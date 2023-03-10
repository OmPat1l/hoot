import { useState } from "react";
import Fact from "./Fact";
import supabase from "./supabase";

const CATEGORIES = [
    { name: "ompatil", color: "#3b82f6" },
    { name: "firstyear", color: "#eab308" },
    { name: "secondyear", color: "#db2777" },
    { name: "thirdyear", color: "#14b8a6" },
    { name: "alumni", color: "#f97316" },
    { name: "impressions", color: "#16a34a" },
    { name: "mindspark", color: "#f783ac" },
    { name: "zest", color: "#8b5cf6" },
];
function NewFactForm({ setFacts, setShowForm }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    // from stack overflow
    // function isValidHttpUrl(string) {
    //     let url;
    //     try {
    //         url = new URL(string);
    //     } catch (_) {
    //         return false;
    //     }
    //     return url.protocol === "http:" || url.protocol === "https:";
    // }

    async function handleSubmit(e) {
        e.preventDefault();
        if (text && category && text.length <= 200) {

            setIsUploading(true);


            const { data: newFact, error } = await supabase.from('project').insert([{ text, source, category }]).select();
            setIsUploading(false);
            // console.log(newFact);




            if (!error) setFacts((facts) => [newFact[0], ...facts]);
            setCategory("");
            setFacts("");
            setSource("");
            setShowForm(false);



        }

    }

    return (<form className="fact-form " onSubmit={handleSubmit}>
        <input type="text" value={text} placeholder="Share a fact with the world..." onChange={(e) => setText(e.target.value)} />
        <span>{200 - text.length}</span>
        <input type="text" value={source} placeholder="Trustworthy source..." onChange={(e) => setSource(e.target.value)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Choose category:</option>
            {CATEGORIES.map((el) => <option value={el.name} key={el.name}>{el.name}</option>)}


        </select>
        <button className="btn btn-large" disabled={isUploading}>Post</button>
    </form>)

}
export default NewFactForm;  