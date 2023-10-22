export const settings = {
  name: 'settings',
  title: 'Page Settings',
  type: 'document',
  fields: [
    {
      name: 'menuColor',
      title: 'Menu Overlay Color',
      type: 'simplerColor',
      options: {
        colorList: [
          { label: 'Blue', value: '#70BFE9' },
          { label: 'Green', value: '#72AE68' },
          { label: 'Yellow', value: '#E8C32A' },
          { label: 'Orange', value: '#DB6634' },
        ],
      },
    },
  ],
};
