// TODO
/*
var GroceryListItem = (props) => (
    <li>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
)
*/
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        bold:false
    };
  }
  
  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  } 

  render() {
    var style = {
      fontWeight: this.state.bold ? '900' : '200'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <div>
    <h2> Grocery List </h2>
    <ul>
    {props.list.map(item => 
        <GroceryListItem item={item} />
    )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList list = {['Bread', 'Eggs']}/>, document.getElementById("app"));