import * as React from 'react';
import { Card, CardContent, Button, Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TodoCard } from './TodoCard';
export class Menu extends React.PureComponent<Props, {}> {
  render() {
    return (
      <Card
        style={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: '0',
          position: 'sticky',
          top: 0,
          marginBottom: '3vh',
        }}
      >
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: '1px',
            paddingBottom: '1px',
          }}
        >
          <Tooltip title='Task management App'>
            <Link to='/todo' style={{ marginRight: '5%' }}>
              <Button style={{ color: 'white' }}>
                Task
                <span
                  style={{
                    margin: 'auto',
                    color: 'black',
                    height: '23px',
                    width: '23px',
                    background: 'whitesmoke',
                    borderRadius: '50%',
                  }}
                >
                  {this.props.count}
                </span>
              </Button>
            </Link>
          </Tooltip>
          <Tooltip title='Notepad App'>
            <Link to='/notes' style={{ marginRight: '5%' }}>
              <Button style={{ color: 'white' }}>Notes</Button>
            </Link>
          </Tooltip>
        </CardContent>
      </Card>
    );
  }
}

interface Props {
  count: number;
}
