import React from 'react';

import Pagination from 'react-bootstrap/Pagination';
const Paginate = ({ pageNum, handelNext, handelPrev, disabled }) => {
	let paginateItem, paginateItem2, paginateItem3, paginateItem4;
	paginateItem = paginateItem2 = paginateItem3 = paginateItem4 = pageNum;
	return (
		<Pagination className=" justify-content-center">
			<Pagination.First
				disabled={pageNum <= 2}
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
					handelPrev(paginateItem);
				}}
			>
				{pageNum >= 3 && <span>{(paginateItem -= 2)}</span>}
			</Pagination.Item>
			<Pagination.Item
				className={pageNum >= 2 ? 'd-block' : 'd-none'}
				onClick={() => {
					handelPrev(paginateItem2--);
				}}
			>
				{pageNum >= 2 && <span>{--paginateItem2}</span>}
			</Pagination.Item>
			<Pagination.Item active>{pageNum}</Pagination.Item>
			<Pagination.Item
				onClick={() => {
					handelNext(paginateItem3++);
				}}
			>
				{++paginateItem3}
			</Pagination.Item>
			<Pagination.Item
				onClick={() => {
					handelNext(paginateItem4);
				}}
			>
				{(paginateItem4 += 2)}
			</Pagination.Item>

			<Pagination.Next
				onClick={() => {
					handelNext();
				}}
			/>
		</Pagination>
	);
};

export default Paginate;
