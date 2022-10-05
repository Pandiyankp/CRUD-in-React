import { useContext } from "react";
import { AppContext } from '../../../App';
import{useNavigate} from 'react-router-dom';
function Indiuser() {
    const { users1}=useContext(AppContext);
    const navigate =useNavigate();
    // let name,phone,email,id;
  return (
   <div className="card display-view d-flex align-items-center m-3">
<div className='card-body'> 
<h5 className='card-title text-primary'><span className="text-success">Reg:</span> {users1.name}</h5>
  <h5 className='card-title'><span className="text-success">Name:</span> {users1.name}</h5>
  <h5 className='card-title'> <span className="text-success">Phone:</span> {users1.phone}</h5>
  <h5 className='card-title'><span className="text-success">Email:</span>{users1.email}</h5>
  
     </div>
     <button onClick={()=>navigate('/') }className="btn btn-primary w-50 d-flux "> Back</button>
   </div>
  )
}

export default Indiuser