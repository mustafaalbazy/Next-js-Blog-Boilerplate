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
    <div className="text-base mb-2">Latest Blogs</div>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="justify-between blogs-list">
          <img src={elt.image} alt={elt.title}></img>
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <div className="blogs-list-slug">
              <a>
                <h2 className="text-2xl mt-12">{elt.title}</h2>
              </a>
            </div>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'd LLL, yyyy')}
          </div>
          <div className="mb-6 blogs-list">{elt.description}</div>
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
