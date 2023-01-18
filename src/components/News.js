import React, { Component } from "react";
import Newsitem from "./Newsitem";
import { Audio } from "react-loader-spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    category: "sports",api:""
  };
  static propTypes = {
    category: PropTypes.string,
    api: PropTypes.string
  };


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=6`
    );
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      loading: false,
      page: this.state.page,
      total: parseddata.totalResults,
    });
  }
  pageSize = 6;
  nex = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.total / 6)) {
      this.setState({
        loading: true,
      });
      let data = await fetch(`https://newsapi.org/v2/top-headlines?category=${
        this.props.category
      }&apiKey=${this.props.api}&page=${
        this.state.page + 1
      }&pageSize=6
`);
      let parseddata = await data.json();
      this.setState({
        articles: parseddata.articles,
        loading: false,
        page: this.state.page + 1,
      });
    }
  };
  prev = async () => {
    this.setState({
      loading: true,
    });
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${
        this.props.category
      }&apiKey=${this.props.api}&page=${
        this.state.page - 1
      }&pageSize=6`
    );
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      loading: false,
      page: this.state.page - 1,
    });
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 style={{ textAlign: "center", color: this.props.mode==="light"?"black":"white"}}>Welcome to Ivu-Newsletter</h2>
          <div className="row mt-4">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4 my-2">
                  <Newsitem nes={element} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            className={`btn btn-${this.props.mode==="light"?"dark":"light"} `}
            disabled={this.state.page <= 1}
            onClick={this.prev}
          >
            Previous
          </button>
          {this.state.loading && (
            <Audio
              height="40"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
            />
          )}
          <button
            type="button"
            className={`btn btn-${this.props.mode==="light"?"dark":"light"} `}
            disabled={!(this.state.page + 1 <= Math.ceil(this.state.total / 6))}
            onClick={this.nex}
          >
            Next
          </button>
        </div>
      </>
    );
  }
}

export default News;
