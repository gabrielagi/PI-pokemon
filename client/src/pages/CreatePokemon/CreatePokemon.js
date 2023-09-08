import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../redux/actions/postPokemon/action";
import validation from "./Validation/Validation";
import {
  CreatePokemonContainer,
  FormContainer,
  InputContainer,
  StyledLabel,
  StyledInput,
  ErrorMsg,
  ImageOverlay,
  PokemonTypeContainer,
  StyledSelect,
  SelectedTypesContainer,
  SelectedType,
  SelectedTypeOption,
  SelectedTypeButtonOption,
  SubmitButton,
} from "./CreatePokemon.styled-component";

import pokedex from "../../assets/pokedex.png";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((pokemonData) => pokemonData.pokemonTypes);

  const [pokemonData, setPokemonData] = useState({
    name: "",
    img: "", //"../../assets/basepokemon.png"
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [errors, setError] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const handleChange = (event) => {
    setPokemonData({
      ...pokemonData,
      [event.target.name]: event.target.value,
    });
    setError(
      validation({ ...pokemonData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = validation(pokemonData); // Validar nuevamente antes de enviar los datos
    setError(updatedErrors);

    // Verificar si ambos campos están llenos antes de enviar los datos al método login
    // if (userData.email.trim() !== "" && userData.password.trim() !== "") {
    //   if (Object.keys(updatedErrors).length === 0) {
    //     login(userData);
    //   }
    // }
  };

  // function handleChecked(event) {
  //   if (event.target.checked) {
  //     setPokemonData({
  //       ...pokemonData,
  //       types: [...pokemonData.types, event.target.value],
  //     });

  //     setError(
  //       validation({
  //         ...pokemonData,
  //         types: [...pokemonData.types, event.target.value],
  //       })
  //     );
  //   } else if (!event.target.checked) {
  //     setPokemonData({
  //       ...pokemonData,
  //       types: pokemonData.types.filter((type) => type !== event.target.value),
  //     });

  //     setError(
  //       validation({
  //         ...pokemonData,
  //         types: pokemonData.types.filter(
  //           (type) => type !== event.target.value
  //         ),
  //       })
  //     );
  //   }
  // }
  const handleTypeSelect = (event) => {
    const selectedType = event.target.value;

    if (selectedType === "default") {
      // No hagas nada si se selecciona el valor por defecto
      return;
    }

    // Verifica si ya hay dos tipos seleccionados
    if (pokemonData.types.length < 2) {
      // Agrega el tipo seleccionado a la lista de tipos
      setPokemonData({
        ...pokemonData,
        types: [...pokemonData.types, selectedType],
      });
    } else {
      // Muestra un mensaje de error si ya se seleccionaron dos tipos
      setError({ ...errors, types: "You can only select up to two types." });
    }
  };

  function handleClick(event) {
    event.preventDefault();
    setPokemonData({
      ...pokemonData,
      types: pokemonData.types.filter((type) => type !== event.target.id),
    });
  }

  return (
    <CreatePokemonContainer>
      <ImageOverlay src={pokedex} />
      <FormContainer>
        <form action="POST" onSubmit={handleSubmit}>
          <InputContainer>
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
            <StyledLabel>Pokemon Name:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="text"
              value={pokemonData.name}
              name="name"
              placeholder="Pokemon Name"
              required
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.img && <ErrorMsg>{errors.img}</ErrorMsg>}
            <StyledLabel>Pokemon Image:</StyledLabel>
            <StyledInput
              placeholder="Pokemon image Link"
              autoComplete="off"
              type="text"
              value={pokemonData.img}
              name="img"
              required
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.hp && <ErrorMsg>{errors.hp}</ErrorMsg>}
            <StyledLabel>Pokemon hp:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="text"
              value={pokemonData.hp}
              name="hp"
              placeholder="Pokemon level of hp"
              required
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.attack && <ErrorMsg>{errors.attack}</ErrorMsg>}
            <StyledLabel>Pokemon attack:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="text"
              value={pokemonData.attack}
              name="attack"
              placeholder="Pokemon level of attack"
              required
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.defense && <ErrorMsg>{errors.defense}</ErrorMsg>}
            <StyledLabel>Pokemon defense:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="text"
              value={pokemonData.defense}
              name="defense"
              placeholder="Pokemon level of defense"
              required
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.speed && <ErrorMsg>{errors.speed}</ErrorMsg>}
            <StyledLabel>Pokemon speed:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="text"
              value={pokemonData.speed}
              name="speed"
              placeholder="Pokemon speed"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.height && <ErrorMsg>{errors.height}</ErrorMsg>}
            <StyledLabel>Pokemon height:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="decimal"
              value={pokemonData.height}
              name="height"
              placeholder="Pokemon height"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {errors.weight && <ErrorMsg>{errors.weight}</ErrorMsg>}
            <StyledLabel>Pokemon weight:</StyledLabel>
            <StyledInput
              autoComplete="off"
              type="decimal"
              value={pokemonData.weight}
              name="weight"
              placeholder="Pokemon weight"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
            {/* Alinea "Pokemon Type" y el select a la izquierda */}
            <PokemonTypeContainer>
              <StyledSelect
                value="default"
                name="type"
                onChange={handleTypeSelect}
              >
                <option disabled value="default">
                  Select up to two Types
                </option>
                {allTypes.map((type) => (
                  <option value={type.name} key={type.name}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </option>
                ))}
              </StyledSelect>

              {/* Mostrar los tipos seleccionados con los estilos */}
              <SelectedTypesContainer>
                {pokemonData.types.map((selected) => (
                  <SelectedType key={selected}>
                    <SelectedTypeOption>
                      {selected.charAt(0).toUpperCase() + selected.slice(1)}
                    </SelectedTypeOption>
                    <SelectedTypeButtonOption
                      id={selected}
                      onClick={handleClick}
                    >
                      x
                    </SelectedTypeButtonOption>
                  </SelectedType>
                ))}
              </SelectedTypesContainer>
            </PokemonTypeContainer>
            <SubmitButton type="submit">Crear Pokemon</SubmitButton>
          </InputContainer>
        </form>
      </FormContainer>
    </CreatePokemonContainer>
  );
};

export default CreatePokemon;
