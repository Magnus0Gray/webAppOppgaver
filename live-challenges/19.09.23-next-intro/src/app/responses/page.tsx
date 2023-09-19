"use client"

import {useState} from "react"

import Responses from "@/components/Responses"
import { createResponses, faker } from "@/features/responses/createResponse"
import ResponseItem from "../../components/ResponseItem"

export default function ResponsePage() {
    const [responses, setResponses] = useState(    
        Array.from(createResponses({ count: 10, faker }).values())
    )


    const deleteResponseItemHandler = (id: string) => {
        //console.log(id)
        setResponses((prev) => prev.filter((response) => response.id !== id))
    }

    if (!responses.length) {
        return (
            <div>
                <p>
                    Ingen Responser
                </p>
            </div>
        )
    }

    return (
        <Responses>
            {responses.map((response) => (
                <ResponseItem key={response.id} {...response} onDelete={deleteResponseItemHandler} />
            ))}
        </Responses>
    )
}