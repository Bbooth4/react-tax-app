// import React, { PropTypes } from 'react';
import React from 'react';
import { Card } from 'react-materialize';
import '../../styles/App.css';

const Articles = ({ article }) => {
  return (
    <Card className='white darken-1 hoverable' title={article.title} actions={[<a href={article.url}>{article.title}</a>]}>
      {article.description}
    </Card>
  )
}

export default Articles;
