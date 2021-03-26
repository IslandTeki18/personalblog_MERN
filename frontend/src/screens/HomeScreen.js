import { useDispatch, useSelector } from "react-redux";
import { listPosts } from "../actions/postActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useEffect } from "react";
import moment from "moment";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <>
      {/* Hero Section */}
      <section id="home-hero-section">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Island Teki Blog</h1>
            <p className="lead">
              Teki in Samoan means "tech". Here you'll be able to read simple
              blog posts about what landon is using and learning. If you're a
              software or hardware engineer, having a blog is very beneficial
              for your learning process.
            </p>
          </div>
        </div>
      </section>
      {/* Blog List */}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <section id="home-blog-list-section">
          <div className="container-fluid py-4">
            <div className="row">
              {posts.map((post) => (
                <div className="col-4">
                  <div className="card">
                    <img
                      src={post.postImage}
                      className="card-img-top"
                      alt="postimage"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">
                        <small className="text-muted">
                          Created {moment(post.createdAt).calendar()}
                        </small>
                      </p>
                      <p className="card-text desc-truncate">{post.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Info Section */}
      <section id="home-info-section">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h1 className="display-5">What this blog is about...</h1>
              </div>
              <div className="col-5">
                <p className="lead">
                  This is my onmine journal of my findings and learning anything
                  and everything technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
