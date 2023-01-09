import ArticlesList from"../components/ArticlesList";
import articles from './article-content';
const ArticlesListPage = () => {
    return (
    <>
        <h1>Articles and resources that helped me on my journey...</h1>
        <ArticlesList articles={articles}/>
        </>
    );
}

export default ArticlesListPage;