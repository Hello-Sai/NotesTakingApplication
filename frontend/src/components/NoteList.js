import React,{ useState, useEffect } from 'react'
import api from '../api'
import {Link} from 'react-router-dom'
export default function NoteList() {
  
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    
    const fetchNotes = async () => {
      try {
        const response = await api.get('notes/');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  },[]);
  return (
    <div className="app">
      <div className="container mt-5">
      <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card  border-primary">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Note List</h4>
                <div className="ml-auto">
                  <Link to='/create' className="btn   mr-2" style={{backgroundColor:'#4cc463'}}>Create</Link>
                </div>
              </div>
              <div className="card-body">
                {notes.map((note, index) => (
                  <div role='button' key={index} className="card mb-3">
                    <Link style={{textDecoration:'none',color:'black',fontWeight:'bolder'}} to={`/edit/${note.id}`} className="card-link" > 
                    <div className="card-body">
                      
                    <h5 className="card-text px-1">{note.title}</h5>
                      
                    </div>
                    </Link>
                  </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
