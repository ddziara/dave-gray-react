import { redirect } from "react-router-dom";
import api from "../api/posts";
import { format } from "date-fns";

export async function action({ request }) {
    try {
        // get id of the new post
        const response = await api.get("/posts");        // axios catches status not in 2xx range and throws error; json() is also not necessary 

        if (response && response.data) {
            const posts = response.data;
            const newId = posts.length ? parseInt(posts[posts.length - 1].id) + 1 : 1;
console.log(typeof newId)            
            // add a new post
            const datetime = format(new Date(), "MMMM dd, yyyy pp");

            const formData = await request.formData();
            const updates = Object.fromEntries(formData);   // formData is itarable
        
            const newPost = {
              id: newId.toString(),
              title: updates.title,
              datetime,
              body: updates.body
            };
        
            await api.post("/posts", newPost);
        }
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
