import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import './SearchBar.css';

class SearchBar extends React.Component{
  state = { term: ''};

  onSubmit = (event)=>{
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render(){
    return (
      <div>
        <Typography component={'div'} align={'center'} className={'searchBar'}>
          <Paper className="searchForm" elevation={3} >
            <form onSubmit={this.onSubmit}  id="Search" >
              <FormControl fullWidth>
                <Input
                  required
                  placeholder="Search"
                  value={this.state.term}
                  onChange={(e)=>{this.setState({term:e.target.value})}}
                  endAdornment={
                    <InputAdornment
                      position="end">
                        <Button  type="submit" form="Search" value="Submit" >
                          <SearchIcon/>
                        </Button>
                    </InputAdornment>
                  } />
                </FormControl>
              </form>
            </Paper>
          </Typography>
        </div>
    );
  }
}
export default SearchBar;
