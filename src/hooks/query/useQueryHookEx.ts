//src/hooks/queries/useKioskData.js
import {
  useQuery,
  useInfiniteQuery,
  QueryKey,
  UseQueryOptions,
} from "react-query";
import * as QUERY_KEY from "constant/queryKeys";
import { AxiosError, AxiosResponse } from "axios";
import { EX } from "interfaces/EX";
import { exGet } from "api/exApi";

export function useQueryHookEx({
  storeCode,
  options,
}: {
  storeCode: QueryKey; // query key에 넣어줄 배열값
  options?: UseQueryOptions<AxiosResponse<EX>, AxiosError, string, QueryKey[]>; // useQuery의 options
}) {
  return useQuery([QUERY_KEY.EX_DATA, storeCode], exGet(), {
    select: ({ data }) => data?.exp,
    ...options,
  });
}
