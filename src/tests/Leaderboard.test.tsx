// import { render, screen, waitFor } from "@testing-library/react";
// import { vi, describe, it, expect } from "vitest";

// globalThis.fetch = vi.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve([
//       { id: 1, username: "Alpha" },
//       { id: 2, username: "Bravo" },
//       { id: 3, username: "Charlie" }
//     ])
//   })
// ) as unknown as typeof fetch;

// describe("Leaderboard", () => {
//   it("renders loading and then a list", async () => {
//     render(<Leaderboard />);

//     expect(screen.getByText(/Loading leaderboard/i)).toBeInTheDocument();

//     await waitFor(() => {
//       expect(screen.getByText(/Alpha|Bravo|Charlie/)).toBeInTheDocument();
//     });

//     // should show points text for at least one player
//     expect(screen.getAllByText(/pts/).length).toBeGreaterThan(0);
//   });
// });
