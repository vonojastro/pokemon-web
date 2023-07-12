import { render, screen, waitFor } from "@testing-library/react";
import Home from "../index";
import { Provider } from "react-redux";
import { store } from "../_app";

// jest.mock('../features/api/sample', () => ({
//   useGetPokemonByNameQuery: jest.fn().mockReturnValue({
//     data: {
//       name: 'Pikachu',
//       sprites: {
//         back_shiny: 'back_shiny_url',
//         front_shiny: 'front_shiny_url',
//       },
//       stats: [
//         { stat: { name: 'speed' }, base_stat: 90 },
//         { stat: { name: 'defense' }, base_stat: 80 },
//       ],
//     },
//     isLoading: false,
//     isError: false,
//   }),
// }));

describe("Home Component", () => {
  test("should render home", async () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByLabelText(/search/i)).toHaveAttribute('type', 'text');
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
});
