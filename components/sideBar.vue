<template>
    <div id="aside" class="page-sidenav no-shrink bg-light nav-dropdown fade sticky" aria-hidden="true"
            data-class="bg-light">
            <div class="sidenav h-100 modal-dialog bg-light">
                <div class="navbar">
                    <a href="index.html" class="navbar-brand" data-pjax-state=""><svg width="32" height="32"
                            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <g class="loading-spin" style="transform-origin: 256px 256px">
                                <path
                                    d="M200.043 106.067c-40.631 15.171-73.434 46.382-90.717 85.933H256l-55.957-85.933zM412.797 288A160.723 160.723 0 0 0 416 256c0-36.624-12.314-70.367-33.016-97.334L311 288h101.797zM359.973 134.395C332.007 110.461 295.694 96 256 96c-7.966 0-15.794.591-23.448 1.715L310.852 224l49.121-89.605zM99.204 224A160.65 160.65 0 0 0 96 256c0 36.639 12.324 70.394 33.041 97.366L201 224H99.204zM311.959 405.932c40.631-15.171 73.433-46.382 90.715-85.932H256l55.959 85.932zM152.046 377.621C180.009 401.545 216.314 416 256 416c7.969 0 15.799-.592 23.456-1.716L201.164 288l-49.118 89.621z">
                                </path>
                            </g>
                        </svg>
                        <span class="hidden-folded d-inline l-s-n-1x">Basik</span></a>
                </div>
                <div class="flex scrollable hover">
                    <div class="nav-active-text-primary" data-nav="">
                        <ul class="nav bg">
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Main</span>
                            </li>
                            <li class="active">
                                <NuxtLink to="/nav/main/dashboard">
                                    <span class="nav-icon text-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-home">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg></span>
                                    <span class="nav-text">Dashboard</span>
                                </NuxtLink>
                            </li>
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Applications</span>
                            </li>
                            <li>
                                <NuxtLink to="/nav/application/calender">
                                    <span class="nav-icon text-info"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-calendar">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg></span>
                                    <span class="nav-text">Calendar</span>
                                    <span class="nav-badge"><b class="badge-circle xs text-danger"></b></span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/nav/application/user"><span class="nav-icon text-success"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-users">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg></span>
                                    <span class="nav-text">Users</span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/nav/application/message"><span class="nav-icon text-warning"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-message-circle">
                                            <path
                                                d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg></span>
                                    <span class="nav-text">Messages</span>
                                    <span class="nav-badge"><b class="badge-circle xs text-warning"></b></span>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/nav/application/email"><span class="nav-icon text-danger"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                            </path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg></span>
                                    <span class="nav-text">Email</span>
                                </NuxtLink>
                            </li>
                        </ul>
                        <ul class="nav">
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">UI elements</span>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                                            <rect x="3" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="14" width="7" height="7"></rect>
                                            <rect x="3" y="14" width="7" height="7"></rect>
                                        </svg></span>
                                    <span class="nav-text">Components</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/components/alert"><span
                                                class="nav-text">Alert</span></NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/components/badge"><span
                                                class="nav-text">Badge</span></NuxtLink>
                                        
                                    </li>
                                    <li>
                                    <NuxtLink to="/nav/uiElements/components/button"><span
                                                class="nav-text">Button</span></NuxtLink>

                                       
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.card.html" class="" data-pjax-state=""><span
                                                class="nav-text">Card</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.carousel.html" class="" data-pjax-state=""><span
                                                class="nav-text">Carousel</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.color.html" class="" data-pjax-state=""><span
                                                class="nav-text">Color</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.dropdown.html" class="" data-pjax-state=""><span
                                                class="nav-text">Dropdown</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.grid.html" class="" data-pjax-state=""><span
                                                class="nav-text">Grid</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.icon.html" class="" data-pjax-state=""><span
                                                class="nav-text">Icon</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.list.html" class="" data-pjax-state=""><span
                                                class="nav-text">List</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.modal.html" class="" data-pjax-state=""><span
                                                class="nav-text">Modal</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.navbar.html" class="" data-pjax-state=""><span
                                                class="nav-text">Navbar</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.sidenav.html" class="" data-pjax-state=""><span
                                                class="nav-text">Sidenav</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.timeline.html" class="" data-pjax-state=""><span
                                                class="nav-text">Timeline</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.tab.html" class="" data-pjax-state=""><span class="nav-text">Tab
                                                &amp; Collpase</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.tooltip.html" class="" data-pjax-state=""><span
                                                class="nav-text">Tooltip &amp; Popover</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-box">
                                            <path
                                                d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z">
                                            </path>
                                            <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                                            <line x1="12" y1="22.76" x2="12" y2="11"></line>
                                        </svg></span>
                                    <span class="nav-text">Plugins</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.scroll.html" class="" data-pjax-state=""><span
                                                class="nav-text">Infinite Scroll</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.sortable.html" class="" data-pjax-state=""><span
                                                class="nav-text">Sortable</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="ui.map.html" class="" data-pjax-state=""><span class="nav-text">Vector
                                                Map</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg></span>
                                    <span class="nav-text">Form</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.element.html" class="" data-pjax-state=""><span
                                                class="nav-text">Form Element</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.layout.html" class="" data-pjax-state=""><span
                                                class="nav-text">Form Layout</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.validation.html" class="" data-pjax-state=""><span
                                                class="nav-text">Form Validation</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.editor.html" class="" data-pjax-state=""><span
                                                class="nav-text">Editor</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.datepicker.html" class="" data-pjax-state=""><span
                                                class="nav-text">Datepicker</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.select.html" class="" data-pjax-state=""><span
                                                class="nav-text">Select</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.wizard.html" class="" data-pjax-state=""><span
                                                class="nav-text">Wizard</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="form.dropzone.html" class="" data-pjax-state=""><span
                                                class="nav-text">File Upload</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                                            <line x1="8" y1="6" x2="21" y2="6"></line>
                                            <line x1="8" y1="12" x2="21" y2="12"></line>
                                            <line x1="8" y1="18" x2="21" y2="18"></line>
                                            <line x1="3" y1="6" x2="3" y2="6"></line>
                                            <line x1="3" y1="12" x2="3" y2="12"></line>
                                            <line x1="3" y1="18" x2="3" y2="18"></line>
                                        </svg></span>
                                    <span class="nav-text">Tables</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="table.style.html" class="" data-pjax-state=""><span
                                                class="nav-text">Style</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="table.bootstrap.html" class="" data-pjax-state=""><span
                                                class="nav-text">Bootstrap Table</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="table.datatables.html" class="" data-pjax-state=""><span
                                                class="nav-text">Datatables</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-pie-chart">
                                            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                        </svg></span>
                                    <span class="nav-text">Charts</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="chart.chartist.html" class="" data-pjax-state=""><span
                                                class="nav-text">Chartist</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="chart.chartjs.html" class="" data-pjax-state=""><span
                                                class="nav-text">Chartjs</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-header hidden-folded">
                                <span class="text-muted">Extra</span>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-file">
                                            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                            <polyline points="13 2 13 9 20 9"></polyline>
                                        </svg></span>
                                    <span class="nav-text">Pages</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.profile.html" class="" data-pjax-state=""><span
                                                class="nav-text">Profile</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.search.html" class="" data-pjax-state=""><span
                                                class="nav-text">Search</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.invoice.html" class="" data-pjax-state=""><span
                                                class="nav-text">Invoice</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.faq.html" class="" data-pjax-state=""><span
                                                class="nav-text">FAQ</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.price.html" class="" data-pjax-state=""><span
                                                class="nav-text">Price</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.setting.html" class="" data-pjax-state=""><span
                                                class="nav-text">Setting</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="page.blank.html" class="" data-pjax-state=""><span
                                                class="nav-text">Blank</span></a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="" data-pjax-state=""><span class="nav-icon"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg></span>
                                    <span class="nav-text">Auth</span>
                                    <span class="nav-caret"></span></a>
                                <ul class="nav-sub nav-mega">
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="signin.1.html" class="" data-pjax-state=""><span
                                                class="nav-text">Signin</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="signup.1.html" class="" data-pjax-state=""><span
                                                class="nav-text">Signup</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="forgot-password.html" class="" data-pjax-state=""><span
                                                class="nav-text">Forgot Password</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="lockme.html" class="" data-pjax-state=""><span class="nav-text">Lockme
                                                Screen</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="404.html" class="" data-pjax-state=""><span class="nav-text">Error
                                                404</span></a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/nav/uiElements/calender"></NuxtLink>

                                        <a href="505.html" class="" data-pjax-state=""><span class="nav-text">Error
                                                505</span></a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="no-shrink">
                    <div class="p-3 d-flex align-items-center">
                        <div class="text-sm hidden-folded text-muted">Trial: 35%</div>
                        <div class="progress mx-2 flex" style="height: 4px">
                            <div class="progress-bar gd-success" style="width: 35%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    data(){return {}},
    created() {
        console.log("!!!!!!!! sidebar mounted")
    }
}
</script>