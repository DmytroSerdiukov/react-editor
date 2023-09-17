import React, { FC } from 'react'

import { useAppDispatch } from '../../../store/hooks'
import {
  changeItemValue,
  cloneItem,
  deleteEditItem,
  moveItemDown,
  moveItemUp,
} from '../../../store/features/EditZoneReducer'
import EditItem from './EditItem'
import { EditItemData, EditItemInfo } from '../types'
import useDragAndDrop from '../../../hooks/DragAndDrop/DragAndDrop'

const EditItemContainer: FC = (props: any): JSX.Element => {
  const dnd = useDragAndDrop(props.id)
  const dispatch = useAppDispatch()

  const changeItemVal = (data: EditItemInfo): void => {
    dispatch(changeItemValue(data))
  }

  const handleFileLoad = (e: any) => {
    const acceptedFile = e.target.files[0]
    let reader = new FileReader()
    reader.addEventListener('load', (e: any) => {
      const value = e.target.result
      const data = { id: props.id, value }
      changeItemVal(data)
    })
    reader.readAsDataURL(acceptedFile)
  }

  const cloneEditItem = (data: EditItemData): void => {
    dispatch(cloneItem(data))
  }

  const deleteItem = (id: string): void => {
    dispatch(deleteEditItem(id))
  }

  const moveItemPositionUp = (id: string): void => {
    dispatch(moveItemUp(id))
  }

  const moveItemPositionDown = (id: string): void => {
    dispatch(moveItemDown(id))
  }

  return (
    <EditItem
      {...props}
      {...dnd}
      handleFileLoad={handleFileLoad}
      deleteItem={deleteItem}
      changeItemVal={changeItemVal}
      cloneItem={cloneEditItem}
      moveItemPositionUp={moveItemPositionUp}
      moveItemPositionDown={moveItemPositionDown}
    />
  )
}

export default EditItemContainer
