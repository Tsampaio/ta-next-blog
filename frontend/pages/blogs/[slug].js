import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState, useEffect } from 'react';
import { singleBlog, listRelated } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import DisqusThread from '../../components/DisqusThread';
import styles from './slug.module.css';
import 'react-quill/dist/quill.core.css';
// import 'react-quill/dist/quill.snow.css';

// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/tomorrow-night-blue.css';
// import 'highlight.js/styles/atom-one-dark.css';

const SingleBlog = ({ blog, query }) => {
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      if (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setRelated(data);
        }
      }
    });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name="description" content={blog.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
      <meta property="og:description" content={blog.mdesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="col-md-4" key={i}>
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  const showComments = () => {
    return (
      <div>
        <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`} />
      </div>
    );
  };

  // const highlightedCode = renderHTML(hljs.highlightAuto('const name = "Hello"').value);
  const highlightedCode = 'const name = 20';
  console.log(blog.body);
  console.log(query);
  return (
    <>
      {head()}
      <Layout>
        <main>
          <article>
            <div className="container-fluid">
              <section>
                <div className="row" style={{ marginTop: '-30px' }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className={`img img-fluid ${styles.featuredImage}`}
                  />
                </div>
              </section>

              <section className="mt-3">
                <div className="container">
                  <div className={styles.blogNavigation} aria-label="breadcrumb">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href={`${DOMAIN}`}>
                          <a className="mr-1 ml-1 mt-3">Blogs</a>
                        </Link>
                      </li>

                      <li className={`${styles.navActive} breadcrumb-item active`}>{query.slug}</li>
                    </ul>
                  </div>
                  <h1 className={`pb-3 pt-3 text-center font-weight-bold ${styles.blogTitle}`}>
                    {blog.title}
                  </h1>
                </div>
              </section>
            </div>

            <div className="container">
              <section>
                <div className={`col-md-12 lead ${styles.blogBody} ql-editor`}>
                  {renderHTML(blog.body)}
                </div>
              </section>
            </div>

            <div className="container">
              <section>
                <div className="pb-3">
                  {showBlogCategories(blog)}
                  {showBlogTags(blog)}
                </div>
              </section>
              <section>
                <p className="lead mt-3 mark">
                  Written by{' '}
                  <Link href={`/profile/${blog.postedBy.username}`}>
                    <a>{blog.postedBy.username}</a>
                  </Link>{' '}
                  | Published - {moment(blog.updatedAt).format('d MMMM yy')}
                </p>
              </section>
            </div>

            <div className="container">
              <h4 className="text-center py-4 h2">Related blogs</h4>
              <div className="row">{showRelatedBlog()}</div>
            </div>

            <div className="container pb-5">{showComments()}</div>
          </article>
        </main>
      </Layout>
    </>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
