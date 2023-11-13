import { describe, expect, it } from "vitest";

import App from "./App";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Simple working test", () => {
    it("the title is visible", () => {
        render(<App />);

        const welcomeText = screen.getByText(/Vite \+ React/i);

        screen.debug(welcomeText);

        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
    });

    it("should increment count on click", async () => {
        render(<App />);

        userEvent.click(screen.getByRole("button"));
        userEvent.click(screen.getByTestId("count-button"));

        expect(await screen.findByText(/count is 2/i)).toBeInTheDocument();
    });
});
