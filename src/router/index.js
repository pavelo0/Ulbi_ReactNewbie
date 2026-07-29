import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Error from "../pages/Error.jsx";
import PostIdPage from "../components/PostIdPage.jsx";
import Login from "../pages/Login.jsx";

export const privateRouter = [
    {path: '/', redirect: '/posts'},
    {path: '/login', redirect: '/posts'},
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
    {path: '/error', component: Error},
    {path: '/*', component: Error, props: {title: 'Not found'}},
];

export const publicRouter = [
    {path: '/login', component: Login},
    {path: '/*', redirect: '/login'},
]