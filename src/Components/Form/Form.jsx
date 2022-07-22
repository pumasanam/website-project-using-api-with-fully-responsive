import React, {useState, useEffect} from 'react';
import "./Form.css";
import {useNavigate} from "react-router-dom";

const Form = () => {
    const [formData, setFormData] = useState("");
    let navigate = useNavigate();

    const onFormSubmit =(e)=>{
        e.preventDefault();

        if(formData===""){
            alert('Please Fill Username');
        }

        else if (formData.length <=2){
            alert('Minimum 3 Characters Are Require');
        }

        else if(!isNaN(formData)){
            alert('Numbers And Symbols Are Not Allowed');
        }

        else{
            navigate("../card", {replace:true});
            localStorage.setItem("ditPart2", formData);
        }
    };

    useEffect(()=>{
        if(localStorage.getItem("ditPart2")){
            navigate("../card", {replace:true});
        }
    },[navigate]);
  return (
    <>
      <div className="form">
        <form action="" onSubmit={onFormSubmit}>
            <h1>Login</h1>
            <input type="text" value={formData} onChange={(e)=>{
                setFormData(e.target.value);
            }} placeholder='UserName' />
            <br />

            <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
};

export default Form;
