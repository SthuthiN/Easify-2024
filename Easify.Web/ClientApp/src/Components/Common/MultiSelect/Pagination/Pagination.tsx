import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { IPaginationItem } from "../../../Interfaces/Common/IPaginationItem";
import './Pagination.scss';

export interface IPaginationProps {
    item: IPaginationItem;
    currentPage: number;
}

export interface IPaginationState {
    currentPage: number;
}

export class Pagination extends React.Component<IPaginationProps, IPaginationState> {
    totalRecords: number;
    pageLimit: number;
    pageNeighbours: number;
    totalPages: number;

    constructor(props: IPaginationProps) {
        super(props);

        this.totalRecords = this.props.item.totalRecords;
        this.pageLimit = this.props.item.pageLimit;
        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
        this.pageNeighbours = this.props.item.pageNeighbours;

        this.state = {
            currentPage: this.props.currentPage != undefined ? this.props.currentPage : 1
        }
    }

    componentDidMount() {
        this.gotoPage(1);
    }

    componentDidUpdate(prevProps: IPaginationProps) {
        if (prevProps.item.totalRecords !== this.props.item.totalRecords) {
            this.gotoPage(this.props.currentPage != undefined ? this.props.currentPage : 1);
        }
    }

    public gotoPage = (page: number) => {

        this.totalRecords = this.props.item.totalRecords;
        this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

        var currentPage = Math.max(1, Math.min(page, this.totalPages));

        const paginationData = {
            currentPage,
            totalPages: this.totalPages,
            pageLimit: this.pageLimit,
        };
        this.setState({ currentPage }, () => this.props.item.pageChanged(paginationData));
    }

    public handleClick = (page: number) => (evt: any) => {
        this.gotoPage(page);
    }

    public handleMoveLeft = (evt: any) => {
        this.gotoPage(this.state.currentPage - (this.pageNeighbours * 2));
    }

    public handleMoveRight = (evt: any) => {
        this.gotoPage(this.state.currentPage + (this.pageNeighbours * 2));
    }

    public range = (from: number, to: number, step = 1) => {
        let i = from;
        const range: number[] = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }

    public fetchPageNumbers = () => {
        var totalPages = Math.ceil(this.props.item.totalRecords / this.props.item.pageLimit);
        var currentPage = this.state.currentPage;
        var pageNeighbours = this.props.item.pageNeighbours;

        var totalNumbers = (this.props.item.pageNeighbours * 2) + 3;
        var totalBlocks = totalNumbers + 2;
        if (totalPages > totalBlocks) {

            var startPage = Math.max(2, currentPage - pageNeighbours);
            var endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

            let pages: number[] = this.range(startPage, endPage);

            var hasLeftSpill = startPage > 2;
            var hasRightSpill = (totalPages - endPage) > 1;
            var spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    var extraPages = this.range(startPage - spillOffset, startPage - 1);
                    pages = [-1, ...extraPages, ...pages];
                    break;
                }

                case (!hasLeftSpill && hasRightSpill): {
                    var extraPages = this.range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, -2];
                    break;
                }

                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [-1, ...pages, -2];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }

        return this.range(1, totalPages);
    }

    public render() {
        const { currentPage } = this.state;
        var pages = this.fetchPageNumbers();

        return (
            <nav aria-label="Pagination" className="mc-pagination-nav text-center">
                {this.props.item.totalRecords > this.props.item.pageLimit &&
                    <ul className="pagination">
                        {pages.map((page, index) => {
                            if (page == -1) return (
                                <li key={index} className="page-item">
                                    <span className="page-link" aria-label="Previous" onClick={this.handleMoveLeft}>
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only"></span>
                                    </span>
                                </li>
                            );

                            if (page == -2) return (
                                <li key={index} className="page-item">
                                    <span className="page-link" aria-label="Next" onClick={this.handleMoveRight}>
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only"></span>
                                    </span>
                                </li>
                            );

                            return (
                                <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                                    <span className="page-link" onClick={this.handleClick(page)}>{page}</span>
                                </li>
                            );

                        })}

                    </ul>}
            </nav>
        );
    }
}