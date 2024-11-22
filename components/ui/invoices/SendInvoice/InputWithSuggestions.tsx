import { Input } from '@nextui-org/input'
import React, { useState } from 'react'

function InputWithSuggestions({suggestions, placeholder}: {suggestions: Array<string>, placeholder: string}) {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState<Array<string>>([])

    const handleInputChange = (event: any) => {
        const { value } = event.target
        setSearchTerm(value)
        search(value)
    }

    const search = (term: any) => {
        if(term.length === 0 || term === '' ){
            setResults([])
        }
        else{
            const filteredResults = suggestions.filter((result) =>
                result.toLowerCase().includes(term.toLowerCase())
            )
    
            setResults(filteredResults)
        }
    }

  return (
    <>
        <Input
            type="text"
            variant={"bordered"}
            label={placeholder}
            onChange={e=>handleInputChange(e)}
            value={searchTerm}
            placeholder={`${placeholder === "Merchant Name" ? "John Doe" : "ex. 12245879544887"}`}
        />
        {
            results.length > 0 &&
            <ul className="bg-default-50 text-default-900 border rounded-md p-2 shadow-md">
                {results.map((result, index) => (
                    <li className={`${index < results.length - 1 && "border-b"} text-sm py-1 cursor-pointer hover:bg-default-200/40 font-semibold transition-all duration-150 px-2`} onClick={()=>{setSearchTerm(result); setResults([])}} key={index}>{result}</li>
                ))}
            </ul>
        }
    </>
  )
}

export default InputWithSuggestions