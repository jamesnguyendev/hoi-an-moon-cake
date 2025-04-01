import { fetchGraphQLCms } from '../../lib/utils';
import { CmsToVercelProduct } from './mappers';
import { getArticleSameTopic, getArticlesQuery, getArticlesQueryBySlug } from './query';

export async function getArticles() {
  const articlesData = await fetchGraphQLCms(getArticlesQuery);

  return (
    articlesData?.data?.articles_connection.nodes.map((item: any) => CmsToVercelProduct(item)) || []
  );
}

export async function getArticleBySlug({ params }) {
  const article = await fetchGraphQLCms(getArticlesQueryBySlug, params);

  return (
    article?.data?.articles_connection.nodes.map((item: any) => CmsToVercelProduct(item)) || []
  );
}
export async function getArticleByTheSameTopic(type: any) {
  const typeObj = JSON.parse(JSON.stringify({ name: type }));

  const topics = await fetchGraphQLCms(getArticleSameTopic, typeObj);

  return topics?.data?.articles_connection.nodes.map((item: any) => CmsToVercelProduct(item)) || [];
}
