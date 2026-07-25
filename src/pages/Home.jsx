import React from 'react'
import { Outlet, useNavigate } from 'react-router';


const Home = () => {

    let navigate = useNavigate();

  return (
    <div>
      <h1>This is Home pages</h1>
      <button onClick={() => navigate("/detail")} className="px-5 bg-amber-400 rounded-2xl">Nested ko dikhao</button>
      <Outlet />
    </div>
  )
}

export default Home
