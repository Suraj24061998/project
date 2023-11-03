
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { ToastContainer,  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import{BrowserRouter,Routes,Route} from'react-router-dom'
import Home from './components/user/Home';
import Log from './components/user/Log/Log';

import Sign from './components/user/signup/Sign';
import View from './components/user/viewproduct/View';
import Ahome from './components/admin/adhome/Ahome';
import Addp from './components/admin/product/Addp';
import Check from './components/user/chekout/Check';
import Nav from './components/user/Navigation/Nav';
import Adview from './components/admin/adminview/Adview';
import Adlog from './components/admin/Adlog/Adlog';
import Account from './components/user/account/Account';
import Update from './components/admin/update/Update';
import Bill from './components/admin/Viewbill/Bill';







function App() {
 
  return (
    <div className="App">
      
     
   
   

        <ToastContainer
           position="top-center"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="colored"
         />
   
     <BrowserRouter>
  

  
 
 
    
   <Routes>
   <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/log" element={<Log/>}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/nav" element={ <Nav/>}/>
    <Route path="/view" element={  <View/>}/>
    <Route path="/adhome" element={<Ahome/>  }/>
    <Route path="/add" element={ <Addp/> }/>
    <Route path="/chekout/:id" element={ <Check/> }/>
    <Route path="/adview" element={ <Adview/>}/>
    <Route path="/admin" element={ <Adlog/>}/>
    <Route path="/account" element={  <Account/>}/>
    <Route path="/update/:id" element={   <Update/>}/>
    <Route path="/bill" element={   <Bill/>}/>
   
    
   
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;
