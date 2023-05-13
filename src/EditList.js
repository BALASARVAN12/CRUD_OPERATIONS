import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditList = () => {
    const { S_NO } = useParams();


    useEffect(() => {
        fetch("http://localhost:8000/items/" + S_NO).then((res) => {
            return res.json();
        }).then((resp) => {
            SNOchange(resp.SNO);
            ITEMNAMEChange(resp.ITEMNAME);
            PRICEchange(resp.PRICE);
            EXPIRYDATEchange(resp.EXPIRYDATE);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[SNO,SNOchange] = useState("");
    const[ITEMNAME,ITEMNAMEChange] =  useState("");
    const[PRICE,PRICEchange] =  useState("");
    const[EXPIRYDATE,EXPIRYDATEchange] =  useState("");


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const itemsdata={SNO,ITEMNAME,PRICE,EXPIRYDATE};
      

      fetch("http://localhost:8000/items/"+S_NO,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(itemsdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Items Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>S_NO</label>
                                        <input value={SNO} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ITEMNAME</label>
                                        <input required value={ITEMNAME}  onChange={e=>ITEMNAMEChange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>PRICE</label>
                                        <input value={PRICE} onChange={e=>PRICEchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>EXPIRYDATE</label>
                                        <input value={EXPIRYDATE} onChange={e=>EXPIRYDATEchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                               
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default EditList;