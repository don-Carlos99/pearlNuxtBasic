<template>
    <div>
        <div class="page-hero page-container" id="page-hero">
            <div class="padding d-flex">
                <div class="page-title">
                    <h2 class="text-md text-highlight">Chartist</h2><small class="text-muted">Simple responsive
                        charts</small>
                </div>
                <div class="flex"></div>
                <div><a href="https://themeforest.net/item/basik-responsive-bootstrap-web-admin-template/23365964"
                        class="btn btn-md text-muted"><span class="d-none d-sm-inline mx-1">Buy this Item</span> <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-arrow-right">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg></a></div>
            </div>
        </div>
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Line chart</div>
                            <div class="card-body">
                                <div id="chartist-line" class="pos-rlt" style="height: 240px"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Area chart</div>
                            <div class="card-body">
                                <div id="chartist-line-area" class="pos-rlt ct-point-hover" style="height: 240px"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Bar chart</div>
                            <div class="card-body">
                                <div id="chartist-bar" class="pos-rlt" style="height: 240px"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Horizental bar chart</div>
                            <div class="card-body">
                                <div id="chartist-h-bar" class="pos-rlt" style="height: 240px"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Pie chart</div>
                            <div class="card-body">
                                <div id="chartist-pie" class="pos-rlt" style="height: 240px"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">Dougnut chart</div>
                            <div class="card-body">
                                <div id="chartist-dougnut" class="pos-rlt" style="height: 240px"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>