import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
  return (
    // <ImageList >
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
      {itemData.map((item) => (
        <ImageListItem key={item.img} className='bg-gray-300'>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
      </div>
    // </ImageList>
  );
}

const itemData = [
  {
    img: './src/assets/Compose Camp.jpg',
    title: 'Compose Camp',
    author: ' 3 Day  workshope about the Jetpack Compose(Andorid framework) by Google.',
  },
  {
    img: './src/assets/Snapins.ai_420854505_7510010345728074_3158417655438708594_n_1080.jpg',
    title: 'Intro to Machine Learning',
    author: 'Explore ML fundamentals and network',
  },
  {
    img: './src/assets/338914928_605667961141642_6142937004483739776_n.jpg',
    title: 'Cod-A-thon',
    author: 'competitive programming competition',
  },
  {
    img: '.src/assets/367954670_317366417392540_5396755925906354815_n.webp',
    title: 'TechUnleash',
    author: 'tech session in M Block Audi',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'TechHunterssss',
    author: 'techXchane-meetup',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Google Cloud Facilitator Program 2023',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Code Quest',
    author: 'Hackethon on HackeRank',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Hacktober-fest',
    author: 'for Open Source Contributions',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Invento',
    author: 'Techfest ',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'hack Vento ',
    author: 'A 2 day event of 12 hours coding marathon at  IET Campus',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Opensource Workshop ',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Devfest Indore 23',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'CODE SERIES',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Moi Blockchain DevX Bootcamp',
    author: 'Blockchain & Peer to Peer (P2P)',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Introduction to Flutter',
    author: 'fundamentals of flutter',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Google Cloud Study Jam Felicitation Ceremony',
    author: 'Felicitation Ceremony in B Block room 101',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'HackHive partnered with techhunters',
    author: 'A 2 day event of 36 hours in person Hackathon',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'UI/UX Unleash',
    author: '',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Visit to WTM Indore',
    author: 'Visit to WTM Indore',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: 'evfest Indore 23',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: ' Gen AI Study Jams',
    author: '28 Days WorkShope on Gen AI',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: 'evfest Indore 23',
  },
];
