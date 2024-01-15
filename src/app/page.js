import Trow from "@/components/Trow";




const main = async() => {
   const res=await fetch('http://localhost:3000/api/user', {cache:'no-cache'})
   const userdata=await res.json()
   
  
  return (
    <section className="container mx-auto p-6 font-mono">
       <h1>User data:{userdata.length}</h1>
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">id</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Gmail</th>
              <th className="px-4 py-3">Password</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
           {userdata.map(d=> <tr key={d._id} className="text-gray-700">
              <td className="px-4 py-3 text-sm border">{d.id}</td>
              <td className="px-4 py-3 text-sm border">{d.name}</td>
              <td className="px-4 py-3 text-sm border">{d.email}</td>
              <td className="px-4 py-3 text-sm border">{d.passowrd}</td>
              <Trow userid={d._id}></Trow>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  );
};

export default main;