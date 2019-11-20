export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5dd5430a503453c953cd0ade',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xqu9fygw',
                  apiId: '97cce10d-c555-4f03-b0b0-24255607f7f9'
                },
                {
                  buildHookId: '5dd5430a75838f3dfb381828',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-a9na2st8',
                  apiId: '9455b22c-2bb1-42e0-848c-b868273dd250'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/helgebentsen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-a9na2st8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
