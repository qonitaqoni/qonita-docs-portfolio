// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index', // Links to docs/index.md
    {
      type: 'category',
      label: 'API References',
      items: [
        'api-reference/product-catalog', // Links to docs/api-reference/product-catalog.md 
        'api-reference/user-auth', // Links to docs/api-reference/user-auth.md
      ],
    },
    {
      type: 'category',
      label: 'Guides & Operations',
      items: [
        'guides/postgres-setup', // Links to docs/guides/postgres-setup.md
        'guides/data-migration',   // Links to docs/guides/data-migration.mdx
        'guides/user-profile-sdk', // Links to docs/guides/user-profile-sdk.mdx
      ],
    },
  ],
};

module.exports = sidebars;