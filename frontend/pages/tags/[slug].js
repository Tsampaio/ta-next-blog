import Head from 'next/head';
import { useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
import Card from '../../components/blog/Card';
import Sidebar from '../../components/Sidebar';
import styles from './Tags.module.css';

const Tag = ({ tag, blogs, query, categories, tags }) => {
  useEffect(() => {
    if (!tag) {
      Router.push(`/`);
    }
  }, [tag]);

  const head = () => (
    <Head>
      <title>
        {tag?.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Best programming tutorials on ${tag?.name}`} />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${tag?.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Best programming tutorials on ${tag?.name}`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const tagBlogsTitle = () => {
    return blogs && blogs.length > 0
      ? `Blogs with tag: ${tag.name.toUpperCase()}`
      : 'No blogs with that category';
  };

  return (
    <>
      {head()}
      <Layout>
        <main className={styles.allBlogsCtn}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="display-5 font-weight-bold mb-4">{tagBlogsTitle()}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-lg-8">
                {blogs?.map((b, i) => (
                  <>
                    <article key={i} className={`cardBorder`}>
                      <Card key={i} blog={b} />
                    </article>
                    <hr />
                  </>
                ))}
              </div>
              <div className={`col-12 col-lg-4`}>
                <Sidebar categories={categories} tags={tags} />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      let skip = 0;
      let limit = 3;

      return listBlogsWithCategoriesAndTags(skip, limit).then((data2) => {
        if (data.error) {
          console.log(data.error);
          return '';
        } else {
          return {
            tag: data.tag,
            blogs: data.blogs,
            query,
            categories: data2.categories,
            tags: data2.tags,
          };
        }
      });
    }
  });
};

export default Tag;
