import { useState } from 'react'
import {Select, SelectOption} from './Select'

const options = [
  { label: "Первый выбор", value: 1 },
  { label: "Второй выбор", value: 2 },
  { label: "Третий выбор", value: 3 },
  { label: "Четвертый выбор", value: 4 },
  { label: "Пятый выбор", value: 5 },
  { label: "Шестой выбор", value: 6 }
]

function App() {
  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption| undefined>(options[0])
  return (
    <div className="App">
      <p>Множественный выбор / Miltiple Selection</p>
      <Select multiple options={options} value={value1} onChange={e=>setValue1(e)} />
      <br />
      <p> Единичный выбор / Single Selection </p>
      <Select options={options} value={value2} onChange={e=>setValue2(e)} />
    </div>
  )
}

export default App
