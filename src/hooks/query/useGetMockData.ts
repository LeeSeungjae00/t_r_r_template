import { AxiosError, AxiosResponse } from 'axios';
import { Mock } from 'interfaces/mock';
import { useQuery, useInfiniteQuery, QueryKey, UseQueryOptions } from 'react-query';
import * as QUERY_KEY from 'constant/queryKeys';
import { getMock } from 'api/exApi';

export function useGetMockData({
  storeCode,
  options,
}: {
  storeCode: QueryKey; // query key에 넣어줄 배열값
  options?: UseQueryOptions<AxiosResponse<Mock[]>, AxiosError, Mock[], QueryKey[]>; // useQuery의 options
}) {
  return useQuery([QUERY_KEY.MOCK_DATA, storeCode], getMock(), {
    select: ({ data }) => data,
    ...options,
  });
}
