import styled from "@emotion/styled";
import colors from '../interfaces/colors'

const modals = (colors: colors) => {
  return Object.freeze({
    LoginModal: styled.div({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      height: "auto",
      width: "30vw",
      color: colors.light,
      background: colors.dark,
      position: "absolute",
      right: "0px"
    }),
    LangWrapper: styled.div({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: colors.dark,
    }),
    LoginWrapper: styled.div({
      width: "200px",
      background: colors.dark,
    }),
    PriceWrapper: styled.div({
      display: "flex",
      height: "100%",
      width: "100%",
      background: "black",
      paddingBottom: "100px",
    }),
    PriceBox: styled.div({
      display: "flex",
      margin: "auto",
      padding: "10px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      height: "auto",
      width: "25vw",
      background: colors.dark,
      opacity: 0.7,
      marginTop: '15vh',
      borderRadius: "10px",
      border: `1px ${colors.secondary} solid`,
    }),
    RequestExampleBox: styled.div({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "200px",
      height: "auto",
      width: "25vw",
      color: colors.light,
      background: colors.dark,
      position: "absolute",
      right: "0px"
    }),

  });
};

export default modals;
