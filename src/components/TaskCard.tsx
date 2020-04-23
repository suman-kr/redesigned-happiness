import * as React from 'react';
import {
  Container,
  Card,
  CardContent,
  TextField,
  IconButton
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/index.css';
import { LabelsCollapse } from './LabelsCollapse';
import { TaskLabel } from './TaskLabel';
import 'animate.css';
import Calendar from 'react-calendar';

export class TodoCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      items: [''],
      filter: [{ display: 'block', color: 'gray' }]
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

  onChange = (e: any, ind: number) => {
    const { items } = this.state;
    items[ind] = e.target.value;
    this.setState({ items });
  }

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
          minWidth: '390px'
        }}
      >
        <Container
          style={{
            display: 'grid'
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
                  onClick={(e) => this.removeElement(ind)}
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
                  onClick={() => this.newElement(ind + 1)}
                  style={{ color: 'blue', float: 'right' }}
                >
                  <AddIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Container>
      </div>,
      <LabelsCollapse
        filterCard={this.filterFunction}
        unsetFilter={this.unsetFilter}
      />,
      <Calendar />
    ];
  }
}

interface State {
  items: string[];
  filter: [{ display: string; color: string }];
}

interface Props {
  onTaskAdd: (c: number) => void;
}
