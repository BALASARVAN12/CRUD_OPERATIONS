import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ItemListing = () => {
    const [Items, Itemschange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (SNO) => {
        navigate("items/detail" + SNO);
    }
    const LoadEdit = (SNO) => {
        navigate("items/edit/" + SNO);
    }
    const Removefunction = (SNO) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/Items" + SNO, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/Items").then((res) => {
            return res.json();
        }).then((resp) => {
            Itemschange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Items</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="items/create" className="btn btn-success">Add Items</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>S.NO</td>
                                <td>ITEM NAME</td>
                                <td>PRICE</td>
                                <td>EXPIRY DATE</td>
                                <td>ACTION</td>
                            </tr>
                        </thead>
                        <tbody>

                            {Items &&
                                Items.map(item => (
                                    <tr key={item.SNO}>
                                        <td>{item.SNO}</td>
                                        <td>{item.ITEMNAME}</td>
                                        <td>{item.PRICE}</td>
                                        <td>{item.EXPIRYDATE}</td>
                                        <td><a onClick={() => { LoadEdit(item.SNO) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.SNO) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.SNO) }} className="btn btn-danger">Details</a>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default ItemListing;