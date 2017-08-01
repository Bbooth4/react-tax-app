// import React, { PropTypes } from 'react';
import React from 'react';
import { Card } from 'react-materialize';
import '../../styles/App.css';

const Articles = ({ post }) => {
  return (
    <Card className='white darken-1 hoverable' title={post.title} actions={[<a href={post.url}>{post.title}</a>]}>
      {post.description}
    </Card>
  )
}

export default Articles;
