import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Message from "./components/Message";
import Register from "./components/Register";
import Login from "./components/Login";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // Hide sidebar if we're on the register route
  // const hideSidebar = location.pathname === "/register";
   const hideSidebar = location.pathname === "/register" || location.pathname === "/login";

  return (
    // <section className="lg:w-[1134px] lg:h-[1080px] lg:bg-[#6e6ed4] justify-between flex flex-col">
    <section className="lg:w-full lg:h-[585px] lg:bg-[#fafafae7] justify-between flex flex-col">
      <div className="flex flex-1">
        {!hideSidebar && <Sidebar />} {/* Sidebar only appears if not on /register */}
        <Routes>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/messages" element={<Message />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;


// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";
// import Message from "./components/Message"; // Your message page

// import { Routes, Route } from "react-router-dom";
// import Register from "./components/Register";

// function App() {
//   return (
//     <section className="lg:w-[1134px] lg:h-[1080px] lg:bg-[#F1F1F2] justify-between flex flex-col">
//       <div className="flex flex-1">
//         <Sidebar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/messages" element={<Message />} />
//           <Route path="/register" element={<Register />} />
//           {/* Add other routes here */}
//         </Routes>
//       </div>
//     </section>
//   );
// }

// export default App;


// import Sidebar from "./components/Sidebar";
// import Main from "./components/Main";


// function App() {
//   return (
//     // <div className="flex flex-col h-screen">
//         <section className='lg:w-[1134px]  lg:h-[1080px] lg:bg-[#F1F1F2] justify-between flex flex-col '> 
//       {/* Navbar */}
//       {/* <Navbar /> */}
     

//       {/* Content area: Sidebar + Main */}
//       <div className="flex flex-1">
//         <Sidebar />
//         <Main />
//       </div>
//     </section>
//   );
// }

// export default App;