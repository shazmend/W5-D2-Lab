
interface programmer{
    name:string;
    progLang:string;
    experience:number;
    company:string;
    }
    
    function Programers(props:programmer) {
      return (
    
        <div className="programmer">
          <h2>The Employee:</h2>
        <h4>programmer name: {props.name}</h4>
        <h4>programmer language: {props.progLang}</h4>
        <h4>year of experience:{props.experience}</h4>
        <h4>company: {props.company}</h4>
        </div>
      )
    }
    
    export default Programers