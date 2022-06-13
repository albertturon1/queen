import React from 'react'
import SectionWrapper from './SectionWrapper'
import AddToCartButton from './AddToCartButton';

const Data = [
    { title: 'Queen', year: 1973, thumbnail_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Queen_Queen.png/220px-Queen_Queen.png' },
    { title: 'Queen II', year: 1974, thumbnail_url: 'https://ecsmedia.pl/c/queen-ii-pl-w-iext109658140.jpg' },
    { title: 'Sheer heart attack', year: 1974, thumbnail_url: 'https://ecsmedia.pl/c/sheer-heart-attack-b-iext109677594.jpg' },
    { title: 'A night at the opera', year: 1975, thumbnail_url: 'https://ecsmedia.pl/c/a-night-at-the-opera-pl-b-iext109823513.jpg' }
]

export default function Albums() {
    return (
        <SectionWrapper title="Kup płyty">
            <div className="flex flex-row gap-8">
                {Data.map((item, index) => {
                    return <Album key={index} item={item} />
                })}
            </div>
        </SectionWrapper>
    )
}

const Album = ({ item, }) => {
    const { id, title, year, thumbnail_url } = item;
    return (
        <div className="flex flex-col flex-1">
            <img src={thumbnail_url} alt="cover" className="mb-3" />
            <p className="text-lg font-semibold">{title}</p >
            <p className="text-md font-light">{year}</p >
            <AddToCartButton />
        </div>
    )
}

