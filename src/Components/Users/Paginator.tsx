import classes from "./Paginator.module.css"
import React, {useState} from "react";


export const Paginator: React.FC<PropsType> = ({currentPage, onChangeCurrentPage, pageSize, totalUsersCount}) => {

    const changeCurrentPageHandler = (pageNumber: number) => onChangeCurrentPage(pageNumber)

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionSize = 5
    const portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize


    return (
        <div className={classes.paginator}>
            {portionNumber > 1 && <div className={classes.pageButtonLeft} onClick={() =>
                setPortionNumber(portionNumber - 1)}></div>}
            {pages.filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => <span key={p}
                                className={currentPage === p ? classes.currentPage : classes.defaultPageStyle}
                                onClick={() => changeCurrentPageHandler(p)}>
                {p}</span>)}
            {portionNumber < portionCount && <div className={classes.pageButtonRight} onClick={() =>
                setPortionNumber(portionNumber + 1)}></div>}
        </div>
    )
}

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangeCurrentPage: (pageNumber: number) => void
}