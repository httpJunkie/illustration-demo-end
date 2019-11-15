import React from 'react';
import { Link } from "react-router-dom";

function IllustrationList({ illustrations }) {
  const listItems =
    illustrations.map(({ name, link, id }) => (
      <li key={`${name}-${id}`}>
        <Link className='menu' to={`${link}`}>{name}</Link>
      </li>
    ));

  return (
    <ul className={`illustration-list`}>
      {listItems}
    </ul>
  )
}

export default IllustrationList;