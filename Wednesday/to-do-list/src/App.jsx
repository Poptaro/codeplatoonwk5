import { useState } from 'react'
import ShortUniqueId from 'short-unique-id'

import ListItem from './components/ListItem'

import './App.css'

function App() {
  const uid = new ShortUniqueId({ length: 10})

  const [list, setList] = useState([
    {
      "id": uid.rnd(),
      "task": "eat",
      "complete": false,
    },
    {
      "id": uid.rnd(),
      "task": "walk",
      "complete": false,
    },
    {
      "id": uid.rnd(),
      "task": "eat again lmao",
      "complete": false,
    },
    {
      "id": uid.rnd(),
      "task": "sleep",
      "complete": false,
    }
  ])

  const [taskToAdd, setTaskToAdd] = useState("")

  function submitEvent(event) {
    event.preventDefault()
    createListItem(taskToAdd)
  }

  function createListItem(task) {
    if(task.length < 2) {
      console.log('task not long enough')
      return
    }
    console.log('creating item')
    let tempObj = {
      "id": uid.rnd(),
      "task": task,
      "completed": false,
    }
    let tempList = list
    tempList.push(tempObj)
    setList(tempList)
    setTaskToAdd('')
  }

  function deleteListItem(id) {
    const tempList = list.filter(item => item.id !== id)
    setList(tempList)
  }

  function completeListItem(id) {
    const updatedLIst = list.map((item) => {
      if(item.id === id) {
        return {...item, complete: !item.complete}
      } else {
        return item
      }
    })
    setList(updatedLIst)

  }


  return (
    <>
      <div className='text-4xl flex justify-center pb-16'>
        To-Do List :D
      </div>
      <div>
        <form onSubmit={(event) => submitEvent(event)} className='flex justify-center'>
          <input
            type='text'
            value={taskToAdd}
            onChange={(event) => setTaskToAdd(event.target.value)}
            className='border-2 rounded-sm mr-1'
          />
          <button className='border-2 rounded-sm px-3'>Submit Task to add</button>
        </form>
      </div>
      <div className='text-xl flex flex-col'>
        <ul className='list-disc'>
          {list.map(task => {
            return <ListItem listObj={task} deleteFunction={deleteListItem} completeFunction={completeListItem} key={task.id}/>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
