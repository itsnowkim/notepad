// src/App.js

import React, { useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import "./App.css"
const Home = () => {
    const [init, setInit] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  // 페이지 로딩 시 localStorage에서 저장된 노트 불러오기
    useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    if (savedNotes.length === 0){
      const Text = `<기본 사용법>
      메모를 작성한 후 "Add Note" 버튼으로 저장할 수 있습니다.
      메모의 길이가 길어질 경우 ...으로 표시됩니다.
      하단의 list 를 통해 detail 메모를 확인할 수 있습니다.
      화면을 새로고침 해도, 기존의 메모 기록이 저장됩니다.`
      setNotes([Text])
    }else{
      setNotes(savedNotes);
    }
    setInit(true);
  }, [init]);

    //노트가 업데이트될 때마다 localStorage에 저장
  useEffect(() => {
    if(init){
        localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes, init]);


  const addNote = () => {
    if (currentNote.trim() !== '') {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  const deleteNote = (index) => {
    // 메모 삭제 로직
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
      <div className="App-Container">
        <h2>Notepad App</h2>
        <textarea
          rows="10"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
        />
        <br />
        <button onClick={addNote}>Add Note</button>
        <ul style={{ display: 'flex', flexDirection: 'column' }}>
          {notes.map((note, index) => (
            <li key={index} style={{ border: '1px solid black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to={`/${index}`} state={{ note }}>
                {note.length > 10 ? `${note.slice(0, 10)}...` : note}
              </Link>
              <button onClick={() => deleteNote(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default Home;
