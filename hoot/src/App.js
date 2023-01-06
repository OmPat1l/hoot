import "./style.css";
import { useEffect, useState } from 'react';
import CategoryFilter from "./CategoryFiltre";
import FactList from "./FactList";
import Header from "./header";
import NewFactForm from "./NewFactForm";
import supabase from "./supabase";
import Loader from "./loader";




// LINK TO APP SAMPLE DATA: https://docs.google.com/spreadsheets/d/1eeldcA_OwP4DHYEvjG0kDe0cRys-cDPhc_E9P9G1e3I/edit#gid=0

// 👍 🤯 ⛔️


function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all")
  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);

      let { data: project, error } = await supabase
        .from('project')
        .select('*').eq("category", "alumni").order("interesting", { ascending: false }).limit(50);
      if (!error) setFacts(project);
      else alert("there was a problem getting data");

      setIsLoading(false);
      // console.log(project);



    }
    getFacts();




  }, [])

  return (


    <>
      <Header showForm={showForm} setShowForm={setShowForm}></Header>
      {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} /> : null}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory}></CategoryFilter>

        {isLoading ? <Loader /> : <FactList facts={facts}></FactList>}




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


