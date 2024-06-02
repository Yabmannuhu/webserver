
import './App.css';
import React, { StrictMode } from 'react';
import logo from "./logo.png";


function  User() {
  return (

    <div id="home" className="active">
    <header>
      <img src="profile.png" className="rounded-circle " height="50" alt="Cinque Terre" />
      <div className="offcanvas offcanvas-start" id="demo">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Profile</h1>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          <header>
            <h1>welcome ${Yabman}</h1>
            <img className="mb-4" src="profile.png" alt="" width="72" height="57" style="border-radius: 150px; border-top: 20px;" />
            <div>
              <p>Name</p>
              <p>Id</p>

            </div>
            <div>
              <p>Avail balance:<span>50$</span></p>
              <select className="form-select">
                <option>usd</option>
                <option>naira</option>
              </select>
              <div className="btn-group btn-group-sm">
                <button className="btn btn-success"> Transfer</button><button className="btn btn-success"> Withdraw</button><button className="btn btn-success"> Deposit</button>
              </div>
              <div id="tranfer">

              </div>
              <div id="withdraw">


              </div>
              <div id="Deposit">

              </div>
            </div>
            <input className="form-control" type="file" placeholder="upload your photo" accept="/img" />
          </header>
          <div>
            <p>Name:</p><span></span>
            <p>Phone:</p><span></span>
            <p>E-mail address:</p><span></span>
            <p> Country:</p><span></span>
            <p>State:</p><span></span>
            <p>Town:</p><span></span>
            <p> Town address:</p><span></span>
          </div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
            Edit
          </button>


        </div>
      </div>
      <div className="modal fade" id="exampleModalCenteredScrollable" tabindex="-1" aria-labelledby="exampleModalCenteredScrollableTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalCenteredScrollableTitle">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="">
                <form id="editForm">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required /><br />

                  <label for="email">Phone:</label>
                  <input type="email" id="email" name="email" required /><br />

                  <label for="email">E-mail:</label>
                  <input type="text" id="email" name="email" required /><br />

                  <label for="country">country:</label>
                  <input type="text" id="country" name="country" required /><br />

                  <label for="state">State:</label>
                  <input type="text" id="state" name="state" required /><br />

                  <label for="town">Town:</label>
                  <input type="text" id="town" name="town" required /><br />

                  <label for="address">Town address:</label>
                  <input type="text" id="address" name="address" required /><br />


                  <input type="hidden" id="entryId" name="entryId" />
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </div>


        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
          <aside>Name</aside>
        </button>
      </header>
    <div className="mt-3 mb-3 p-2">
      <button id="setup" className="btn btn-primary active" onclick="showcontent()" style=" background-color:rgba(7, 255, 44, 0.868) ;color: black; border-color:rgba(7, 255, 44, 0.868)  ;" data-bs-toggle="tooltip" title="double click">Finish set up your account</button>
    </div>
    <div id="content" className="mt-4 p-5  text-dark rounded">
      <form action="" method="post">
        <div className="mb-3 mt-3">
          <label className="form-label form-label-lg" style="font-size: large;">What is your business type ?</label>
          <span id="rep"></span>
          <select id="userbuns" className="form-select form-select-lg"><option value="null">Choose here</option>
            <option value="producer">Producer only</option>
            <option value="wholesaler">Wholesaler only</option>
            <option value="Retailer">Retailer only</option>
            <option value="producer&wholesaler"> Producer & Wholesaler</option>
            <option value="wholesaler&retailer">Wholesaler & Retailer</option><option value="p,w&r">Producer,Wholesaler & Ratailer</option>
            <option value="cons">Consumer/Buyer only</option>
          </select>
          <button onclick="consumer()" className="btn btn-success">Submit</button>

        </div>
      </form>
      <form action='' method=''>
        <div id="consumer">
          <div className="mb-3 ">
            <label className="form-label" style="font-size: large;">what product are you interest of selling ?</label>
            <select className="form-select"><option>Choose here</option>
              <option>Electronics devices products</option>
              <option>kitchen Utensils products</option>
              <option>Agricultural products</option>
              <option data-bs-toggle="collapse" data-bs-target="#demo">other</option>
            </select>
          </div>
          <label for="other" id="demo" className="form-label collapse"><input className="form-control" type="text" placeholder="If other?please specify" /></label>
          <button onclick="showmore()" className="btn btn-success">Submit</button>

        </div>
      </form>
      <form action='' method=''>
        <div id="more" className="collapse mt-4 p-5  text-dark rounded">
          <h3>Before we activate your account for selling products first you need to;</h3>
          <div className="input-group mt-3 mb-3">
            <label for="Id" className="form-label" style="font-size: large;">Please provide your Id</label>
            <select className="form-select"><option>Choose here</option>
              <option>BVN</option>
              <option>Driver License</option>
              <option>National Id</option>
              <option>SSN</option>
            </select>
            <input type="digit" className="form-control" placeholder="Id digits" required />
          </div>
          <label className="form-label" style="font-size: large;">Upload your ID photo or snap and send</label>
          <input className="form-control" type="file" accept="/img " required />
          <button type="submit" onclick="show()" className="btn btn-success">verify</button>
        </div>
      </form>
      <form action='' method=''>
        <div className="mt-4 p-5  text-dark rounded" id="cont">
          <span style="color: green; font-size:20px;">Thank you for providing us with your information, while you wait for us to review your information <b style="color: black;">24hr</b>before we accept your request of becoming a seller </span>
        </div>
      </form>
      <div className="" id="content">
        <section>All your sell product here <a href="selller.html">Add Sell product</a></section>
        <hr />
      </div>
      <div>
        <section>All your buy products here <button onclick="showpage('market')" className="btn  btn-light">go to marketplace to purchase a goods</button></section>
      </div>
    </div>
  </div>


      );
  }


function Market() {

  return (

    <div id="market" className="page">
    <div className="mt-4 p-5  text-dark rounded">
      <div className="input-group mt-3 mb-3">
        <label for="country">country</label>
        <select className="form-select">
          <option>Select here</option>
          <option>Nigeria</option><option>Ghana</option><option>USA</option><option>UK</option><option>China</option>
        </select>
        <label for="state">state</label>
        <select className="form-select">
          <option>Select here</option>
          <option>kaduna</option><option>ibadan</option><option>kano</option><option>lagos</option><option>abuja</option>
        </select>
        <label className="form-label">address</label>
        <input className="form-control" type="text" />
      </div>
    </div>
    <main>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <a href="buyer.html" style="text-decoration: none;"><div className="card shadow-sm">
                <p className="pcapital" style="font-weight: bold;">Market name</p>
                <span style="font-weight: bold;">market type</span>
                <p style="font-weight: bold;">product name</p>
                <img src="16326.jpg" alt="cloud" className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" id="products" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" onclick="buyer.html" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Disconnect</button>
                      <button type="button" onclick="buyer.html" className="btn btn-sm btn-outline-secondary">Review</button>
                      <button type="button" onclick="buyer.html" className="btn btn-sm btn-outline-secondary">Rating</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>

    </main>
    <hr/>
      <h2>Suggestion</h2>
      <div>
      <main>

           <div className="album py-5 bg-body-tertiary">
                <div className="container">

                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                      <a href="buyer.html" style="text-decoration: none;"><div className="card shadow-sm">
                        <p className="pcapital" style="font-weight: bold;">Market name</p>
                        <span style="font-weight: bold;">market type</span>
                        <p style="font-weight: bold;">product name</p>
                        <img src="16326.jpg" alt="cloud" className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" id="products" />
                        <div className="card-body">
                          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <button type="button" onclick="buyer.html" className="btn btn-sm btn-outline-secondary">View</button>
                              <button type="button" className="btn btn-sm btn-outline-secondary">connect</button>
                              <button type="button" onclick="buyer.html" className="btn btn-sm btn-outline-secondary">Review</button>
                              <button type="button" onclick="buyer.html" className="btn btn-sm btn-outline-secondary">Rating</button>
                            </div>
                            <small className="text-body-secondary">9 mins</small>
                          </div>
                        </div>
                      </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </main>
  </div>
  </div>


    
     );
   }

function Notification() {

  return (
    <div id="nofication" className="page">

    <div>
      <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 380px;">
        <a href="/" className="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">

          <span className="fs-5 fw-semibold"><input type="search"/><button className="btn-bd-primary">search</button> </span>
        </a>
        <div className="list-group list-group-flush border-bottom scrollarea">
          <a href="#" className="list-group-item list-group-item-action active py-3 lh-sm" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small>Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>

          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm" aria-current="true">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Wed</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Tues</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
          <a href="#" className="list-group-item list-group-item-action py-3 lh-sm">
            <div className="d-flex w-100 align-items-center justify-content-between">
              <strong className="mb-1">List group item heading</strong>
              <small className="text-body-secondary">Mon</small>
            </div>
            <div className="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div>
          </a>
        </div>
      </div>

    </div>



  </div>
    
    
  );
    }

function Message() {

  return (
    <div id="message" className="page">
    <div className="chat-container">
      <div className="chat-contacts">
        <a href="chatbody.html"><h1>Chat Contacts</h1></a>
        <ul id="contact-list">

        </ul>
      </div>
    </div>
    </div>
    
  );
    }

function Setting() {
  return (

    <div id="setting" className="page ">
    <h2>General settings</h2>
    <div className="">
      <button className="btn btn-primary">invite a friend</button>
      <p>Change background color
        <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          id="bd-theme"
          type="button"
          aria-expanded="false"
          data-bs-toggle="dropdown">
          <svg className="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#circle-half"></use></svg>
          <span className="visually-hidden" id="bd-theme-text">Toggle theme</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
          <li>
            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
              <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#sun-fill"></use></svg>
              Light
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>

          </li>
          <li>
            <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
              <svg className="bi me-2 opacity-50 theme-icon" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
              Dark
              <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
            </button>
          </li>

        </ul>

      </p>
      <label className="form-label">Change language<select className="form-select"><option>English USA</option><option>English UK</option><option>France</option><option>Hausa</option><option>Yuroba</option><option>Igbo</option></select><button>Save</button></label>
      <p>Change password
        <div className="input-group">
          <input className="form-control" type="password" placeholder="old password" required />
          <input className="form-control" type="password" placeholder="New password" required />
          <input className="form-control" type="password" placeholder="Confirm password" required /><button className="btn btn-success">Validate</button>
        </div>
      </p>
      <p>Change Transaction Pin
        <div className="">
          <input className="form-control" type="password" placeholder="old transaction pin" required />
          <input className="form-control" type="password" placeholder="New transaction pin" required />
          <input className="form-control" type="password" placeholder="Confirm transaction pin" required /><button className="btn btn-success">Validate</button>
        </div>
      </p>
    </div>
    <div>
              <nav className="navbar-nav" id="">
                <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Terms&Condition</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Report Abuse</a></li>
                 </ul>
               </nav>
          </div>
          <div>
          <button className="btn btn-danger">Log out</button>
        </div>
    </div>
    


    
  );
    }



    function Dashboard(){ 

    return (
      <StrictMode>
        <User/>
        <Message/>
        <Market/>
       <Notification/>
       <Setting/>
      </StrictMode>
  );
}

export default Dashboard;