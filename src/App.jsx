// import './App.css
import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Headlines from './pages/HeadlinesPage.jsx';
import ArticleSummary from "./pages/ArticleSummaryPage.jsx";
import ErrorPage from './pages/ErrorPage.jsx';
import { getArticles } from "./utils/articleData.js";

function App() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticles();
    if (data instanceof Error) {
      setArticles([]);
    } else {
      // The / in the ids interferes with routing to a specific article as the produced URL is not valid 
      // THE FIX: Modify the article ids here by replacing "/" with "-"
      const modifiedArticles = data.map(item => ({
        ...item,
        id: item.id.replaceAll("/", "-")
      }));
      setArticles(modifiedArticles);
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
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
