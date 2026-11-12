// On importe l'interface Article pour dire à TypeScript de quoi est fait un article
import type {Article}  from "../Interface/Article";

// On crée le composant ArticleCard en lui passant les propriétés (les données) d'un article
const ArticleCard = ({ id, title, category, content, createdAt, author }: Article) => {
  return (
    <div>
      {/* Affiche le titre de l'article */}
      <h2>{title}</h2>
      
      {/* Affiche l'ID unique de l'article */}
      <p>ID: {id}</p>
      
      {/* Affiche la catégorie de l'article */}
      <p>Category: {category}</p>
      
      {/* Affiche le contenu principal */}
      <p>Content: {content}</p>
      
      {/* Affiche le nom de l'auteur */}
      <p>Author: {author}</p>
      
      {/* Affiche la date de création */}
      <p>Date: {createdAt}</p>
    </div>
  );
};

// On exporte le composant pour pouvoir l'utiliser dans la liste (ArticleList)
export default ArticleCard;