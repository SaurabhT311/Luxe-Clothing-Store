import React from 'react'
import CategoryItem from '../Category-Item/CategoryItem'
import './Dashboard.scss'

const Dashboard = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Dashboard;
