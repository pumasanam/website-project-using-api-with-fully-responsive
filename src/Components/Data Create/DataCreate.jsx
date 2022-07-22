import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./DataCreate.css";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DataCreate = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let color = "green";
    const {id} = useParams();
    const [isEdit, setIsEdit] = useState(false);

    useEffect(()=>{
        const fetch = async()=>{
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(res);
            setName(res.data.name);
            setUsername(res.data.username);
            setEmail(res.data.email);
        }

        if(id){
            setIsEdit(true);
            fetch();
        }
    },[id]);


    const OnDataCreate = async (e)=>{
        e.preventDefault();
        setIsLoading(true);

        const DataCreate = {
            name, username, email
        };

        if(isEdit){
            try{
                const res = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`);
                setIsLoading(false);
    
                if(res.status===200){
                    toast.success("Updated Successfully");
                }
            }
            catch(err){
                console.log(err);
                setIsLoading(false);
    
            };
        }

        else{
            try{
                const res = await axios.post('https://jsonplaceholder.typicode.com/users', DataCreate);
                setIsLoading(false);
    
                if(res.status>200){
                    toast.success("Data Created Successfully");
                }
            }
            catch(err){
                console.log(err);
                setIsLoading(false);
    
            };
        }

        

    };
  return (
    <>
    <ToastContainer autoClose={1000}/>
     <Navbar/>

      <div className="datacreate">
            <form action="" onSubmit={OnDataCreate}>
                <h1>{isEdit ? "Update A Data !" : "Create A Data !"}</h1>
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value);
                }} placeholder='Name' />

                <input type="text" value={username} onChange={(e)=>{
                    setUsername(e.target.value);
                }} placeholder='UserName' />

                <input type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value);
                }} placeholder='Email' />

                {isLoading ? <ClipLoader color={color} size={50} />:<button type="submit">{isEdit? "Update":"Submit"}</button>}

                
            </form>
      </div>
      <Footer/>
    </>
  );
};

export default DataCreate;
