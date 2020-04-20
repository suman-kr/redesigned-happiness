import * as React from 'react';
import { Tooltip, Popover } from '@material-ui/core';
import { Labels } from './Labels';

export const TaskLabel: React.FunctionComponent<Props> = () => {
  const [popover, setPopover] = React.useState<boolean>(false);
  const LabelButton = (
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
      onClick={() => setPopover(!popover)}
    ></div>
  );
  return (
    <>
      <Tooltip title='Label It!'>
        {LabelButton}
      </Tooltip>
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
        onClose={() => setPopover(!popover)}
        open={popover}
      >
        <Labels />
      </Popover>
    </>
  );
};

interface Props {}
