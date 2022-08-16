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
                        <template v-for="i in this.simpleNav" >
                            <li class="nav-header hidden-folded" >
                                <span class="text-muted">{{ i.header }}</span>
                            </li>
                            <li @click="j.isActive = !j.isActive" :class="{ active: j.isActive }"
                                v-for="j in i.children" :key="j.name">
                                <NuxtLink :to=j.link>
                                    <span class="nav-icon" :class="j.class" v-html="j.icon"></span>
                                    <span class="nav-text">{{ j.name }}</span>
                                    <span class="nav-badge"><b class="badge-circle xs " :class="j.class"></b></span>
                                </NuxtLink>
                            </li>
                        </template>
                    </ul>
                    <ul class="nav">
                        <template v-for="i in this.nestedNav" >
                            <li class="nav-header hidden-folded"><span class="text-muted">{{ i.header }}</span></li>
                            <li @click="j.isActive = !j.isActive" :class="{ active: j.isActive }"
                                v-for="j in i.children" :key="j.name">
                                <a data-pjax-state="anchor-empty">
                                    <span class="nav-icon" v-html="j.icon"></span>
                                    <span class="nav-text">{{ j.name }}</span>
                                    <span class="nav-caret"></span>
                                </a>
                                <ul class="nav-sub nav-mega">
                                    <li v-for="k in j.children" :key="k.name">
                                        <NuxtLink :to=k.link>
                                            <span class="nav-text">{{ k.name }}</span>
                                        </NuxtLink>

                                    </li>

                                </ul>
                            </li>
                        </template>
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
    data() {
        return {

            simpleNav: [
                {
                    header: 'Main', children: [
                        { name: "Dashboard", isActive: false, class: "text-primary", link: '/nav/main/dashboard', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>` },
                    ]
                },
                {
                    header: 'Applications', children: [
                        { name: "Calendar", isActive: false, class: "text-info", link: '/nav/application/calender', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>` },
                        { name: "Users", isActive: false, class: "text-success", link: '/nav/application/user', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>` },
                        { name: "Messages", isActive: false, class: "text-warning", link: '/nav/application/message', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>` },
                        { name: "Email", isActive: false, class: "text-danger", link: '/nav/application/email', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>` },
                    ]
                },
            ],
            nestedNav: [
                {
                    header: 'UI Elements', children: [
                        {
                            name: "Components", isActive: false, children: [
                                { name: "Alert", link: "/nav/uiElements/components/alert" },
                                { name: "Badge", link: "/nav/uiElements/components/bdge" },
                                { name: "Button", link: "/nav/uiElements/components/button" },
                                { name: "Card", link: "/nav/uiElements/components/card" },
                                { name: "Carousel", link: "/nav/uiElements/components/carousel" },
                                { name: "Color", link: "/nav/uiElements/components/color" },
                                { name: "Dropdown", link: "/nav/uiElements/components/dropdown" },
                                { name: "Grid", link: "/nav/uiElements/components/grid" },
                                { name: "Icon", link: "/nav/uiElements/components/icon" },
                                { name: "List", link: "/nav/uiElements/components/list" },
                                { name: "Modal", link: "/nav/uiElements/components/modal" },
                                { name: "Navbar", link: "/nav/uiElements/components/navbar" },
                                { name: "Sidenav", link: "/nav/uiElements/components/sidenav" },
                                { name: "Timeline", link: "/nav/uiElements/components/timeline" },
                                { name: "Tab", link: "/nav/uiElements/components/tabCollapse" },
                                { name: "Tooltip & Popover", link: "/nav/uiElements/components/tooltipsPopover" },
                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
                        },
                        {
                            name: "Plugins", isActive: false, children: [
                                { name: "Infinite Scroll", link: "/nav/uiElements/plugins/infiniteScroll" },
                                { name: "Sortable", link: "/nav/uiElements/plugins/sortable" },
                                { name: "Vector Map", link: "/nav/uiElements/plugins/vectorMap" },
                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line></svg>`
                        },
                        {
                            name: "Forms", isActive: false, children: [
                                { name: "Form Element", link: "/nav/uiElements/forms/formElement" },
                                { name: "Form Layout", link: "/nav/uiElements/forms/formLayout" },
                                { name: "Form Validation", link: "/nav/uiElements/forms/formValidation" },
                                { name: "Editor", link: "/nav/uiElements/forms/editor" },
                                { name: "Datepicker", link: "/nav/uiElements/forms/datePicker" },
                                { name: "Select", link: "/nav/uiElements/forms/select" },
                                { name: "Wizard", link: "/nav/uiElements/forms/wizard" },
                                { name: "File Upload", link: "/nav/uiElements/forms/fileWizard" },
                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>`
                        },
                        {
                            name: "Tables", isActive: false, children: [
                                { name: "Style", link: "/nav/uiElements/tables/style" },
                                { name: "Bootstrap Table", link: "/nav/uiElements/tables/bcTable" },
                                { name: "Datatables", link: "/nav/uiElements/tables/datatable" },

                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>`
                        },
                        {
                            name: "Charts", isActive: false, children: [
                                { name: "Chartist", link: "/nav/uiElements/charts/chartist" },
                                { name: "Chartjs", link: "/nav/uiElements/charts/chartjs" },
                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`
                        },
                    ]
                },
                {
                    header: 'Extra', isActive: false, children: [
                        {
                            name: "Pages", isActive: false, children: [
                                { name: "Profile", link: "/nav/extra/pages/profile" },
                                { name: "Search", link: "/nav/extra/pages/search" },
                                { name: "Invoice", link: "/nav/extra/pages/invoice" },
                                { name: "FAQ", link: "/nav/extra/pages/faq" },
                                { name: "Price", link: "/nav/extra/pages/price" },
                                { name: "Setting", link: "/nav/extra/pages/settings" },
                                { name: "Blank", link: "/nav/extra/pages/blank" },
                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>`
                        },
                        {
                            name: "Auth", isActive: false, children: [
                                { name: "Signin", link: "/auth/signin" },
                                { name: "Signup", link: "/auth/signup" },
                                { name: "Forgot Password", link: "/auth/forgotPass" },
                                { name: "Lockme Screen", link: "/auth/lockMe" },
                                { name: "Error 404", link: "/auth/error404" },
                                { name: "Error 505", link: "/auth/error505" },
                            ], icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
                        },
                    ]
                },
            ]

        }
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
}
</script>