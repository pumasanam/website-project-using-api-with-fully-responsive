import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./Card.css";
import CardStorage from './CardStorage';

const CardList = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
                try{
                    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
                    setData(res.data);
                }
                catch(err){
                    console.log(err);
                }
        };
        fetch();
    },[]);
  return (
    <>
      <div className="cardlist">
            {data.map((list)=>{
                return <CardStorage list={list}/>
            })} 
      </div>
    </>
  );
};

export default CardList;
