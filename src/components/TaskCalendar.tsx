import * as React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import { Snackbar } from '@material-ui/core';
import { Alerts } from './Alerts';
import '../styles/index.css';
import {Date} from './TaskCard';
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

  // shouldDateBeSelected = (a: Date) => {
  //   if(this.state.mapDates.includes(a)){
  //     console.log('include', a)
  //     return true;
  //   }
  //   return false;
  // }
  render() {
    return [
      <Calendar
        onClickDay={(e) => {
          this.showAllDates(moment(e).format('YYYY-MM-DD'));
          this.toggleAlert();
        }}
        // {this.props.mapDates?.map(e => {
        //   // tileC
        // })}
        // tileClassName={this.props.mapDates}
        // tileContent={this.props.mapDates?.map(e => e.date)}
        // tileClassName={({ date }) => {
        //   if (this.props.shouldDateBeSelected(date)) {
        //     console.log('hello', date);
        //     return 'react-calendar__tile--active';
        //   }
        //   return null;
        // }}
      />,
      this.alertify()
    ];
  }
}
interface Props {
  taskDates: string[];
  mapDates: Date;
}
interface State {
  toggleAlert: boolean;
  assignedTask: number;
}