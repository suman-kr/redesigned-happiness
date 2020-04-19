import * as React from 'react';
import { Popover, Button, Card, Tooltip } from '@material-ui/core';
import GoogleFontLoader from 'react-google-font-loader';
import '../styles/index.css';
import ImportExportIcon from '@material-ui/icons/ImportExport';

export enum FONT {
  ROBOTO = 'Roboto, sans-serif',
  SOURCE_SANS = 'Source Sans Pro, sans-serif',
  DANCING_SCRIPT = 'Dancing Script, cursive',
  SHADOW = 'Shadows Into Light, cursive',
  DEFAULT = 'Roboto, Helvetica, Arial, sans-serif',
}

export enum COLOR {
  GREEN = '#008000',
  BROWN = '#a52a2a',
  BLUE = '#0000ff',
  DEFAULT = 'rgba(0, 0, 0, 0.87)',
  CRIMSON = '#ed143d',
}

export class FormatOptions extends React.PureComponent<Props, State> {
  state = {
    selectedFont: FONT.ROBOTO,
    toggleFontPopover: false,
    toggleColorPopover: false,
    selectedColor: COLOR.DEFAULT
  };
  togglePopover = (i: number) => {
    i === 1
      ? this.setState({ toggleFontPopover: !this.state.toggleFontPopover })
      : this.setState({ toggleColorPopover: !this.state.toggleColorPopover });
  }

  render() {
    return (
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Roboto',
              weights: [400, 400]
            },
            {
              font: 'Roboto Mono',
              weights: [400, 700]
            },
            {
              font: 'Source Sans Pro',
              weights: [400, 700]
            },

            {
              font: 'Dancing Script',
              weights: [600, 400]
            },
            {
              font: 'Shadows Into Light',
              weights: [400, 600]
            }
          ]}
        />
        <Tooltip title='Select Font'>
          <Button
            variant='contained'
            className='card'
            onClick={() => {
              this.togglePopover(1);
            }}
            style={{ borderRadius: '0px' }}
          >
            {this.state.selectedFont.split(',')[0]}
          </Button>
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
          onClose={this.togglePopover}
          open={this.state.toggleFontPopover}
        >
          <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              style={{
                background: 'whitesmoke',
                borderRadius: '0px',
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(1);
                this.props.changeFont('font1');
                this.setState({ selectedFont: FONT.ROBOTO });
              }}
            >
              Roboto Mono
            </Button>
            <Button
              color='default'
              style={{
                fontFamily: 'Source Sans Pro, sans-serif',
                background: 'whitesmoke',
                borderRadius: '0px',
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(1);
                this.props.changeFont('font2');
                this.setState({ selectedFont: FONT.SOURCE_SANS });
              }}
            >
              Source Sans Pro
            </Button>
            <Button
              color='default'
              style={{
                fontFamily: 'Dancing Script, cursive',
                background: 'whitesmoke',
                borderRadius: '0px',
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(1);
                this.props.changeFont('font3');
                this.setState({ selectedFont: FONT.DANCING_SCRIPT });
              }}
            >
              Dancing Script
            </Button>
            <Button
              color='default'
              style={{
                fontFamily: 'Shadows Into Light, cursive',
                background: 'whitesmoke',
                borderRadius: '0px',
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(1);
                this.props.changeFont('font4');
                this.setState({ selectedFont: FONT.SHADOW });
              }}
            >
              Shadows Into Light
            </Button>
          </Card>
        </Popover>
        <Tooltip title='Some Color?'>
          <Button
            variant='contained'
            className='card'
            onClick={() => {
              this.togglePopover(2);
            }}
            style={{ borderRadius: '0px', background: this.state.selectedColor, color: 'white'}}
          >
            Color
          </Button>
        </Tooltip>
        <Popover
          anchorReference='anchorPosition'
          anchorPosition={{ top: 105, left: 140 }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={() => {this.togglePopover(2)}}
          open={this.state.toggleColorPopover}
        >
          <Card style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              style={{
                background: COLOR.DEFAULT,
                borderRadius: '0px',
                color: 'white'
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(2);
                this.props.changeColor(5);
                this.setState({ selectedColor: COLOR.DEFAULT });
              }}
            >Black</Button>
            <Button
              style={{
                background: COLOR.BLUE,
                borderRadius: '0px',
                color: 'white'
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(2);
                this.props.changeColor(1);
                this.setState({ selectedColor: COLOR.BLUE });
              }}
            >Blue</Button>
            <Button
              style={{
                background: COLOR.CRIMSON,
                borderRadius: '0px',
                color: 'white'
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(2);
                this.props.changeColor(4);
                this.setState({ selectedColor: COLOR.CRIMSON });
              }}
            >Crimson</Button>
            <Button
              style={{
                background: COLOR.BROWN,
                borderRadius: '0px',
                color: 'white'
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(2);
                this.props.changeColor(2);
                this.setState({ selectedColor: COLOR.BROWN });
              }}
            >Brown</Button>
            <Button
              style={{
                background: COLOR.GREEN,
                borderRadius: '0px',
                color: 'white'
              }}
              variant='contained'
              onClick={() => {
                this.togglePopover(2);
                this.props.changeColor(3);
                this.setState({ selectedColor: COLOR.GREEN });
              }}
            >Green</Button>
          </Card>
        </Popover>
        <Tooltip title='Make it Bold!'>
          <Button
            variant='contained'
            className='card'
            onClick={() => {
              this.props.toggleBold();
            }}
            style={{ borderRadius: '0px', fontWeight: 600 }}
          >
            B
          </Button>
        </Tooltip>
        <Tooltip title='Italicize'>
          <Button
            variant='contained'
            className='card'
            onClick={() => {
              this.props.toggleItalics();
            }}
            style={{ borderRadius: '0px', fontStyle: 'italic' }}
          >
            I
          </Button>
        </Tooltip>
        <Tooltip title='What size?'>
          <Button
            variant='contained'
            className='card'
            onClick={() => {
              this.props.toggleSize();
            }}
            style={{ borderRadius: '0px', height: '36px' }}
            startIcon={<ImportExportIcon />}
          />
        </Tooltip>
      </>
    );
  }
}

interface State {
  toggleFontPopover: boolean;
  selectedFont: FONT;
  toggleColorPopover: boolean;
  selectedColor: COLOR;
}

interface Props {
  changeFont: (a: string) => void;
  toggleBold: () => void;
  toggleItalics: () => void;
  toggleSize: () => void;
  changeColor: (c: number) => void;
}
