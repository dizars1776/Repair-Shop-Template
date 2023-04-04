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
        mainText: 'main_text',
        img: 'images/services/camera-service-1.webp',
        imgAlt: 'camera body service',
      },
      {
        id: 'camera-lens-sensor-cleaning',
        title: 'title',
        mainText: 'main_text',
        img: 'images/services/camera-service-2.webp',
        imgAlt: 'camera lens cleaning',
      },
      {
        id: 'camera-accessories-repairs',
        title: 'title',
        mainText: 'main_text',
        img: 'images/services/camera-service-3.webp',
        imgAlt: 'camera accessories service',
      },
    ],
  },
  procedure: {
    title: 'title',
    ariaLabel: 'Repair procedure',
    steps: ['step_1', 'step_2', 'step_3', 'step_4'],
  },
  socialNetworking: {
    socialProfiles: [
      {
        img: './images/social/profilephoto.webp',
        imgAlt: "Owner's profile photo",
        haveMail: 'mailto:johnDoe@camera-service.com',
        haveFb: 'https://facebook.com/profile-url',
      },
      {
        img: './images/social/businessphoto.webp',
        imgAlt: "Business's profile photo",
        haveMail: false,
        haveFb: 'https://facebook.com/profile-url',
      },
    ],
  },
  contactUs: {
    myZipNumber: '73132',
    myPhoneNumber: '22200 01119',
    mapLat: 35.51642,
    mapLong: 24.01796,
    mapZoom: 19,
    markerUrl: 'https://goo.gl/maps/sCwxmAypgNDUZysa7',
  },
}

export default themeData
