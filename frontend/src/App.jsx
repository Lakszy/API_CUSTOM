import { useEffect, useState } from "react";
import axios, { isCancel } from "axios";

function App() {
  //TODO:-> Always try to store error in state
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('wood');

  //! What would if we want to call the api with async in useEffect
  //* this can be done using iffee imme. invoked functions

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("api/products?search=" + search, {
          //  Signal removes all the old requests
          signal:controller.signal
        })

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if ((axios, isCancel(error))) {
          console.log(error.message)
          return
        }
        setError(true);
        setLoading(false);
      }
    })()

    // dismoounuting cleanUP
    return () => {
      controller.abort()
    };
  }, [search]);

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <div>
      {error ? (
        <h1>Something went wrong</h1>
      ) : (
        <div>
          <h1>Lakshay</h1>
          <input
            value={search}
            placeholder="Start Typing "
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <h2>No. of products are: {products.length}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
