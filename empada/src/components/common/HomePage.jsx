import React, { Component } from 'react';
import { Row, Col, Slider, Slide, Card } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/App.css';
import Articles from '../articles/Articles.jsx';
// import initialState from '../../reducers/index.js';
import * as postsActions from '../../actions/postsActions';
// import * as types from '../../actions/actionTypes';
import { browserHistory } from 'react-router';

// const posts = initialState.posts;

// const loadArticles = () => {
//   const allPost = {
//     type: types.LOAD_POSTS,
//     posts: posts
//   }
//   console.log(posts);
//   this.socket.send(JSON.stringify(allPost));
// }

// loadArticles();

// componentDidMount() {

// }

class HomePage extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }


  redirectToAddCoursePage = () => {
    browserHistory.push('/course');
  }

  render() {
    const { articles } = this.props;

    const overflow = {
      'overflow': 'auto',
      'overflow-y': 'hidden',
      'height': '400px'
    }
    return (
      <main className='align'>
        <Row>
          <Col s={12} m={8} id='sliding-cards'>
            <Slider>
              <Slide
                src="concert.jpg">
              </Slide>
              <Slide
                src="Event-Management-Banner.jpg"
                placement="left">
              </Slide>
              <Slide
                src="event-planning-and-management.jpg"
                placement="right">
              </Slide>
            </Slider>
          </Col>
          <Col s={12} m={4} id='articles' style={overflow}>
            <Card className='white darken-1 hoverable' title='Frozen Account' actions={[<a href='#'>This is a link</a>]}>
              A series of things that can be said to tell you about how to solve your frozen account issue.
            </Card>
            <Card className='white darken-1 hoverable' title='Garnished Wages' actions={[<a href='#'>This is a link</a>]}>
              A series of things that can be said to tell you about how to solve your garnished wages issue.
            </Card>
            <Card className='white darken-1 hoverable' title='CRA Letters' actions={[<a href='#'>This is a link</a>]}>
              A series of things that can be said to tell you about how to solve your CRA letters issue.
            </Card>
            {/*{
              articles.map(article => {
                return <Articles
                  article={article}
                  key={article.id}
                />
              })
            }*/}
          </Col>
        </Row>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <section className="container iconRow z-10">
          <Row className="section">

            <Col s={12} m={4} className="icons card-panel hoverable z-10">
              <div className="icon-block">
                <h2 className="center blue-text text-darken-2"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Frozen Account</h5>

                <p className="light">A series of things that can be said to tell you about how to solve your frozen account issue.</p>
              </div>
            </Col>

            <Col s={12} m={4} className="icons card-panel hoverable z-10">
              <div className="icon-block">
                <h2 className="center blue-text text-darken-2"><i className="material-icons">group</i></h2>
                <h5 className="center">Garnished Wages</h5>

                <p className="light">A series of things that can be said to tell you about how to solve your garnished wages issue.</p>
              </div>
            </Col>

            <Col s={12} m={4} className="icons card-panel hoverable z-10">
              <div className="icon-block">
                <h2 className="center blue-text text-darken-2"><i className="material-icons">settings</i></h2>
                <h5 className="center">CRA Letters</h5>

                <p className="light">A series of things that can be said to tell you about how to solve your CRA letters issue.</p>
              </div>
            </Col>

          </Row>
        </section>
        
      </main>   
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
