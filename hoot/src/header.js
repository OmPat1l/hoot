function Header({ showForm, setShowForm }) {

    const text1 = "Hoot";
    return (<header className="header">
        <div className="logo">
            <img
                src="logo.png"
                height="68"
                width="68"
                alt="Today I Learned Logo"
            />
            <h1>{text1}</h1>
        </div>

        <button className="btn btn-large btn-open" onClick={() => setShowForm((ip) => !ip)}>{showForm ? "Close" : "Share a Fact"}</button>
    </header>)



}
export default Header;