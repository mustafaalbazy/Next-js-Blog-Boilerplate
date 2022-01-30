import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between blogs-list">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <div className="blogs-list-slug">
              <a>
                <h2>{elt.title}</h2>
              </a>
            </div>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'd LLL, yyyy')}
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
