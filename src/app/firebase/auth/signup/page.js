import firebase_app from "../../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(req, params) {
    let result = null,
        error = null;
        console.log("\n\n", req, "\n\n");
        let email = req.searchParams.email;
        let password = req.searchParams.password;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        // result = {
        //     "value": "hi"
        // }
    } catch (e) {
        error = e;
        console.log("\n\nError captured at server end: ", e, "\n\n");
    }

    return { result, error };
}