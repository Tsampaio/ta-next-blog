import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: '',
  });

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`,
      });
    });
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({ ...values, search: e.target.value, searched: false, results: [] });
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="px-4 py-4 bg-white">
        {message && <p className="text-muted font-italic">{message}</p>}

        {results.map((blog, i) => {
          return (
            <>
              <div key={i}>
                <Link href={`/blogs/${blog.slug}`}>
                  <a className="text-primary">{blog.title}</a>
                </Link>
              </div>
              {i !== results.length - 1 ? <hr /> : ''}
            </>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div>
        <input
          type="search"
          className="form-control w-100 mb-3"
          placeholder="Search blogs"
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-block btn-outline-primary" type="submit">
        Search
      </button>
    </form>
  );

  return (
    <div className="mb-4">
      <div className="pb-3">{searchForm()}</div>
      {searched && <ul>{searchedBlogs(results)}</ul>}
    </div>
  );
};

export default Search;
