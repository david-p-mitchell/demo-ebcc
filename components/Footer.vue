<template>
    <div class="footer">
        <p class="left-align-section">© Enon Baptist Church</p>
        <div class="right-align-section">
        <p >2025</p>
    </div>
    </div>
</template>

<style>
.footer {
    background-color: var(--nav-bar-bg-color);
    color: var(--body-text-color);
    padding: 0px;
    display: flex;
    flex-direction: row; /* Horizontal layout for desktop */
    
}

.left-align-section {
 margin:0px;
 text-align: left;
}

.right-align-section {
    margin:0px;
    text-align: right;
    display: flex; /* Visible on desktop */
    justify-content: flex-end;
}
</style>