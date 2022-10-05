import { useContext } from "react";
import { AppContext } from '../../../App';
import './form.css'
import {useNavigate} from 'react-router-dom'
import './form.css'

function Form({title,btn}) {
    const {nameRef,emailRef,phoneRef,handelCreate,handelUpdate,status,setStatus} =useContext(AppContext);

    const navigate =useNavigate();

  return (<>
    
     <div className="form border  text-danger bg-light ">
        <div>
            <h1>{title}</h1>
        </div>
        <div className="form00">
            <div className="">
            <div>
<label>Regesternumber:</label><br/>
<input type="text" placeholder="Reg..." ref={emailRef}/>
        </div>
<label>Name</label><br/>
<input type="text" placeholder="Enter Name..." ref={nameRef}/>
        </div>

        <div>
<label>phone Number</label><br/>
<input type="text" placeholder="Enter phone Number ..." ref={phoneRef}/>
        </div>

        <div>
<label>Email</label><br/>
<input type="text" placeholder="Enter Email..." ref={emailRef}/>
        </div>

<div className="btnstart">
<button   onClick={
    ()=>{
        if(btn === "create"){
            handelCreate();
//            navigate('/');
        }

        else{
            // handelCreate();
            handelUpdate(status);
            setStatus("");
           // navigate('/');
        }
        
    }
} className="btn btn-primary ">{btn}
</button>
</div >
<div>
    <button className='btn btn-primary' onClick={()=>navigate('/')}>back</button>
</div>
     </div>
     </div>
     </>)
}

export default Form;