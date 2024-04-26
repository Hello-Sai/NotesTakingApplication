import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

const EditNote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({ title: '', content: '' });
  const titleRef = useRef(null);
  
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`notes/${id}/`);
        setNote(response.data);
      } catch (error) {
        console.error('Error fetching note:', error);
      }
    };

    fetchNote();
    titleRef.current.focus();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    try {
      await api.delete(`notes/${note.id}/`);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`notes/${note.id}/`, { title: note.title, content: note.content });
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error updating note:', error);
      alert(JSON.stringify(error.response.data))
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h2>Edit Note</h2>
              <button onClick={handleDelete} className="btn btn-danger">Delete</button>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={note.title}
                    onChange={handleChange}
                    className="form-control"
                    ref={titleRef} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">Content</label>
                  <textarea
                    id="content"
                    rows={4}
                    name="content"
                    value={note.content}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className='text-center'>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
