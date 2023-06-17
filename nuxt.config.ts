// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
    
    css: [
        /*'bootstrap/dist/css/bootstrap.css',*/
        '~/assets/css/general.css'
        
    ],
      

    serverHandlers: [
        {
            route: '/server',
            handler: '~/server/myServer/index.js',
            middleware: true
        }
    ],
    ssr: true,
    runtimeConfig: {
        public:{
            baseURL: "http://localhost:3000"
        }
    },
    router: {
        routes: [
          {
            path: '/projects',
            component: '~/pages/projects/index.vue',
            name: 'projects'
          },
          {
            path: '/projects/top5projects',
            component: '~/pages/projects/top5projects.vue',
            name: 'top5projects'
          },
          {
            path: '/projects/allprojects',
            component: '~/pages/projects/allprojects.vue',
            name: 'allprojects'
          }
        ]
      },
      static: {
        prefix: false,
        dir: 'assets'
      },
}
