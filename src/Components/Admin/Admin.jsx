import axios from 'axios';
import React,{useState, useEffect} from 'react';
import "./Admin.css";
import Model from '../Model/Model';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Admin = () => {
    const [admindata, setAdminData] = useState([]);
     const [admindelete, setAdminDelete] = useState(false);
     const [id, setID] = useState();

    const fetch = async ()=>{
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setAdminData(res.data);
        }
        catch(err){
            console.log(err);
        }

    };

    useEffect(()=>{
        fetch();
    },[]);

    const adminDelete = (id)=>{
        setAdminDelete(true);
        setID(id);
    };
  return (
    <>
    {admindelete && id && <Model admindelete={admindelete} setAdminDelete={setAdminDelete} id={id} fetch={fetch}/>}

    <Navbar/>
        <div className="admin">
            <h1>Admin Data</h1>
            <table border="1">
                <thead>
                    <th>Sn</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                </thead>

                <tbody>
                    {admindata.map((list, index)=>{
                        return(
                            <>
                            <tr key={index}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{list.username}</td>
                                <td>
                                    <Link to={`/createData/${list.id}`}>
                                    <button className='edit'>Edit</button>
                                    </Link>

                                    <button onClick={()=>{
                                        adminDelete(list.id)
                                    }}>Delete</button>
                                </td>
                            </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </div>

        <Footer/>
    </>
  );
};

export default Admin;
