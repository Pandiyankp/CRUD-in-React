import './App.css';
import React,{createContext , useRef,useEffect,useState} from 'react';
import Form from './New folder/Router/pages/Form';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Display2 from './New folder/Router/pages/Display';
import Indiuser from './New folder/Router/pages/indiuser'


export const AppContext = createContext(null);
function App() {
const nameRef = useRef(null);    
const emailRef = useRef(null);    
const phoneRef = useRef(null);
const [status,setStatus]=useState("");
//fun
//user story 
const [users,setUser] =useState([]);
///****
const [users1,setUser1] =useState([]);


//fun
useEffect(()=>{
    getData()
},[])
const getData =async()=>{
    await axios.get('http://localhost:3003/users').then(res => setUser(res.data));

}

const handelCreate =()=>{
    let name =nameRef.current.value,email=emailRef.current.value,phone=phoneRef.current.value,
    id = uuid;
    if (name ===''||email ===''||phone ==='')
    {
        alert("fill the fields ");
        return;
    }
    axios.post('http://localhost:3003/users',{id,name,email,phone});
    setTimeout(()=>{

    },700)
nameRef.current.value="";
phoneRef.current.value="";
emailRef.current.value="";
    
}


let handelUpdate=(uid)=>{
    let name =nameRef.current.value,email=emailRef.current.value,phone=phoneRef.current.value,
    id = uid;
axios.put(`http://localhost:3003/users/${uid}`,{id:id,name:name,phone:phone,email:email});
setStatus("");
nameRef.current.value="";
phoneRef.current.value="";
emailRef.current.value="";
// setStatus("");
}
const handelDelete=(id)=>{


axios.delete(`http://localhost:3003/users/${id}`)
setTimeout(()=>{
        })
}
const handelView=(id)=>{
axios.get(`http://localhost:3003/users/${id}`).then(res=>setUser1(res.data));

setTimeout(()=>{
})
}
  return (
    <>
    <div className='App'>

<AppContext.Provider value={{nameRef,emailRef,phoneRef,handelCreate,handelUpdate,handelDelete,handelView,users,status,setStatus,
// induser,setIntuser 
users1,setUser1}}>

<Router>
<Routes>
    <Route path='/form' element={<Form title={"create user"} btn={"create"}/>}/>
    <Route path='/updateform' element={<Form title={"Update user"} btn={"update"}/>}/>
    <Route path='/' element={<Display2/>}/>
    <Route path='/:id' element={<Indiuser/>}/>

</Routes>

</Router>

</AppContext.Provider>



    </div>
   
    </>
  );
}

export default App;
