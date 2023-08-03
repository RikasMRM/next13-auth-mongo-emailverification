import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import LoginPage from "../../src/app/login/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("axios");
const mockedAxios = require("axios");
mockedAxios.post.mockResolvedValue({ data: { message: "Login success" } });

describe("LoginPage", () => {
  it("should handle email input correctly", () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });
});
