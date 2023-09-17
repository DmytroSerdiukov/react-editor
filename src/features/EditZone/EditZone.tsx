import React, { FC, useEffect } from 'react'
import { Item } from '../../store/types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { createNewItem } from '../../store/features/EditZoneReducer'
import EditItemContainer from '../../components/EditZone/EditItem/EditItemContainer'
import useDragAndDrop from '../../hooks/DragAndDrop/DragAndDrop'
import './dragzone.css'

const EditZone: FC = (): JSX.Element => {
  const dnd = useDragAndDrop('dragzone')
  const items = useAppSelector((state) => state.editzone.items)
  const dispatch = useAppDispatch()

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    const dragzone: any = document.getElementById('dragzone')
    const ToolType = e.dataTransfer.getData('text/plain')
    const item = ToolType.split(',')
    const newItem = { title: item[0], type: parseInt(item[1]) }
    dispatch(createNewItem(newItem))
    e.dataTransfer.clearData()
    dragzone.classList.remove('dragEnter')
  }

  return (
    <div {...dnd} onDrop={handleDrop} id="dragzone" className={'wrapper'}>
      {items.length > 0 ? (
        items.map((el: Item) => <EditItemContainer key={el.id} {...el} />)
      ) : (
        <div className={'msg'}>You don't create any element yet</div>
      )}
    </div>
  )
}

export default EditZone
