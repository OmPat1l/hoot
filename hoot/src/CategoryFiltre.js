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
function CategoryFilter({ setCurrentCategory }) {
    const col = CATEGORIES;
    return (<aside><ul>

        <li className="category">
            <button className="btn btn-all-categories" onClick={() => setCurrentCategory("all")}>All</button>
        </li>
        {col.map((el) => (<li key={el.name} className="category">
            <button
                className="btn btn-category"
                style={{ backgroundColor: el.color }}
                onClick={() => setCurrentCategory(el.name)}>
                {el.name}
            </button>
        </li>))}
    </ul></aside >)

}
export default CategoryFilter;