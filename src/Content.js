import React, { useState } from 'react';

const Content = () => {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    setListData([...listData, activity]);
    setActivity(""); 
  }

  function removeActivity(index) {
    const newListData = listData.filter((_, id) => {
      return id !== index;
    });
    setListData(newListData);
  }

  return (
    <>
      <div className='container'>
        <div className='header'>TODO LIST</div>
        <input
          className='todo'
          type='text'
          placeholder='ADD Activity'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button className='hello' onClick={addActivity}>ADD</button>
        <p className='list-header'>Here is Your List:</p>
        {listData.length > 0 && listData.map((data, index) => (
          <div key={index} className='list-item'>
            <div className='listdata'>{data}</div>
            <button className='btn-position' onClick={() => removeActivity(index)}>Delete (-)</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
