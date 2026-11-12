import React, { useState } from "react";
import type { Article } from "../Interface/Article";

interface ArticleFormProps {
  onAddArticle: (article: Omit<Article, "id" | "createdAt">) => void;
}

const ArticleForm = ({ onAddArticle }: ArticleFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [messageErreur, setMessageErreur] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessageErreur("Le titre et le contenu sont obligatoires.");
      return;
    }

    setMessageErreur("");

    onAddArticle({
      title,
      content,
      category: category || "Général",
      author: author || "Anonyme",
    });

    // Reset des champs
    setTitle("");
    setContent("");
    setCategory("");
    setAuthor("");
  };

  return (
    <main className="main-content">
      <div className="card form-card">
        <h2>Entrez un nouvel Article</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de l'article"
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Catégorie (ex: Tech)"
            />
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Auteur"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Contenu de l'article..."
              rows={4}
            />
            <button type="submit" className="btn btn-primary">Ajouter</button>
          </div>
          {messageErreur && <p className="error-msg">{messageErreur}</p>}
        </form>
      </div>
    </main>
  );
};

export default ArticleForm;