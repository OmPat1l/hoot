import { useState } from "react";
import supabase from "./supabase";

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
function Fact({ fact, setFacts }) {
    const col = CATEGORIES;
    const [isUpdating, setIsUpdating] = useState(false);

    async function handleVote(str) {
        setIsUpdating(true);
        const { data: updatedFact, error } = await supabase
            .from('project')
            .update({ [str]: fact[str] + 1 })
            .eq('id', fact.id)
            .select();
        setIsUpdating(false);

        if (!error) setFacts((el) => el.map((f) => (f.id === fact.id ? updatedFact[0] : f)));

    }


    return (
        <li key={fact.id} className="fact">
            <p>
                {fact.text}

                <a
                    className="source"
                    href={fact.source}
                    target="_blank"
                >(Source)</a
                >
            </p>
            <span className="tag" style={{ backgroundColor: col.find((el) => el.name === fact.category).color, }}>{fact.category}</span>
            <div className="vote-buttons" >
                <button onClick={() => (handleVote("interesting"))} disabled={isUpdating}>👍 {fact.interesting}</button>
                <button onClick={() => (handleVote("mindblowing"))}>🤯 {fact.mindblowing}</button>
                <button onClick={() => (handleVote("votefalse"))}>⛔️ {fact.votefalse}</button>
            </div>
        </li>

    )

}
export default Fact;