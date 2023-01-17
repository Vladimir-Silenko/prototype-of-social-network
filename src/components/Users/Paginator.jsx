import styles from './Users.module.css'
import { OnpageChanged, } from '../../redux/users-reducer'
import { Btn } from '../reusable/button'
import { useState } from 'react'
import styled from 'styled-components'

const Button = styled(Btn)`
background:transparent;
color:grey;
width:30px;
padding:2px;
border:none;
`
const Container = styled.div`
margin:40px 30%;
`
export const Paginator = ({ st, dispatch, pagesCount }) => {
    // debugger
    const classNames = require('classnames')

    let pages = []
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }
    let pageAmount = 10
    let [leftborder, setLeftborder] = useState(1)
    let rightborder = leftborder + pageAmount - 1

    return <Container>
        <div className={styles.page}>
            {leftborder > 10 && <Button onClick={() => setLeftborder(leftborder - 10)}>{'<<'}</Button>}
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
            <Button onClick={() => setLeftborder(rightborder + 1)}>{'>>'}</Button>

        </div>
    </Container>

}