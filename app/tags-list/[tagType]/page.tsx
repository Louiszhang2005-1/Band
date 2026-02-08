"use client";

import Link from 'next/link';
import { useState, useEffect } from "react";
import 'chart.js/auto';
import { useParams } from 'next/navigation'

export default function() {
  const {tagType} = useParams();
  console.log(tagType);

    const [isMounted, setIsMounted] = useState(false);

    const pieData = {
          labels: ['Total','Net','Gross','AVG'],
          datasets: [{
            data: [40, 20, 30, 10],
            backgroundColor: [
              "#1F3BB3",
              "#FDD0C7",
              "#52CDFF",
              "#81DADA"
            ],
            borderColor: [
              "#1F3BB3",
              "#FDD0C7",
              "#52CDFF",
              "#81DADA"
            ],
          }]
        };
    

    const lineChartData = {
  labels:  ['Friday', 'Saturday', '12h', '8h', '4h', '1h', 'Now'],
  datasets: [
    {
      label: 'Morgue',
      data: [0, 200, 175, 150, 120, 80, 70],
      borderColor: 'rgb(105, 101, 102)',
      backgroundColor: 'rgb(105, 101, 102)',
    },
    {
      label: 'Immediate',
      data: [0, 300, 270, 220, 170, 130, 100],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgb(255, 99, 132)',
    },
     {
      label: 'Delayed',
      data: [0, 350, 300, 290, 270, 200, 180],
      borderColor: 'rgb(235, 205, 53)',
      backgroundColor: 'rgb(235, 205, 53)',
    },
    {
      label: 'Minor',
      data: [0, 250, 220, 200, 200, 180, 160],
      borderColor: '#94e0db',
      backgroundColor: '#94e0db',
    },
  ],
};
    
    useEffect(() => {
        setIsMounted(true);
      }, []);
    
      if (!isMounted) {
        return null;
      } else {
    return (
    <div className="container-scroller">
     {/*} <div className="row p-0 m-0 proBanner" id="proBanner">
        <div className="col-md-12 p-0 m-0">
          <div className="card-body card-body-padding px-3 d-flex align-items-center justify-content-between">
            <div className="ps-lg-3">
              <div className="d-flex align-items-center justify-content-between">
                <p className="mb-0 fw-medium me-3 buy-now-text">Free 24/7 customer support, updates, and more with this template!</p>
                <a href="https://www.bootstrapdash.com/product/star-admin-pro/" target="_blank" className="btn me-2 buy-now-btn border-0">Buy Now</a>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <a href="https://www.bootstrapdash.com/product/star-admin-pro/"><i className="ti-home me-3 text-white"></i></a>
              <button id="bannerClose" className="btn border-0 p-0">
                <i className="ti-close text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* partial:partials/_navbar.html */}
      <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
          <div className="me-3">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-bs-toggle="minimize">
              <span className="icon-menu"></span>
            </button>
          </div>
          <div>
            <a className="navbar-brand brand-logo" href="index.html">
              <img src="/custom/logo-project-mod.png" alt="logo" width="1500px"/>            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              <img src="images/logo-mini.svg" alt="logo" />
            </a>
          </div>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-top">
          <ul className="navbar-nav">
            <li className="nav-item fw-semibold d-none d-lg-block ms-0">
              <h1 className="welcome-text">Good Morning, <span className="text-black fw-bold">John Doe</span></h1>
              <h3 className="welcome-sub-text">Your Smart Triage Tag Dashboard.</h3>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown d-none d-lg-block">
              <a className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split" id="messageDropdown" href="#" data-bs-toggle="dropdown" >Incident 1 - Flooding</a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis fw-medium text-dark">Incident 2</p>
                    <p className="fw-light small-text mb-0">Fire Incident</p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis fw-medium text-dark">Incident 3</p>
                    <p className="fw-light small-text mb-0">Mass Shooting</p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis fw-medium text-dark">Incident 4</p>
                    <p className="fw-light small-text mb-0">Earthquake</p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item d-none d-lg-block">
              <div id="datepicker-popup" className="input-group date datepicker navbar-date-picker">
                <span className="input-group-addon input-group-prepend border-right">
                  <span className="icon-calendar input-group-text calendar-icon"></span>
                </span>
                <input type="text" className="form-control" defaultValue={`${new Date()}`}/>
              </div>
            </li>
            <li className="nav-item">
              <form className="search-form" action="#">
                <i className="icon-search"></i>
                <input type="search" className="form-control" placeholder="Search Here" title="Search here"/>
              </form>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                <i className="icon-bell"></i>
                <span className="count"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="notificationDropdown">
                <a className="dropdown-item py-3 border-bottom">
                  <p className="mb-0 fw-medium float-start">You have 4 new notifications </p>
                  <span className="badge badge-pill badge-primary float-end">View all</span>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-alert m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">Application Error</h6>
                    <p className="fw-light small-text mb-0"> Just now </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-lock-outline m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">Settings</h6>
                    <p className="fw-light small-text mb-0"> Private message </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item py-3">
                  <div className="preview-thumbnail">
                    <i className="mdi mdi-airballoon m-auto text-primary"></i>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject fw-normal text-dark mb-1">New user registration</h6>
                    <p className="fw-light small-text mb-0"> 2 days ago </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator" id="countDropdown" href="#" data-bs-toggle="dropdown" >
                <i className="icon-mail icon-lg"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="countDropdown">
                <a className="dropdown-item py-3">
                  <p className="mb-0 fw-medium float-start">You have 7 unread mails </p>
                  <span className="badge badge-pill badge-primary float-end">View all</span>
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face10.jpg" alt="image" className="img-sm profile-pic"/>
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis fw-medium text-dark">Marian Garner </p>
                    <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face12.jpg" alt="image" className="img-sm profile-pic"/>
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis fw-medium text-dark">David Grey </p>
                    <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img src="images/faces/face1.jpg" alt="image" className="img-sm profile-pic"/>
                  </div>
                  <div className="preview-item-content flex-grow py-2">
                    <p className="preview-subject ellipsis fw-medium text-dark">Travis Jenkins </p>
                    <p className="fw-light small-text mb-0"> The meeting is cancelled </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown d-none d-lg-block user-dropdown">
              <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" >
                <img className="img-xs rounded-circle" src="/images/faces/face8.jpg" alt="Profile image"/> </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                <div className="dropdown-header text-center">
                  <img className="img-md rounded-circle" src="/images/faces/face8.jpg" alt="Profile image"/>
                  <p className="mb-1 mt-3 fw-semibold">Allen Moreno</p>
                  <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
                </div>
                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i> Messages</a>
                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity</a>
                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i> FAQ</a>
                <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>Sign Out</a>
              </div>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-bs-toggle="offcanvas">
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
      </nav>
      {/* partial */}
      <div className="container-fluid page-body-wrapper">
        {/* partial:partials/_sidebar.html */}
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="mdi mdi-grid-large menu-icon"></i>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item nav-category">Tags List</li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#ui-basic"  aria-controls="ui-basic">
                <i className="menu-icon mdi mdi-floor-plan"></i>
                <span className="menu-title">Tags List</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className="nav-link" href="/tags-list/morgue">Morgue</Link></li>
                  <li className="nav-item"> <Link className="nav-link" href="/tags-list/immediate">Immediate</Link></li>
                  <li className="nav-item"> <Link className="nav-link" href="/tags-list/delayed">Delayed</Link></li>
                  <li className="nav-item"> <Link className="nav-link" href="/tags-list/minor">Minor</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
 <Link className="nav-link" href="/staff"  aria-controls="form-elements">
                <i className="menu-icon mdi mdi-card-text-outline"></i>
                <span className="menu-title">Registered Staff</span>
                {/*<i className="menu-arrow"></i>*/}
              </Link>
              {/*<div className="collapse" id="form-elements">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                </ul>
              </div>*/}
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#charts"  aria-controls="charts">
                <i className="menu-icon mdi mdi-chart-line"></i>
                <span className="menu-title">Charts</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="charts">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#tables"  aria-controls="tables">
                <i className="menu-icon mdi mdi-table"></i>
                <span className="menu-title">Tables</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Basic table</a></li>
                </ul>
              </div>
            </li>*/}
            <li className="nav-item">
              <Link className="nav-link"  href="/scan"  aria-controls="icons">
                <i className="menu-icon mdi mdi-layers-outline"></i>
                <span className="menu-title">Scan Bracelet</span>
                {/*<i className="menu-arrow"></i>*/}
              </Link>
              {/*<div className="collapse" id="icons">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
                </ul>
              </div>*/}
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" data-bs-toggle="collapse" href="#auth"  aria-controls="auth">
                <i className="menu-icon mdi mdi-account-circle-outline"></i>
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                </ul>
              </div>
            </li>*/}
            <li className="nav-item">
              <a className="nav-link" href="/about">
                <i className="menu-icon mdi mdi-file-document"></i>
                <span className="menu-title">About</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* partial */}
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-sm-12">
                <div className="home-tab">
                  <div className="d-sm-flex align-items-center justify-content-between border-bottom">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <Link className="nav-link ps-0" id="home-tab" href="/" role="tab" aria-controls="overview" aria-selected="true">Overview</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link active" id="profile-tab" href="/staff" role="tab" aria-selected="false">Registered Staff</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" id="contact-tab" href="scan" role="tab" aria-selected="false">Scan Bracelet</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link border-0" id="more-tab" href="about" role="tab" aria-selected="false">About</Link>
                      </li>
                    </ul>
                    <div>
                      <div className="btn-wrapper">
                        <a href="#" className="btn btn-otline-dark align-items-center"><i className="icon-share"></i> Share</a>
                        <a href="#" className="btn btn-otline-dark"><i className="icon-printer"></i> Print</a>
                        <a href="#" className="btn btn-primary text-white me-0"><i className="icon-download"></i> Export</a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content tab-content-basic">
                    <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="statistics-details d-flex align-items-center justify-content-between">
                            <div>
                              <p className="statistics-title">Morgue Tags</p>
                              <h3 className="rate-percentage">102</h3>
                              <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>-10.5%</span></p>
                            </div>
                            <div>
                              <p className="statistics-title">Immediate Tags</p>
                              <h3 className="rate-percentage">78</h3>
                              <p className="text-danger d-flex"><i className="mdi mdi-menu-up"></i><span>+7.1%</span></p>
                            </div>
                            <div>
                              <p className="statistics-title">Delayed Tags</p>
                              <h3 className="rate-percentage">145</h3>
                              <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>-7.13%</span></p>
                            </div>
                            <div className="d-none d-md-block">
                              <p className="statistics-title">Minor Tags</p>
                              <h3 className="rate-percentage">205</h3>
                              <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                            </div>
                            <div className="d-none d-md-block">
                              <p className="statistics-title">Tag Updated</p>
                              <h3 className="rate-percentage">7m:35s</h3>
                              <p className="text-danger d-flex"><i className="mdi mdi-menu-down"></i><span>68.8</span></p>
                            </div>
                            <div className="d-none d-md-block">
                              <p className="statistics-title">Avg. Time on Site</p>
                              <h3 className="rate-percentage">2m:35s</h3>
                              <p className="text-success d-flex"><i className="mdi mdi-menu-down"></i><span>+0.8%</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 d-flex flex-column">
                          {/*<div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                              <div className="card card-rounded">
                                <div className="card-body">
                                  <div className="d-sm-flex justify-content-between align-items-start">
                                    <div>
                                      <h4 className="card-title card-title-dash">Deployed Tags Overview</h4>
                                      <p className="card-subtitle card-subtitle-dash">Statistics about the tags currently used on the field.</p>
                                    </div>
                                    <div>
                                      <div className="dropdown">
                                        <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-haspopup="true" >Last 3 Days</button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                          <h6 className="dropdown-header">Settings</h6>
                                          <a className="dropdown-item" href="#">From Yesterday</a>
                                          <a className="dropdown-item" href="#">Last 24h</a>
                                          <a className="dropdown-item" href="#">Last 8h</a>
                                          <div className="dropdown-divider"></div>
                                          <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-sm-flex align-items-center mt-1 justify-content-between">
                                    <div className="d-sm-flex align-items-center mt-4 justify-content-between">
                                      <h2 className="me-2 fw-bold">457</h2>
                                      <h4 className="me-2">Units</h4>
                                      <h4 className="text-success">(-7.37%)</h4>
                                    </div>
                                    <div className="me-3">
                                      <div id="marketingOverview-legend"></div>
                                    </div>
                                  </div>
                                  <div className="chartjs-bar-wrapper mt-3">
                                   
                                   <Line options={{responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    }}}} data={lineChartData} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          <div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                              <div className="card card-rounded">
                                <div className="card-body">
                                  <div className="d-sm-flex justify-content-between align-items-start">
                                    <div>
                                      <h4 className="card-title card-title-dash">{tagType} Tags List</h4>
                                      <p className="card-subtitle card-subtitle-dash">In this page you can visualize & manage the list of {tagType} tags in the platform.</p>
                                    </div>
                                    <div>
                                      <button className="btn btn-primary btn-lg text-white mb-0 me-0" type="button"><i className="mdi mdi-plus"></i>Add new bacelet</button>
                                    </div>
                                  </div>
                                  <div className="table-responsive  mt-1">
                                    <table className="table select-table">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div className="form-check form-check-flat mt-0">
                                              <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" aria-checked="false" id="check-all"/><i className="input-helper"></i></label>
                                            </div>
                                          </th>
                                          <th>Tag</th>
                                          <th>Status</th>
                                          <th>Last TAG Signal</th>
                                          <th>Progress</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div className="form-check form-check-flat mt-0">
                                              <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" aria-checked="false"/><i className="input-helper"></i></label>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="d-flex ">
<img src="/custom/barcode-scan.png"   />                                           <div>
                                                <h6>UTX-000000</h6>
                                                <p>Bracelet Tag</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6>Active</h6>
                                            <p>My Organization</p>
                                          </td>
                                          <td>
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                <p className="text-success">79%</p>
                                                <p>85/162</p>
                                              </div>
                                              <div className="progress progress-md">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}}></div>
{/*                                                 <div className="progress-bar bg-success" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
*/}
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="badge badge-opacity-warning">In progress</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-check form-check-flat mt-0">
                                              <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" aria-checked="false"/><i className="input-helper"></i></label>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="d-flex">
<img src="/custom/barcode-scan.png"   />                                              <div>
                                                <h6>UTX-000001</h6>
                                                <p>Bracelet Tag</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6>Active</h6>
                                            <p>My Organization</p>
                                          </td>
                                          <td>
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                <p className="text-success">65%</p>
                                                <p>85/162</p>
                                              </div>
                                              <div className="progress progress-md">
                                                <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}}></div>
{/*                                                 <div className="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
*/}                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="badge badge-opacity-warning">In progress</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-check form-check-flat mt-0">
                                              <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" aria-checked="false"/><i className="input-helper"></i></label>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="d-flex">
<img src="/custom/barcode-scan.png"   />                                              <div>
                                                <h6>UTX-000002</h6>
                                                <p>Bracelet Tag</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6>Active</h6>
                                            <p>My organization</p>
                                          </td>
                                          <td>
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                <p className="text-success">65%</p>
                                                <p>85/162</p>
                                              </div>
                                              <div className="progress progress-md">
                                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '38%'}}></div>
{/*                                                <div className="progress-bar bg-warning" role="progressbar" style="width: 38%" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"></div>
*/}                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="badge badge-opacity-warning">In progress</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-check form-check-flat mt-0">
                                              <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" aria-checked="false"/><i className="input-helper"></i></label>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="d-flex">
<img src="/custom/barcode-scan.png"   />                                              <div>
                                                <h6>UTX-000003</h6>
                                                <p>Bracelet Tag</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6>Active</h6>
                                            <p>My organization</p>
                                          </td>
                                          <td>
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                <p className="text-success">65%</p>
                                                <p>85/162</p>
                                              </div>
                                              <div className="progress progress-md">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{width: '15%'}} ></div>
{/*                                                 <div className="progress-bar bg-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
*/}                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="badge badge-opacity-danger">Not Scanned Yet</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>
                                            <div className="form-check form-check-flat mt-0">
                                              <label className="form-check-label">
                                                <input type="checkbox" className="form-check-input" aria-checked="false"/><i className="input-helper"></i></label>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="d-flex">
<img src="/custom/barcode-scan.png"   />                                              <div>
                                                <h6>UTX-000005</h6>
                                                <p>Bracelet Tag</p>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <h6>Active</h6>
                                            <p>My organization</p>
                                          </td>
                                          <td>
                                            <div>
                                              <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                                                <p className="text-success">65%</p>
                                                <p>85/162</p>
                                              </div>
                                              <div className="progress progress-md">
                                                {/*<div className="progress-bar bg-success" role="progressbar" style="width: 65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
*/}                                                <div className="progress-bar bg-success" role="progressbar" style={{width: '65%'}}></div>
                                              </div>
                                            </div>
                                          </td>
                                          <td>
                                            <div className="badge badge-opacity-success">Resolved</div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column">
                          <div className="row flex-grow">
                            <div className="col-16 grid-margin stretch-card">
                              <div className="card card-rounded">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-16">
                                      <div className="d-flex justify-content-between align-items-center">
                                        <h4 className="card-title card-title-dash">New Tag Activities</h4>
                                        <div className="add-items d-flex mb-0">
                                          {/* <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?"> */}
                                          <button className="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p"><i className="mdi mdi-help"></i></button>
                                        </div>
                                      </div>
                                      <div className="list-wrapper">
                                        <ul className="todo-list todo-list-rounded">
                                          <li className="d-block">
                                            <div className="form-check w-100">
                                              <label className="form-check-label">
                                                <input className="checkbox" type="checkbox"/>Doctor Laura have labeled a new patient tag.<i className="input-helper rounded"></i>
                                              </label>
                                              <div className="d-flex mt-2">
                                                <div className="ps-4 text-small me-3">3min ago</div>
                                                <div className="badge badge-opacity-warning me-3">Delayed</div>
                                                <i className="mdi mdi-flag ms-2 flag-color"></i>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="d-block">
                                            <div className="form-check w-100">
                                              <label className="form-check-label">
                                                <input className="checkbox" type="checkbox"/>Nurse Ray have resolved a new patient tag.<i className="input-helper rounded"></i>
                                              </label>
                                              <div className="d-flex mt-2">
                                                <div className="ps-4 text-small me-3">7min ago</div>
                                                <div className="badge badge-opacity-success me-3">Minor</div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="form-check w-100">
                                              <label className="form-check-label">
                                                <input className="checkbox" type="checkbox"/>Nurse Maria have updated a new patient tag.<i className="input-helper rounded"></i>
                                              </label>
                                              <div className="d-flex mt-2">
                                                <div className="ps-4 text-small me-3">15min ago</div>
                                                <div className="badge badge-opacity-success me-3">Minor</div>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="form-check w-100">
                                              <label className="form-check-label">
                                                <input className="checkbox" type="checkbox"/>Doctor Michael have labeled a new patient tag.<i className="input-helper rounded"></i>
                                              </label>
                                              <div className="d-flex mt-2">
                                                <div className="ps-4 text-small me-3">25min ago</div>
                                                <div className="badge badge-opacity-danger me-3">Immediate</div>
                                                                                              <i className="mdi mdi-flag ms-2 flag-color"></i>
                                              </div>
                                            </div>
                                          </li>
                                          <li>
                                            <div className="form-check w-100">
                                              <label className="form-check-label">
                                                <input className="checkbox" type="checkbox"/>Nurse Maria have resolved a new patient tag.<i className="input-helper rounded"></i>
                                              </label>
                                              <div className="d-flex mt-2">
                                                <div className="ps-4 text-small me-3">30min ago</div>
                                                <div className="badge badge-opacity-success me-3">Minor</div>
                                              </div>
                                            </div>
                                          </li>
                                          <li className="border-bottom-0">
                                            <div className="form-check w-100">
                                              <label className="form-check-label">
                                                <input className="checkbox" type="checkbox"/>Doctor Luke have tagged a new patient.<i className="input-helper rounded"></i>
                                              </label>
                                              <div className="d-flex mt-2">
                                                <div className="ps-4 text-small me-3">30min ago</div>
                                                <div className="badge badge-opacity-danger me-3">Imediate</div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*<div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                              <div className="card card-rounded">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="card-title card-title-dash">Type By Amount</h4>
                                      </div>
                                      <div>
                                        <Pie
        data={pieData}
        options={{
          cutout: 70,
          responsive: true,
          maintainAspectRatio: true,
          animation: {
            animateScale: true
          }
        }}
      />
                                      </div>
                                      <div id="doughnutChart-legend" className="mt-5 text-center"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>*/}
                          {/*<div className="row flex-grow">
                            <div className="col-12 grid-margin stretch-card">
                              <div className="card card-rounded">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-lg-12">
                                      <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                          <h4 className="card-title card-title-dash">Leave Report</h4>
                                        </div>
                                        <div>
                                          <div className="dropdown">
                                            <button className="btn btn-light dropdown-toggle toggle-dark btn-lg mb-0 me-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-haspopup="true" > Month Wise </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                              <h6 className="dropdown-header">week Wise</h6>
                                              <a className="dropdown-item" href="#">Year Wise</a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="mt-3">
                                        <canvas id="leaveReport"></canvas>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>*/}
                          <div className="row flex-grow">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* content-wrapper ends */}
          {/* partial:partials/_footer.html */}
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Premium <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a> from BootstrapDash.</span>
              <span className="float-none float-sm-end d-block mt-1 mt-sm-0 text-center">Copyright © 2023. All rights reserved.</span>
            </div>
          </footer>
          {/* partial */}
        </div>
        {/* main-panel ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>

    );}}