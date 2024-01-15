import { collection, addDoc } from "firebase/firestore"; 

exportconst addData = () => {
    console.log('hi')
    // const submitData = async () => {
    //     try {
    //         const docRef = await addDoc(collection(db, "reports"), {
    //             date: new Date(),
    //             name: "test",
    //             work: "test",
    //             comment: "test"
    //         });
    //         console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
    // }

    // document.getElementById("js-form").addEventListener("submit", submitData());
}

export { addData };