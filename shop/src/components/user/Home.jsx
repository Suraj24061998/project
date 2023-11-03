import React from 'react'
import './Home.css'
import img1 from '../images/img-1.png'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img5 from '../images/img-5.png'
import img6 from '../images/img-6.png'
import Nav from './Navigation/Nav'










function Home() {
  return (
    <div>
      <Nav/>
      <div className="header_section">
      <div className="banner_section layout_padding">
            <div id="my_slider" class="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="taital_main">
                                 <h4 className="banner_taital"><span class="font_size_90">50%</span> Discount Online Shop</h4>
                                 <h6 className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </h6>
                                
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div>
                                 <img src={img1} className="image_1"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="taital_main">
                                 <h4 className="banner_taital"><span class="font_size_90">50%</span> Discount Online Shop</h4>
                                 <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                                 
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div>
                                 <img src={img1} class="image_1"/></div>
                           </div>
                        </div>
                       
                     </div>
                  </div>
                  <div className="carousel-item">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="taital_main">
                                 <h4 className="banner_taital"><span className="font_size_90">50%</span> Discount Online Shop</h4>
                                 <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                              
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div><img src={img1} class="image_1"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="container">
         <div class="category_section">
            <div class="row">
               <div class="col-lg-2 col-sm-12">
                  {/* <h1 class="category_text">Category</h1> */}
               </div>
               <div class="col-lg-10 col-sm-12 main">
                  <div class="col">
                     <div class="box_main">
                        <div class="icon_1"></div>
                        <h4 class="fashion_text active">New Fashion</h4>
                     </div>
                  </div>
                  <div class="col">
                     <div class="box_main">
                        <div class="icon_2"></div>
                        <h4 class="fashion_text">Clothing</h4>
                     </div>
                  </div>
                  <div class="col">
                     <div class="box_main">
                        <div class="icon_3"></div>
                        <h4 class="fashion_text">Watches</h4>
                     </div>
                  </div>
                  <div class="col">
                     <div class="box_main">
                        <div class="icon_4"></div>
                        <h4 class="fashion_text">Accessories</h4>
                     </div>
                  </div>
                  <div class="col">
                     <div class="box_main">
                        <div class="icon_5"></div>
                        <h4 class="fashion_text">Sweaters & Jackets</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="category_section_2">
            <div class="row">
               <div class="col-lg-4 col-sm-12">
                  <div class="beds_section active">
                     <h1 class="bed_text">Up to 50% off | Beds</h1>
                     <div><img src={img2} class="image_2"/></div>
                     
                  </div>
               </div>
               <div class="col-lg-4 col-sm-12">
                  <div class="beds_section">
                     <h1 class="bed_text">organized in style</h1>
                     <div><img src={img3} class="image_2"/></div>
                    
                  </div>
               </div>
               <div class="col-lg-4 col-sm-12">
                  <div class="beds_section">
                     <h1 class="bed_text">Refurbished mixer</h1>
                     <div><img src={img4} class="image_2"/></div>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="beauty_section layout_padding">
         <div className="container">
            <div className="row">
               <div className="col-lg-4 col-sm-12">
                  <div className="beauty_box">
                     <h1 className="bed_text">Beauty products</h1>
                     <div><img src={img5} class="image_3"/></div>
                     
                  </div>
               </div>
               <div className="col-lg-8 col-sm-12">
                  <div className="beauty_box_1">
                     <h1 className="bed_text_1">Explore trending electronics</h1>
                     <div><img src={img6} class="image_3"/></div>
                    
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="newsletter_section layout_padding">
         <div class="container">
            <h6 class="conect_text">Connect to snapMind</h6>
            <h1 class="newsletter_taital">Join Our Newsletter</h1>
            <p class="newsletter_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
            <div class="input-group mb-3">
               <input type="text" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2"/>
               <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">Subscribe</span>
               </div>
            </div>
         </div>
      </div>




     
         </div>
      
 
  )
}

export default Home