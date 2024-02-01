import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },
    { path: '/vue', microApp: 'sub-vue' },
    { path: '/react', microApp: 'sub-react' },
  ],
  fastRefresh: {},
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-vue',
          entry: '//localhost:8081',
          props: {
            username: 'liz',
            role: 'demander'
          }
        },
        {
          name: 'sub-react',
          entry: '//localhost:8082',
          props: {
            username: 'liz',
            role: 'demander'
          }
        }
      ],
    }
  },
  proxy: {
    '/api': {
      target: 'http://localhost:4500', // main-umi 自己的服务
      pathRewrite: {
        '/api': '/'
      }
    },
    '/subVueApi': {
      target: 'http://localhost:8081', // 4040已经代理到8081了，所以这个地方直接使用8081
      pathRewrite: {
        '/subVueApi': '/'
      }
    },
    '/reactVueApi': {
      target: 'http://localhost:8082',
      pathRewrite: {
        '/subReactApi': '/'
      }
    },
  }
});
