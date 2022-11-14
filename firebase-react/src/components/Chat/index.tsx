import React, { FormEvent, FormEventHandler, useContext, useState } from "react";
import { Context } from "../..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, query, orderBy } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore"


const Chat: React.FC = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState<string>('');
    const [mesages, loading] = useCollectionData(
        query(collection(firestore, 'mesages'), orderBy('createAt'))
    )

    const sendMessage = async (e: FormEvent) => {
        e.preventDefault();
        await addDoc(collection(firestore, 'mesages'), {
            uid: user?.uid,
            displayName: user?.displayName,
            photoUrl: user?.photoURL,
            text: value,
            createAt: serverTimestamp(),
        });
        setValue('');
    }

    if (loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">
            <div className="chat">
                {mesages?.map((message, i) => {
                    return (
                        <div 
                        key={i.toString()}
                        style={{
                            margin: 10,
                            border: user?.uid === message.uid ? '2px solid green' : '2px solid red',
                            width: 'fit-content',
                            padding: 5,
                        }}
                        >
                            <div className="avatar">
                                <img src={message.photoUrl} alt="" />
                            </div>
                            <h2>{message.displayName}</h2>
                            <p>{message.text}</p>
                        </div>
                    )
                })}
            </div>
            <form action="" onSubmit={sendMessage}>
                <textarea onInput={(e: any) => setValue(e?.target?.value)} name="" id="" value={value}></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Chat;