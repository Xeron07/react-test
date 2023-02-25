import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("Checking if element present", () => {
  //rendering component
  const mock = jest.fn();
  render(<UserForm onUserSubmit={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  user.click(nameInput);
  user.keyboard("Hello");

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  user.click(emailInput);
  user.keyboard("hello@abc.com");

  const button = screen.getByRole("button");
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith("Hello", "hello@abc.com"); //passing two arg to the higher-order function/prop function.
});
