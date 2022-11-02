import { renderHook } from "@testing-library/react"
import { useEffect } from "react"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil"
import { inputLengthState, inputState } from 'recoil/todo'

describe("inputState", () => {
  it('state 의 값의 초기값이 빈문자열인지 TEST', () => {
    const { result } = renderHook(() => useRecoilValue(inputState), {
      wrapper: RecoilRoot
    })

    expect(result.current).toEqual("");
  })
  it('input state 의 길이가 0일 때 inputLengthState가 길이가 0을 반환하는지', () => {
    const inputData = '0123456789';
    const { result } = renderHook(() => {
      const setinputQuery = useSetRecoilState(inputState);
      useEffect(() => {
        setinputQuery(inputData)
      }, [setinputQuery])
      return useRecoilValue(inputLengthState)
    }, {
      wrapper: RecoilRoot
    });

    expect(result.current).toEqual(inputData.length)
  })
  it('input state 의 길이가 0일 때 inputLengthState가 길이가 0을 반환하는지', () => {
    const { result } = renderHook(() => {
      return useRecoilValue(inputLengthState)
    }, {
      wrapper: RecoilRoot
    });

    expect(result.current).toEqual("길이가 0")
  })
})