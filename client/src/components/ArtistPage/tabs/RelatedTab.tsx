import React from 'react';
import { IArtistTab } from './AboutTab';

const RelatedTab: React.FC<IArtistTab> = ({ artist }) => {
  return <div>Related {artist}</div>;
};

export default RelatedTab;
