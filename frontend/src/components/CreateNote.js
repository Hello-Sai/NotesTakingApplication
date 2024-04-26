import React, { useState ,useRef} from 'react';
import axios from 'axios';
import api from '../api'
import { useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useNavigate();
  const titleRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('notes/', {
        title,
        content,
      });
      console.log('Note created:', response.data);
      history('/'); // Redirect to home page after successful creation
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center " style={{ minHeight: '100vh' }}>
      <div className="card p-4 border-dark " style={{ maxWidth: '700px', width: '100%' }}>
        <h2 className="card-title text-center mb-4 text-primary">Create New Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control border-secondary" 
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
            <textarea
              className="form-control border-secondary"
              rows={6} 
              placeholder="Content goes here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
