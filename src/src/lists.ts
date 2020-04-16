import styled from "@emotion/styled";
import colors from '../interfaces/colors'


const text = (colors: colors) => {
  return Object.freeze({
    ColumnUl: styled.ul({
      display: "flex",
      flexDirection: "column",
      height: "auto",
      width: "100%",
      margin: '0px',
      padding: "0px"
    }),
    SmallLi: styled.li({
      listStyle: "none",
      width: "100%",
      height: "auto",
      padding: "0px",
      margin: "0px",    
      alignItems: "center",
      justifyContent: "left",
      display: "flex",
    }),
    SubUl: styled.ul({
      color: colors.dark,
    }),
    SubLi: styled.li({
      color: "#DFF3E4",
    }),
  });
};

export default text;
