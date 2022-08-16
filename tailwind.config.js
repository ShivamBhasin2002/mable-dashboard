/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      heading: 'Montserrat',
      text: 'Lato'
    },
    colors: {
      bgContainerTo: '#182336',
      bgContainerFrom: '#1D2940',
      background: '#0B131F',
      primary: '#4FB7DD',
      secondary: '#7F8CA0',
      dark: '#285C6F',
      light: '#ffffff',
      error: '#EF4E5C',
      success: '#0DCE1C',
      average: '#D99A43',
      lines: '#7F8C9F',
      darkBlue: '#185BC6A0',
      lightBlue: '#1FB6AA',
      purple: '#8412a7',
      lightPurple: '#c578e2',
      dataQualityChartArea: 'rgba(13, 206, 28, 0.3)',
      eventsPerDayLineColor: '#54B7DB',
      eventsPerDayLineArea: 'rgba(84,183,219,0.6)',
      transparent: 'rgba(0,0,0,0)'
    }
  },
  plugins: []
};
