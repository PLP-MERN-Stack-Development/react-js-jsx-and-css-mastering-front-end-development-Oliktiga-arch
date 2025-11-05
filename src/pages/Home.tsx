import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Welcome to React App
      </h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            Task Management
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Organize your tasks efficiently with our task management system.
            Add, complete, and filter tasks with ease.
          </p>
          <Link to="/tasks">
            <Button variant="primary">Go to Tasks</Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            API Integration
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore data from external APIs with our integrated API browser.
            Search, filter, and view detailed information.
          </p>
          <Link to="/api">
            <Button variant="secondary">Explore API</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};
