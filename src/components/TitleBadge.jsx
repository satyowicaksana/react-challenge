import React from 'react';
import './TitleBadge.css'

export default (props) => {
  return (
    <div className="title-badge">
      { props.title }
    </div>
  )
}