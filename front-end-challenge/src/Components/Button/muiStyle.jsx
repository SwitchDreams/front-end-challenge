const Button = {
    width: "100%",
    height: "50px",
    borderRadius: "10px",
    background: "#F87C0F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30px",
    border: "none",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "26px",
    color: "white",

    '&.Mui-disabled': {
        opacity: "0.7",
        background: "#F87C0F",
    }
}

const muiStyle = {
    Button,
}

export default muiStyle;