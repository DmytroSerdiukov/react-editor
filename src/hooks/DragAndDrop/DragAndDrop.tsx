import { useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { moveEditItems } from '../../store/features/EditZoneReducer'

const useDragAndDrop = (props: any) => {
  const dispatch = useAppDispatch()
  const [draggable, setDraggable] = useState(true)

  const onDragEnter = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDragStart = (e: any) => {
    e.dataTransfer.effectAllowed = 'move'
    const Data = `${props}`
    e.dataTransfer.setData('id', Data)
    e.stopPropagation()
  }

  const onDragOver = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const onDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.target.classList[0] === 'wrapper') {
      return
    }
    const id = e.dataTransfer.getData('id')
    if (id.includes('toolbar')) {
      return
    }
    const targetId = e.target.id
    const data: any = { id, targetId }
    if (id !== targetId) return dispatch(moveEditItems(data))
  }

  return { draggable, onDragStart, onDragEnter, onDragOver, onDrop }
}

export default useDragAndDrop
