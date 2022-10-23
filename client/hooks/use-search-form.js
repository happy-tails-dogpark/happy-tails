import { useSearchParams } from 'react-router-dom';

export default function useSearchForm() {
  const [searchParams, setSearchParams] = useSearchParams();
  const usableSearchParams = Object.fromEntries(searchParams.entries());
  return {
    searchForm: usableSearchParams,
    setSearchForm: setSearchParams,
  };
}
