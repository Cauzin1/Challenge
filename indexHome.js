import { useEffect, useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

import { getListUsers } from '~/services/communication';
import ItemContainer from '~/components/ItemContainer/ItemContainer';
import Paginate from '~/components/Paginate/Paginate';

export default function () {
  const navigate = useNavigate()
  const [sincePage, setSincePage] = useState([0])
  const [listUsers, setListUsers] = useState([])
  const registryPerPage = 20;
  async function getData({page, direction}){
    const response = await getListUsers(sincePage[page], registryPerPage)
    setListUsers(response.data)
    if(direction == 'next') 
      setSincePage([...sincePage, response.data.pop().id])
  }
  useEffect(() => {
    getData({page: 0, direction: 'next'})
  },[])
  return (
    <div className='Home'>
      <Paginate
        className = 'paginate'
        onChangePage={getData}
      />
      <div className='list'>
        {listUsers.map(user => 
          <ItemContainer 
            key = {user.id} 
            id = {user.id} 
            login ={user.login}
            onClick = {() => navigate(`/detailed/${user.login}`)}
          />
        )}
      </div>
    </div>
  );
}
