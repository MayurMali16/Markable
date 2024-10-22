import React, { useState } from 'react';
import { FaPlus, FaCog, FaQuestionCircle, FaFilter } from 'react-icons/fa';
import Profile from "../assets/profile.png";
import projectImage from "../assets/project.png";
import albumImage from "../assets/albam.png"; 

const Modal = ({ isOpen, onClose, onSubmit, title, inputLabel }) => {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSubmit(inputValue);
      setInputValue('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Enter ${inputLabel}`}
          className="border p-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [contacts, setContacts] = useState(['Henry', 'Siyamadit', 'Claire', 'John', 'Doe', 'Alice']);
  const [projects, setProjects] = useState(['4359 Test', 'A Test 5146', 'A Training Project', 'New Dev Project', 'WebApp']);
  const [albums, setAlbums] = useState(['2021 Portfolio', 'All Partners', 'Big Lottery Fund']);
  const [followers, setFollowers] = useState(['Mike', 'Sarah', 'Tom', 'Nina', 'Chris']);
  const [following, setFollowing] = useState(['Anna', 'David', 'Lisa', 'James']);
  const [organizations, setOrganizations] = useState([
    { name: 'An Organization Demo', role: 'Admin' },
    { name: 'Showcase International Development', role: 'Member' },
    { name: 'Oak Tree Secondary School', role: 'Admin' },
  ]);

  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [isAlbumModalOpen, setAlbumModalOpen] = useState(false);
  const [isOrganizationModalOpen, setOrganizationModalOpen] = useState(false);

  const [showAllContacts, setShowAllContacts] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllAlbums, setShowAllAlbums] = useState(false);

  // Handlers to add items
  const addContact = (newContact) => setContacts([...contacts, newContact]);
  const addProject = (newProject) => setProjects([...projects, newProject]);
  const addAlbum = (newAlbum) => setAlbums([...albums, newAlbum]);
  const addOrganization = (newOrganization) =>
    setOrganizations([...organizations, { name: newOrganization, role: 'Member' }]);

  // Helper function to display limited or full list
  const renderItems = (items, showAll, setShowAll, image) => {
    const displayLimit = 3;
    return (
      <>
        <ul className="mt-2 space-y-2">
          {(showAll ? items : items.slice(0, displayLimit)).map((item, index) => (
            <li key={index} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center">
                <img
                  src={image}
                  alt={item}
                  className="w-8 h-8 mr-2"
                />
                {item}
              </div>
            </li>
          ))}
        </ul>
        {items.length > displayLimit && (
          <div className="text-blue-500 mt-2 cursor-pointer" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show All'}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="bg-white p-4 w-full md:w-1/4 lg:w-2/5 min-h-screen">
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800 flex items-center">
            ({contacts.length}) Contacts <FaFilter className="ml-2 text-blue-500" />{' '}
            <FaQuestionCircle className="ml-2 text-blue-500" />
          </h3>
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded-md flex items-center"
            onClick={() => setContactModalOpen(true)}
          >
            <FaPlus className="mr-1" /> New Contact
          </button>
        </div>
        {renderItems(contacts, showAllContacts, setShowAllContacts, Profile)}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Projects</h3>
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded-md flex items-center"
            onClick={() => setProjectModalOpen(true)}
          >
            <FaPlus className="mr-1" /> New Project
          </button>
        </div>
        {renderItems(projects, showAllProjects, setShowAllProjects, projectImage)}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Albums</h3>
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded-md flex items-center"
            onClick={() => setAlbumModalOpen(true)}
          >
            <FaPlus className="mr-1" /> New Album
          </button>
        </div>
        {renderItems(albums, showAllAlbums, setShowAllAlbums, albumImage)}
      </div>


      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Organizations</h3>
          <button
            className="text-white bg-blue-500 px-3 py-1 rounded-md flex items-center"
            onClick={() => setOrganizationModalOpen(true)}
          >
            <FaPlus className="mr-1" /> New Organization
          </button>
        </div>
        <ul className="mt-2 space-y-2">
          {organizations.map((org, index) => (
            <li key={index} className="flex items-center justify-between border-b pb-2">
              <div className="flex flex-col">
                <span className="font-bold">{org.name}</span>
                <span className="text-sm text-gray-500">{org.role}</span>
              </div>
              <FaCog className="text-gray-500" />
            </li>
          ))}
        </ul>
      </div>

      {/* Followers */}
      <div className="mb-4">
        <h3 className="font-bold text-gray-800">Followers</h3>
        <ul className="flex overflow-x-auto space-x-4 mt-2">
          {followers.map((follower, index) => (
            <li key={index} className="flex-shrink-0">
              <div className="flex items-center">
                <img src={Profile} alt={follower} className="w-10 h-10 mr-2 rounded-full" />
                <span>{follower}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Following */}
      <div className="mb-4">
        <h3 className="font-bold text-gray-800">Following</h3>
        <ul className="flex overflow-x-auto space-x-4 mt-2">
          {following.map((followed, index) => (
            <li key={index} className="flex-shrink-0">
              <div className="flex items-center">
                <img src={Profile} alt={followed} className="w-10 h-10 mr-2 rounded-full" />
                <span>{followed}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modals */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
        onSubmit={addContact}
        title="Add Contact"
        inputLabel="Contact Name"
      />
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        onSubmit={addProject}
        title="Add Project"
        inputLabel="Project Name"
      />
      <Modal
        isOpen={isAlbumModalOpen}
        onClose={() => setAlbumModalOpen(false)}
        onSubmit={addAlbum}
        title="Add Album"
        inputLabel="Album Name"
      />
      <Modal
        isOpen={isOrganizationModalOpen}
        onClose={() => setOrganizationModalOpen(false)}
        onSubmit={addOrganization}
        title="Add Organization"
        inputLabel="Organization Name"
      />
    </div>
  );
};

export default Sidebar;
