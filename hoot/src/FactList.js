import { useState } from "react";
import Fact from "./Fact";



function FactList({ facts, setFacts }) {
    if (facts.length === 0) {
        return (

            <p>No Hoots for this category yet! Create the first one!!
                <br></br>⚠️⚠️If you have just added one, please refresh, there was an unexpected error, I am working to fix this</p>


        )
    }

    // const [facts, setFacts] = useState(facts)

    return (
        <>
            {/* <NewFactForm></NewFactForm> */}
            <section>
                <ul className="facts-list">
                    {facts.map((fact) => <Fact key={fact.id} fact={fact} setFacts={setFacts}></Fact>)}
                </ul>
                <p>There are {facts.length} facts in the database. Add your own!</p>

            </section>

        </>
    )
}
export default FactList;