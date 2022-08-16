import './App.css'
import Index from "./Pages/index2.js"
import Login from "./Pages/Login.js"
import Product from "./Pages/Product.js"
import List from "./Pages/Product-list.js"
import Sign from "./Pages/Signup.js"

import { BrowserRouter,Routes,Route } from 'react-router-dom'




   function App(){
      return <div>
 
                {/* <Wrapper> */}
                     <BrowserRouter>
                          <Routes>
                               <Route element ={<Index/>} path ="/"/>
                               <Route element ={<Login/>} path ="Login"/>
                               <Route element ={<Product/>} path ="Product"/>
                               <Route element ={<List/>} path ="Product-list"/>                             
                               <Route element ={<Sign/>} path ="Signup"/>               
                          </Routes>
                     </BrowserRouter>
                {/* </Wrapper> */}
 
       </div>

}

export default App;

