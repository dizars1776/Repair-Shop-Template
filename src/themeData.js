// Edit this if you want to change the content of the page!
const themeData = {
  header: {
    title: 'camera',
    subTitle: 'service shop',
    menuItems: [
      ['services', '#services'],
      ['cost_estimate', '#call-to-action'],
      ['contact_us', '#contact-us'],
    ],
  },
  slider: {
    slides: [
      {
        mobile: './images/slider/slide01mobile.webp',
        desktop: './images/slider/slide01.webp',
        altText: 'slide 01',
      },
      {
        mobile: './images/slider/slide02mobile.webp',
        desktop: './images/slider/slide02.webp',
        altText: 'slide 02',
      },
      {
        mobile: './images/slider/slide03mobile.webp',
        desktop: './images/slider/slide03.webp',
        altText: 'slide 03',
      },
    ],
  },
  services: {
    cards: [
      {
        id: 'camera-body-repairs',
        title: 'title',
        mainText: 'mainText',
        img: 'images/services/camera-service-1.webp',
        imgAlt: 'camera body service',
      },
      {
        id: 'camera-lens-sensor-cleaning',
        title: 'title',
        mainText: 'mainText',
        img: 'images/services/camera-service-2.webp',
        imgAlt: 'camera lens cleaning',
      },
      {
        id: 'camera-accessories-repairs',
        title: 'title',
        mainText: 'mainText',
        img: 'images/services/camera-service-3.webp',
        imgAlt: 'camera accessories service',
      },
    ],
  },
  procedure: {
    title: 'title',
    ariaLabel: 'Repair procedure',
    steps: ['step1', 'step2', 'step3', 'step4'],
  },
  social: {
    socialProfiles: [
      {
        img: './images/social/profilephoto.webp',
        imgAlt: 'Owners profile photo',
        haveMail: 'mailto:johnDoe@camera-service.com',
        haveFb: 'https://facebook.com/profile-url',
      },
      {
        img: './images/social/businessphoto.webp',
        imgAlt: 'Business profile photo',
        haveMail: false,
        haveFb: 'https://facebook.com/profile-url',
      },
    ],
  },
  contactUs: {
    myAddress: 'address',
    myCity: 'city',
    myZip: '73132',
    myState: 'state',
    myPhone: '22200 01119',
    mapLat: 35.51642,
    mapLong: 24.01796,
    mapZoom: 19,
    markerUrl: 'https://goo.gl/maps/sCwxmAypgNDUZysa7',
  },
}

export default themeData
