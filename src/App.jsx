import "./styles.css";
// import RefForm from "./RefForm";
import useFetch from "./useFetch";
import StateForm from "./StateForm";
import Counter from "./Counter";
function App() {
  const { data, isLoading, isError } = useFetch(
    "https://dummyjson.com/RESOURCE/?delay=1000"
  );
  console.log(data);
  return (
    <>
      {/* <RefForm /> */}
      {/* <StateForm /> */}
      <Counter />
    </>
  );
}

export default App;
