export function CmsToVercelProduct(item: any) {
  return {
    title: item.title,
    documentId: item.documentId,
    handle: item.slug || '#',
    description: item.description || '',
    image: item.cover?.url || '/images/no-image.jpg',
    authorName: item.author?.name || 'Chưa có tên',
    category: item.category?.name || 'Chưa có danh mục',
    createdAt: item.createdAt,
    body: item.richText || '',
  };
}
