import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // Importa el Provider de Redux
import FilterOrder from "../components/FilterOrder/FilterOrder";
import store from "../redux/store"; // Importa tu store de Redux

// Necesito envolver tu componente FilterOrder con un Provider de Redux para que las pruebas tengan acceso al contexto de Redux y a las acciones de Redux

describe("FilterOrder component", () => {
  it("renders without crashing", () => {
    // Compruebo que el componente FilterOrder se renderice sin errores y que el botón "Filter / Order" esté visible en la pantalla
    const { getByText, queryByText } = render(
      // Envuelve el componente en el Provider de Redux y proporciona el store
      <Provider store={store}>
        <FilterOrder />
      </Provider>
    );

    const filterOrderButton = getByText("Filter / Order");
    fireEvent.click(filterOrderButton);

    expect(queryByText("Filter x Type")).toBeInTheDocument();
    fireEvent.click(filterOrderButton);
  });

  it("toggles content when button is clicked", () => {
    // Compruebo que el contenido se muestre u oculte cuando se hace clic en el botón "Filter / Order"

    const { getByText, queryByText } = render(
      <Provider store={store}>
        <FilterOrder />
      </Provider>
    );
    const filterOrderButton = getByText("Filter / Order");

    fireEvent.click(filterOrderButton);
    expect(queryByText("Filter x Type")).toBeInTheDocument();

    fireEvent.click(filterOrderButton);
    expect(queryByText("Filter x Type")).not.toBeInTheDocument();
  });
});
