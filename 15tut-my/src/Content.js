import { useEffect, useState } from "react"

const Content = ({ selected }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        (async () => {
            const API_URL = "https://jsonplaceholder.typicode.com/";
            const paths = ["users", "posts", "comments"];
            const url = `${API_URL}${paths[selected - 1]}`;
            const getOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const result = await fetch(url, getOptions);
            const data = await result.json()
            setList(data);
        })();
    }, [selected]);

    return (
        <main>
            <table>
                <tbody>
                    {
                        list.map((elem, index) => {
                            return (<tr key={elem.id}>
                                {
                                    Object.keys(elem).map(prop => <td key={prop}>{JSON.stringify(elem[prop])}</td>)
                                }
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Content

// (<li key={index + 1}>{JSON.stringify(elem)}</li>)
// {/* elem */}

