import { Donation } from '.prisma/client';
import useSWR from 'swr';
import dynamic from 'next/dynamic';
import { Spinner } from '@geist-ui/react';

const ResultList = dynamic(() => import('../components/ResultList'), { ssr: false });

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
) => {
  const res = await fetch(input, init);
  return res.json();
};

const Result = () => {
  const { data } = useSWR<Donation[]>('api/get-all-donations', fetcher);

  if (!data) {
    return <Spinner />;
  }

  return (
    <ResultList donations={data} />
  );
};

export default Result;
