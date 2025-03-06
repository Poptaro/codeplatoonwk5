


export default function ListItem( {listObj, deleteFunction, completeFunction} ) {


  return (
    <>
    {
      listObj.complete
      ?  <li className="p-4 pb-2 text-emerald-500">{listObj.task} ✅</li>
      :  <li className="p-4 pb-2">{listObj.task}</li>

    }
      <button onClick={() => completeFunction(listObj.id)} className="border-2 mr-2">Complete me</button>
      <button onClick={() => deleteFunction(listObj.id)} className="border-2">Delete me</button>
    </>
  )
}