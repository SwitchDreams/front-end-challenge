
const Button = {
    width: "100vw",
    height: "50px",
    backgroundColor: "#D9D9D9",
    borderRadius: "0px",
    color: "#676767",
}

const SideBar = {
    width: 250, 
    height: "100%", 
    padding: "20px",
    backgroundColor: "#D9D9D9",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
}

const List = {
    width: "100%",
    height: "auto",
}

const Title = {
    fontSize: "25px",
    fontWeight: "700",
    paddingBottom: "10px",
}

const Check = {
    '&.Mui-checked': {
        color: "#F87C0F",
    }
}

const muiStyle = {
    Button,
    SideBar,
    List,
    Title,
    Check
}

export default muiStyle;