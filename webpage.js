import React, {useState} from 'react'
import './WebPage.css'


export default function({onChangePage, finalPage = false}){
  const [atualPage, setCurrentPage] = useState(0)
  function changePage(direction){
    let page = atualPage;
    if(direction == 'next')
      page++
    else
      page--
    setAtualPage(page)
    onAtualPage({page, direction})
  }
  return(
    <div className='webpage'>
      {currentPage > 0 && (
        <button 
          onClick={() => changePage('previous')}
          className='buttonPrevious'
        >
            {'<-- '}Previous
        </button>
      )}
      {!finalPage && (
        <button 
          onClick={() => changePage('next')}
          className='buttonNext'
        >
          Next{' -->'}
        </button>
      )}
    </div>
  )
}