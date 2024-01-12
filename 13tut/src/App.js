import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive excpected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }
      catch (err) {
        setFetchError(err.message);
      }
      finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const addItem = item => {
    setItems(oldListItems => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const myNewItem = { id, checked: false, item };
      const newListItems = [...oldListItems, myNewItem];
      return newListItems;
    });
  };

  const handleCheck = id => {
    setItems(oldListItems => {
      const newListItems = oldListItems.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
      return newListItems;
    });
  };

  const handleDelete = id => {
    setItems(oldListItems => {
      const newListItems = oldListItems.filter(item => item.id !== id);
      return newListItems;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p> }
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => item.item.toLowerCase().includes(search.toLocaleLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
