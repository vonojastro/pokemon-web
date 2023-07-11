import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    alignItems: "center",
    textTransform: "capitalize",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "60vh",
    lineHeight: "0.1rem",
  },
  statsList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "100%",
  },
  images: {
    display: "flex",
    margin: "10px 0px",
    padding: "20px 0px",
    justifyContent: "center",
    backgroundColor: "lightBlue",
  },
}));
export default useStyles;
