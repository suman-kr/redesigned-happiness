import * as React from "react";
import '../styles/notepad.css';
import { Dialog, DialogTitle, TextField, Button } from "@material-ui/core";
export class Table extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggleDialog: false,
      linkName: "",
      linkURL: "",
    };
  }
  createLink = () => {
    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", this.state.linkURL);
    const textNode = document.createTextNode(this.state.linkName);
    anchorTag.appendChild(textNode);
    const div = document.createElement("div");
    div.setAttribute("contenteditable", "false");
    div.appendChild(anchorTag);
    const notepadId = document.getElementById("table");
    notepadId?.appendChild(div);
  };

  insertLinkDialog = () => (
    <Dialog
      onClose={this.toggleDialog}
      open={this.state.toggleDialog}
      className={"dialog"}
    >
      <DialogTitle
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        Insert Link
      </DialogTitle>
      <TextField
        style={{ width: "80px", padding: "10px" }}
        placeholder={"Name:"}
        onChange={(e) => {
          this.setState({ linkName: e.target.value });
        }}
      ></TextField>
      <TextField
        style={{ padding: "10px" }}
        placeholder={"https://www.example.com"}
        onChange={(e) => {
          this.setState({ linkURL: e.target.value });
        }}
      ></TextField>
      <Button
        style={{
          textTransform: "capitalize",
          borderRadius: "0px",
          display: "block",
          margin: "auto",
          marginBottom: "6px",
        }}
        variant="contained"
        color="primary"
        onClick={() => {
          this.toggleDialog();
          this.createLink();
        }}
      >
        Insert
      </Button>
    </Dialog>
  );

  toggleDialog = () => {
    this.setState({ toggleDialog: !this.state.toggleDialog });
  };
  render() {
    return (
      /**
       * cAN BE USED LATER!!!!
       */
      //   <table id="table" contentEditable={true}>
      //     <tbody id="body">
      //       <tr className="row">
      //         <td id="data" contentEditable={true}>
      //         </td>
      //       </tr>
      //     </tbody>
      //   </table>
      <>
        <div contentEditable={true} id="table"></div>
        <Button
          variant="contained"
          className="card"
          onClick={this.toggleDialog}
          style={{
            borderRadius: "0px",
            background: "white",
            textTransform: "capitalize",
          }}
        >
          Link
        </Button>
        {this.insertLinkDialog()}
      </>
    );
  }
}
interface Props {}

interface State {
  toggleDialog: boolean;
  linkName: string;
  linkURL: string;
}
