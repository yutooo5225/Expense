import styled from 'styled-components'

import ExpenseItem from './ExpenseItem'

const ExpList = styled.ul`
  list-style: none;
  padding: 0;
`
const Fallback = styled.h2`
  color: white;
  text-align: center;
`

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <Fallback>Found no expenses.</Fallback>
  }
  return (
    <ExpList>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ExpList>
  )
}

export default ExpensesList
