export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f6e4973c7334933d915d0f8',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-starter-eleventy-studio',
                  apiId: 'cd1d280f-bebe-4956-87c7-760065a5a774'
                },
                {
                  buildHookId: '5f6e49735a36ef32a91c2224',
                  title: 'Blog Website',
                  name: 'sanity-blog-starter-eleventy',
                  apiId: '94f962c9-02c2-4be2-a80b-cacf5b5405c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/sanity-blog-starter-eleventy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-blog-starter-eleventy.netlify.app', category: 'apps'}
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
