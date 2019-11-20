export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd4f868bd547deae702d3cc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iw1nawy8',
                  apiId: '1384d8b4-07f3-4291-ae84-28d9a1f6b555'
                },
                {
                  buildHookId: '5dd4f86875838f1c67381841',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-h8vgaofx',
                  apiId: '25207912-3b51-46be-b5ed-69b698475a2f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yahsan2/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-h8vgaofx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
