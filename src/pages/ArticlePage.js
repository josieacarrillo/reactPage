import { useParams } from 'react-router-dom';

const ArticlePage = () => {
const params = useParams();
const { articleId } = useParams();
    return (
        <h1>  This is the article page with the id: {articleId} </h1>
    );
}

export default ArticlePage;