class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input class="form-control text-input" type="text" placeholder="Search" type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      );
    }
  }

  class SearchResult extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <form onSubmit={this.handleClick}>
            <input class="form-control text-input" type="text" placeholder="Search" type="text" value={this.state.value} onChange={this.handleChange} />
        </form>
      );
    }
  }

ReactDOM.render(
  <SearchForm />,
  document.getElementById('searchForm')
);
