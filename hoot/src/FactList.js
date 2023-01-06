import { useState } from "react";
import Fact from "./Fact";



function FactList({ facts }) {

    // const [facts, setFacts] = useState(facts)

    return (
        <>
            {/* <NewFactForm></NewFactForm> */}
            <section>
                <ul className="facts-list">
                    {facts.map((fact) => <Fact key={fact.id} fact={fact}></Fact>)}
                </ul>
                <p>There are {facts.length} facts in the database. Add your own!</p>

            </section>

        </>
    )
}
export default FactList;