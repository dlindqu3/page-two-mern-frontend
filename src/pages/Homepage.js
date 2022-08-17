import React from 'react';
import { useState } from 'react';
import axios from 'axios'; 

function Homepage() {

  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [nytData, setNytData] = useState(""); 

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

  let baseURL = 'http://localhost:4000/api/nyt-bestsellers/category/'

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('selected category at submit: ', selectedCategory);
    let queryUrl = baseURL + selectedCategory; 
    console.log('queryUrl: ', queryUrl);  
    await axios.get(queryUrl)
      .then((res) => {
        let resArray = res.data.results.books; 
        console.log('res.data.results.books: ', resArray);
        setNytData(resArray); 
      })
  }

  return (
    <div>
      <p>pages/Homepage</p>
      <form onSubmit={handleSubmit}>
        <label>Category</label>
        <select value={selectedCategory} onChange={(e) => {setSelectedCategory(e.target.value)}}>
        {bookCategories.map((category) => (
              <option value={category} key={category}>{category}</option>
            ))}
        </select>
        <button>Submit</button>
      </form>
      <p>{selectedCategory && selectedCategory}</p>
      <div>{nytData && nytData.map((book) => {
        return <p key={book.title}>{book.title}</p>
      })}</div>

    </div>
  )
}

export default Homepage
