import * as React from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import {
  Snackbar,
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Typography
} from '@material-ui/core';
import { Alerts } from './Alerts';
import '../styles/index.css';
import { Date } from './TaskCard';
import MaterialTable from 'material-table'
export class TaskCalendar extends React.PureComponent<Props, State> {
  state = {
    toggleAlert: false,
    assignedTask: 0,
    toggleDialog: false,
    selectedDate: '',
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
  toggleDialog = () => {
    this.setState({ toggleDialog: !this.state.toggleDialog });
  }
  showTaskDialog = () => (
    <Dialog
      onClose={this.toggleDialog}
      open={this.state.toggleDialog}
      className={'dialog'}
    >
      <DialogTitle
        style={{ display: 'flex', justifyContent: 'center', padding: '10px', width: '62vh' }}
      >
        Tasks
      </DialogTitle>
      {this.props.mapDates[this.state.selectedDate] ? (
        <MaterialTable
          columns={[{ title: 'S No.', field: 'index' }, { title: 'Content', field: 'content' }]}
          options={{ toolbar: true, pageSize:5, paginationType: 'stepped' }}
          title=''
          data={this.props.mapDates[this.state.selectedDate].map((e, v) => (
            { 'index': v + 1, 'content': this.props.items[e] }
          ))}
        />
      ) : (
          <Typography variant='h2'>No tasks</Typography>
        )}
      <Button
        style={{
          textTransform: 'capitalize',
          borderRadius: '0px',
          display: 'block',
          margin: 'auto',
          marginBottom: '6px',
        }}
        variant='contained'
        color='primary'
        onClick={this.toggleDialog}
      >
        Close
      </Button>
    </Dialog>
  )
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
          this.setState({ selectedDate: moment(e).format('YYYY-MM-DD') });
          this.toggleDialog();

          // this.showTaskDialog(e);
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
      this.alertify(),
      this.showTaskDialog()
    ];
  }
}
interface Props {
  taskDates: string[];
  mapDates: Date;
  items: string[]
}
interface State {
  toggleAlert: boolean;
  assignedTask: number;
  toggleDialog: boolean;
  selectedDate: string;
}
