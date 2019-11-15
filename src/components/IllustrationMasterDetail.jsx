import React from 'react';
import { Link } from "react-router-dom";
import { Column, Row } from "simple-flexbox";
import { useQuery } from '@apollo/react-hooks';

import { illustrationGql } from './illustration';
import withApolloProvider from './withApolloProvider';
import IllustrationList from './IllustrationList';
import IllustrationDetails from './IllustrationDetails';

const IllustrationMasterDetail = ({ baseUrl, match }) => {
  const fullLink = `${baseUrl}/${match.params.illustration_link}`;
  const { loading, error, data } = useQuery(illustrationGql);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const illustrations = data.catalogue.children;
  const illustration = match.params.illustration_link
    ? illustrations.find(i => i.link === fullLink)
    : null;

  return (
    <>
      <Link className='menu' to={`/illustrations`}>
        <h1>Snowball Digital Illustrations</h1>
      </Link>
      <Row horizontal="spaced">
        <Column flexGrow={1} style={{ minWidth: '165px', width: '35%' }}>
          <IllustrationList illustrations={illustrations} />
        </Column>
        <Column flexGrow={1} style={{ width: '75%' }}>
          <IllustrationDetails illustration={illustration} />
        </Column>
      </Row>
    </>
  )
};

const WrappedComponent = withApolloProvider(IllustrationMasterDetail, 'https://api.crystallize.com/graphql');

export default WrappedComponent;
