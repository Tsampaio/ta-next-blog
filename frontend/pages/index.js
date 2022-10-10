import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import { listBlogsWithCategoriesAndTags } from '../actions/blog';
import Card from '../components/blog/Card';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../config';
import Search from '../components/blog/Search';
import styles from './index.module.css';
import Sidebar from '../components/Sidebar';

import 'highlight.js/styles/base16/dracula.css';

const Index = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {
  const head = () => (
    <Head>
      <title>Programming blogs | {APP_NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta property="og:title" content={`Latest web developoment tutorials | ${APP_NAME}`} />
      <meta
        property="og:description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
      <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const [limit, setLimit] = useState(blogsLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalBlogs);
  const [loadedBlogs, setLoadedBlogs] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([...loadedBlogs, ...data.blogs]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-primary btn-lg">
          Load more
        </button>
      )
    );
  };

  const showAllBlogs = () => {
    return blogs?.map((blog, i) => {
      // ()
      return (
        <React.Fragment key={i}>
          <article className={`${styles.blogBackground} cardBorder`}>
            <Card blog={blog} />
          </article>
          <hr />
        </React.Fragment>
      );
    });
  };

  // const showAllCategories = () => {
  //   return categories.map((c, i) => (
  //     <Link href={`/categories/${c.slug}`} key={i}>
  //       <a className={`mr-2`}>{c.name.toUpperCase()}</a>
  //     </Link>
  //   ));
  // };

  // const showAllTags = () => {
  //   return tags.map((t, i) => (
  //     <Link href={`/tags/${t.slug}`} key={i}>
  //       <a className={`mr-2`}>{t.name.toUpperCase()}</a>
  //     </Link>
  //   ));
  // };

  const showLoadedBlogs = () => {
    return loadedBlogs.map((blog, i) => (
      <React.Fragment key={i}>
        <article className={`${styles.blogBackground} cardBorder`}>
          <Card blog={blog} />
        </article>
        <hr />
      </React.Fragment>
    ));
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main className={styles.allBlogsCtn}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div>{showAllBlogs()}</div>
                <div>{showLoadedBlogs()}</div>
              </div>
              <div className={`col-12 col-lg-4`}>
                <Sidebar categories={categories} tags={tags} />
              </div>
            </div>
          </div>

          <div className="text-center pt-5 pb-5">{loadMoreButton()}</div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticProps(context) {
  let skip = 0;
  let limit = 5;
  return listBlogsWithCategoriesAndTags(skip, limit).then((data) => {
    if (data?.error) {
      console.log(data.error);
    } else {
      return {
        props: {
          blogs: data?.blogs,
          categories: data?.categories,
          tags: data?.tags,
          totalBlogs: data?.size,
          blogsLimit: limit,
          blogSkip: skip,
        },
      };
    }
  });
}

export default withRouter(Index);
