import * as React from "react";
import "../styles/notepad.css";
export class Table extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
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
      <div contentEditable={true} id="table"></div>
    );
  }
}
interface Props {}
