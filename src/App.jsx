// import './App.css
import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Headlines from './pages/HeadlinesPage.jsx';
import ArticleSummary from "./pages/ArticleSummaryPage.jsx";
import { getArticles } from "./utils/articleData.js";

function App() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticles();
    if (data instanceof Error) {
      setArticles([]);
    } else {
      setArticles(data);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Headlines articles={articles} />} />
        <Route path="/article/:id" element={<ArticleSummary articles={articles} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
