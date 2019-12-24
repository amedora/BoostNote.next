import React, {
  useCallback,
  KeyboardEvent,
  useRef,
  ChangeEventHandler
} from 'react'
import NoteItem from './NoteItem'
import { PopulatedNoteDoc } from '../../../lib/db/types'
import styled from '../../../lib/styled'
import {
  borderBottom,
  inputStyle,
  iconColor
} from '../../../lib/styled/styleFunctions'
import { IconEdit, IconLoupe } from '../../icons'
import {
  useGlobalKeyDownHandler,
  isWithGeneralCtrlKey
} from '../../../lib/keyboard'

export const StyledNoteListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  outline: none;
  & > ul {
    flex: 1;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-y: auto;
  }

  .control {
    height: 50px;
    display: flex;
    padding: 8px;
    align-items: center;
    ${borderBottom}
  }

  .searchInput {
    flex: 1;
    position: relative;
    height: 32px;
    .icon {
      position: absolute;
      top: 8px;
      left: 10px;
      font-size: 20px;
      z-index: 0;
      pointer-events: none;
      ${iconColor}
    }
    .input {
      position: relative;
      width: 100%;
      height: 32px;
      padding-left: 35px;
      box-sizing: border-box;
      ${inputStyle}
    }
  }
  .newNoteButton {
    width: 35px;
    height: 30px;
    font-size: 24px;
    background: transparent;
    border: none;
    ${iconColor}
  }
`

type NoteListProps = {
  currentStorageId?: string
  currentNoteIndex: number
  search: string
  notes: PopulatedNoteDoc[]
  createNote: () => Promise<void>
  setSearchInput: (input: string) => void
  navigateDown: () => void
  navigateUp: () => void
  basePathname: string
  lastCreatedNoteId: string
}

const NoteList = ({
  notes,
  createNote,
  currentStorageId,
  basePathname,
  search,
  currentNoteIndex,
  setSearchInput,
  navigateDown,
  navigateUp,
  lastCreatedNoteId
}: NoteListProps) => {
  const updateSearchInput: ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      setSearchInput(event.target.value)
    },
    [setSearchInput]
  )

  const handleListKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
          navigateDown()
          break
        case 'ArrowUp':
          navigateUp()
          break
      }
    },
    [navigateUp, navigateDown]
  )

  const listRef = useRef<HTMLUListElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useGlobalKeyDownHandler(e => {
    switch (e.key) {
      case 'p':
        if (isWithGeneralCtrlKey(e)) {
          e.preventDefault()
          e.stopPropagation()
          searchRef.current!.focus()
        }
    }
  })

  const focusList = useCallback(() => {
    listRef.current!.focus()
  }, [])
  return (
    <StyledNoteListContainer>
      <div className='control'>
        <div className='searchInput'>
          <input
            ref={searchRef}
            className='input'
            value={search}
            onChange={updateSearchInput}
            placeholder='Search Notes'
          />
          <IconLoupe className='icon' size='0.8em' />
        </div>
        {currentStorageId != null && (
          <button className='newNoteButton' onClick={createNote}>
            <IconEdit size='0.8em' />
          </button>
        )}
      </div>
      <ul tabIndex={0} onKeyDown={handleListKeyDown} ref={listRef}>
        {notes.map((note, index) => {
          const noteIsCurrentNote = index === currentNoteIndex
          return (
            <li key={note._id}>
              <NoteItem
                active={noteIsCurrentNote}
                note={note}
                storageId={currentStorageId}
                basePathname={basePathname}
                focusList={focusList}
                search={search}
                recentlyCreated={lastCreatedNoteId === note._id}
              />
            </li>
          )
        })}
        {notes.length === 0 ? (
          search.trim() === '' ? (
            <li className='empty'>No notes</li>
          ) : (
            <li className='empty'>No notes could be found.</li>
          )
        ) : null}
      </ul>
    </StyledNoteListContainer>
  )
}

export default NoteList
