import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'


const Pagination = ({info, pageNumber, setPageNumber }) => {
  
  return <ReactPaginate
   pageCount={info?.pages} 
   forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
   className="pagination justify-content-center gap-4 my-4 "
   nextLabel="Next"
   previousLabel="Prev"
   nextClassName={`${styles.a} btn btn-primary`}
    previousClassName={`${styles.a} btn btn-primary`}
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }
    }
   />
}

export default Pagination
