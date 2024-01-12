import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const navigate = useNavigate();
    const { width } = useWindowSize();

    return (
        <DataContext.Provider value={{
            width, search, setSearch, 
            searchResults
        }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;

// to use it:
//
// import { useContext } from "react";
// import DataContext from "./context/DataContext"
//
// const Header = ({title}) => {
//  const {width} = useContext(DataContext);      
//  ...
//}

