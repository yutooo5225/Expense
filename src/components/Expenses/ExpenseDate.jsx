import styled from 'styled-components'

const ExpDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`

const ExpYear = styled.div`
  font-size: 0.75rem;
`

const ExpMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`

const ExpDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' })
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear()

  return (
    <ExpDate>
      <ExpMonth>{month}</ExpMonth>
      <ExpYear>{year}</ExpYear>
      <ExpDay>{day}</ExpDay>
    </ExpDate>
  )
}

export default ExpenseDate
