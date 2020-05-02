import * as React from "react";
import '../styles/notepad.css';
export class Table extends React.Component<Props, {}> {
  tableStyle: React.CSSProperties = {
    maxWidth: "500px",
    maxHeight: "500px",
    background: "white",
    border: "1px solid black",
    width: "500px",
    height: "500px",
  };
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <table id="table">
        <tbody id="body">
          <tr className="row">
            <td id="data" contentEditable={true}>
              <div className="block"></div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
interface Props {}
