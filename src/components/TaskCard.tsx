import * as React from 'react';
import {
  Container,
  Card,
  CardContent,
  TextField,
  IconButton,
  Snackbar,
  Tooltip
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/index.css';
import { LabelsCollapse } from './LabelsCollapse';
import { TaskLabel } from './TaskLabel';
import 'animate.css';
import { Alerts } from './Alerts';
import 'react-calendar/dist/Calendar.css';
import { TaskCalendar } from './TaskCalendar';
import moment from 'moment';
export class TodoCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [''],
      filter: [{ display: 'block', color: 'gray' }],
      toggleAlert: false,
      type: 'success',
      alertMessage: '',
      taskDates: [''],
      mapDates: {}
    };
  }

  newElement = (i: number) => {
    let { items } = this.state;
    let { filter } = this.state;
    filter.splice(i, 0, { display: 'block', color: 'gray' });
    items.splice(i, 0, '');
    this.setState({ items, filter });
    this.props.onTaskAdd(items.length);
  }

  toggleAlert = () => {
    this.setState({ toggleAlert: !this.state.toggleAlert });
  }

  onChange = (e: any, ind: number) => {
    const { items } = this.state;
    items[ind] = e.target.value;
    this.setState({ items });
  }

  addTaskDate = (i: number, e: string) => {
    const { taskDates } = this.state;
    taskDates[i] = e;
    this.setState({ taskDates });
  }

  mapDatesToTask = (i: number, date: string) => {
    let { mapDates } = this.state;
    if (date in mapDates) {
      mapDates[date].push(i);
      mapDates = { ...mapDates };
      this.setState({ mapDates });
    } else {
      mapDates = { ...mapDates, [date]: [i] };
      this.setState({ mapDates });
    }
  }

  alertify = () => (
    <Snackbar
      open={this.state.toggleAlert}
      autoHideDuration={2000}
      onClose={this.toggleAlert}
    >
      <Alerts onClose={this.toggleAlert} severity={this.state.type}>
        {this.state.alertMessage}
      </Alerts>
    </Snackbar>
  )

  removeElement = (ind: number) => {
    let { items } = this.state;
    let { filter } = this.state;
    const retainOneTask = (i: number) => {
      items.splice(0, items.length - 1);
      items[i] = '';
      filter.splice(0, filter.length - 1);
      filter[i] = { display: 'block', color: 'gray' };
    };
    const updateTask = (ind: number) => {
      items.splice(ind, 1);
      filter.splice(ind, 1);
    };
    items.length !== 1 ? updateTask(ind) : retainOneTask(ind);
    this.setState({
      items
    });
    this.props.onTaskAdd(items.length);
  }

  unsetFilter = () => {
    let { filter } = this.state;
    filter.map((e, i) => {
      if (e.display === 'none') {
        filter[i].display = 'block';
      }
    });
    this.setState({ filter });
  }
  filterFunction = (color: string) => {
    let { filter } = this.state;
    this.unsetFilter();
    filter.map((e, ind) => {
      if (e.color !== color) {
        filter[ind].display = 'none';
      }
    });
    this.setState({ filter });
  }

  onChangeTaskLabel = (ind: number, color: string) => {
    let { filter } = this.state;
    filter[ind] = { display: 'block', color: color };
    this.setState({ filter });
  }

  render() {
    return [
      <div
        id='scroll'
        style={{
          height: '88vh',
          overflow: 'auto',
          float: 'left',
          minWidth: '390px',
        }}
      >
        <Container
          style={{
            display: 'grid',
          }}
        >
          {this.state.items.map((value, ind) => (
            <Card
              className='card'
              key={ind}
              style={{
                marginBottom: '5px',
                borderRadius: '0px',
                display: this.state.filter[ind].display
              }}
              elevation={10}
            >
              <TaskLabel
                index={ind}
                onChangeTaskLabel={this.onChangeTaskLabel}
                color={this.state.filter[ind].color}
              />
              <CardContent key={ind} style={{ marginTop: '-20px' }}>
                <IconButton
                  style={{ marginRight: '5px', color: 'firebrick' }}
                  onClick={(e) => {
                    {
                      this.state.items.length === 1
                        ? this.setState({
                            type: 'info',
                            alertMessage: `Can't be deleted!`
                          })
                        : this.setState({
                            type: 'error',
                            alertMessage: 'Task deleted',
                          });
                    }
                    this.removeElement(ind);
                    this.toggleAlert();
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <TextField
                  label='Add Item'
                  value={value}
                  onChange={(e) => this.onChange(e, ind)}
                  multiline
                  className='task-card'
                />
                <IconButton
                  onClick={() => {
                    this.newElement(ind + 1);
                    this.setState({
                      type: 'success',
                      alertMessage: 'Task Added',
                    });
                    this.toggleAlert();
                  }}
                  style={{ color: 'blue', float: 'right' }}
                >
                  <AddIcon />
                </IconButton>
              </CardContent>
              <Tooltip title='Select Date'>
                <div style={{ marginTop: '-24px', cursor: 'pointer' }}>
                  <TextField
                    type='date'
                    onChange={(e) => {
                      this.addTaskDate(ind, e.target.value);
                      this.mapDatesToTask(ind, e.target.value);
                    }}
                  />
                </div>
              </Tooltip>
            </Card>
          ))}
        </Container>
      </div>,
      <LabelsCollapse
        filterCard={this.filterFunction}
        unsetFilter={this.unsetFilter}
      />,
      <TaskCalendar taskDates={this.state.taskDates} mapDates={this.state.mapDates}/>,
      this.alertify()
    ];
  }
}

interface State {
  items: string[];
  filter: [{ display: string; color: string }];
  toggleAlert: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  alertMessage: string;
  taskDates: string[];
  mapDates: Date;
}

interface Props {
  onTaskAdd: (c: number) => void;
}

export interface Date {
  [key: string]: number[];
}
