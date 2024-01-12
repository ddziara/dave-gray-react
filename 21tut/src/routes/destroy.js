import { redirect } from "react-router-dom";
import api from "../api/posts";

export async function action({ params }) {
    const { id } = params;
   
    await api.delete(`posts/${id}`)
    return redirect("/");
}

