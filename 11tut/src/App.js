import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppinglist")) || []);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

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
      <Content
        items={items.filter(item=>item.item.toLowerCase().includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
