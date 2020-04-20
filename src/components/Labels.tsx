import * as React from 'react';
import { Button } from '@material-ui/core';
import { buttonStyle } from './LabelsCollapse';
export class Labels extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <Button color='primary' variant='contained' style={buttonStyle}>
          Label 1
        </Button>
        <Button color='secondary' variant='contained' style={buttonStyle}>
          Label 2
        </Button>
        <Button color='default' variant='contained' style={buttonStyle}>
          Label 3
        </Button>
      </>
    );
  }
}
