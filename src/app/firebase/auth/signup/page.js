import firebase_app from "../../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(req, res) {
    let result = null,
        error = null;
        console.log(req);
        if (req.method == 'POST') {
            console.log("\n\n", req.body, "\n\n");
            let email = req.body.email;
            let password = req.body.password;
            try {
                result = await createUserWithEmailAndPassword(auth, email, password);
                // result = {
                //     "value": "hi"
                // }

                res.status(201).json(result);
            } catch (e) {
                error = e;
                console.log("\n\nError captured at server end: ", e, "\n\n");
                res.status(500).json('Error occured at server end');
            }
        }
}