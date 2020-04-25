import * as React from 'react';
import { Tooltip } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
export const DatePicker: React.FunctionComponent<Props> = () => {
  return (
    <Tooltip title='Select Date'>
      <div style={{ marginTop: '-24px', cursor: 'pointer' }}>
        <EventIcon />
      </div>
    </Tooltip>
  );
};

interface Props {}
