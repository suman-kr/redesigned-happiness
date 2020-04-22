import * as React from 'react';
import { Tooltip, Popover } from '@material-ui/core';
import { Labels } from './Labels';

export const TaskLabel: React.FunctionComponent<Props> = (props) => {
  const [popover, setPopover] = React.useState<boolean>(false);
  const [labelColor, setLabelColor] = React.useState<string>('gray');
  const LabelButton = (
    <div
      className={`label-${props.index}`}
      style={{
        height: '20px',
        width: '20px',
        position: 'relative',
        background: labelColor,
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '4px 1px 8px grey',
      }}
      onClick={() => setPopover(!popover)}
      data-ind={props.index}
    ></div>
  );

  const changeLabelColor = (e: string) => {
    setLabelColor(e);
  };
  return (
    <>
      <Tooltip title='Label It!'>{LabelButton}</Tooltip>
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Labels
            setColor={changeLabelColor}
            togglePopover={() => setPopover(!popover)}
            onChangeTaskLabel={props.onChangeTaskLabel}
            index={props.index}
            showRemoveFilter={0}
          />
        </div>
      </Popover>
    </>
  );
};

interface Props {
  index: number;
  onChangeTaskLabel: (e: number, v: string) => void;
}
