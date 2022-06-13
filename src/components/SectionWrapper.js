import React from 'react'

export default function SectionWrapper({ title, children }) {
    return (
        <div style={{ marginBottom: 100 }} className="px-10 max-w-screen-lg  w-full">
            <h1 className="mb-6 text-2xl" style={{ fontFamily: "EB Garamond" }}>{title}</h1>
            {children}
        </div>
    )
}
