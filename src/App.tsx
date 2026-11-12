// src/App.tsx
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleForm from "./components/ArticleForm";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import type { Article } from "./Interface/Article";
import "./App.css";

function App() {
  // 1. Initialisation de l'état avec le localStorage (JSON.parse)
  const [articles, setArticles] = useState<Article[]>(() => {
    const savedArticles = localStorage.getItem("articles");
    return savedArticles ? JSON.parse(savedArticles) : [];
  });

  // AJOUT : État pour stocker le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Sauvegarde automatique dans le localStorage à chaque modification (JSON.stringify)
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  // 3. Fonction pour ajouter un nouvel article
  const handleAddArticle = (newArticleData: Omit<Article, "id" | "createdAt">) => {
    const newArticle: Article = {
      ...newArticleData,
      id: Date.now().toString(), // ID unique basé sur le timestamp
      createdAt: new Date().toLocaleDateString(), // Date du jour
    };

    // On ajoute le nouveau article au début de la liste
    setArticles([newArticle, ...articles]);
  };

  // AJOUT : Filtrer les articles en fonction de ce qui est tapé dans la recherche (par titre ou contenu)
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* l'entête de la page */}
      <Header />

      {/* On intègre le formulaire en lui passant la fonction d'ajout */}
      <ArticleForm onAddArticle={handleAddArticle} />

      {/* Barre de recherche */}
      <SearchBar 
        searchBarPrompt="Rechercher..." 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm} 
      />

      {/* Section pour afficher les articles filtrés */}
      <section className="articles-section">
        <h2>Mes Articles ({filteredArticles.length})</h2>
        {filteredArticles.length === 0 ? (
          <p>Aucun article trouvé.</p>
        ) : (
          <ArticleList articles={filteredArticles} />
        )}
      </section>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;