<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <slot/>
        <TheFooter />

    </div>
</template>

<style>
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #ebfaee;
        margin: 0;
        background-color: #ebfaee;
opacity: 1;
background-image: radial-gradient(#ced9d0 1.25px, #ebfaee 1.25px);
background-size: 25px 25px;
    }
</style>
