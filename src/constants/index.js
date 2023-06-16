import { planet1IMG, planet2IMG, planet3IMG, planet4IMG, planet5IMG,
  vrpanoIMG, headsetIMG, planet6IMG, planet7IMG, planet8IMG, twitterIMG,
  linkedinIMG, facebookIMG, instagramIMG } from '../assets'
export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: planet1IMG,
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: planet2IMG,
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: planet3IMG,
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: planet4IMG,
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: planet5IMG,
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: vrpanoIMG,
    title: 'A new world',
    subtitle:
        'We have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: headsetIMG,
    title: 'More realistic',
    subtitle:
        'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: planet6IMG,
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
        'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: planet7IMG,
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
        'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: planet8IMG,
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
        'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: twitterIMG,
  },
  {
    name: 'linkedin',
    url: linkedinIMG,
  },
  {
    name: 'instagram',
    url: instagramIMG,
  },
  {
    name: 'facebook',
    url: facebookIMG,
  },
];

export const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  // hero section
  heroHeading:
      'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
  heroDText:
      'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
};