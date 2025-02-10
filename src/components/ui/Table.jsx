import React, { memo, useEffect } from 'react';
import { usePagination, useTable } from 'react-table';

function Table({ columns, data, pageNation, handlePageNation, selectedRows = false, rowsPerPage = 10 }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        setPageSize,
    } = useTable(
        { columns, data, initialState: { pageIndex: 0, pageSize: rowsPerPage } },
        usePagination
    );

    useEffect(() => {
        setPageSize(rowsPerPage);
    }, [rowsPerPage, setPageSize]);

    return (
        <>
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="w-full divide-y divide-gray-200">
                    <thead className="bg-[#dce2f0] h-20">
                        {headerGroups?.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup?.getHeaderGroupProps()}>
                                {headerGroup?.headers?.map((column, index) => (
                                    <th key={index} {...column?.getHeaderProps()} className="p-2 text-xs font-medium tracking-wider text-left text-black uppercase">
                                        {column?.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                        {selectedRows ?
                            <>
                                {page?.map((row, index) => {
                                    prepareRow(row);
                                    const isChecked = selectedRows[row.original.id];
                                    return (
                                        <tr key={index} {...row?.getRowProps()} className={isChecked ? 'bg-blue-50' : ''}>
                                            {row?.cells?.map((cell, index) => (
                                                <td key={index} {...cell?.getCellProps()} className="p-2 whitespace-nowrap">
                                                    {cell?.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </>
                            :
                            <>
                                {page?.map((row, index) => {
                                    prepareRow(row);
                                    return (
                                        <tr key={index} {...row?.getRowProps()}>
                                            {row?.cells?.map((cell, index) => (
                                                <td key={index} {...cell?.getCellProps()} className="p-2 whitespace-nowrap">
                                                    {cell?.render('Cell')}
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </>
                        }
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            {pageNation && handlePageNation && (
                <div className="flex justify-end p-3">
                    <div className="flex items-center gap-2 bg-white shadow-md p-2 rounded-lg border border-gray-300">
                        {/* Previous Page Button */}
                        <button
                            onClick={() => handlePageNation(pageNation.prevPage)}
                            disabled={!pageNation.prevPage}
                            className={`flex items-center justify-center w-8 h-8 rounded-full transition ${pageNation.prevPage ? 'hover:bg-gray-200 text-black' : 'opacity-50 cursor-not-allowed text-gray-400'}`}
                        >
                            <FaAngleLeft className="w-5 h-5" />
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-1 text-sm font-medium">
                            {pageNation.prevPage !== undefined && (
                                <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-300">
                                    {pageNation.prevPage}
                                </span>
                            )}
                            <span className="px-[15px] py-[6px] rounded-md bg-brandRed text-gray-700 font-bold border border-brandRed">
                                {pageNation.currentPage}
                            </span>
                            {pageNation.nextPage !== undefined && (
                                <span className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 border border-gray-300">
                                    {pageNation.nextPage}
                                </span>
                            )}
                        </div>

                        {/* Next Page Button */}
                        <button
                            onClick={() => handlePageNation(pagination.nextPage)}
                            disabled={!pagination.nextPage}
                            className={`flex items-center justify-center w-8 h-8 rounded-full transition ${pagination.nextPage ? 'hover:bg-gray-200 text-black' : 'opacity-50 cursor-not-allowed text-gray-400'}`}
                        >
                            <FaAngleRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}

export default memo(Table)