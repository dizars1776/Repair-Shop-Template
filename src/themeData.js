// Edit this if you want to change the content of the page!
const themeData = {
  header: {
    title: 'camera',
    subTitle: 'service shop',
    menuItems: [
      ['services', '#services'],
      ['cost estimate', '#call-to-action'],
      ['contact us', '#contact-us'],
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
        title: 'Camera body service',
        mainText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lectus ac nulla lobortis pharetra et eget massa.',
        img: 'images/services/camera-service-1.webp',
        imgAlt: 'camera body service',
      },
      {
        id: 'camera-lens-sensor-cleaning',
        title: 'Camera lens and sensor cleaning',
        mainText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lectus ac nulla lobortis pharetra et eget massa. Nam interdum turpis in lorem lacinia, eu tincidunt leo tincidunt.',
        img: 'images/services/camera-service-2.webp',
        imgAlt: 'camera lens cleaning',
      },
      {
        id: 'camera-accessories-repairs',
        title: 'Camera accessories repairs',
        mainText:
          'Aenean dignissim orci eget quam ultrices consectetur quis quis magna. Aenean eu ultrices sapien. Quisque quis lobortis risus.',
        img: 'images/services/camera-service-3.webp',
        imgAlt: 'camera accessories service',
      },
    ],
  },
  procedure: {
    title: 'Repair order instructions',
    ariaLabel: 'Repair procedure',
    liItems: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'sed do eiusmod tempor incididunt ut labore',
      'et dolore magna aliqua',
    ],
    iconList: [
      {
        text: 'We repair every camera brand',
      },
      {
        text: '25 years of experience',
      },
      {
        text: 'Satisfied customers',
      },
    ],
  },
  social: {
    socialProfiles: [
      {
        name: 'John Doe',
        img: './images/social/profilephoto.webp',
        imgAlt: 'Owners profile photo',
        haveMail: 'mailto:johnDoe@camera-service.com',
        haveFb: 'https://facebook.com/profile-url',
        type: 'Personal profile',
      },
      {
        name: 'Camera Service',
        img: './images/social/businessphoto.webp',
        imgAlt: 'Business profile photo',
        haveMail: false,
        haveFb: 'https://facebook.com/profile-url',
        type: 'Business profile',
      },
    ],
  },
  contactUs: {
    myAddress: 'Pl. El. Venizelou',
    myCity: 'Chania',
    myZip: '73132',
    myState: 'Crete',
    myPhone: '22200 01119',
    mapLat: 35.51642,
    mapLong: 24.01796,
    mapZoom: 19,
    markerUrl: 'https://goo.gl/maps/sCwxmAypgNDUZysa7',
  },
}

export default themeData
