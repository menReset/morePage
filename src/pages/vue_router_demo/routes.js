import routerDemo from './components/RouterDemo.vue'
import RouterChildrenDemo from './components/RouterChildrenDemo.vue'

const routes = [
  {
    path: '/foo',
    name: 'demo1',
    component: routerDemo,
  },
  {
    path: '/bar',
    name: 'demo2',
    component: routerDemo
  },
  {
    path: '/user/:id',
    name: 'demo3',
    component: routerDemo,
    props: true,
    children: [
      {
        path: 'profile',
        name: 'demo3-1',
        component: RouterChildrenDemo
      },
      {
        path: 'posts',
        name: 'demo3-2',
        component: RouterChildrenDemo
      }
    ]
  },
  {
    path: '/a',
    redirect: '/bar'   // 匹配到/a  重定向到/bar
  },
  {
    path: '*',
    name: '404',
    component: routerDemo
  }
]

export default routes