// On importe le type Article et le composant ArticleCard qu'on va utiliser en boucle
import type { Article } from "../Interface/Article";
import ArticleCard from "./ArticleCard";

// On définit ce que le composant attend comme données (un tableau d'articles)
interface ArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {/* On parcourt le tableau d'articles pour afficher une carte pour chaque article */}
      {articles.map((article) => (
        // key={article.id} est obligatoire pour que React identifie chaque élément de la liste
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;