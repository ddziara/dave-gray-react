const ColorPreview = ({ color }) => {
  return (
    <div
      className="colorPreview"
      style={{ backgroundColor: color ?? "white" }}
    >
      {color ? color : "Empty value"}
    </div>
  )
}

export default ColorPreview