import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { search } from '../services/pokedex';
import { useInView } from 'react-intersection-observer';

export default function useSearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(searchParams.entries());

  const nextPage = async () => {
    usableSearchParams.page = parseInt(usableSearchParams.page) + 1;
    setSearchParams(usableSearchParams);
    const moreResults = await search(usableSearchParams);
    setSearchResults(searchResults.concat(moreResults.results));
  };

  const infiniteScrollRef = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) nextPage();
    },
  }).ref;

  return {
    nextPage,
    searchParams,
    searchResults,
    setSearchResults,
    infiniteScrollRef,
  };
}
