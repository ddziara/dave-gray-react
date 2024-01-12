import ColorPreview from "./ColorPreview";
import ColorInput from "./ColorInput";

const Content = ({ color, setColor }) => {
    return (
        <main>
            <ColorPreview color={color} />
            <ColorInput color={color} setColor={setColor} />
        </main>
    )
}

export default Content