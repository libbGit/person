/*
 * 主页
 */
import store from '@/store'
import Home from '@/views/home'
import NeedLogin from '@/views/public/need-login'


/*博客*/
// deep-copy
import BlogDeepCopy from '@/views/blog/deep-copy'
import BlogVueIssue from '@/views/blog/vue-issue'
import BlogEntireVueComponent from '@/views/blog/entire-vue-component'
import BlogVueForm from '@/views/blog/vue-form'  
import BlogScssTutorial from '@/views/blog/scss-tutorial'  
import BlogMindMap from '@/views/blog/mind-map'

import Test from '@/views/public/test'


/*书法*/
import JiuChengGong from '@/views/shufa/outi/jiuchenggong'

let isLogin = () => {
    return store.getters['user/isLogin']
}

const routes = [
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            title: '用户主页',
        },
        children: [
            {
                path: 'need-login',
                name: 'NEED-LOGIN',
                component: NeedLogin,
                meta: {
                    title: '登录受限',
                },
            },
            {
                path: 'test',
                name: 'TEST',
                component: Test,
                meta: {
                    title: 'CESHI',
                },
                
            },
            {
                path: 'mind-map',
                name: 'MIND-MAP',
                component: BlogMindMap,
                meta: {
                    title: '前端脑图',
                },
                beforeEnter(to, from, next) {
                    if (isLogin()) {
                        next();
                    } else {
                        next("/home/need-login");
                    }
                }
            },
            {
                path: 'deep-copy',
                name: 'DEEP-COPY',
                component: BlogDeepCopy,
                meta: {
                    title: '浅拷贝和深拷贝',
                },
                beforeEnter(to, from, next) {
                    if (isLogin()) {
                        next();
                    } else {
                        next("/home/need-login");
                    }
                }
            },
            {
                path: 'scss-tutorial',
                name: 'SCSS-TUTORIAL',
                component: BlogScssTutorial,
                meta: {
                    title: 'Scss简易教程',
                },
                beforeEnter(to, from, next) {
                    if (isLogin()) {
                        next();
                    } else {
                        next("/home/need-login");
                    }
                }
            },
            
            {
                path: 'blog-vue-issue',
                name: 'BLOG-VUE-ISSUE',
                component: BlogVueIssue,
                meta: {
                    title: 'vue常见问题',
                },
                beforeEnter(to, from, next) {
                    if (isLogin()) {
                        next();
                    } else {
                        next("/home/need-login");
                    }
                }
            },
            {
                path: 'entire-vue-component',
                name: 'ENTIRE-VUE-COMPONENT',
                component: BlogEntireVueComponent,
                meta: {
                    title: 'vue单文件组件',
                },
                beforeEnter(to, from, next) {
                    if (isLogin()) {
                        next();
                    } else {
                        next("/home/need-login");
                    }
                }
            },
            {
                path: 'vue-form-demo',
                name: 'VUE-FORM-DEMO',
                component: BlogVueForm,
                meta: {
                    title: 'vue表单',
                },
                beforeEnter(to, from, next) {
                    if (isLogin()) {
                        next();
                    } else {
                        next("/home/need-login");
                    }
                }
            },
            
            
            {
                path: 'jiuchenggong', //九成宫醴泉铭
                name: 'jiuchenggong',
                meta: {
                    title: '书法之九成宫醴泉铭',
                },
                component: JiuChengGong,
                // beforeEnter(to, from, next) {
                //     if (isLogin()) {
                //         next(to.path);
                //     } else {
                //         next("/home/need-login");
                //     }
                // }
            }
        ]
    }
]

export default routes
