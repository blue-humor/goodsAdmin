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
         name: '添加或编辑',
        hideInMenu: true,
        component: './goods/addDetails',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
