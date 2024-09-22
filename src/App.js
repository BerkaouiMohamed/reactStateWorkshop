import Button from "./Button";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import CounterClassComp from "./CounterClassComp";
import Nav from "./Navbar";
import ShowName from "./ShowName";

function App() {
  var arr = [
    { background: "green", value: "click" },
    { background: "red", value: "danger" },
    { background: "blue", value: "hello" },
  ];
  // var arr2 = [
  //   <Button background={arr[0].background}>{arr[0].value}</Button>,
  //   <Button background={arr[1].background}>{arr[1].value}</Button>,
  //   <Button background={arr[2].background}>{arr[2].value}</Button>,
  // ];
  var arr2 = arr.map((element, i) => {
    return (
      <Button key={i} background={element.background}>
        {element.value}{" "}
      </Button>
    );
  });
  return (
    <div className="App">
      {/* <Nav name={"hello"}></Nav> */}
      {/* mapping an array  */}
      {/* <Button background={"green"}>click</Button>
      <Button background={"red"}>danger</Button>
      <Button background={"blue"}>hello</Button> */}
      {/* {arr.map(element=>{<Button></Button>})}
       */}
      {/* {arr2} */}
      <h1>_______________________________________________________________</h1>

      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <CounterClassComp/> */}

      {/* <ShowName /> */}

        
    </div>
  );
}

export default App;
