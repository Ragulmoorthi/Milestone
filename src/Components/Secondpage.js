import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Getpage() {
    const [store, setStore] = useState([]);
    var { id } = useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(get => get.json())
            .then(put => setStore(put));
    })
    return (
        <>
            <div className=" row down">
                <div className="col-lg-4 ">
                    <img src={store.image} className="w-100 h-100" />
                </div>
                <div className="col-lg-4 p-5 ">
                    <h1>{store.category}</h1><hr />
                    <h5>{store.title}</h5>
                    <p>{store.Details}</p>
                    <p>{store.description}</p><br></br>



                </div>
            </div>


        </>
    )
}