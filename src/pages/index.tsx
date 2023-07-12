import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetPokemonByNameQuery } from "../features/api/sample";
import uuid from "react-uuid";
import CircleIcon from "@mui/icons-material/Circle";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPokemonFetch,
  getPokemonFetch,
} from "../redux/actions/pokemonActions";
import { Pokemon } from "@/dataTypes/pokemonData";
import Image from "next/image";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import { useEffect } from "react";
import { Autocomplete } from "@mui/material";

const defaultTheme = createTheme();

type FormValue = {
  query: string;
};

const Home = () => {
  const [formData, setFormData] = React.useState<FormValue>({
    query: "",
  });
  const [allData, setAllData] = React.useState<FormValue[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      query: "",
    },
  });

  const dispatch = useDispatch();
  const { pokemon, loading, error } = useSelector(
    (state: {
      pokemonReducer: { pokemon: Pokemon; loading: any; error: any };
    }) => state.pokemonReducer
  );

  const { pokemons } = useSelector(
    (state: {
      pokemonsReducer: { pokemons: Pokemon[]; loading: any; error: any };
    }) => state.pokemonsReducer
  );

  const pokemonOptions = pokemons?.map((p) => ({ label: p.name }));

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(getAllPokemonFetch({}));
    }
  }, [pokemons, dispatch]);
  const classes = useStyles();

  const MIN = 0;
  const MAX = 200;

  const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);

  const submit: SubmitHandler<FormValue> = (data) => {
    dispatch(getPokemonFetch({ argument: data.query.toLocaleLowerCase() }));
    reset();
    console.log(data);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://www.rappler.com/tachyon/2022/12/Pokemon-December-17-2022-003.jpg?resize=1280%2C900&zoom=1)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              mx: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography data-testid="title" component="h1" variant="h5">
              Search Pokemon
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(submit)}>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                type="text"
                label="Search"
                autoFocus
                {...register("query")}
              /> */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={pokemonOptions}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Search" />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              px: 3,
            }}
          >
            {pokemon?.name && !error && (
              <div className={classes.list}>
                <h4 className={classes.listItem} key={uuid()}>
                  {pokemon.name}
                </h4>
                {/* <p>Height: {pokemon.height}</p>
                  <p>Weight: {pokemon.weight}</p> */}
                <div className={classes.images}>
                  {pokemon.sprites && (
                    <>
                      <Image
                        src={pokemon?.sprites?.back_shiny}
                        alt="img"
                        width={150}
                        height={150}
                      />
                      <Image
                        src={pokemon?.sprites?.front_shiny}
                        alt="img"
                        width={150}
                        height={150}
                      />
                    </>
                  )}
                </div>
                <div className={classes.statsList}>
                  {pokemon?.stats?.map((st) => (
                    <div key={uuid()}>
                      <p style={{ fontSize: "0.8rem", lineHeight: "0.9rem" }}>
                        <strong style={{ textTransform: "uppercase" }}>
                          {st.stat.name}:
                        </strong>{" "}
                        {st.base_stat}%{" "}
                      </p>
                      <LinearProgress
                        variant="determinate"
                        value={normalise(st.base_stat)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!pokemon.name && !error && !loading && (
              <Box
                sx={{
                  my: 1,
                  mx: 3,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 style={{ textAlign: "center" }} data-testid="message">
                  Welcome
                </h2>
                <Image
                  src="https://www.hubpng.com/files/preview/960x1018/11578610696vzkng1nsfne4y68tzr3qhqml7ettrqh5fj2cd9xisn2jobmunmesktq4hkplzniyaz21qtszyrmbsd23jefx56wojuobq7hexpnp.png"
                  alt="img"
                  width={330}
                  height={330}
                />
              </Box>
            )}
            {pokemon && error && (
              <Box
                sx={{
                  my: 1,
                  mx: 3,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2 style={{ textAlign: "center", padding: "10px 0px" }}>
                  Pokemon not found
                </h2>
                <Image
                  src="https://cdn.quotesgram.com/img/31/14/2114400164-Sad_Pikachu_by_BeebarbX.jpg"
                  alt="img"
                  width={350}
                  height={300}
                />
              </Box>
            )}

            {loading && !pokemon.name && !error && (
              <Box
                sx={{
                  my: 1,
                  mx: 3,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CircularProgress />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
