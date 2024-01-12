const Header = ({ selected, setSelected }) => {
    return (
        <header>
            <button className={selected === 1 ? "selected-button" : ""} onClick={() => setSelected(1)}>users</button>
            <button className={selected === 2 ? "selected-button" : ""} onClick={() => setSelected(2)}>posts</button>
            <button className={selected === 3 ? "selected-button" : ""} onClick={() => setSelected(3)}>comments</button>
        </header>
    )
}

export default Header