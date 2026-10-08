import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/qonita-docs-portfolio/',
    component: ComponentCreator('/qonita-docs-portfolio/', '536'),
    routes: [
      {
        path: '/qonita-docs-portfolio/',
        component: ComponentCreator('/qonita-docs-portfolio/', '7a8'),
        routes: [
          {
            path: '/qonita-docs-portfolio/',
            component: ComponentCreator('/qonita-docs-portfolio/', '27e'),
            routes: [
              {
                path: '/qonita-docs-portfolio/api-reference/product-catalog',
                component: ComponentCreator('/qonita-docs-portfolio/api-reference/product-catalog', '42b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/qonita-docs-portfolio/api-reference/user-auth',
                component: ComponentCreator('/qonita-docs-portfolio/api-reference/user-auth', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/qonita-docs-portfolio/guides/data-migration',
                component: ComponentCreator('/qonita-docs-portfolio/guides/data-migration', '834'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/qonita-docs-portfolio/guides/postgres-setup',
                component: ComponentCreator('/qonita-docs-portfolio/guides/postgres-setup', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/qonita-docs-portfolio/guides/user-profile-sdk',
                component: ComponentCreator('/qonita-docs-portfolio/guides/user-profile-sdk', '6b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/qonita-docs-portfolio/',
                component: ComponentCreator('/qonita-docs-portfolio/', '1dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
