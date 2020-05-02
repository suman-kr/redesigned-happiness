import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TodoCard } from './TaskCard';
import { Notepad } from './Notepad';
import '../styles/index.css';
import { Menu } from './Menu';
import { Table } from './Table';

export class Dashboard extends React.PureComponent<{}, State> {
  state = {
    totalTask: 1,
  };

  updateTaskCount = (c: number) => {
    this.setState({ totalTask: c });
  }

  render() {
    return (
      <>
        <Menu count={this.state.totalTask} />
        <Switch>
          <Route path='/todo'>
            <TodoCard onTaskAdd={this.updateTaskCount} />
          </Route>
          <Route path='/notes' component={Notepad}></Route>
          <Route path='/table' component={Table}></Route>
        </Switch>
      </>
    );
  }
}
interface State {
  totalTask: number;
}
