import { render, screen, logRoles } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import { server } from "../../../mocks/server";
import OrderEntry from "../OrderEntry";

test("handles error for scoops and toppings routes", async () => {
  server.resetHandlers(
    http.get("http://localhost:3030/scoops", () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get("http://localhost:3030/toppings", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

 const {container} = render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");
  logRoles(container);
  
  expect(alerts).toHaveLength(2);
});
