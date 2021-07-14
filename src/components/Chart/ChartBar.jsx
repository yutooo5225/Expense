import styled from 'styled-components'

const BarContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BarInner = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Fill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
`

const Label = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`

const ChartBar = (props) => {
  let barFillHeight = '0%'

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
  }

  return (
    <BarContainer>
      <BarInner>
        <Fill style={{ height: barFillHeight }}></Fill>
      </BarInner>
      <Label>{props.label}</Label>
    </BarContainer>
  )
}

export default ChartBar
