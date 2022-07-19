import Router from 'next/router';
import { useEffect } from 'react';

const Blogs = () => {
  useEffect(() => {
    Router.push(`/`);
  }, []);

  return null;
};

export default Blogs;
