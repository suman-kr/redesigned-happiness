import * as React from 'react';
import {
  Card,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Labels } from './Labels';

export const buttonStyle: React.CSSProperties = {
  marginBottom: '5px',
};

export class LabelsCollapse extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Card
        style={{ borderRadius: '0px', minWidth: '100px', maxWidth: '150px' }}
      >
        <ExpansionPanel style={{ color: '#5e0909' }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Labels</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails
            style={{ flexDirection: 'column', padding: '5px' }}
          >
            <Labels
              filterCard={this.props.filterCard}
              unsetFilter={this.props.unsetFilter}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    );
  }
}

interface Props {
  filterCard: (e: string) => void;
  unsetFilter: () => void;
}
