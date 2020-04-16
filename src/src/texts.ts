import styled from "@emotion/styled";
import colors from '../interfaces/colors'

const text = (colors: colors) => {

  const QuoteHover: any = styled.p({
    color: colors.primary,
    opacity: 0,
    visibility: "hidden",
    height: 'auto',
    width: 'auto',
    maxWidth: "300px",
    padding: "10px",
    textAlign: "center",
    position: "absolute",
    background: colors.secondary,
    transition: '0.3s all'
  });

  const H3 = styled.h3({
    color: colors.primary,
    cursor: 'help',
    padding: 0,
    margin: 0,
    ":hover": {
      [QuoteHover]: {
        visibility: "visible",
        opacity: 1
      },
    },
  })

  const P = styled.span({
    color: "#DFF3E4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  });


  const Price = styled.h3({
    color: 'white',
    minWidth: "100px"
  })

  const Month = styled.span({
    fontSize: "24px"
  })


  return Object.freeze({
    QuoteHover,
    P,
    H3,
    H2: styled.h2({
      color: "rgba(255, 255, 255, 0.8)",
      textShadow: "1px 1px 1px black",
      fontWeight: 800,
      fontSize: "calc(38px + 2vmin)",
    }),
    Price,
    Month,
    Span: styled.span({
      color: "#DFF3E4",
    }),

  });
};

export default text;
