// import './App.css
import { useEffect, useState } from "react";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Headlines from './pages/HeadlinesPage.jsx';
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
      <Headlines articles={articles} />
      <Footer />
    </>
  )
}

export default App
