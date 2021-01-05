import React from 'react';

import Pagination from 'react-bootstrap/Pagination';
const Paginate = ({ pageNum, handelNext, handelPrev, disabled }) => {
	let pageNumber, pageNumber2, pageNumber3, pageNumber4;
	pageNumber = pageNumber2 = pageNumber3 = pageNumber4 = pageNum;
	return (
		<div>
			<Pagination>
                <Pagination.First
                    disabled= {pageNum<=2}
					onClick={() => {
						handelPrev(1);
					}}
				/>
				<Pagination.Prev
					onClick={() => {
						handelPrev(--pageNum);
					}}
					disabled={disabled()}
				/>
				<Pagination.Item
					className={pageNum >= 3 ? 'd-block' : 'd-none'}
					onClick={() => {
						handelPrev(pageNumber);
					}}
				>
					{pageNum >= 3 && <span>{(pageNumber -= 2)}</span>}
				</Pagination.Item>
				<Pagination.Item
					className={pageNum >= 2 ? 'd-block' : 'd-none'}
					onClick={() => {
						handelPrev(pageNumber2--);
					}}
				>
					{pageNum >= 2 && <span>{--pageNumber2}</span>}
				</Pagination.Item>
				<Pagination.Item active>{pageNum}</Pagination.Item>
				<Pagination.Item
					onClick={() => {
						handelNext(pageNumber3++);
					}}
				>
					{++pageNumber3}
				</Pagination.Item>
				<Pagination.Item
					onClick={() => {
						handelNext((pageNumber4));
					}}
				>
					{(pageNumber4 += 2)}
				</Pagination.Item>

				<Pagination.Next onClick={()=>{
                    handelNext()
                }} />
			</Pagination>
		</div>
	);
};

export default Paginate;
