// src/pages/IdeaBoard.js
import React from 'react';
import Card from './Card.js';
import Button from './Button.js';
import { ideas } from '../data';
import './pages.css'
import './home.css'

const IdeaBoard = () => (
  <div className='background'>
    <div className='idea-board-item'>
        <h1>Idea Board</h1>
        <p>Here are all your ideas:</p>
        <Button label="Sort by Popularity" />
        <Button label="Sort by Date" />
        <Button label="Sort by Category" />
        <hr />
        <div className='idea-list'>
            {ideas.map((idea) => (
                <Card key={idea.id} title={idea.title}>
                  <p>{idea.description}</p>
                  <Button label="Delete" onClick={() => alert('Idea Deleted')} />
                </Card>
              ))}
              <Button label="Add New Idea" />
              <Card title="New Idea">
                <Button label="Add Idea" onClick={() => alert('Idea Added')} />
                    <input type="text" placeholder="Enter idea title" />
                    <textarea placeholder="Enter idea description" />
                    <select>
                        <option value="">Select a category</option>
                        <option value="Technology">Technology</option>
                        <option value="Art">Art</option>
                        <option value="Food">Food</option>
                        <option value="Travel">Travel</option>
                    </select>
                    <Button label="Save" />
                    <Button label="Cancel" />
                    <Button label="Share" />
                    <Button label="Share on Twitter" />
                    <Button label="Share on Facebook" />
                    <Button label="Share on Instagram" />
                    <Button label="Share on LinkedIn" />
                    <Button label="Share on Pinterest" />
                    <Button label="Share on Reddit" />
                    <Button label="Share on TikTok" />
                    <Button label="Share on YouTube" />
                    <Button label="Share on SoundCloud" />
              </Card>
        </div>
    </div>
    {ideas.map((idea) => (
        <Card key={idea.id} title={idea.title}>
          <p>{idea.description}</p>
          <Button label="Delete" onClick={() => alert('Idea Deleted')} />
        </Card>
      ))}
      <Button label="Add New Idea" />
    <Card title="New Idea">
      <Button label="Add Idea" onClick={() => alert('Idea Added')} />
    </Card>
  </div>
);

export default IdeaBoard;
