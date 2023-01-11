// import CategoryItem from './components/category-item/category-item';
import Dashboard from '../../components/Dashboard/Dashboard'

const Home = () => {
  // An array that contains object that reflect what we have in there.
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl:
        'https://e7.pngegg.com/pngimages/587/966/png-clipart-flight-jacket-ma-1-bomber-jacket-clothing-canada-goose-jacket-thumbnail.png'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/women.png'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ]

  return <Dashboard categories={categories} />
}

export default Home
