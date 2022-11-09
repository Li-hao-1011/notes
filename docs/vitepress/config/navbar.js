/* module.exports = [
  { text: 'Guide', link: '/guide' },
  { text: 'Configs', link: '/configs' },
  { text: 'Changelog', link: 'https://github.com' }
]
 */

export const navbar = [
  {
    text: "Guide",
    link: "/guide/1",
  },
  {
    text: "Dropdown Menu",
    items: [
      {
        // Title for the section.
        text: "Section A Title",
        items: [
          { text: "Item A", link: "/a" },
          { text: "Item B", link: "/b" },
        ],
      },
    ],
  },
  {
    text: "Dropdown Menu",
    items: [
      {
        // You may also omit the title.
        items: [
          { text: "Item C", link: "/c" },
          { text: "Item D", link: "/d" },
        ],
      },
    ],
  },
];
