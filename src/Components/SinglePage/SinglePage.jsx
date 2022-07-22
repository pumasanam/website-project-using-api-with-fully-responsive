import React, {useState, useEffect} from 'react';
import "./SinglePage.css";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navbar from '../Navbar/Navbar';
import Footer from "./../Footer/Footer";
const SinglePage = () => {
    const {id} = useParams();

    const[singleData, setSingleData] = useState(null);

    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setSingleData(res.data);
            }
            catch(err){
                console.log(err);
            }
        };
        if(id){
            fetch();
        }
    },[id]);
  return (
    <>
    <Navbar/>
      {
        singleData ?
        (
            <div className="singledata">
                <h2>{singleData.id}</h2>
                <h3>{singleData.name}</h3>
                <h4>{singleData.username}</h4>
                <h5>{singleData.email}</h5>
            </div>
        ):
        (
            <p>Loading.....</p>
        )
      }
      <Footer/>
    </>
  );
};

export default SinglePage;
