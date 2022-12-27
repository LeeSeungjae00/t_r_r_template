import { EX } from "./../../interfaces/EX";
// src/hooks/
import { AxiosError } from "axios";
import { useMutation, UseMutationResult } from "react-query";
import { exPost } from "api/exApi";

export default function useAddTodoMutation(): UseMutationResult<
  EX,
  AxiosError,
  EX
> {
  return useMutation(() => exPost({exp : "121"}), {
    onSuccess: (data) => {
      console.log(data); // mutation 이 성공하면 response를 받을 수 있다.
    },
    onError: (error) => {
      // mutation 이 에러가 났을 경우 error를 받을 수 있다.
      console.error(error);
    },
  });
}
