import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Description() {
  const [desc, setDesc] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/description/${id}`)
      .then((response) => response.json())
      .then((desc) => setDesc(desc));
  }, [id]);

  return (
    <div className="w-full h-screen pt-36 px-4">
      {desc ? (
        <>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <h1 className="text-pink-600 font-serif text-4xl font-bold inline border-b-4 border-gray-800">{desc.name}</h1>
          <div className="py-5 font-semibold text-pink-500">
          <p >Aktif Sejak: {desc.aktif}</p>
          <p >Label Rekaman: {desc.label}</p>
          <p>{desc.about}</p>
          </div>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    {/* </main> */}
    </div>
  );
}