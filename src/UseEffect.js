import axios from 'axios';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Styles from "./stylings/Stylings.css"
// const Use = () => {
//     const[data,setdata]=useState([])
//     useEffect(
//         ()=>{
//             axios.get("https://jsonplaceholder.typicode.com/posts")
//             .then(res=>setdata(res.data))
//          },[]
//     );
//      return(
//         <>{
// data.length>0 && data.map((eachitem)=>{
//                 return(
//                     <>
//                     <div className={`card ${Styles.card}`}>
//                         <div class="card-body">
//         <h5 class='card-title'>{eachitem.id}</h5>
//       <h5 class="card-title">{eachitem.title}</h5>
//       <h5 class="card-title">{eachitem.body}</h5>
//      </div> 
//   </div>
//    </>
//     )
// })
// }
// </>
//     );
// }
// export default Use;
const Use = () => {
    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
  
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setData(res.data));
    }, []);
  
    const handleButtonClick = () => {
      // TODO: Handle displaying details for the entered ID
      // You can use the selectedId state to filter the data and show the details for the specific ID.
    }
  
    return (
      <>
        <div style={{ padding: '20px' }}>
          <input
            type="number"
            placeholder="Enter ID"
            value={selectedId || ''}
            onChange={(e) => setSelectedId(e.target.value)}
          />
          <button onClick={handleButtonClick}>Get Details</button>
        </div>
        {
        data.length > 0 && data.map((eachitem) => {
          if (selectedId && eachitem.id !== parseInt(selectedId, 10)) {
            return null;
          }
          return (
            <div key={eachitem.id} className={`card ${Styles.card}`}>
              <div className="card-body">
                <h5 className="card-title">ID: {eachitem.id}</h5>
                <h5 className="card-title">Title: {eachitem.title}</h5>
                <h5 className="card-title">Body: {eachitem.body}</h5>
              </div>
            </div>
          );
        })
      }
    </>
  );
}

export default Use;
