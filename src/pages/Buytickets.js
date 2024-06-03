import React, { useEffect } from "react";
import { BsCartCheck } from "react-icons/bs";

const Buytickets = () => {
  // <div id="pagebanner">
  //   <div className="inner">
  //     <div className="pagebanner-image">
  //       <img
  //         src="https://keansburgamusementpark.com/wp-content/themes/barebones/assets/images/banners/page-banner.png"
  //         alt="Default Thumbnail"
  //       ></img>{" "}
  //     </div>
  //   </div>
  //   <main id="page-wrapper">
  //     <div className="inner">
  //       <div id="content">
  //         <article className="post-11811 page type-page status-publish hentry">
  //           <header role="heading">
  //             <h1 className="post__title_one">Buy Tickets</h1>
  //           </header>

  //           <div className="vc_row wpb_row vc_row-fluid vc_custom_1563799369229">
  //             <div className="wpb_column vc_column_container vc_col-sm-12">
  //               <div className="vc_column-inner vc_custom_1563799382947">
  //                 <div className="wpb_wrapper">
  //                   <div className="wpb_text_column wpb_content_element ">
  //                     <div className="wpb_wrapper">
  //                       <h3 style={{ textAlign: "center" }}>
  //                         <span style={{ fontSize: "medium" }}>
  //                           Waterpark tickets are now available for purchase
  //                           online. Online waterpark tickets are valid for the
  //                           2024 season. All amusement park tickets or
  //                           upgrades must be purchased at the park the day of
  //                           your visit.
  //                         </span>
  //                       </h3>
  //                     </div>
  //                   </div>
  //                   <div className="vc_row wpb_row vc_inner vc_row-fluid">
  //                     <div className="wpb_column vc_column_container vc_col-sm-12">
  //                       <div className="vc_column-inner">
  //                         <div className="wpb_wrapper">
  //                           <div className="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_top-to-bottom top-to-bottom vc_custom_1711166133891 centered wpb_start_animation animated">
  //                             <div className="wpb_wrapper_two">
  //                               <p>
  //                                 <a href="https://keansburgamusementpark.com/wp-content/uploads/2015/04/runawayrapids.png">
  //                                   <img
  //                                     fetchpriority="high"
  //                                     decoding="async"
  //                                     className="alignnone wp-image-3392 size-medium"
  //                                     src="https://keansburgamusementpark.com/wp-content/uploads/2015/04/runawayrapids-300x186.png"
  //                                     alt=""
  //                                     width="300"
  //                                     height="186"
  //                                     srcset="https://keansburgamusementpark.com/wp-content/uploads/2015/04/runawayrapids-300x186.png 300w, https://keansburgamusementpark.com/wp-content/uploads/2015/04/runawayrapids.png 459w"
  //                                     sizes="(max-width: 300px) 100vw, 300px"
  //                                   ></img>
  //                                 </a>
  //                               </p>
  //                             </div>
  //                           </div>
  //                           <div
  //                             className="vc_empty_space"
  //                             style={{ height: "25px" }}
  //                           >
  //                             <span className="vc_empty_space_inner"></span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="vc_btn3-container vc_btn3-center">
  //                     <a
  //                       style={{ backgroundColor: "red", color: "#ffffff" }}
  //                       className="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-rounded vc_btn3-style-custom"
  //                       href="/Pay"
  //                       title=""
  //                     >
  //                       BUY NOW
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="vc_row wpb_row vc_row-fluid">
  //             <div className="wpb_column vc_column_container vc_col-sm-12">
  //               <div className="vc_column-inner">
  //                 <div className="wpb_wrapper">
  //                   <div
  //                     className="vc_empty_space"
  //                     style={{ height: "32px" }}
  //                   >
  //                     <span className="vc_empty_space_inner"></span>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </article>
  //       </div>
  //     </div>
  //   </main>
  // </div>
  useEffect(() => {
    let iconcart = document.querySelector(".iconcart");
    let cart = document.querySelector(".cart");
    let container = document.querySelector(".container");
    let close = document.querySelector(".close");

    const cartClick = () => {
      if (cart.style.right == "-100%") {
        cart.style.right = "0";
        container.style.transfrom = "translateX(-400px)";
      } else {
        cart.style.right = "-100%";
        container.style.transfrom = "translateX(0)";
      }
    };

    const closeClick = () => {
      cart.style.right = "-100%";
      container.style.transform = "translate(0)";
    };

    iconcart.addEventListener("click", cartClick);
    close.addEventListener("click", closeClick);
    return () => {
      iconcart.removeEventListener("click", cartClick);
      close.removeEventListener("click", closeClick);
    };
  }, []);

  return (
    <div id="loki" style={{ minHeight: "750px" }}>
      <div className="container">
        <header>
          <h1>Buy Tickets</h1>
          <div className="iconcart">
            <div className="totalQuantity">0</div>
            <BsCartCheck />
          </div>
        </header>
        <div className="listProduct">
          <div className="item">
            <img src="https://keansburgamusementpark.com/wp-content/uploads/2015/03/runawayrapids.png"></img>
            <h2>Runaway Rapids –3 Hour Admission</h2>
            <div className="price">$39.00</div>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="cart">
        <h2>CART</h2>
        <div className="hulk">
          <div className="panda">
            <img src="https://keansburgamusementpark.com/wp-content/uploads/2015/03/runawayrapids.png"></img>
            <div className="content">
              <div className="name">
                Keansburg Amusement Park 50 Ticket Sheet
              </div>
              <div className="price">$49.95</div>
            </div>
            <div className="quantity">
              <button>-</button>
              <span className="value">3</span>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="close">Close</div>
          <div id="checkout">
            <a href="checkout.js">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buytickets;
