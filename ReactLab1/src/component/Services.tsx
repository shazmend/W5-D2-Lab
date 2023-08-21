interface Services{
    typeOfService:string;
    price:number;
    }

function Services(props:Services) {
  return (
    <div>   
        <h2>The Services:</h2>
        <h4>Type of serves: {props.typeOfService}</h4>
        <h4>The price: {props.price}</h4>
    </div>  
  )
}

export default Services