import { redirect } from "react-router-dom";

export async function action({ params }) {
    console.log("destroying");
    return redirect("/");
}

