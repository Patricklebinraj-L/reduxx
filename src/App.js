import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions.js';

function App() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const error = useSelector(state => state.error);
  const list = data.users?[...data.users]:null
  console.log(list)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Data from API:</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {list?list.map((e)=>(<div> {JSON.stringify(e)} <br></br></div> )):<></>}
      </ul>
    </div>
  );
}

export default App;
