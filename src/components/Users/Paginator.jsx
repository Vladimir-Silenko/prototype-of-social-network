import styles from './Users.module.css'
import { OnpageChanged, } from '../../redux/users-reducer'
import loader from '../../photo/loader.gif'
import { Btn } from '../reusable/button'
import { useState } from 'react'

export const Paginator = ({ st, dispatch, pagesCount }) => {
    // debugger
    const classNames = require('classnames')

    let pages = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
    let pageAmount = 10
    let [leftborder, setLeftborder] = useState(1)
    let rightborder = leftborder + pageAmount - 1

    return <div>
        <div className={styles.page}>
            {leftborder > 10 && <Btn onClick={() => setLeftborder(leftborder - 10)}>back</Btn>}
            {
                pages.map(item => {
                    if (item >= leftborder && item <= rightborder) {
                        return <span
                            key={item}
                            onClick={() => dispatch(OnpageChanged(item))}
                            className={st.currentPage === item ? classNames(styles.pageItem, styles.selectedItem)
                                : classNames(styles.pageItem)}>
                            {item}
                        </span>
                    }
                })
            }
            <Btn onClick={() => setLeftborder(rightborder + 1)}>forward</Btn>

        </div>
    </div>

}