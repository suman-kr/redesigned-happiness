import * as React from 'react';
import { Button } from '@material-ui/core';
export class Labels extends React.PureComponent<Props, State> {
  render() {
    return (
      <>
        <Button
          color='primary'
          variant='contained'
          style={{ marginBottom: '5px' }}
          onClick={() => {
            if (this.props.setColor) this.props.setColor('#3f51b5');
            if (this.props.togglePopover) this.props.togglePopover();
            if (this.props.filterCard) this.props.filterCard('#3f51b5');
            if (this.props.onChangeTaskLabel)
                this.props.onChangeTaskLabel(this.props.index, '#3f51b5');
          }}
        >
          Urgent
        </Button>
        <Button
          color='secondary'
          variant='contained'
          style={{ marginBottom: '5px' }}
          onClick={() => {
            if (this.props.setColor) this.props.setColor('#f50057');
            if (this.props.togglePopover) this.props.togglePopover();
            if (this.props.filterCard) this.props.filterCard('#f50057');
            if (this.props.onChangeTaskLabel)
                this.props.onChangeTaskLabel(this.props.index, '#f50057');
          }}
        >
          Work
        </Button>
        <Button
          variant='contained'
          style={{ marginBottom: '5px', backgroundColor: 'yellowgreen' }}
          onClick={() => {
            if (this.props.setColor) this.props.setColor('yellowgreen');
            if (this.props.togglePopover) this.props.togglePopover();
            if (this.props.filterCard) this.props.filterCard('yellowgreen');
            if (this.props.onChangeTaskLabel)
                this.props.onChangeTaskLabel(this.props.index, 'yellowgreen');
          }}
        >
          Later
        </Button>
        {this.props.showRemoveFilter === 1 &&  <Button
          variant='contained'
          style={{ marginBottom: '5px', backgroundColor: 'gray' }}
          disableRipple
          disableTouchRipple
          onClick={() => {
            if (this.props.togglePopover) this.props.togglePopover();
            if (this.props.unsetFilter) this.props.unsetFilter();
          }}
        >
          Remove Filter
        </Button>
        }
      </>
    );
  }
}

interface State {}

interface Props {
  setColor?: (e: string) => void;
  togglePopover?: () => void;
  filterCard?: (e: string) => void;
  onChangeTaskLabel?: (e: number, i: string) => void;
  index?: number;
  unsetFilter?: () => void;
  showRemoveFilter: number;
}
