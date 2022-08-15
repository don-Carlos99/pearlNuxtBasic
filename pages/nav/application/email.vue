<template>
    <div class="d-flex flex fixed-content">
        <div class="fade aside aside-sm" id="content-aside">
            <div class="modal-dialog d-flex flex-column w-md bg-body" id="mail-nav">
                <div class="navbar"><span class="text-md">Email</span></div>
                <div class="scrollable hover">
                    <div class="p-2 px-3"><button
                            class="btn btn-sm btn-block box-shadows btn-rounded gd-danger text-white"
                            id="btn-new-mail">New mail</button></div>
                    <div class="sidenav my-3">
                        <nav class="nav-active-text-primary" data-nav="">
                            <ul class="nav">
                                <li><a href="app.mail.html#inbox" data-pjax-state=""><span class="nav-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-archive">
                                                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                                <rect x="1" y="3" width="22" height="5"></rect>
                                                <line x1="10" y1="12" x2="14" y2="12"></line>
                                            </svg> </span><span class="nav-text">Inbox</span> <span class="nav-badge"><b
                                                class="badge badge-pill gd-info">5</b></span></a></li>
                                <li><a href="app.mail.html#sent" data-pjax-state=""><span class="nav-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-send">
                                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                            </svg> </span><span class="nav-text">Sent</span> <span class="nav-badge"><b
                                                class="badge badge-pill gd-danger">15</b></span></a></li>
                                <li><a href="app.mail.html#draft" data-pjax-state=""><span class="nav-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-edit-2">
                                                <polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                                            </svg> </span><span class="nav-text">Draft</span></a></li>
                                <li><a href="app.mail.html#trash" data-pjax-state=""><span class="nav-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-trash-2">
                                                <polyline points="3 6 5 6 21 6"></polyline>
                                                <path
                                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                </path>
                                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                                <line x1="14" y1="11" x2="14" y2="17"></line>
                                            </svg> </span><span class="nav-text name">Trash</span></a></li>
                                <li class="nav-header d-flex">
                                    <div class="py-2 text-muted">Labels</div><span class="flex"></span>
                                    <div class="dropdown dropleft"><button data-toggle="dropdown"
                                            class="btn btn-sm btn-icon no-shadow no-bg"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg></button>
                                        <div class="dropdown-menu w">
                                            <div class="p-3">
                                                <div class="input-group"><input type="text"
                                                        class="form-control form-control-sm" id="newField"
                                                        placeholder="New label" > <span
                                                        class="input-group-append"><button
                                                            class="btn btn-white no-shadow btn-sm" type="button"
                                                            id="newBtn"><svg xmlns="http://www.w3.org/2000/svg"
                                                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                class="feather feather-check">
                                                                <polyline points="20 6 9 17 4 12"></polyline>
                                                            </svg></button></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="app.mail.html#html5" class="link" data-pjax-state=""><span
                                            class="nav-badge"><b class="badge badge-circle text-primary mx-1"></b>
                                        </span><span class="nav-text name">Workshop</span></a></li>
                                <li><a href="app.mail.html#bootstrap" class="link" data-pjax-state=""><span
                                            class="nav-badge"><b class="badge badge-circle text-info mx-1"></b>
                                        </span><span class="nav-text name">Company</span></a></li>
                                <li><a href="app.mail.html#clients" class="link" data-pjax-state=""><span
                                            class="nav-badge"><b class="badge badge-circle text-success mx-1"></b>
                                        </span><span class="nav-text name">Personal</span></a></li>
                                <li><a href="app.mail.html#work" class="link" data-pjax-state=""><span
                                            class="nav-badge"><b class="badge badge-circle text-warning mx-1"></b>
                                        </span><span class="nav-text name">Private</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="aside-deck hide" id="mail-deck">
            <div class="card card-origin alert p-0 m-0 b-a hide">
                <div class="card-header d-flex align-items-center bg-body">
                    <div class="flex h-1x mx-1 mail-to">New mail</div>
                    <div class="ml-auto no-wrap"><a class="p-1"><span><svg xmlns="http://www.w3.org/2000/svg" width="12"
                                    height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg> </span></a><a class="p-1 text-muted" data-toggle-class="card-hide-body"
                            data-target=".card" data-target-closest="true"><svg xmlns="http://www.w3.org/2000/svg"
                                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-minus">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg> </a><a class="p-1 text-muted" data-dismiss="alert"><svg
                                xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-x">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg></a></div>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mb-2"><input type="text" class="form-control" placeholder="Recipients"></div>
                        <div><input type="text" class="form-control" placeholder="Subject"></div>
                        <div class="note-editor-inline"><textarea
                                class="form-control summernote">	                      </textarea></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="d-flex flex" id="content-body">
            <div class="d-flex flex-column flex" id="mail-list">
                <div class="p-3">
                    <div class="toolbar">
                        <div class="btn-group"><button class="btn btn-sm btn-icon btn-white" data-toggle="tooltip"
                                title="" id="btn-trash" data-original-title="Trash"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-trash text-muted">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path
                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                    </path>
                                </svg></button> <button class="btn btn-sm btn-icon btn-white sort"
                                data-sort="item-title" data-toggle="tooltip" title="" data-original-title="Sort"><i
                                    class="sorting"></i></button></div>
                        <form class="flex">
                            <div class="input-group"><input type="text"
                                    class="form-control form-control-theme form-control-sm search" placeholder="Search"
                                    > <span class="input-group-append"><button
                                        class="btn btn-white no-border btn-sm" type="button"><span
                                            class="d-flex text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-search">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg></span></button></span></div>
                        </form><button data-toggle="modal" data-target="#content-aside" data-modal=""
                            class="btn btn-sm btn-icon btn-white d-md-none"><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="feather feather-menu">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg></button>
                    </div>
                </div>
                <div class="scroll-y mx-3 mb-0 card">
                    <div class="loading m-4"></div>
                    <div class="list list-row hide">
                        <div class="list-item" data-id="19">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="19">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#19" data-pjax-state=""><span
                                        class="w-40 avatar gd-warning" data-toggle-class="loading">T</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#19" class="item-title text-color h-1x"
                                    data-pjax-state="">IOS Application</a>
                                <div class="item-except text-muted text-sm h-1x">We design and implement native iOS apps
                                    that harmonize simplicity of design and complexity of function</div>
                                <div class="item-tag tag hide">Private,Company,Draft,Personal,Sent,Trash,Workshop</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="4">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="4"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#4" data-pjax-state=""><span
                                        class="w-40 avatar gd-success" data-toggle-class="loading"><img
                                            src="@/assets/img/a4.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#4" class="item-title text-color h-1x"
                                    data-pjax-state="">Open source project public release</a>
                                <div class="item-except text-muted text-sm h-1x">New out-of-the box dashboards and
                                    enhanced security and compliance</div>
                                <div class="item-tag tag hide">Trash,Workshop,Draft,Company,Personal,Private,Sent</div>
                            </div>
                            <div>
                                <div class="item-icon text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                                        height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-paperclip">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                        </path>
                                    </svg></div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">2 hours ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="7">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="7"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#7" data-pjax-state=""><span
                                        class="w-40 avatar gd-primary" data-toggle-class="loading"><img
                                            src="@/assets/img/a7.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#7" class="item-title text-color h-1x"
                                    data-pjax-state="">Design improvement</a>
                                <div class="item-except text-muted text-sm h-1x">Today we're working on improving the
                                    design to make the data you need more accessible!</div>
                                <div class="item-tag tag hide">Private,Draft,Trash,Sent,Personal,Workshop,Company</div>
                            </div>
                            <div>
                                <div class="item-icon text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                                        height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-paperclip">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                        </path>
                                    </svg></div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">21 July</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="14">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="14">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#14" data-pjax-state=""><span
                                        class="w-40 avatar gd-warning" data-toggle-class="loading">B</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#14" class="item-title text-color h-1x"
                                    data-pjax-state="">Database management</a>
                                <div class="item-except text-muted text-sm h-1x">Managing data in all software or
                                    applications becomes simplified when you make use of the best <a href="#"
                                        data-pjax-state="">#DatabaseMan</a></div>
                                <div class="item-tag tag hide">Private,Trash,Personal,Draft,Sent,Company,Workshop</div>
                            </div>
                            <div>
                                <div class="item-icon text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                                        height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-paperclip">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                        </path>
                                    </svg></div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="8">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="8"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#8" data-pjax-state=""><span
                                        class="w-40 avatar gd-success" data-toggle-class="loading"><img
                                            src="@/assets/img/a8.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#8" class="item-title text-color h-1x"
                                    data-pjax-state="">DEV DAY 2018</a>
                                <div class="item-except text-muted text-sm h-1x">Working on a research piece on the
                                    history of vocational schools in America.</div>
                                <div class="item-tag tag hide">Sent,Workshop,Personal,Private,Draft,Company,Trash</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">02/11 18</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="9">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="9"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#9" data-pjax-state=""><span class="w-40 avatar gd-info"
                                        data-toggle-class="loading"><img src="@/assets/img/a9.jpg" alt="."></span></a>
                            </div>
                            <div class="flex"><a href="app.mail.detail.html#9" class="item-title text-color h-1x"
                                    data-pjax-state="">Web App develop tutorial</a>
                                <div class="item-except text-muted text-sm h-1x">Build a progressive web app using
                                    jQuery</div>
                                <div class="item-tag tag hide">Workshop,Draft,Personal,Company,Private,Trash,Sent</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">2 days ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="11">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="11">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#11" data-pjax-state=""><span class="w-40 avatar gd-info"
                                        data-toggle-class="loading">K</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#11" class="item-title text-color h-1x"
                                    data-pjax-state="">Fitness application</a>
                                <div class="item-except text-muted text-sm h-1x">@DataAPI Implemented new API for
                                    transation data from client to server.</div>
                                <div class="item-tag tag hide">Workshop,Personal,Sent,Private,Draft,Company,Trash</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="12">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="12">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#12" data-pjax-state=""><span class="w-40 avatar gd-info"
                                        data-toggle-class="loading">A</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#12" class="item-title text-color h-1x"
                                    data-pjax-state="">Sales Support</a>
                                <div class="item-except text-muted text-sm h-1x">Our client is an IT Healthcare start-up
                                    that provides process improvement solutions</div>
                                <div class="item-tag tag hide">Trash,Personal,Draft,Private,Company,Workshop,Sent</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">5 hours ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="1">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="1"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#1" data-pjax-state=""><span
                                        class="w-40 avatar gd-primary" data-toggle-class="loading"><img
                                            src="@/assets/img/a1.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#1" class="item-title text-color h-1x"
                                    data-pjax-state="">WordPress dashboard redesign</a>
                                <div class="item-except text-muted text-sm h-1x">In WordPress Tutorial, we’ll streamline
                                    the process for you by pointing out the all key features of the WordPress</div>
                                <div class="item-tag tag hide">Trash,Personal,Private,Draft,Workshop,Sent,Company</div>
                            </div>
                            <div>
                                <div class="item-icon text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                                        height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-paperclip">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                        </path>
                                    </svg></div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">20 minutes ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="16">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="16">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#16" data-pjax-state=""><span class="w-40 avatar gd-info"
                                        data-toggle-class="loading">F</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#16" class="item-title text-color h-1x"
                                    data-pjax-state="">AI Could Uber</a>
                                <div class="item-except text-muted text-sm h-1x">When it comes to artificial
                                    intelligence, little things can add up in big ways</div>
                                <div class="item-tag tag hide">Private,Personal,Workshop,Draft,Trash,Sent,Company</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="20">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="20">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#20" data-pjax-state=""><span
                                        class="w-40 avatar gd-warning" data-toggle-class="loading">G</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#20" class="item-title text-color h-1x"
                                    data-pjax-state="">Netflix hackathon ios app</a>
                                <div class="item-except text-muted text-sm h-1x">Netflix hackathon creates eye tracking
                                    option for iOS app</div>
                                <div class="item-tag tag hide">Personal,Sent,Trash,Draft,Private,Workshop,Company</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">25/12 18</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="13">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="13">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#13" data-pjax-state=""><span
                                        class="w-40 avatar gd-primary" data-toggle-class="loading">L</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#13" class="item-title text-color h-1x"
                                    data-pjax-state="">Feed Reader</a>
                                <div class="item-except text-muted text-sm h-1x">Email message from a happy user: 'Neat
                                    tool.. seems to be the easiest of' <a href="#" data-pjax-state="">#big data</a>
                                </div>
                                <div class="item-tag tag hide">Sent,Workshop,Personal,Company,Draft,Private,Trash</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">3 weeks ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="3">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="3"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#3" data-pjax-state=""><span
                                        class="w-40 avatar gd-primary" data-toggle-class="loading"><img
                                            src="@/assets/img/a3.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#3" class="item-title text-color h-1x"
                                    data-pjax-state="">Html5 dashboard conference</a>
                                <div class="item-except text-muted text-sm h-1x">Less than a month till we head over to
                                    the UK &amp; Ireland with @NextUI</div>
                                <div class="item-tag tag hide">Trash,Personal,Draft,Private,Sent,Workshop,Company</div>
                            </div>
                            <div>
                                <div class="item-icon text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                                        height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-paperclip">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                        </path>
                                    </svg></div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">1 hour ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="15">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="15">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#15" data-pjax-state=""><span
                                        class="w-40 avatar gd-success" data-toggle-class="loading">J</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#15" class="item-title text-color h-1x"
                                    data-pjax-state="">Weekend Fun Project</a>
                                <div class="item-except text-muted text-sm h-1x">You don’t have to switch tools to
                                    review code, share input on projects, or open up the conversation to the rest of
                                    your team.</div>
                                <div class="item-tag tag hide">Trash,Workshop,Draft,Personal,Sent,Private,Company</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">03/12 18</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="17">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="17">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#17" data-pjax-state=""><span
                                        class="w-40 avatar gd-warning" data-toggle-class="loading">H</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#17" class="item-title text-color h-1x"
                                    data-pjax-state="">AI Could Uber</a>
                                <div class="item-except text-muted text-sm h-1x">AI will highlight &amp; emphasize key
                                    areas where students need help, allowing teachers to focus on facilitating the
                                    learning process</div>
                                <div class="item-tag tag hide">Workshop,Sent,Trash,Draft,Private,Company,Personal</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="6">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="6"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#6" data-pjax-state=""><span class="w-40 avatar gd-danger"
                                        data-toggle-class="loading"><img src="@/assets/img/a6.jpg" alt="."></span></a>
                            </div>
                            <div class="flex"><a href="app.mail.detail.html#6" class="item-title text-color h-1x"
                                    data-pjax-state="">eBay Dashboard</a>
                                <div class="item-except text-muted text-sm h-1x">This makes me believe there are good
                                    people in the world still</div>
                                <div class="item-tag tag hide">Sent,Private,Draft,Company,Trash,Workshop,Personal</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">1 Week ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="10">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="10">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#10" data-pjax-state=""><span
                                        class="w-40 avatar gd-danger" data-toggle-class="loading"><img
                                            src="@/assets/img/a10.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#10" class="item-title text-color h-1x"
                                    data-pjax-state="">AI assistant</a>
                                <div class="item-except text-muted text-sm h-1x">Leaders are running an AMA on Reddit.
                                    Ask your question and find out how the project is going</div>
                                <div class="item-tag tag hide">Personal,Workshop,Sent,Private,Draft,Trash,Company</div>
                            </div>
                            <div>
                                <div class="item-icon text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="10"
                                        height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="feather feather-paperclip">
                                        <path
                                            d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48">
                                        </path>
                                    </svg></div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">1 day ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="2">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="2"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#2" data-pjax-state=""><span
                                        class="w-40 avatar gd-primary" data-toggle-class="loading"><img
                                            src="@/assets/img/a2.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#2" class="item-title text-color h-1x"
                                    data-pjax-state="">Data analytics application</a>
                                <div class="item-except text-muted text-sm h-1x">With <a href="#"
                                        data-pjax-state="">@Dashboard</a>, you can create fully customized and
                                    interactive snapshots, scorecards, and dashboards. Visit our live dashboard gallery
                                    to see a glimpse of what's possible.</div>
                                <div class="item-tag tag hide">Personal,Trash,Draft,Private,Company,Sent,Workshop</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">45 minutes ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="5">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="5"> <i></i></label>
                            </div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#5" data-pjax-state=""><span
                                        class="w-40 avatar gd-warning" data-toggle-class="loading"><img
                                            src="@/assets/img/a5.jpg" alt="."></span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#5" class="item-title text-color h-1x"
                                    data-pjax-state="">Google Analytics training</a>
                                <div class="item-except text-muted text-sm h-1x">Free Worksheet included. Read on
                                    through or save for later but face the fear of entering your Google Analytics</div>
                                <div class="item-tag tag hide">Private,Draft,Trash,Personal,Sent,Company,Workshop</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">3 days ago</div>
                            </div>
                        </div>
                        <div class="list-item" data-id="17">
                            <div><label class="ui-check m-0"><input type="checkbox" name="id" value="17">
                                    <i></i></label></div>
                            <div><a href="#" data-toggle-class="" data-pjax-state=""><svg
                                        xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-star active-warning text-muted">
                                        <polygon
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                        </polygon>
                                    </svg></a></div>
                            <div><a href="app.mail.detail.html#17" data-pjax-state=""><span
                                        class="w-40 avatar gd-warning" data-toggle-class="loading">A</span></a></div>
                            <div class="flex"><a href="app.mail.detail.html#17" class="item-title text-color h-1x"
                                    data-pjax-state="">AI Could Uber</a>
                                <div class="item-except text-muted text-sm h-1x">Alibaba made a smart screen to help
                                    blind people shop and it costs next to nothing</div>
                                <div class="item-tag tag hide">Sent,Workshop,Company,Private,Draft,Trash,Personal</div>
                            </div>
                            <div class="no-wrap">
                                <div class="item-date text-muted text-sm d-none d-md-block">13/12 18</div>
                            </div>
                        </div>
                    </div>
                    <div class="no-result hide">
                        <div class="p-4 text-center">No Results</div>
                    </div>
                </div>
                <div class="px-3 py-3 mt-auto">
                    <div class="d-flex align-items-center">
                        <div class="flex d-flex flex-row"><button
                                class="btn btn-sm no-bg no-shadow px-0 pager-prev"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-chevron-left">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg></button>
                            <div class="pagination pagination-sm mx-1"></div><button
                                class="btn btn-sm no-bg no-shadow px-0 pager-next"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-chevron-right">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg></button>
                        </div>
                        <div><span class="text-muted">Total:</span> <span id="count"></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>