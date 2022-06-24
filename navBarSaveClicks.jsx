 use of "props" to set data
function NavBar(props) {
  const [clicks, setClicks] = React.useState([]);
   console.log(`clicks: ${clicks}`);
  alert(`Rendering NavBar`);
  const list = props.menuitems;
  const { Button } = ReactBootstrap;
  // each item should have an unique key
   const handleClick = e => {
     console.log(`clicked on: ${e.target.innerHTML}`);
    setClicks([...clicks, e.target.innerHTML]);
   };
   const updatedList = list.map((listItems, index) => {
     return (
      //  <Button onClick={handleClick} key={index}>
       <Button onClick={(e) => handleClick(e)} key={index}>
        {listItems}
      </Button>
    );
   });

  return <ul>{updatedList}</ul>;
 }
const menuItems = [1, 2, 3, 4, 5];

const getListItems = ()
ReactDOM.render(
  <ul></ul>,
  document.getElementById("root")
);
 ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
