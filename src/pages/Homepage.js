import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'; 

function Homepage() {

  const [selectedCategory, setSelectedCategory] = useState(''); 

  // for use on front end: 
  const bookCategories = [
    'select',
    "combined-print-and-e-book-fiction",
    "combined-print-and-e-book-nonfiction",
    "hardcover-fiction",
    "hardcover-nonfiction",
    "trade-fiction-paperback",
    "paperback-nonfiction", 
    "advice-how-to-and-miscellaneous",
    "childrens-middle-grade-hardcover",
    "picture-books", 
    "series-books",
    "young-adult-hardcover",
    "audio-fiction",
    "audio-nonfiction",
    "business-books",
    "graphic-books-and-manga",
    "mass-market-monthly",
    "middle-grade-paperback-monthly",
    "young-adult-paperback-monthly"
  ]

  let testURL = 'http://localhost:4000/api/nyt-bestsellers/category/hardcover-fiction'

  const handleClick = (e) => {
    this.setSelectedCategory({value: e.target.value});
    console.log(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCategory);
  }

  return (
    <div>
      <p>pages/Homepage</p>
      <form>
        <label>Category</label>
        <select value={selectedCategory} onChange={(e) => {setSelectedCategory(e.target.value)}}>
        {bookCategories.map((category) => (
              <option value={category} key={category}>{category}</option>
            ))}
        </select>
        <button>Submit</button>
      </form>
      <p>{selectedCategory}</p>

    </div>
  )
}

export default Homepage
