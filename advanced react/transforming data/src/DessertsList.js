function DessertsList(props) {
  // Implement the component here.
  const desserts = props.data.filter(dessert => dessert.calories < 500)
  .sort((a, b) => a.calories - b.calories);

  const listItems = desserts.map(dessert => {
    const itemText = `${dessert.name} - ${dessert.calories} cal`
    return <li>{itemText}</li>
  })

  
  return (<ul>{listItems}</ul>);
}

export default DessertsList;
