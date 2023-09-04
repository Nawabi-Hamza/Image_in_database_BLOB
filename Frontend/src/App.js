import './App.css';
import axios from "axios";
import { useEffect,useState } from "react";
// This is used buffer because react need to import this library
import { Buffer } from "buffer"

function App() {
  // for set data to a variable when it retrive
  const [ data,setData ] = useState()
  // For Fetch data from api 
  useEffect(() => {
    const fetchData = async()=>{
      const res = await axios.get("http://localhost:5000/image")
      setData(res.data)
    }
    fetchData()
  }, [])
  return (
    <div className="App" >
      {data && data.map((item)=>(
        <div style={{border:'1px solid black',width:"450px",gap:"20px",margin:"10px auto", display:"flex",justifyContent:"space-around",alignItems:"center"}}>
          <h3>{item.id}</h3>
          <p>{item.content}</p>
          {/* This code make BLOB (Binary Large Object ) We Can convert that to image by the below code */}
          <img src={`data:${'image/png/jpg'};base64,${Buffer.from(item.image).toString('base64')}`} height='150px' alt="Your Browser Cann't display this img" />
        </div>
      ))}
    </div>
  );
}

export default App;