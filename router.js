const routes = [
    { path: '/', component: Loader },
    { path: '/main', component: Main },
    { path: '/products', component: Products },
    { path: '/singleProduct/:id', component: SingleProduct },
    { path: '/flipBook/:id', component: FlipBook }
];

const router = new VueRouter({
    routes,
});
