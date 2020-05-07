import * as React from "react";
import "../styles/notepad.css";
import { Dialog, DialogTitle, TextField, Button } from "@material-ui/core";
export class Table extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      toggleDialog: false,
      linkName: "",
      linkURL: "",
      content: "",
      initialText: <span style={{ color: "darkgray" }}>Write from here..</span>,
    };
  }
  createLink = () => {
    const anchorTag = document.createElement("a");
    anchorTag.setAttribute("href", this.state.linkURL);
    const textNode = document.createTextNode(this.state.linkName);
    anchorTag.appendChild(textNode);
    const div = document.createElement("div");
    div.setAttribute("contenteditable", "false");
    div.style.display = "inline";
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
  onChangeContent = (e: string) => {
    let { content } = this.state;
    content = "";
    content += e;
    if (content.length === 0) {
      this.setState({
        initialText: (
          <span style={{ color: "darkgray" }}>Write from here..</span>
        ),
      });
    } else {
      this.setState({ initialText: <></> });
    }
    this.setState({ content });
  };
  onClickChange = () => {
    const { content } = this.state;
    if (content.length >= 0) {
      this.setState({ initialText: <></> });
    } else {
      this.setState({
        initialText: (
          <span style={{ color: "darkgray" }}>Write from here..</span>
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <div
          style={{
            marginBottom: "0.5em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button 
            onClick={this.toggleDialog}
            style={{
              color: "black",
              background: "white",
              fontSize: "16px",
              padding: "8px",
              border: "none",
              borderLeft: "5px solid",
              borderLeftColor: "red",
              cursor: "pointer",
            }}
          >
            Link
          </button>
        </div>

        <div
          contentEditable={true}
          id="table"
          onInput={(e) => {
            if (e.currentTarget.textContent)
              this.onChangeContent(e.currentTarget.textContent);
          }}
          suppressContentEditableWarning
          onClick={() => this.onClickChange()}
        >
          {this.state.initialText}
        </div>

        {this.insertLinkDialog()}
      </div>
    );
  }
}
interface Props {}

interface State {
  toggleDialog: boolean;
  linkName: string;
  linkURL: string;
  content: string;
  initialText: React.ReactElement;
}
