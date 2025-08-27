import Link from 'next/link';
import { getAllContent } from '../../lib/markdown';

export default function Reviews() {
  const reviews = getAllContent('reviews');

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Reviews</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Read honest reviews of educational tools, courses, books, and learning platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <article key={review.slug} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">{review.frontMatter.title}</h2>
                <p className="text-gray-600 mb-4">{review.frontMatter.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Rating: {review.frontMatter.rating || 'N/A'}</span>
                  <Link
                    href={`/${review.frontMatter.category}/${review.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read Review →
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No reviews found in this category.</p>
        )}
      </div>
    </div>
  );
}