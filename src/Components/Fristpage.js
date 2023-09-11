import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatCowboy } from "@fortawesome/free-solid-svg-icons";
import { CSVLink } from "react-csv"; 
import { Link } from "react-router-dom";
export function Setpage() {
    const [store, setStore] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(get => get.json())
            .then(put => setStore(put));
    })
    const[include,setInclude]=useState(0)
    


    return (
        <>
        <div className="heading">
        <h1 className="text-center abc"> <FontAwesomeIcon icon={faHatCowboy} /> <span>Habibi Trends</span>  </h1>
            <CSVLink data ={store }><button className="btn btn-outline-success mb-3 mt-3 buton ">Dowanload</button></CSVLink>
             </div>
            <table className="main text-center">
                <tr>
                    <th>id</th>
                    <th>Image</th>
                    <th >title</th>
                    <th>description</th>
                    <th>category</th>
                    <th>price</th>
                    <th className="p-5">Rating</th>
                    <th className="p-3">Order</th>
                    <th>Details</th>

            
                </tr>
                {
                    store.map((point, index) => (
                        <>
                            <tr className="fontt">
                                <td>{point.id}</td>
                                <td> <img src={point.image} className="photo" />   </td>
                                <td>{point.title} </td>
                                <td>{point.description}</td>
                                <td>{point.category}</td>
                                <td>{point.price}</td>
                                <td><StarRatings rating={point.rating.rate}
                                    starDimension="15px" starSpacing="3px" starRatedColor="gold" /></td>
                                    <td><button onClick={()=>{setInclude(include+1)}} class="btn btn-danger">+</button>
                                    <p>{include}</p>
                                    <button onClick={()=>{setInclude(include-1)}} class="btn btn-success">-</button></td>
                                <td><Link to={`/proid/${point.id}`}><button className="btn btn-outline-primary">view</button> </Link>  </td> 

                            </tr>
                        </>

                    ))
                }
            </table>
        </>
    )
}