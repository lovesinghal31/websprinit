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
    img: './src/assets/370210331_785735253305440_4044220795915801_n.webp',
    title: 'TechHunterssss',
    author: 'techXchane-meetup',
  },
  {
    img: './src/assets/371418579_1322772091960811_4185986814030058177_n (1).jpg',
    title: 'Google Cloud Facilitator Program 2023',
    author: '',
  },
  {
    img: './src/assets/Snapins.ai_398806538_877804683700843_3179143676200567401_n_1080.jpg',
    title: 'Code Quest',
    author: 'Hackethon on HackeRank',
  },
  {
    img: './src/assets/386387457_1443136846249221_8005438878321973709_n.webp',
    title: 'Hacktober-fest',
    author: 'for Open Source Contributions',
  },
  {
    img: './src/assets/378076462_610241454634021_1353493218009976438_n.webp',
    title: 'Invento',
    author: 'Techfest ',
  },
  {
    img: './src/assets/Snapins.ai_395006795_151011091428240_7330992774361628503_n_1080.jpg',
    title: 'Opensource Workshop ',
    author: '',
  },
  {
    img: './src/assets/Snapins.ai_400191592_7067596153262570_3167590708174003889_n_1080.jpg',
    title: 'CODE SERIES',
    author: '',
  },
 {
    img: '',
    title: './src/assets/Snapins.ai_429935470_902077235174999_3964520131432204679_n_1080.jpg',
    author: 'A 2 day event of 36 hours in person Hackathon',
  },
  {
    img: './src/assets/Snapins.ai_434005459_2833345210139113_8673731926301656614_n_1080.jpg',
    title: 'UI/UX Unleash',
    author: '',
  },
 
  {
    img: './src/assets/371418579_1322772091960811_4185986814030058177_n (2).jpg',
    title: ' Gen AI Study Jams',
    author: '28 Days WorkShope on Gen AI',
  },
];
