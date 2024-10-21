import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div className="hom-head" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/wwwroot/images/3261288129ex2.jpg)` }} >
            <div className="hom-top">
              <div className="container">
                <div className="row">
                  <div className="hom-nav ">
                    <a href="index.html" className="top-log">
                    {/* src={`${process.env.PUBLIC_URL}/wwwroot/assets/img/logo.webp`} */}
                      <img
                      src={`${process.env.PUBLIC_URL}/wwwroot/images/home/179083357bizbook-white.png`}
                       
                        style={{ width: '192px', height: 'auto' }} alt="" className="ic-logo" /></a>
                    <div className="menu">
                      <h4>Explore</h4>
                    </div>
                    <div className="pop-menu">
                      <div className="container">
                        <div className="row">
                          <i className="material-icons clopme">close</i>
                          <div className="pmenu-spri">
                            <ul>
                              <li><a href="all-category.html" className="act"><img  src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/shop.png`}/>All Services </a></li>
                              <li><a href="ads/index.html" className="act"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/ads.png`} />Classifieds Ads   </a></li>
                              <li><a href="service-experts/index.html" className="act"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/expert.png`}/>Service Experts  </a></li>
                              <li><a href="jobs/index.html" className="act"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/employee.png`} />Jobs  </a></li>
                              <li><a href="places/index.html" className="act"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/hot-air-balloon.png`}/>Explore Travel  </a></li>
                              <li><a href="news/index.html"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/news.png`} />News & Magazines    </a></li>
                              <li><a href="events.html"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/calendar.png`} />Events    </a></li>
                              <li><a href="all-products.html"><img  src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/cart.png`}/>Products     </a></li>
                              <li><a href="coupons.html"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/coupons.png`}/>Coupon & deals    </a></li>
                              <li><a href="blog-posts.html"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/blog1.png`}/>Blogs  </a></li>
                              <li><a href="community.html"><img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/11.png`} />Community    </a></li>
                            </ul>
                          </div>
                          <div className="pmenu-cat">
                            <h4>All Categories</h4>
                            <input type="text" id="pg-sear" placeholder="Search category"/>
                              <ul id="pg-resu">
                                <li>
                                  <a href="all-listing/automobiles.html">Automobiles&nbsp;-&nbsp;<span>04</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/hospitals.html">Hospitals&nbsp;-&nbsp;<span>05</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/restaurants.html">Restaurants&nbsp;-&nbsp;<span>05</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/real-estate.html">Real Estate&nbsp;-&nbsp;<span>25</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/transportation.html">Transportation&nbsp;-&nbsp;<span>08</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/electricals.html">Electricals&nbsp;-&nbsp;<span>03</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/education.html">Education&nbsp;-&nbsp;<span>00</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/technology.html">Technology&nbsp;-&nbsp;<span>06</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/sports.html">Sports&nbsp;-&nbsp;<span>00</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/wedding-halls.html">Wedding halls&nbsp;-&nbsp;<span>07</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/pet-shop.html">Pet shop&nbsp;-&nbsp;<span>02</span></a>
                                </li>
                                <li>
                                  <a href="all-listing/spa-and-facial.html">Spa and Facial&nbsp;-&nbsp;<span>04</span></a>
                                </li>
                              </ul>
                          </div>
                          <div className="dir-home-nav-bot">
                            <ul>
                              <li>A few reasons you’ll love Online Business Directory                                                    <span>Call us on: +01 6214 6548</span></li>
                              <li><a href="post-your-ads.html"
                                className="waves-effect waves-light btn-large"><i className="material-icons">font_download</i> Advertise with us                                                    </a>
                              </li>
                              <li><a href="pricing-details.html"
                                className="waves-effect waves-light btn-large"> <i className="material-icons">store</i> Add your business                                                    </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  

                    <div className="top-ser">
                      <form name="filter_form" id="filter_form" className="filter_form">
                        <ul>
                          <li className="sr-sea">
                            <input type="text" autocomplete="off" id="top-select-search"
                              placeholder="What are you looking for?"/>
                              <ul id="tser-res1" className="tser-res tser-res2">
                                <li>
                                  <div><h4>New year 2022 celebration started</h4><span>New year 2022, event booking, hotel booking and more</span><a href="event/light-music-event-2022.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Home cleaning services near you</h4><span>Home cleaning, pet control and more</span><a href="all-service-experts/house-cleaning-service.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Software jobs waiting for you</h4><span>Jobs in New york, High pay salary</span><a href="all-jobs/software.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Spa Center For Womens</h4><span>No:2, 4th Avenue, Newyork, USA, Near to Airport</span><a href="all-listing/spa-and-facial.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Online classes for School Students</h4><span>Schools, university, colleges, online classes, tution centers, distance education..</span><a href="listing/niil-institute-of-technology.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Buy Iphone13 Pro now</h4><span>Iphone 13, 12, 11 and all apple product available</span><a href="product/apple-iphone-12--blue--128-gb.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Best AC Service Expert near you</h4><span>Service expert, ac service, ac service in new york</span><a href="all-service-experts/ac-services.html"></a>
                                  </div>
                                </li>
                                <li>
                                  <div><h4>Now easy to buy Villas, Plots and Flats</h4><span>New york City</span><a href="all-listing/real-estate.html"></a>
                                  </div>
                                </li>
                              </ul>
                          </li>

                          <li className="sbtn">
                            <button type="button" className="btn btn-success" id="top_filter_submit"><i
                              className="material-icons">&nbsp;</i></button>
                          </li>
                        </ul>
                      </form>
                    </div>
                    <ul className="bl">
                      <li>
                        <a href="pricing-details.html">Add business</a>
                      </li>
                      <li>
                        <a href="login.html">Sign in</a>
                      </li>
                      <li>
                        <a href="login3d2e.html?login=register">Create an account</a>
                      </li>
                    </ul>
                  
                    <div className="mob-menu">
                      <div className="mob-me-ic"><i className="material-icons">menu</i></div>
                      <div className="mob-me-all">
                        <div className="mob-me-clo"><i className="material-icons">close</i></div>
                        <div className="mv-bus">
                          <h4></h4>
                          <ul>
                            <li>
                              <a href="pricing-details.html">Add business</a>
                            </li>
                            <li>
                              <a href="login.html">Sign in</a>
                            </li>
                            <li>
                              <a href="login3d2e.html?login=register">Create an account</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mv-cate">
                          <h4>All Categories</h4>
                          <ul>
                            <li>
                              <a href="all-listing/automobiles.html">Automobiles</a>
                            </li>
                            <li>
                              <a href="all-listing/hospitals.html">Hospitals</a>
                            </li>
                            <li>
                              <a href="all-listing/restaurants.html">Restaurants</a>
                            </li>
                            <li>
                              <a href="all-listing/real-estate.html">Real Estate</a>
                            </li>
                            <li>
                              <a href="all-listing/transportation.html">Transportation</a>
                            </li>
                            <li>
                              <a href="all-listing/electricals.html">Electricals</a>
                            </li>
                            <li>
                              <a href="all-listing/education.html">Education</a>
                            </li>
                            <li>
                              <a href="all-listing/technology.html">Technology</a>
                            </li>
                            <li>
                              <a href="all-listing/sports.html">Sports</a>
                            </li>
                            <li>
                              <a href="all-listing/wedding-halls.html">Wedding halls</a>
                            </li>
                            <li>
                              <a href="all-listing/pet-shop.html">Pet shop</a>
                            </li>
                            <li>
                              <a href="all-listing/spa-and-facial.html">Spa and Facial</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="ban-tit">
                  <h1>
                    <b>Find your <span>Local needs <i></i></span></b> Restaurants, cafe's, and bars in New york                                                            </h1>
                </div>
                <div className="ban-search ban-sear-all">
                  <form name="filter_form" id="filter_form" className="filter_form">
                    <ul>
                      <li className="sr-cate">
                        <select onChange="getSearchCategories(this.value);" name="explor_select"
                          id="explor_select" className="chosen-select">
                          <option value="">Select Services</option>
                          <option value="1">All Services</option>
                          <option value="2">Service Experts</option>
                          <option value="3">Jobs</option>
                          <option value="4">Explore Travel</option>
                          <option value="5">News & Magazines</option>
                          <option value="6">Events</option>
                          <option value="7">Products</option>
                          <option value="8">Coupon & deals</option>
                          <option value="9">Blogs</option>
                          <option value="10">Classifieds Ads</option>
                        </select>
                      </li>
                      <li className="sr-cit">
                        <select id="city_check" name="city_check" className="chosen-select">
                          <option value="">Select City</option>
                          <option value="new-york">New York</option>
                          <option value="illunois-city">Illunois city</option>
                          <option value="seattle">Seattle</option>
                          <option value="atlanta">Atlanta</option>
                          <option value="chennai">Chennai</option>
                          <option value="chennai-2">Chennai 2</option>
                        </select>
                      </li>
                      <li className="sr-nor">
                        <select className="chosen-select" id="expert-select-search"
                          name="expert-select-search">
                          <option value="">What are you looking for?</option>
                          <option
                            value="Automobiles">Automobiles</option>
                          <option
                            value="Hospitals">Hospitals</option>
                          <option
                            value="Restaurants">Restaurants</option>
                          <option
                            value="Real Estate">Real Estate</option>
                          <option
                            value="Transportation">Transportation</option>
                          <option
                            value="Electricals">Electricals</option>
                          <option
                            value="Education">Education</option>
                          <option
                            value="Technology">Technology</option>
                          <option
                            value="Sports">Sports</option>
                          <option
                            value="Wedding halls">Wedding halls</option>
                          <option
                            value="Pet shop">Pet shop</option>
                          <option
                            value="Spa and Facial">Spa and Facial</option>
                        </select>
                      </li>
                      <li className="sr-sea">
                        <input type="text" autocomplete="off" id="select-search"
                          placeholder="What are you looking for?"
                          className="search-field"/>
                          <ul id="tser-res" className="tser-res tser-res1">
                            <li>
                              <div>
                                <h4>New year 2022 celebration started</h4>
                                <span>New year 2022, event booking, hotel booking and more</span>
                                <a href="event/light-music-event-2022.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Home cleaning services near you</h4>
                                <span>Home cleaning, pet control and more</span>
                                <a href="all-service-experts/house-cleaning-service.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Software jobs waiting for you</h4>
                                <span>Jobs in New york, High pay salary</span>
                                <a href="all-jobs/software.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Spa Center For Womens</h4>
                                <span>No:2, 4th Avenue, Newyork, USA, Near to Airport</span>
                                <a href="all-listing/spa-and-facial.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Online classes for School Students</h4>
                                <span>Schools, university, colleges, online classes, tution centers, distance education..</span>
                                <a href="listing/niil-institute-of-technology.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Buy Iphone13 Pro now</h4>
                                <span>Iphone 13, 12, 11 and all apple product available</span>
                                <a href="product/apple-iphone-12--blue--128-gb.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Best AC Service Expert near you</h4>
                                <span>Service expert, ac service, ac service in new york</span>
                                <a href="all-service-experts/ac-services.html"></a>
                              </div>
                            </li>
                            <li>
                              <div>
                                <h4>Now easy to buy Villas, Plots and Flats</h4>
                                <span>New york City</span>
                                <a href="all-listing/real-estate.html"></a>
                              </div>
                            </li>
                          </ul>
                      </li>
                      <li className="sr-btn">
                        <input type="submit" id="filter_submit" name="filter_submit"
                          value="Search" className="filter_submit"/>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="ban-short-links">
                  <ul>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/shop.png`} alt=""/>
                          <h4>All Services</h4>
                          <a href="all-category.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/ads.png`} alt=""/>
                          <h4>Classifieds Ads</h4>
                          <a href="ads/index.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/expert.png`} alt=""/>
                          <h4>Experts</h4>
                          <a href="service-experts/index.html"
                            className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/employee.png`} alt=""/>
                          <h4>Jobs</h4>
                          <a href="jobs/index.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/places/icons/hot-air-balloon.png`}
                          alt=""/>
                          <h4>Travel</h4>
                          <a href="places/index.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/news.png`} alt=""/>
                          <h4>News</h4>
                          <a href="news/index.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/calendar.png`} alt=""/>
                          <h4>Events</h4>
                          <a href="events.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/cart.png`} alt=""/>
                          <h4>Products</h4>
                          <a href="all-products.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/coupons.png`} alt=""/>
                          <h4>Coupons</h4>
                          <a href="coupons.html" className="fclick"></a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src={`${process.env.PUBLIC_URL}/wwwroot/images/icon/blog1.png`} alt=""/>
                          <h4>Blogs</h4>
                          <a href="blog-posts.html" className="fclick"></a>
                      </div>
                    </li>
                  </ul>
                </div>
               
               
                <div className="h2-ban-ql">
                  <ul>
                    <li>
                      <div>
                        <img src="images/icon/listing.png" alt=""/>
                          <h5><span className="count1">12</span>All Services</h5>
                          <a href="all-category.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/expert.png" alt=""/>
                          <h5><span
                            className="count1">12</span>Service Experts                                            </h5>
                          <a href="service-experts/index.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/employee.png" alt=""/>
                          <h5>
                            <span className="count1">12</span>Jobs                                            </h5>
                          <a href="jobs/index.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/shop.png" alt=""/>
                          <h5><span
                            className="count1">18</span>Products                                            </h5>
                          <a href="all-products.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/event.png" alt=""/>
                          <h5><span
                            className="count1">26</span>Events                                            </h5>
                          <a href="events.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/coupons.png" alt=""/>
                          <h5><span
                            className="count1">11</span>Coupons                                            </h5>
                          <a href="coupons.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/blog.png" alt=""/>
                          <h5><span
                            className="count1">20</span>Blogs                                            </h5>
                          <a href="blog-posts.html">&nbsp;</a>
                      </div>
                    </li>
                    <li>
                      <div>
                        <img src="images/icon/general.png" alt="" />
                        <h5><span
                          className="count1">369</span>Community                                        </h5>
                        <a href="community.html">&nbsp;</a>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="bg">&nbsp;</span>
      <div class="ban-ql">
<div class="container">
            <div class="row">
                            <ul>
                                                                    <li>
                                        <div>
                                            <img
                                                src="images/icon/1.png"
                                                alt=""/>
                                            <h4>24 Million Business</h4>
                                            <p>Choose from a collection of handpicked luxury villas & apartments</p>
                                            <a href="all-category.html">Explore Now</a>
                                        </div>
                                    </li>
                                                                        <li>
                                        <div>
                                            <img
                                                src="images/icon/2.png"
                                                alt=""/>
                                            <h4>500+ Service Experts</h4>
                                            <p>Are you looking for the best Service Expert? We make it easy to hire the right professional

</p>
                                            <a href="service-experts/index.html">Book Expert Now</a>
                                        </div>
                                    </li>
                                                                        <li>
                                        <div>
                                            <img
                                                src="images/icon/3.png"
                                                alt=""/>
                                            <h4>Find Your Next Job Now</h4>
                                            <p>Search latest job openings online including IT, Sales, Banking, Fresher, Walk-ins, Part-time & more</p>
                                            <a href="jobs/index-2.html">Find you Job</a>
                                        </div>
                                    </li>
                                                                        <li>
                                        <div>
                                            <img
                                                src="images/icon/4.png"
                                                alt=""/>
                                            <h4>Sell & Buy Product Online</h4>
                                            <p>Bizbook Online store. Everything you need to sell & buy online.
</p>
                                            <a href="all-products.html">Start Selling Online</a>
                                        </div>
                                    </li>
                                    
                            </ul>

                        </div>
                        </div>
                        </div>

    </>
  );
}

export default App;
