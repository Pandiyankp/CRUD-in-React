import React from 'react'
import { useContext } from "react";
import { AppContext } from '../../../App';
import {useNavigate} from 'react-router-dom';
import { FaPenAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import './form.css'
import {useParams} from 'react-router-dom';

function Display() {
const {users,status,setStatus,handelDelete,handelView} =useContext(AppContext);
  const navigate =useNavigate();
  const {id} =useParams();


  return (
    <div>
      <div className='row '>
        <div className='bg-dark d-flex col col-lg-4 '>
          
        </div>    
        <div className='bg-dark d-flex col col-lg-4 '>
          
          </div>
        <div className='bg-dark d-flex col col-lg-4 '>
        <button className=' btn btn-success d-flex me-4 ' onClick={
            ()=>navigate('/form')
          }>Create Contact</button>
        </div>   
        </div>    
                {users.map(u =>(
<div className='card display-view d-flex align-items-center m-3' key={u.id}>
  <div className='view'>

    <FaEye onClick={()=>{
      navigate(`/${u.id}`)
      handelView(u.id)
    }}/>
  </div>
  <div className='edite '
  onClick={()=>{
    navigate('/updateform')
    setStatus(u.id)
  }}>   <FaPenAlt/>
</div>
  <div className='delete '>    <FaRegTrashAlt onClick={()=>handelDelete(u.id)} className='delete'/>
</div>
<div className='card-body '>
<h5 className='card-title text-primary'><span className="text-success">Reg:</span> {u.reg}</h5>
  <h5 className='card-title text-primary'>Name: {u.name}</h5>
  <h5 className='card-title'>Phone: {u.phone}</h5>
  <h5 className='card-title'>Email:{u.email}</h5>
  
</div>

</div>
        ))}
        
        </div>
        
  )
}

export default Display