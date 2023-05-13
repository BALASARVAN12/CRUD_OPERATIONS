import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Listdetails = () => {
    const { S_NO } = useParams();

    const [Items, Itemschange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/items" + S_NO).then((res) => {
            return res.json();
        }).then((resp) => {
            Itemschange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
               <div className="container">
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Item Details</h2>
                </div>
                <div className="card-body"></div>
                {Items &&
                    <div>
                        <h2>Item name is : <b>{Items.ITEMNAME}</b>  ({Items.SNO})</h2>
                        <h3>Item Details</h3>
                        <h5>Price is : {Items.PRICE}</h5>
                        <h5>Expiry Date is : {Items.EXPIRYDATE}</h5>
                        <Link className="btn btn-danger" to="/">Back to List</Link>
                    </div>
                }
            </div>
            </div>
                
        </div >
    );
}

export default Listdetails;