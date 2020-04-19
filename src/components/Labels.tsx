import * as React from "react";
import {
  Card,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const buttonStyle: React.CSSProperties = {
  marginBottom: '5px'
}

export class Labels extends React.PureComponent<{}, {}> {
  
  render() {
    return (
      <Card style={{ borderRadius: '0px', minWidth: '100px', maxWidth: '150px' }}>
        <ExpansionPanel style={{color: '#5e0909'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Labels</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ flexDirection: "column", padding: '5px'}}>
            <Button color='primary' variant='contained' style={buttonStyle}>Label 1</Button>
            <Button color='secondary' variant='contained' style={buttonStyle}>Label 2</Button>
            <Button color='default' variant='contained' style={buttonStyle}>Label 3</Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}
