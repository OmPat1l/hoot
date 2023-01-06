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
function Fact({ fact }) {
    const col = CATEGORIES;


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
            <div className="vote-buttons">
                <button>👍 {fact.interesting}</button>
                <button>🤯 {fact.mindblowing}</button>
                <button>⛔️ {fact.votefalse}</button>
            </div>
        </li>

    )

}
export default Fact;