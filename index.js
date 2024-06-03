let score = 0;
let wicket = 0;
let hit =0;
let ballWiseResult =[];
let inputRef = React.createRef();

function addSum(num){
    if(wicket<10)
        {
           // ballWiseResult.push(num);
           // score+=num;
            hit =num;
            element.render(<App/>)
        }
    
    

}

function addWicket(){
    if(wicket<10)
    {
      //  ballWiseResult.push("W");
 //       wicket+=1;
        hit = "W";
        element.render(<App/>)
    }
    
}
// const Result =()=>(
    
//     <div>
//         {

//             ballWiseResult.map((res,index)=>(
//             <>
//             {(index%6 ===0 ? <br></br>: null)}
//             <span style={res === "W" ? { color: 'red' } : {}}> Corrected style object
//                         {res === 0 ? <strong>.</strong> : res}
//                     </span> &nbsp; &nbsp;
//             </>))
//         }
//     </div>
// )

const Result = ()=>{
    <div>
        {ballWiseResult.map((res, index)=>(
            <>
            {(index % 6 === 0 ? <br></br> : null)}
            <span key ={index}>{res ===0 ? <strong>.</strong> : res} </span>&nbsp;&nbsp;&nbsp;&nbsp;
            </>
        ))}
    </div>
}
const  ScoreButton = ()=>(

    <div>
        <button onClick={()=>{addSum(0)}}>0</button>
        <button onClick={()=>{addSum(1)}}>1</button>
        <button onClick={()=>{addSum(2)}}>2</button>
        <button onClick={()=>{addSum(3)}}>3</button>
        <button onClick={()=>{addSum(4)}}>4</button>
        <button onClick={()=>{addSum(5)}}>5</button>
        <button onClick={()=>{addSum(6)}}>6</button>
        <button onClick={()=>{addWicket()}}>wicket</button>

    </div>
    
)
function HandleEvent(event){
event.preventDefault();
// score+=hit;
if(hit=="W"){
    wicket+=1;
}
else{
    score+=hit;
}

ballWiseResult.unshift(

//<span>{hit}{","}{inputRef.current.value}</span>
// another method to do this

<span>{`${hit}, ${inputRef.current.value}`}</span>

);///here is the new edition 

hit =0;
inputRef.current.value = " ";
console.log(inputRef.current.value);
element.render(<App/>)       

}
const Form =()=>(
    <form onSubmit = {HandleEvent}>
        <input value ={hit}/>&nbsp;
        <input ref = {inputRef}/>
        <button>Submit</button>

    </form>
)



const App=()=>(
    <>
    <h1>SCORE KEEPER</h1>
    <h2>SCORE:{score}/{wicket}</h2>
    <ScoreButton/>
    <br></br>
    {/* <Result/> */}
    <Form/>

    <hr></hr>
    {ballWiseResult.map((res, index)=>(
        <p key = {index}>{res} </p>
    ))}
    </>
    

)
const element =ReactDOM.createRoot(document.getElementById("root"));
element.render(<App/>)
