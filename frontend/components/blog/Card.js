import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import styles from './Card.module.css';

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className={`mr-1 ${i !== 0 ? 'ml-1' : ''} mt-3`}>{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className={`mr-1 ${i !== 0 ? 'ml-1' : ''} mt-3`}>{t.name}</a>
      </Link>
    ));

  console.log(blog.updatedAt);

  return (
    <div className="lead pb-4">
      <header>
        {/* <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
          </a>
        </Link> */}
        <section>
          <div className="row">
            <div className="col-12">
              <Link href={`/blogs/${blog.slug}`}>
                <a className={`${styles.blogTitle} mb-3`}>
                  <img
                    className={`img img-fluid ${styles.featuredImage}`}
                    style={{ maxHeight: '200px' }}
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
      </header>
      <section className={`${styles.blogSection} mt-4 mb-0 mb-md-4`}>
        <div className={`${styles.blogDate} pl-4 pr-4 ${styles.separator}`}>
          <h3>{moment(blog.updatedAt).format('DD')}</h3>
          <p>{moment(blog.updatedAt).format('MMMM yy')}</p>
        </div>
        <div className={`${styles.blogDetails} pl-4`}>
          <Link href={`/blogs/${blog.slug}`}>
            <a className={`${styles.blogTitle} mb-3`}>{blog.title}</a>
          </Link>

          <div className={`${styles.blogCategories}`}>
            <div className={`${styles.separator} ${styles.postedBy} pr-4`}>
              <h6>Posted by</h6>
              <h5>{blog.postedBy.username}</h5>
            </div>
            <div className={`${styles.separator} pl-0 pr-4 px-md-4`}>
              <h6>Categories</h6>
              <h5>{showBlogCategories(blog)}</h5>
            </div>
            <div className={`pl-0 pl-sm-4 ${styles.tags}`}>
              <h6>Tags</h6>
              <h5>{showBlogTags(blog)}</h5>
            </div>
          </div>
        </div>
        {/* <p className="mark ml-1 pt-2 pb-2">
          Written by{' '}
          <Link href={`/profile/${blog.postedBy.username}`}>
            <a>{blog.postedBy.username}</a>
          </Link>{' '}
          | Published {moment(blog.updatedAt).format('DD/MM/YYYY')}
        </p> */}
      </section>
      {/* <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br />
        <br />
      </section> */}

      {/* <div className="col-md-4">
          <section>
            <img
              className="img img-fluid"
              style={{ maxHeight: '150px', width: 'auto' }}
              src={`${API}/blog/photo/${blog.slug}`}
              alt={blog.title}
            />
          </section>
        </div> */}

      <section className="px-4">
        <div className={`${styles.blogPreview} pb-3`}>{renderHTML(blog.excerpt)}</div>
        <Link href={`/blogs/${blog.slug}`}>
          <a className="btn btn-primary pt-2">Read more</a>
        </Link>
      </section>
    </div>
  );
};

export default Card;
