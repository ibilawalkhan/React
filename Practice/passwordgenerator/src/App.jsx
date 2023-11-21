import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [password, setPassword] = useState('')
  const [length, setlength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charsAllowed, setCharsAllowed] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numbersAllowed) str += "0123456789"
    if (charsAllowed) str += "!@#$%^&*()_+-=[]"

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)]
    }
    setPassword(pass)
  }, [length, numbersAllowed, charsAllowed, setPassword])

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()

  }, [length, numbersAllowed, charsAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className="text-white text-center my-3 text-xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className='bg-orange-500 text-white px-3 py-1' onClick={copyPasswordToClip}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numbersAllowed}
              onChange={(e) => setNumbersAllowed(e.target.checked)}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={charsAllowed}
              onChange={(e) => setCharsAllowed(e.target.checked)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
