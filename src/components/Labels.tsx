import * as React from 'react';
import { Button } from '@material-ui/core';
export class Labels extends React.PureComponent<Props, State> {
  render() {
    return (
      <>
        <Button
          color='primary'
          variant='contained'
          style={{marginBottom: '5px'}}
          onClick={() => {
            if (this.props.setColor) this.props.setColor('#3f51b5');
            if(this.props.togglePopover) this.props.togglePopover();
          }}
        >
          Urgent
        </Button>
        <Button
          color='secondary'
          variant='contained'
          style={{marginBottom: '5px'}}
          onClick={() => {
            if (this.props.setColor) this.props.setColor('#f50057');
            if(this.props.togglePopover) this.props.togglePopover();
          }}
        >
          Work
        </Button>
        <Button
          variant='contained'
          style={{marginBottom: '5px', backgroundColor: 'yellowgreen'}}
          onClick={() => {
            if (this.props.setColor) this.props.setColor('yellowgreen');
            if(this.props.togglePopover) this.props.togglePopover();
          }}
        >
          Later
        </Button>
      </>
    );
  }
}

interface State {}

interface Props {
  setColor?: (e: string) => void;
  togglePopover?: () => void;
}
