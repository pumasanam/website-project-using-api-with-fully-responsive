import React, {useState} from 'react';
import "./Model.css";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";

const Model = ({admindelete,setAdminDelete, id, fetch}) => {
    const [test, setTest] = useState(false);
    const modelDelete = async ()=>{
        setTest(true);
        try{
            const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(res);
            if(res.status===200){
                toast.success('Data Deleted Successfully');
            }
            fetch();

            setTimeout(() => {
                setAdminDelete(false)
            }, 1800);
            setTest(false);
        }
        catch(err){
            console.log(err);
            setTest(false);

        }
    };
    let color = "red";

    const override = {
        position:"relative",
        top:"16px"
      };

  return (
    <>
    <ToastContainer autoClose={1000}/>
      <div className="modelDelete">
            <h2>Do You Want To Delete ?</h2>
          
            {test ? <ClipLoader color={color} cssOverride={override} size={55} />:<button onClick={modelDelete}>Yes</button>}

            <button onClick={()=>{setAdminDelete(false)}}>No</button>
      </div>
    </>
  );
};

export default Model;
