import "./style.css";
import { useState } from 'react';
import CategoryFilter from "./CategoryFiltre";
import FactList from "./FactList";
import Header from "./header";
import NewFactForm from "./NewFactForm";





// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️

function App() {
  const [showForm, setShowForm] = useState(false);
  return (


    <>
      <Header showForm={showForm} setShowForm={setShowForm}></Header>
      {showForm ? <NewFactForm /> : null}
      <main className="main">



        <CategoryFilter></CategoryFilter>
        <FactList></FactList>
      </main>
    </>
  )
}

// function Counter() {
//   const [count, countf] = useState(0);

//   return (
//     <>
//       <span style={{ fontSize: '40px' }}>{count}</span>
//       <button className="btn btn-large" onClick={() => countf((c) => c + 1)}>Increment</button>
//     </>
//   )

// }



// function singleCat() {
//   return ()
// }


export default App;


