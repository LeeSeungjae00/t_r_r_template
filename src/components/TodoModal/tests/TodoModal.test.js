import { render } from "@testing-library/react";
import TodoModal from "../TodoModal";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

describe('TodoModal', () => {
  // it('renders 스냅샷 TEST', () => {
  //   const component = render(<TodoModal
  //     modifyContents={'snapshot'}
  //     setIsModal={jest.fn}
  //     setModifyContents={jest.fn}
  //     onModifyTodo={jest.fn}
  //   ></TodoModal>)
  //   expect(component.container).toMatchSnapshot()
  // })

  describe('모달 동작 기능 TEST', () => {
    let modifyContents = 'TEST'
    let setIsModal;
    let overlay
    beforeEach(() => {
      setIsModal = jest.fn()
      render(<TodoModal setIsModal={setIsModal}></TodoModal>)
      overlay = screen.getByRole('Overlay')
    })

    it('모달 밖의 TodoModal-Overlay 를 클릭했을 때 onCloseModal 이 호출되는지', () => {
      userEvent.click(overlay)
      expect(setIsModal).toHaveBeenCalledTimes(1)
    })

  })

})