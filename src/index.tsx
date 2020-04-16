import colors from "./interfaces/colors";
import React, { createContext, useState } from "react";

import Buttons from "./src/buttons";
import Modals from "./src/modals";
import Images from "./src/images";
import Lists from "./src/lists";
import Divs from "./src/divs";
import Texts from "./src/texts";



const styled = () => {
  const darkTheme = {
    primary: "#18FF6D",
    secondary: "#285238",
    tertiary: "#00FF00",
    light: "#138A36",
    dark: "#34403A",
  };

  const makeStyled = (colors: colors) => {
    return {
      lists: Lists(colors),
      modals: Modals(colors),
      images: Images(colors),
      texts: Texts(colors),
      divs: Divs(colors),
      buttons: Buttons(colors),
    };
  };

  const initialState = makeStyled(darkTheme);

  const [theme, setState] = useState(initialState);

  const setTheme = (newcolors: colors) => {
    const newState = makeStyled(newcolors);
    setState(newState);
  };

  const ThemeStore = createContext([theme, setTheme]);


  const ThemeProvider = (props: any) => {
    return (
      <ThemeStore.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeStore.Provider>
    );
  };

  return {ThemeProvider, ThemeStore};
};

export default styled();
