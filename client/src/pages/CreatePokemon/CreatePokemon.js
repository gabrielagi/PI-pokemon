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

import defaultImage from "../../assets/basepokemon.png";

import Notification from "../../components/Notification/Notification";

const CreatePokemon = () => {
  const dispatch = useDispatch();
  const allTypes = useSelector((pokemonData) => pokemonData.pokemonTypes);

  const [notificationVisible, setNotificationVisible] = useState(true);

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
    img: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Si el campo que estás cambiando es "types", crea un nuevo array de objetos
    if (name === "types") {
      const updatedTypes = pokemonData.types.map((type) => ({
        name: type,
      }));

      setPokemonData({
        ...pokemonData,
        types: [...updatedTypes, { name: value }],
      });
    } else {
      setPokemonData({
        ...pokemonData,
        [name]: value,
      });
    }

    setError(validation({ ...pokemonData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = validation(pokemonData); // Validar nuevamente antes de enviar los datos
    setError(updatedErrors);

    // Verifico si no hay errores en la validación
    if (Object.keys(updatedErrors).length === 0) {
      // Crear un pokemon con la información de pokemonData
      const pokemon = {
        name: pokemonData.name,
        hp: Number(pokemonData.hp),
        attack: Number(pokemonData.attack),
        defense: Number(pokemonData.defense),
        speed: Number(pokemonData.speed),
        height: Number(pokemonData.height),
        weight: Number(pokemonData.weight),
        img: pokemonData.img, //img: defaultImage
        types: pokemonData.types,
      };
      console.log("URL de la imagen:", pokemonData.img);

      // Enviar los datos al servidor
      dispatch(postPokemon(pokemon));

      // Actualiza el mensaje de la notificación y muestra la notificación
      setNotificationVisible(true);

      // Restablecer el formulario
      setPokemonData({
        name: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      });
    }
  };

  const handleTypeSelect = (event) => {
    const selectedType = event.target.value;

    if (selectedType === "default") {
      // No hagas nada si se selecciona el valor por defecto
      return;
    }

    // Verifico si ya hay dos tipos seleccionados
    if (pokemonData.types.length < 2) {
      // Agrego el tipo seleccionado a la lista de tipos en el formato correcto
      setPokemonData({
        ...pokemonData,
        types: [...pokemonData.types, { name: selectedType }],
      });
      // Limpio el error si se estaba mostrando uno
      setError({ ...errors, types: "" });
    } else {
      // Muestro un error si ya se seleccionaron dos tipos
      setError({ ...errors, types: "You can only select up to two types." });
    }
  };

  function handleClick(event) {
    event.preventDefault();
    setPokemonData({
      ...pokemonData,
      types: pokemonData.types.filter((type) => type.name !== event.target.id),
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
              title="Only letters are allowed without special characters"
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
              title="Only numbers are allowed"
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
              title="Only numbers are allowed"
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
              title="Only numbers are allowed"
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
              title="Only numbers are allowed"
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
              title="Only numbers are allowed"
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
              title="Only numbers are allowed"
              onChange={handleChange}
            />
          </InputContainer>
          <InputContainer>
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
                    {type.name}
                  </option>
                ))}
              </StyledSelect>

              {/* Mostrar los tipos seleccionados con los estilos */}
              <SelectedTypesContainer>
                {pokemonData.types.map((selected) => (
                  <SelectedType key={selected.name}>
                    <SelectedTypeOption>{selected.name}</SelectedTypeOption>
                    <SelectedTypeButtonOption
                      id={selected.name}
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
      {notificationVisible && (
        <Notification onClose={() => setNotificationVisible(false)} />
      )}
    </CreatePokemonContainer>
  );
};

export default CreatePokemon;
