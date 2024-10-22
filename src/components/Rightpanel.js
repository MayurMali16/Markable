import React, { useState } from 'react';
import Board from "../assets/Board.png";

const RightPanel = () => {

  const [tasks, setTasks] = useState([
    { id: 1, text: 'follow up call needed', done: false },
    { id: 2, text: 'contact the local authority', done: false },
    { id: 3, text: 'Book in another meeting', done: false },
    { id: 4, text: 'Speak to the GP about XYZ', done: false },
    { id: 5, text: 'you need to call her about ...', done: false },
    { id: 6, text: 'Submission deadline', done: false },
    { id: 7, text: 'Send reminder email', done: false },
    { id: 8, text: 'Prepare project report', done: false },
    { id: 9, text: 'Team meeting at 3 PM', done: false },
    { id: 10, text: 'Finalize budget for next quarter', done: false },
    { id: 11, text: 'Design presentation for workshop', done: false },
    { id: 12, text: 'Follow up on contract renewal', done: false },
    { id: 13, text: 'Coordinate with HR for recruitment', done: false },
  ]);

  const [newTask, setNewTask] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5; // Number of tasks per page

  const [boards, setBoards] = useState([
    { id: 1, name: 'Angola Production' },
    { id: 2, name: 'Attendance Reporting' },
    { id: 3, name: 'CHIVA RYH' },
    { id: 4, name: 'Project Alpha' },
    { id: 5, name: 'Marketing Strategies' },
    { id: 6, name: 'Budget Planning' },
  ]);

  const [newBoard, setNewBoard] = useState(''); // State for new board input
  const [isAddingBoard, setIsAddingBoard] = useState(false); // Toggle for input visibility
  const [showAllBoards, setShowAllBoards] = useState(false); // Toggle for showing all boards

  // Add new task function
  const addTask = () => {
    if (newTask.trim().length > 0) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, done: false }]);
      setNewTask('');
    }
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  // Add new board function
  const addBoard = () => {
    if (newBoard.trim()) {
      setBoards([...boards, { id: boards.length + 1, name: newBoard }]);
      setNewBoard(''); // Clear input
      setIsAddingBoard(false); // Close input
    }
  };

  // Pagination logic for tasks
  const totalPages = Math.ceil(tasks.length / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = tasks.slice(startIndex, startIndex + tasksPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedBoards = showAllBoards ? boards : boards.slice(0, 3);

  return (
    <div className="right-panel p-4 md:p-6 bg-white shadow-md rounded-md w-full md:w-[30%] lg:w-2/5">
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Boards</h2>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setIsAddingBoard(!isAddingBoard)}
          >
            + New Board
          </button>
        </div>
      
        {isAddingBoard && (
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Enter board name"
              value={newBoard}
              onChange={(e) => setNewBoard(e.target.value)}
              className="flex-1 border border-gray-300 p-2 rounded-l-md"
            />
            <button
              onClick={addBoard}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
            >
              Save Board
            </button>
          </div>
        )}

       
        <ul className="space-y-2">
          {displayedBoards.map((board) => (
            <li key={board.id} className="flex items-center">
              <img
                src={Board}
                alt={board.name}
                className="mr-3 rounded-md w-10 h-10 object-contain"
              />
              <span>{board.name}</span>
            </li>
          ))}
        </ul>


        {boards.length > 3 && (
          <button
            className="text-blue-500 mt-4 block"
            onClick={() => setShowAllBoards(!showAllBoards)}
          >
            {showAllBoards ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>

   
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Personal Progress</h2>
          <button className="text-blue-500">Go to board</button>
        </div>
      
        <div className="space-y-4">
          <div>
            <p>. Are either of your parents living?</p>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full"
                style={{ width: '70%' }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">7</span>
          </div>
          <div>
            <p>. Do you belong to any groups in which ...?</p>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-500 h-3 rounded-full"
                style={{ width: '60%' }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">6</span>
          </div>
          <div>
            <p>1-2-1 Events</p>
            <div className="bg-gray-200 rounded-full h-3">
              <div
                className="bg-red-500 h-3 rounded-full"
                style={{ width: '27%' }}
              ></div>
            </div>
            <span className="text-sm text-gray-600">27</span>
          </div>
        </div>
        <button className="text-blue-500 mt-4 block">Show All</button>
      </div>

 
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Tasks</h2>
          <button className="text-blue-500">Filters</button>
        </div>
      
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Add your next task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded-l-md"
          />
          <button
            onClick={addTask}
            className="bg-red-500 text-white px-4 py-2 rounded-r-md"
          >
            Save Task
          </button>
        </div>
   
        <div>
          {currentTasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded-md border"
            >
              <p className={`flex-1 ${task.done ? 'line-through text-gray-500' : ''}`}>
                {task.text}
              </p>
              <div className="flex items-center">
                <button className="text-gray-500">
                  <i className="fas fa-cog"></i>
                </button>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTaskDone(task.id)}
                  className="ml-2"
                />
              </div>
            </div>
          ))}
        </div>
      
        <div className="flex justify-between mt-4">
          <button
            className={`text-blue-500 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            &larr; Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`text-blue-500 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
