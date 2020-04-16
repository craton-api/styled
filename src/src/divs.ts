import styled from "@emotion/styled";
import colors from '../interfaces/colors'

const divs = (colors: colors) => {
  return Object.freeze({
    Flex: styled.div({
      position: "relative",
      display: "flex",
    }),
    Header: styled.div({
      height: "70vh",
      position: "relative",
      display: "flex",
    }),
    SolutionsMenu: styled.div({
      height: "40vh",
      width: "15vw",
      position: "absolute",
      background: colors.dark,
      right: "5vw",
      top: "25vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }),
    WhiteBackground: styled.div({
      minHeight: "100vh",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
    }),
  });
};

export default divs;
