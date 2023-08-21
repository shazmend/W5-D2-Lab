import Services from "./Services";

interface Companies{
    name:string;
    staffNum:number;
    YearFounded:number;
    typeOfService:string;
    price:number;
    }
    
    function Companies(props:Companies ) {
      return (
        <div className="programmer"> 
        <h2>The Company:</h2>    
            <h4>Company name: {props.name}</h4>
            <h4>Staff number: {props.staffNum}</h4>
            <h4>Year Founded:{props.YearFounded}</h4>
            <Services
            typeOfService={props.typeOfService}
            price={props.price}
            ></Services>
        </div>
      )
    }
    
    export default Companies