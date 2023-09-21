export const settings = {
  name: 'settings',
  title: 'Page Settings',
  type: 'document',
  fields: [
    {
      name: 'menuColor',
      title: 'Menu Overlay Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: '#70BFE9' },
          { title: 'Green', value: '#72AE68' },
          { title: 'Yellow', value: '#E8C32A' },
          { title: 'Orange', value: '#DB6634' },
        ],
        layout: 'radio',
      },
    },
  ],
};
