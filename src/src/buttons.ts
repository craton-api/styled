import styled from "@emotion/styled";
import colors from '../interfaces/colors'

const buttons = (colors: colors) => {
  const lang = styled.button({
    height: "100%",
    width: "60px",
    padding: "5px",
    border: "none",
    background: "none",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    ":hover": {
      color: "black",
    },
  });

  const Span = styled.span({
    color: "#DFF3E4",
  });

  const H3 = styled.h3({
    color: "rgba(255, 255, 255, 0.8)",
    textShadow: "1px 1px 1px black",
    fontWeight: 800,
    fontSize: "calc(38px + 2vmin)",
  });

  return { H3, Span, lang };
};

export default buttons;
