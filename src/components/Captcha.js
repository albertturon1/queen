import React from 'react'
import { useState } from 'react';




export default function Captcha({ question, onCaptchaSubmit }) {
    const success = (answer, correctAnswer) => answer === correctAnswer ? true : false;



    return (
        <div className="w-full h-full absolute top-0 right-0  bg-gray-300 z-20 px-5 pt-8">
            <p className="text-sm mt-3 mb-1 text-gray-900">Potwierdź, że nie jesteś robotem. Wybierz jedną z podanych odpowiedzi</p>
            <p className="font-semibold text-xl text-black">{question.question}</p>
            <div className="flex flex-row gap-x-4 mt-3">
                {question.answers.map((answer, index) => {
                    return (
                        <div key={index} className="flex flex-row justify-center items-center border border-black px-5 py-2 rounded-sm hover:cursor-pointer" onClick={() => onCaptchaSubmit(success(answer, question.correctAnswer))}>
                            <p className="text-center text-black">{answer}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
