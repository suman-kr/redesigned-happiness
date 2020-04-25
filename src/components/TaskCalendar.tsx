import * as React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import { Snackbar } from '@material-ui/core';
import { Alerts } from './Alerts';

export class TaskCalendar extends React.PureComponent<Props, State> {
  state = {
    toggleAlert: false,
    assignedTask: 0
  };

  toggleAlert = () => {
    this.setState({ toggleAlert: !this.state.toggleAlert });
  }

  alertify = () => (
    <Snackbar
      open={this.state.toggleAlert}
      autoHideDuration={1500}
      onClose={this.toggleAlert}
    >
      <Alerts onClose={this.toggleAlert} severity={'info'}>
        Tasks: {this.state.assignedTask}
      </Alerts>
    </Snackbar>
  )
  showAllDates = (date: string) => {
    this.setState({
      assignedTask: this.props.taskDates.filter((e) => e === date).length
    });
  }
  render() {
    return [
      <Calendar
        onClickDay={(e) => { this.showAllDates(moment(e).format('YYYY-MM-DD')); this.toggleAlert(); }}
      />,
      this.alertify()
    ];
  }
}
interface Props {
  taskDates: string[];
}
interface State {
  toggleAlert: boolean;
  assignedTask: number;
}
