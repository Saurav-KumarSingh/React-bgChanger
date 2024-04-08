

let BgChanger=(props)=>{
    return<>
    <button type="button" className="h-8 w-20 rounded-3xl mx-4 text-white font-semibold"
    style={{backgroundColor:props.color}}
     onClick={()=>props.colorHandeler(props.color)}>{props.color}</button>
    </>
}
export default BgChanger;