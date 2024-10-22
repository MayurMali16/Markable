import React, { useState } from 'react';
import Profile from "../assets/profile.png";


const NewsfeedItem = ({ name, activity, timePosted, timeEdited, story }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-4 mb-4 shadow-md rounded-md">
      <div className="flex items-start">
        <img
          src={Profile}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-1">
          <div className="text-sm text-gray-600">
            <strong>{name}</strong> <br />
            Activity happened on {activity}
          </div>
          <div className="text-xs text-gray-500">
            First posted at {timePosted} <br />
            Last edited at {timeEdited}
          </div>
          <p className={`mt-2 text-sm`}>
            {isExpanded ? story : `${story.substring(0, 100)}...`}
          </p>
          <button
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
      <div className="mt-3">
        <button className="text-red-500 mr-4">
          <i className="fas fa-heart"></i> Like
        </button>
        <div>
          <input
            type="text"
            placeholder="Write a comment..."
            className="w-full px-3 py-2 mt-2 border rounded-md"
          />
          <button className="w-full bg-red-500 text-white px-4 py-2 mt-2 rounded-md">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};


const Newsfeed = () => {
  const newsItems = [
    {
      name: 'Yael Adamson-Brown',
      activity: '4th Dec 2023',
      timePosted: '16:13 on 11th Dec 2023',
      timeEdited: '16:13 on 11th Dec 2023',
      story: 'New update by Yael on using football to teach life skills to children for an Organisation Demo...',
    },
    {
      name: 'Mayur Mali',
      activity: '10th Dec 2023',
      timePosted: '12:33 on 11th Dec 2023',
      timeEdited: '13:21 on 11th Dec 2023',
      story: 'Another update by Yael on progress in teaching life skills to children using football...',
    },
    {
      name: 'Daniela Matthews',
      activity: '10th Dec 2023',
      timePosted: '09:45 on 12th Dec 2023',
      timeEdited: '09:45 on 12th Dec 2023',
      story: 'Daniela shared insights from her recent visit to schools, highlighting the impact of storytelling in education.',
    },
    {
      name: 'Omar Nunez',
      activity: '5th Dec 2023',
      timePosted: '14:22 on 6th Dec 2023',
      timeEdited: '14:30 on 6th Dec 2023',
      story: 'Omar posted an update about the successful completion of a sports camp for underprivileged children.',
    },
    {
      name: 'Sofia Evans',
      activity: '2nd Dec 2023',
      timePosted: '11:10 on 3rd Dec 2023',
      timeEdited: '11:15 on 3rd Dec 2023',
      story: 'Sofia provided a detailed report on the ongoing efforts to improve access to quality education in rural areas.',
    },
    {
      name: 'Marcus Langford',
      activity: '8th Dec 2023',
      timePosted: '16:50 on 9th Dec 2023',
      timeEdited: '16:55 on 9th Dec 2023',
      story: 'Marcus shared his experiences from the leadership workshop he conducted, focusing on empowering youth.',
    },
  ];

  const [visibleItems, setVisibleItems] = useState(3); 

  const loadMoreItems = () => {
    setVisibleItems((prev) => prev + 3); 
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div className="max-w-2xl w-full p-4 h-auto overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">NEWSFEED</h2>
        {newsItems.slice(0, visibleItems).map((item, index) => (
          <NewsfeedItem
            key={index}
            name={item.name}
            activity={item.activity}
            timePosted={item.timePosted}
            timeEdited={item.timeEdited}
            story={item.story}
          />
        ))}
        {visibleItems < newsItems.length && ( 
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={loadMoreItems}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Newsfeed;
