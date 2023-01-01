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
                <button>👍 {fact.votesInteresting}</button>
                <button>🤯 {fact.votesMindblowing}</button>
                <button>⛔️ {fact.votesFalse}</button>
            </div>
        </li>

    )

}
export default Fact;