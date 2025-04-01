import React from "react";
import Pagination from "rc-pagination";

import './Pagination.scss';

export default function PaginationMovies(props){
    const{currentPage, totalItems, onChangePage}= props;


    return(
        <Pagination
        classname="pagination"
        current={currentPage}
        total={totalItems}
        pageSize={20}
        onChange={onChangePage}
        />
    );
}