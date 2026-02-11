import { useEffect, useState} from 'react';


export function HookComponents(){
       const [state,setState]  = useState(0);
       const data={
	            "id": "0001",
	            "type": "donut",
	            "name": "Cake",
	            "ppu": 0.55,
	            "batters":
		                {
			                "batter":
				                    [
					                      { "id": "1001", "type": "Regular" },
					                      { "id": "1002", "type": "Chocolate" },
					                      { "id": "1003", "type": "Blueberry" },
					                      { "id": "1004", "type": "Devil's Food" }
				                    ]
		                  },
	              "topping":
                      [
                        { "id": "5001", "type": "None" },
                        { "id": "5002", "type": "Glazed" },
                        { "id": "5005", "type": "Sugar" },
                        { "id": "5007", "type": "Powdered Sugar" },
                        { "id": "5006", "type": "Chocolate with Sprinkles" },
                        { "id": "5003", "type": "Chocolate" },
                        { "id": "5004", "type": "Maple" }
                      ]
};
       const handleState=(e)=>{
         setState((state)=>++state)
         
       }
       const handleDecrement=(e)=>{
         setState((state)=>--state)
         handleLargeCalc();
       }
       const handleReset=(e)=>{
         setState(0)
         
       }
       const handleClick = (user,events)=>{
          console.log(`${user} Clicked`);
          console.log(events);
          
       }
       const handleLargeCalc = ()=>{
        let count=0;
        for(let i=0;i<100000000;i++){
              count++;
        }
        console.log(count);
       }
         const fetchData =async()=>{
             const response=await fetch('https://api.genderize.io/?name=luc').then((data)=>{
              data.json();
            }).then((data)=>console.log(data))
       }
       useEffect(()=>{
          fetchData();
      },[])

       return <div>
       <button onClick={handleState}>Increment</button>
       <button onClick={handleDecrement}>Decrement</button>
       <button onClick={handleReset}>Reset</button>
       <p>{state}</p>
       <ul>
       {data.batters.batter.map((val)=><li key={val.id} style={{background:val.type == 'Regular'? "red" :"blue",color:"white"}}>{val.id}{val.type}</li>)}
       </ul>
       </div>
}