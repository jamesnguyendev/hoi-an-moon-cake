import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Script from 'next/script';
import { Suspense } from 'react';
import { HIDDEN_PRODUCT_TAG } from '../../../lib/constants';
import { getProduct } from '../../../lib/saleor';
import ComboMooncakeProduct from '../components/ComboMooncakeProduct';
import DescriptionProduct from '../components/DescriptionProduct';
import MooncakeProduct from '../components/MooncakeProduct';
import ProductRelate from '../components/ProductRelate';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);
  const type = product?.productType;
  if (!product) return notFound();

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: product.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <div className="pt-28">
        <Suspense fallback={<p>Loading...</p>}>
          {type === process.env.ID_MOONCAKE ? (
            <MooncakeProduct product={product} />
          ) : (
            <ComboMooncakeProduct product={product} />
          )}
        </Suspense>
        <DescriptionProduct description={product.descriptionHtml} />
        <Suspense fallback={<div>Đang tải sản phẩm liên quan...</div>}>
          <ProductRelate id={type} />
        </Suspense>
      </div>
    </>
  );
}
