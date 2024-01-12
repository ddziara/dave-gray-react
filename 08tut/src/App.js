import Header from "./Header";
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Almonds Unsaled"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    },
  ]);

  const handleCheck = id => {
    setItems(oldListItems => {
      const newListItems = oldListItems.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
      localStorage.setItem("shoppinglist", JSON.stringify(newListItems));
      return newListItems;
    });
  };

  const handleDelete = id => {
    setItems(oldListItems => {
      const newListItems = oldListItems.filter(item => item.id !== id);
      localStorage.setItem("shoppinglist", JSON.stringify(newListItems));
      return newListItems;
    });
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
