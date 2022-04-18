import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '系统首页'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
            }, {
                path: "/config",
                name: "config",
                meta: {
                    title: '系统设置'
                },
                component: () => import ( /* webpackChunkName: "config" */ "../views/config.vue")
            },{
                path: "/partManage",
                name: "partManage",
                meta: {
                    title: '栏目列表'
                },
                component: () => import ( /* webpackChunkName: "partManage" */ "../views/partManage.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '栏目管理'
                },
                component: () => import ( /* webpackChunkName: "form" */ "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: '导管理'
                },
                component: () => import ( /* webpackChunkName: "tabs" */ "../views/Tabs.vue")
            }, {
                path: "/addpart",
                name: "addpart",
                meta: {
                    title: '添加栏目'
                },
                component: () => import ( /* webpackChunkName: "addpart" */ "../views/addpart.vue")
            }, {
                path: "/menuManage",
                name: "menuManage",
                meta: {
                    title: '导航管理'
                },
                component: () => import ( /* webpackChunkName: "menuManage" */ "../views/menuManage.vue")
            },{
                path: "/addMenu",
                name: "addMenu",
                meta: {
                    title: '添加导航'
                },
                component: () => import ( /* webpackChunkName: "addMenu" */ "../views/addMenu.vue")
            }, {
                path: "/editPart",
                name: "editPart",
                meta: {
                    title: '修改栏目'
                },
                component: () => import ( /* webpackChunkName: "editPart" */ "../views/editPart.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import ( /* webpackChunkName: "permission" */ "../views/Permission.vue")
            }, {
                path: "/hospitalManage",
                name: "hospitalManage",
                meta: {
                    title: '医院栏目管理'
                },
                component: () => import ( /* webpackChunkName: "hospitalManage" */ "../views/hospitalManage.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '内管理'
                },
                component: () => import ( /* webpackChunkName: "upload" */ "../views/Upload.vue")
            }, {
                path: "/icon",
                name: "icon",
                meta: {
                    title: '自定义图标'
                },
                component: () => import ( /* webpackChunkName: "icon" */ "../views/Icon.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */ '../views/404.vue')
            }, {
                path: '/contentManage',
                name: 'contentManage',
                meta: {
                    title: '内容管理'
                },
                component: () => import (/* webpackChunkName: "contentManage" */ '../views/contentManage.vue')
            }, {
                path: "/addcontent",
                name: "addcontent",
                meta: {
                    title: '添加内容'
                },
                component: () => import ( /* webpackChunkName: "addcontent" */ "../views/addcontent.vue")
            }, {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心'
                },
                component: () => import (/* webpackChunkName: "user" */ '../views/User.vue')
            }, {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器'
                },
                component: () => import (/* webpackChunkName: "editor" */ '../views/Editor.vue')
            },{
                path: '/address',
                name: 'address',
                meta: {
                    title: '地址管理'
                },
                component: () => import (/* webpackChunkName: "address" */ '../views/address.vue')
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import ( /* webpackChunkName: "login" */ "../views/Login.vue")
    },{
        // 前台路由
        path: "/index",
        name: 'index',
        component: () => import("../views/index/index.vue"),
        children:[{
            path: '/home',
            name: 'home',
            meta: {
                title:'首页'
            },
            component: () => import ("../views/index/home.vue")
        },{
            path: '/lanmu1',
            name: 'lanmu1',
            meta: {
                title: '栏目1'
            },
            component: () => import ("../views/index/lanmu1.vue")
        }]
        }
];

const router = createRouter({
    history: createWebHashHistory(),
    base:"/amdin/",
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;