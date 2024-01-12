import { redirect } from "react-router-dom";
import api from "../api/posts";
// import { format } from "date-fns";

export async function action({ request, params }) {
    try {
        // update the post
        // const datetime = format(new Date(), "MMMM dd, yyyy pp");

        const formData = await request.formData();
        const updates = Object.fromEntries(formData);   // formData is itarable

        const updatedPost = {
            // id: params.id,
            title: updates.title,
            // datetime,
            body: updates.body
        };

        await api.put(`/posts/${params.id}`, updatedPost);
    }
    catch (err) {
        if (err.response) {
            // Not in the 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }
        else {
            console.log(`Error: ${err.message}`);
        }
    }


    return redirect("/");
}
