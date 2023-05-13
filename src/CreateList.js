import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 function CreateList() {
    const navigate=useNavigate();
    const[SNO,SNOchange] = useState("");
    const[ITEMNAME,ITEMNAMEChange] =  useState("");
    const[PRICE,PRICEchange] =  useState("");
    const[EXPIRYDATE,EXPIRYDATEchange] =  useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const itemsdata = {SNO,ITEMNAME,PRICE,EXPIRYDATE}
      
       // console.log({SNO,ITEMNAME,PRICE,EXPIRYDATE});
       fetch("http://localhost:8000/items",{
        method:"POST",
        headers:{"content-type":"appilication/json"},
        body:JSON.stringify(itemsdata)
       }).then((result)=>{
            alert('Saved Successfully...')
            navigate('/')
       }).catch((err)=>{
        console.log(err.message)
       })
    }
  return (
    <div>
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}>
                    <div className='card' style={{"textAlign":"left"}}>
                        <h2>Create Items</h2>
              
                    <div className='card-body'>
                         <div className='row'>
                            <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>S.NO</label>
                                <input  value={SNO} disabled="disabled" className='form-control'/>
                            </div>
                            </div>
                            <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>ITEM NAME</label>
                                <input value={ITEMNAME} onChange={e=>ITEMNAMEChange(e.target.value)} className='form-control'/>
                            </div>
                            </div>
                            <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>PRICE</label>
                                <input value={PRICE} onChange={e=>PRICEchange(e.target.value)} className='form-control'/>
                            </div>
                            </div>
                            <div className='col-lg-12'>
                            <div className='form-group'>
                                <label>EXPIRY DATE</label>
                                <input value={EXPIRYDATE} onChange={e=>EXPIRYDATEchange(e.target.value)} className='form-control'/>
                            </div>
                            </div>
                            <div className='col-lg-12'>
                            <div className='form-group'>
                                <button className='btn btn-success' type='Submit'>Save</button>
                                <a href="/" className='btn btn-danger'>Back</a>
                            </div>
                            </div>
                         </div>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
export default CreateList;