<template>
    <div class="layout-row">
        <sideBar />
        <div id="main" class="layout-column flex">
            <appHeader />
            <div id="content" class="flex">
                <nuxt-child />
            </div>
          <appFooter />
        </div>
    </div>
</template>