import * as React from 'react';
import {
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
  Button
} from '@material-ui/core';
import { FormatOptions, FONT, COLOR } from './FormatOptions';

export class Notepad extends React.PureComponent<{}, State> {
  state = {
    countChars: 0,
    countWords: 0,
    selectedFont: FONT.DEFAULT,
    fontBold: false,
    fontItalics: false,
    fontSize: false,
    selectedColor: COLOR.DEFAULT,
    notesText: '',
    multiLines: 6,
  };

  componentDidMount(){
    if (window.screen.width >= 1400){
      this.setState({multiLines: 10});
    }
  }

  countChars = (e: string) => {
    this.setState({ countChars: e.length });
  }

  countWords = (e: string) => {
    let count = 0;
    const chars = e.trim().split(' ');
    chars.map((v) => {
      v !== '' ? count++ : count;
    });
    this.setState({ countWords: count });
  }

  changeFont = (n: string) => {
    switch (n) {
      case 'font1':
        this.setState({ selectedFont: FONT.ROBOTO });
        break;
      case 'font2':
        this.setState({
          selectedFont: FONT.SOURCE_SANS
        });
        break;
      case 'font3':
        this.setState({
          selectedFont: FONT.DANCING_SCRIPT
        });
        break;
      case 'font4':
        this.setState({
          selectedFont: FONT.SHADOW
        });
        break;
      default:
        this.setState({
          selectedFont: FONT.DEFAULT
        });
    }
  }

  changeColor = (n: number) => {
    switch (n) {
      case 1:
        this.setState({ selectedColor: COLOR.BLUE });
        break;
      case 2:
        this.setState({ selectedColor: COLOR.BROWN });
        break;
      case 3:
        this.setState({ selectedColor: COLOR.GREEN });
        break;
      case 4:
        this.setState({ selectedColor: COLOR.CRIMSON });
        break;
      default:
        this.setState({ selectedColor: COLOR.DEFAULT });
    }
  }

  toggleBold = () => {
    this.setState({ fontBold: !this.state.fontBold });
  }

  toggleItalics = () => {
    this.setState({ fontItalics: !this.state.fontItalics });
  }

  toggleSize = () => {
    this.setState({ fontSize: !this.state.fontSize });
  }

  onChange = (e: string) => {
    this.setState({notesText: e});
  }

  clear = () => {
    this.setState({notesText: '', countChars: 0, countWords: 0});
  }

  render() {
    return (
      <Container className='notepad'>
        <FormatOptions
          changeFont={this.changeFont}
          toggleBold={this.toggleBold}
          toggleItalics={this.toggleItalics}
          toggleSize={this.toggleSize}
          changeColor={this.changeColor}
        />
        <Card style={{ borderRadius: '0px' }} elevation={10}>
          <CardContent>
            <TextField
              multiline
              label='Start Writing'
              rows={this.state.multiLines}
              fullWidth
              onChange={(e) => {
                this.countChars(e.target.value);
                this.countWords(e.target.value);
                this.onChange(e.target.value);
              }}
              value={this.state.notesText}
              inputProps={{
                style: {
                  fontFamily: this.state.selectedFont,
                  fontWeight: this.state.fontBold ? 600 : 400,
                  fontStyle: this.state.fontItalics ? 'italic' : 'normal',
                  fontSize: this.state.fontSize ? '19px' : '16px',
                  color: this.state.selectedColor
                }
              }}
            />
            <Typography
              display={'inline'}
              style={{ marginRight: '8px', color: '#554d43', float: 'right' }}
            >
              Characters: {this.state.countChars}
            </Typography>
            <Typography display={'inline'} style={{ color: '#554d43' }}>
              Words: {this.state.countWords}
            </Typography>
          </CardContent>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '10px',
            marginTop: '-10px'
          }}>
          <Button variant='contained' color='primary' style={{borderRadius: '0px', margin: 'auto'}}>
            Save
          </Button>
          <Button variant='contained' color='secondary' style={{borderRadius: '0px', margin: 'auto'}} onClick={this.clear}>
            Clear
          </Button>
          </div>
        </Card>
      </Container>
    );
  }
}

interface State {
  countChars: number;
  countWords: number;
  selectedFont: FONT;
  fontBold: boolean;
  fontItalics: boolean;
  fontSize: boolean;
  selectedColor: COLOR;
  notesText: string;
  multiLines: number;
}
