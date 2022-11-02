import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import FormTest from "../FormTest";

describe('TestForm TEST', () => {
  let onSubmit;
  beforeEach(() => {
    onSubmit = jest.fn();
    render(<FormTest onSubmit={onSubmit} />);
  })

  it('Form 검증', async () => {
    //given
    const button = screen.getByRole('button', { name: "로그인" });

    userEvent.click(button);

    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
    expect(onSubmit).not.toHaveBeenCalled();
  })

  it('Form 제출 테스트 (성공)', async () => {
    const email = screen.getByRole("textbox", { name: "이메일" });
    const password = screen.getByLabelText("비밀번호");
    const button = screen.getByRole("button", { name: "로그인" });

    userEvent.type(email, "test@email.com");
    userEvent.type(password, "Test1234");
    userEvent.click(button);

    await waitFor(() =>
      expect(onSubmit).toHaveBeenCalledWith(
        {
          email: "test@email.com",
          password: "Test1234",
        },
        expect.anything()
      )
    );
    expect(screen.queryAllByRole("alert")).toHaveLength(0);
  })

  it('Form 제출 테스트 (실패)', async () => {
    const email = screen.getByRole("textbox", { name: "이메일" });
    const password = screen.getByLabelText("비밀번호");
    const button = screen.getByRole("button", { name: "로그인" });

    userEvent.type(email, "ㅋㅋㅋ");
    userEvent.type(password, "Test1234");
    userEvent.click(button);

    expect(screen.queryAllByRole("alert")).toHaveLength(0);

  })

})