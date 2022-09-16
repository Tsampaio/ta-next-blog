import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import styles from './SmallCard.module.css';

const SmallCard = ({ blog }) => {
  return (
    <div className="card">
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <img
              className={`img img-fluid ${styles.blogImage}`}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </a>
        </Link>
      </section>

      <div className="card-body pb-0">
        <section>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h5 className="card-title">{blog.title}</h5>
            </a>
          </Link>
          <div className="card-text d-none d-lg-block">{renderHTML(blog.excerpt)}</div>
        </section>
      </div>

      <div className="card-body pt-1">
        Posted {moment(blog.updatedAt).fromNow()} by{' '}
        <Link href={`/profile/${blog.postedBy.username}`}>
          <a>{blog.postedBy.username}</a>
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
