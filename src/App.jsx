import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';  


// login Component --->
// import LoginSignUp from './Components/ui/Authentication/Login'

// import Profile from './Components/profile/profile';
// Mainpage --->
import Mainpage from './Components/ui/mainpage/Mainpage'

import Productdetails from './Components/Seller/productdetails';

// import Seller from './Components/Seller/Seller';
// import Buyer from './Components/Seller/Buyer/Buyer';
// Select ----> 
import Select from './Components/ui/Fashion/Select'
import Cart from './Components/Cart/Cart';
import CartDrawer from './Components/Cart/CartDrawer';
// import Navbar from './Components/ui/Essentials/Essentials'; 


// Mens Components --->

import Shirt from './Components/ui/Fashion/men/shirt'
import Men from './Components/ui/Fashion/Men/Men'
import MKurta from './Components/ui/Fashion/men/MKurta'
import MFormal from './Components/ui/Fashion/Men/MFormal';
import Mjeans from './Components/ui/Fashion/men/Mjeans'
import MShades from './Components/ui/Fashion/men/MShades'
import Mshoes from './Components/ui/Fashion/men/Mshoes'
import MSports from './Components/ui/Fashion/men/MSports'
import MWatch from './Components/ui/Fashion/men/MWatch'
import Tshirt from './Components/ui/Fashion/men/Tshirt'
import Innerwear from './Components/ui/Fashion/Men/Innerwear';
import Wallet from './Components/ui/Fashion/Men/Wallet';



// Women Component ---->

import Women from './Components/ui/Fashion/Women/Women'
import Tops from './Components/ui/Fashion/Women/Tops'
import Saree from './Components/ui/Fashion/Women/Saree'
import Wjeans from './Components/ui/Fashion/Women/Wjeans'
import Wshoes from './Components/ui/Fashion/Women/Wshoes'
import Bags from './Components/ui/Fashion/Women/Bags'
import Wformals from './Components/ui/Fashion/Women/Wformals'
import Wsports from './Components/ui/Fashion/Women/Wsports'
import Wwatch from './Components/ui/Fashion/Women/Wwatch'
import Wshades from './Components/ui/Fashion/Women/Wshades'
import Kurti from './Components/ui/Fashion/Women/Kurti'
import Jewellery from './Components/ui/Fashion/Women/jewellery'


// Baby Component ---->

import Baby from './Components/ui/Fashion/Baby/Baby'
import Boy from './Components/ui/Fashion/Baby/Boy'
import Girl from './Components/ui/Fashion/Baby/Girl'
import Toy from './Components/ui/Fashion/Baby/Toy'
import Bshoes from './Components/ui/Fashion/Baby/Bshoes'
import Boutique from './Components/ui/Fashion/Baby/Boutique'
import Nursery from './Components/ui/Fashion/Baby/Nursery'
import Gear from './Components/ui/Fashion/Baby/Gear'
import Feeding from './Components/ui/Fashion/Baby/Feeding'
import Bath from './Components/ui/Fashion/Baby/Bath'

// Essentials Component ---->

import Essentials from './Components/ui/Essentials/Essentials'
import Fruits from './Components/ui/Essentials/Fruits';
import Sweets from './Components/ui/Essentials/Sweets';
import Frozen from './Components/ui/Essentials/Frozen';
import Icecream from './Components/ui/Essentials/Icecream';
import Packaged from './Components/ui/Essentials/Packaged';
import Dairy from './Components/ui/Essentials/Dairy';
import Juices from './Components/ui/Essentials/Juices';
import BreakFast from './Components/ui/Essentials/Breakfast';
import Tea from './Components/ui/Essentials/Tea';
import Cookies from './Components/ui/Essentials/Cookies';
import Soap from './Components/ui/Essentials/Soap';
import Clean from './Components/ui/Essentials/Clean';
import Books from './Components/ui/Essentials/Books';
import Kitchen from './Components/ui/Essentials/Kitchen';


// Pharmacy Component ---->

import Pharmacy from './Components/ui/Pharmacy/Pharmacy'
import Ayurveics from './Components/ui/Pharmacy/Ayurveics';
import Med from './Components/ui/Pharmacy/Med';
import Lab from './Components/ui/Pharmacy/Lab';
import Skincare from './Components/ui/Pharmacy/Skincare';
import Nutrition from './Components/ui/Pharmacy/Nutritions';
import Wcare from './Components/ui/Pharmacy/wcare';
import Clinical from './Components/ui/Pharmacy/Clinical';
import Dr from './Components/ui/Pharmacy/Dr';
import Mother from './Components/ui/Pharmacy/Mother';
import Elder from './Components/ui/Pharmacy/Elder';

function App() {
  

  return (
   

    <>
 {/* <LoginSignUp />*/}
 {/* <Navbar /> */}
  {/* <Seller /> */}
  <profile />

   
    <Routes>

      <Route path="/" element={<Mainpage />} />

      <Route path="/fashion" element={<Select />} />
      <Route path="/essentials" element={<Essentials />} /> 
      <Route path="/pharmacy" element={<Pharmacy />} />

      <Route path="/fashion/men/" element={<Men />} />
      <Route path="/fashion/women/" element={<Women />} />
      <Route path="/fashion/baby/" element={<Baby />} />

      <Route path="/fashion/men/shirt/" element={<Shirt />} />
      <Route path="/fashion/men/tshirt/" element={<Tshirt />} />
      <Route path="/fashion/men/mjeans/" element={<Mjeans />} />
      <Route path="/fashion/men/mshoes/" element={<Mshoes />} />
      <Route path="/fashion/men/innerwear/" element={<Innerwear />} />
      <Route path="/fashion/men/msports/" element={<MSports />} />
      <Route path="/fashion/men/mwatch/" element={<MWatch />} />
      <Route path="/fashion/men/mshades/" element={<MShades />} />
      <Route path="/fashion/men/mkurta/" element={<MKurta />} />
      <Route path="/fashion/men/mformal/" element={<MFormal />} />
      <Route path="/fashion/men/wallet/" element={<Wallet />} />

      <Route path="/fashion/women/bags/" element={<Bags />} />
      <Route path="/fashion/women/jewellery/" element={<Jewellery />} />
      <Route path="/fashion/women/kurti/" element={<Kurti />} />
      <Route path="/fashion/women/saree/" element={<Saree />} />
      <Route path="/fashion/women/tops/" element={<Tops />} />
      <Route path="/fashion/women/wformals/" element={<Wformals />} />
      <Route path="/fashion/women/wjeans/" element={<Wjeans />} />
      <Route path="/fashion/women/wshades/" element={<Wshades />} />
      <Route path="/fashion/women/wsports/" element={<Wsports />} />
      <Route path="/fashion/women/wwatch/" element={<Wwatch />} />
      <Route path="/fashion/women/wshoes/" element={<Wshoes />} />

      <Route path="/fashion/baby/bath/" element={<Bath />} />
      <Route path="/fashion/baby/boutique/" element={<Boutique />} />
      <Route path="/fashion/baby/boy/" element={<Boy />} />
      <Route path="/fashion/baby/bshoes/" element={<Bshoes />} />
      <Route path="/fashion/baby/feeding/" element={<Feeding />} />
      <Route path="/fashion/baby/gear/" element={<Gear />} />
      <Route path="/fashion/baby/girl/" element={<Girl />} />
      <Route path="/fashion/baby/nursery/" element={<Nursery />} />
      <Route path="/fashion/baby/toy/" element={<Toy />} />
      

      {/* <Route path="/profile/profile/" element={<Profile />} />  */}
      <Route path="/cart/cart" element={<Cart />} />
       <Route path="/" element={<CartDrawer />} />



      <Route path="/essentials/fruits/" element={<Fruits />} /> 
      <Route path="/essentials/sweets/" element={<Sweets />} /> 
      <Route path="/essentials/frozen/" element={<Frozen />} /> 
      <Route path="/essentials/icecream/" element={<Icecream />} /> 
      <Route path="/essentials/packed/" element={<Packaged />} /> 
      <Route path="/essentials/dairy/" element={<Dairy />} /> 
      <Route path="/essentials/juices/" element={<Juices />} /> 
      <Route path="/essentials/breakfast/" element={<BreakFast />} /> 
      <Route path="/essentials/tea/" element={<Tea />} /> 
      <Route path="/essentials/cookies/" element={<Cookies />} /> 
      <Route path="/essentials/soap/" element={<Soap />} /> 
      <Route path="/essentials/clean/" element={<Clean />} /> 
      <Route path="/essentials/books/" element={<Books />} /> 
      <Route path="/essentials/kitchen/" element={<Kitchen />} /> 


      <Route path="/pharmacy/ayurveics/" element={<Ayurveics />} /> 
      <Route path="/pharmacy/med/" element={<Med />} /> 
      <Route path="/pharmacy/lab/" element={<Lab />} /> 
      <Route path="/pharmacy/skincare/" element={<Skincare />} /> 
      <Route path="/pharmacy/nutrition/" element={<Nutrition />} /> 
      <Route path="/pharmacy/wcare/" element={<Wcare />} /> 
      <Route path="/pharmacy/clinical/" element={<Clinical />} /> 
      <Route path="/pharmacy/dr/" element={<Dr />} />  
      <Route path="/pharmacy/mother/" element={<Mother />} />  
      <Route path="/pharmacy/elder/" element={<Elder />} />  

      
     <Route path="/product/:id" element={<Productdetails />} />
    </Routes> 
      
 
    </>
  
     
  )
}

export default App  