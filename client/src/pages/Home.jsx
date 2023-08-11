import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Home() {
  const [groups, setGroups] = useState([]);
//   const {id} = useParams()/;

  useEffect(() => {
    fetch(`http://localhost:3000/api/groups`)
      .then((response) => response.json())
      .then((groups) => setGroups(groups));
  },[] );

  return (
    <div className="h-screen  pt-36 pl-40"> 
      <div className="max-w-screen-sm mx-3 grid grid-cols-3 gap-x-96 gap-y-10 
        justify-center h-full md:flex-row ">
      {groups.map((gr) => (
        // eslint-disable-next-line react/jsx-key
        <div key={gr.id} className="relative">
          <figure id="card" className="grid isolate w-80 h-80 bg-pink-800 rounded-lg">
          <img src={gr.img} alt="Gagal" id="card_image" className="flex w-full h-full object-fill "/>
          <h3 id="card_category" className=" text-pink-400 font-bold text-2xl text-center">{gr.nama}</h3>
          <figcaption id="card_body" className=" relative inset-0 flex items-center justify-around z-20 p-6 text-pink-400">
          <p id="desc" >{gr.agensi}</p>
          <Link to={`/description/${gr.id}`}>
            <button id="card_button" className="inline-block no-underline py-1 px-2 rounded bg-purple-400 text-pink-800">Detail</button>
          </Link>
          </figcaption>
        </figure>
        </div>
       
      ))}
     </div>
     </div>
  );
}