import CategoryItem from './components/category-item/category-item';
// import './categories.scss';
import Directory from './components/directory/directory';


const App = () => {

  // An array that contains object that reflect what we have in there.
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://e7.pngegg.com/pngimages/587/966/png-clipart-flight-jacket-ma-1-bomber-jacket-clothing-canada-goose-jacket-thumbnail.png'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/women.png'

    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ]

  return (
    <Directory categories={categories}/>
  );
};

export default App;