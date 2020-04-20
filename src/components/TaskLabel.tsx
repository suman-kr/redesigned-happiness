import * as React from 'react';
import { Tooltip } from '@material-ui/core';

export const TaskLabel: React.FunctionComponent<Props> = () => {
  return (
    <Tooltip title='Label It!'>
    <div
      style={{
        height: '20px',
        width: '20px',
        position: 'relative',
        background: 'yellowgreen',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '4px 1px 8px grey',
      }}
    ></div>
    </Tooltip>
  );
};

interface Props {}
