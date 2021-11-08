function Garage() {
    const carName = "Ford";
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={carName} />
      </>
    );
  }
  
  function Car(props) {
    return <h2>I am a {props.brand}!</h2>;
  }

  export default Garage;