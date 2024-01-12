const ColorInput = ({color, setColor}) => {
    return (
        <form className="colorInput" onSubmit={e => e.preventDefault()}>
            <label htmlFor="color">Color</label>
            <input 
            id="color" 
            type="text" 
            value={color}
            onChange={e=>setColor(e.target.value)}
            placeholder="Add color name"
            />
        </form>
    )
}

export default ColorInput