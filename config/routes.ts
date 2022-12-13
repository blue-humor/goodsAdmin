export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  {
    path: '/merchant',
    name: '商户管理',
    icon: 'smile',
    component: './merchant',
  },

  {
    path: '/category',
    name: '分类管理',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/goods',
    name: '商品管理',
    icon: 'crown',
    routes: [
      {
        path: '/goods',
        redirect: '/goods/details',
      },
      {
        path: '/goods/details',
        name: '商品详情',
        icon: 'smile',
        component: './goods/details',
      },
      {
        path: '/goods/addDetails',
        icon: 'smile',
        name: '当前页面',
        hideInMenu: true,
        component: './goods/addDetails',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/order',
    name: '订单管理',
    icon: 'smile',
    component: './order',
  },

  {
    path: '/users',
    name: '用户管理',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/apply',
    name: '报名管理',
    icon: 'smile',
    component: './apply',
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
