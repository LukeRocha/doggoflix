import img1 from './assets/movies/movie-1.png';
import img2 from './assets/movies/movie-2.png';
import img3 from './assets/movies/movie-3.png';
import img4 from './assets/movies/movie-4.png';
import img5 from './assets/movies/movie-5.png';
import img6 from './assets/movies/movie-6.png';
import img7 from './assets/movies/movie-7.png';
import img8 from './assets/movies/movie-8.png';
import img9 from './assets/movies/movie-9.png';
import img10 from './assets/movies/movie-10.png';
import img11 from './assets/movies/movie-11.png';
import img12 from './assets/movies/movie-12.png';
import img13 from './assets/movies/movie-13.png';
import img14 from './assets/movies/movie-14.png';
import img15 from './assets/movies/movie-15.png';
import img16 from './assets/movies/movie-16.png';
import img17 from './assets/movies/movie-17.png';
import img18 from './assets/movies/movie-18.png';
import img19 from './assets/movies/movie-19.png';
import img20 from './assets/movies/movie-20.png';
import img21 from './assets/movies/movie-21.png';
import img22 from './assets/movies/movie-22.png';
import img23 from './assets/movies/movie-23.png';
import img24 from './assets/movies/movie-24.png';

import cover1 from './assets/banners/hero-bg-1.png';
import cover2 from './assets/banners/hero-bg-2.png';
import cover3 from './assets/banners/hero-bg-3.png';
import cover4 from './assets/banners/hero-bg-4.png';
import cover5 from './assets/banners/hero-bg-5.png';
import cover6 from './assets/banners/hero-bg-6.png';
import cover7 from './assets/banners/hero-bg-7.png';

const slug = (t) => `/movies/${t.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;

const allMovies = [
  { id: 'm1', title: 'The Gasso', img: img1, alt: 'The Gasso poster', href: slug('The Gasso'), rating: 8.7 },
  { id: 'm2', title: 'Gasso Waves', img: img2, alt: 'Gasso Waves poster', href: slug('Gasso Waves'), rating: 8.5 },
  { id: 'm3', title: 'Kingasso', img: img3, alt: 'Kingasso poster', href: slug('Kingasso'), rating: 8.2 },
  { id: 'm4', title: 'Cypapai', img: img4, alt: 'Cypapai poster', href: slug('Cypapai'), rating: 7.9 },
  { id: 'm5', title: 'Ay Tchoy', img: img5, alt: 'Ay Tchoy poster', href: slug('Ay Tchoy'), rating: 8.1 },
  { id: 'm6', title: 'Spassogo', img: img6, alt: 'Spassogo poster', href: slug('Spassogo'), rating: 7.8 },
  { id: 'm7', title: 'Sassinho Man', img: img7, alt: 'Sassinho Man poster', href: slug('Sassinho Man'), rating: 8.0 },
  { id: 'm8', title: 'Beto Gasso', img: img8, alt: 'Beto Gasso poster', href: slug('Beto Gasso'), rating: 7.7 },
  { id: 'm9', title: 'Cassogue', img: img9, alt: 'Cassogue poster', href: slug('Cassogue'), rating: 7.9 },
  { id: 'm10', title: 'Ingasso Jones', img: img10, alt: 'Ingasso Jones poster', href: slug('Ingasso Jones'), rating: 8.3 },
  { id: 'm11', title: 'Bibopitchoy', img: img11, alt: 'Bibopitchoy poster', href: slug('Bibopitchoy'), rating: 7.6 },
  { id: 'm12', title: 'Ne gasso Z', img: img12, alt: 'Ne gasso Z poster', href: slug('Ne gasso Z'), rating: 8.4 },
  { id: 'm13', title: 'Mamassoy Chef', img: img13, alt: 'Mamassoy Chef poster', href: slug('Mamassoy Chef'), rating: 7.8 },
  { id: 'm14', title: 'Stardust Crusader', img: img14, alt: 'Stardust Crusader poster', href: slug('Stardust Crusader'), rating: 7.5 },
  { id: 'm15', title: 'Ne Gasso Z II', img: img15, alt: 'Ne Gasso Z II poster', href: slug('Ne Gasso Z II'), rating: 8.1 },
  { id: 'm16', title: 'Pitcho COP', img: img16, alt: 'Pitcho COP poster', href: slug('Pitcho COP'), rating: 7.6 },
  { id: 'm17', title: 'Willstellar', img: img17, alt: 'Willstellar poster', href: slug('Willstellar'), rating: 7.9 },
  { id: 'm18', title: 'Power Bessa', img: img18, alt: 'Power Bessa poster', href: slug('Power Bessa'), rating: 8.0 },
  { id: 'm19', title: 'Resident WIll', img: img19, alt: 'Resident WIll poster', href: slug('Resident WIll'), rating: 7.4 },
  { id: 'm20', title: 'Nega Souls', img: img20, alt: 'Nega Souls poster', href: slug('Nega Souls'), rating: 7.7 },
  { id: 'm21', title: 'Mistery Besso', img: img21, alt: 'Mistery Besso poster', href: slug('Mistery Besso'), rating: 7.8 },
  { id: 'm22', title: '007 - Golden Bessa', img: img22, alt: '007 - Golden Bessa poster', href: slug('007 - Golden Bessa'), rating: 7.6 },
  { id: 'm23', title: 'Cy sero zy patas', img: img23, alt: 'Cy sero zy patas poster', href: slug('Cy sero zy patas'), rating: 7.9 },
  { id: 'm24', title: 'BessaWill Burton', img: img24, alt: 'BessaWill Burton poster', href: slug('BessaWill Burton'), rating: 8.2 },
];
export const favouriteMovies = [
  allMovies[1],
  allMovies[17],
  allMovies[6],
  allMovies[0],
  allMovies[23],
  allMovies[8],
  allMovies[4],
  allMovies[10],
  allMovies[2],
  allMovies[14],
];

export const rankedMovies = [
  allMovies[3],
  allMovies[19],
  allMovies[5],
  allMovies[7],
  allMovies[12],
  allMovies[13],
  allMovies[15],
  allMovies[16],
  allMovies[11],
  allMovies[20],
];


export const trendingMovies = [
  { ...allMovies[19] },
  { ...allMovies[17] },
  { ...allMovies[23] },
  { ...allMovies[21] },
  { ...allMovies[11] },
  { ...allMovies[13] },
  { ...allMovies[9] },
  { ...allMovies[22] },
  { ...allMovies[8] },
  { ...allMovies[3] },
];

export const movieCovers = [
  { id: 'b1', title: 'Hero 1', img: cover1, alt: 'Hero banner 1' },
  { id: 'b2', title: 'Hero 2', img: cover2, alt: 'Hero banner 2' },
  { id: 'b3', title: 'Hero 3', img: cover3, alt: 'Hero banner 3' },
  { id: 'b4', title: 'Hero 4', img: cover4, alt: 'Hero banner 4' },
  { id: 'b5', title: 'Hero 5', img: cover5, alt: 'Hero banner 5' },
  { id: 'b6', title: 'Hero 6', img: cover6, alt: 'Hero banner 6' },
  { id: 'b7', title: 'Hero 7', img: cover7, alt: 'Hero banner 7' },
];

export default { favouriteMovies, rankedMovies, trendingMovies, movieCovers };
