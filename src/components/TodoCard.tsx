import * as React from 'react';
import {
  Container,
  Card,
  CardContent,
  TextField,
  IconButton,
  Popover
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import '../styles/index.css';
import { LabelsCollapse } from './LabelsCollapse';
import { TaskLabel } from './TaskLabel';

export class TodoCard extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      items: ['']
    };
  }

  newElement = (i: number) => {
    let { items } = this.state;
    items.splice(i, 0, '');
    this.setState({ items });
    this.props.onTaskAdd(items.length);
  }

  onChange = (e: any, ind: number) => {
    const { items } = this.state;
    items[ind] = e.target.value;
    this.setState({ items });
  }

  removeElement = (ind: number) => {
    let { items } = this.state;
    const a = (i: number) => {
      items.splice(0, items.length - 1);
      items[i] = '';
    };
    items.length !== 1 ? items.splice(ind, 1) : a(ind);
    this.setState({
      items
    });
    this.props.onTaskAdd(items.length);
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
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {this.state.items.map((value, ind) => (
            <Card
              className='card'
              key={ind}
              style={{ marginBottom: '5px', borderRadius: '0px' }}
            >
              <TaskLabel />
              <Popover
                anchorReference='anchorPosition'
                anchorPosition={{ top: 105, left: 50 }}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                // onClose={this.togglePopover}
                open={false}
              >
                <Card
                  style={{ display: 'flex', flexDirection: 'column' }}
                ></Card>
              </Popover>

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
                />
                <IconButton
                  onClick={() => this.newElement(ind + 1)}
                  style={{ color: 'blue', float: 'right' }}
                >
                  <AddIcon />
                </IconButton>
              </CardContent>
              {/* <Tooltip title='Schedule It!'>
              <TextField style={{ height: '26px' }} type='date' />
              </Tooltip> */}
            </Card>
          ))}
        </Container>
      </div>,
      <LabelsCollapse />
    ];
  }
}

interface State {
  items: string[];
}

interface Props {
  onTaskAdd: (c: number) => void;
}
