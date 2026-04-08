import {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss'


const Pagination = ({info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth);

  console.log(width);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimension);
    return () => window.removeEventListener('resize', updateDimension);
  }, []);

  
  
  return (
    <>
    <style jsx>
      {`
      @media (max-width: 768px) {
        .next, .prev {
          display: none;
        }
          .pagination {
            font-size: 14px;}
      }
      `}
    </style>
   <ReactPaginate
   pageCount={info?.pages} 
   forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
   className="pagination justify-content-center gap-4 my-4 "
   nextLabel="Next"
   previousLabel="Prev"
   nextClassName={`${styles.a} btn btn-primary next`}
    previousClassName={`${styles.a} btn btn-primary prev`}
    pageClassName='page-item'
    pageLinkClassName='page-link'
    marginPagesDisplayed={width < 576 ? 1 : 2}
    pageRangeDisplayed={width < 576 ? 1 : 2}
    activeClassName='active'
    onPageChange={(data) => {
      setPageNumber(data.selected + 1);
    }
    }
    />
    </>
  )
}


export default Pagination
