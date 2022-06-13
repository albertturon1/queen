import React from 'react'
import SectionWrapper from './SectionWrapper'
import AddToCartButton from './AddToCartButton'
import Flag from 'react-world-flags'
import { format, setGlobalDateI18n } from 'fecha';

const Data = [
    { place: 'Råsundastadion', city: 'Sztokholm', country: 'Szwecja', countryCode: 'SWE', date: '1986-06-7', availableTickets: true },
    { place: 'Groenoordhallen', city: 'Lejda', country: 'Holandia', countryCode: 'NLD', date: '1986-06-11', availableTickets: true },
    { place: 'Hydroprom de Vincennes', city: 'Paryż', country: 'Francja', countryCode: 'FRA', date: '1986-06-14', availableTickets: false },
    { place: 'Forest National', city: 'Bruksela', country: 'Belgia', countryCode: 'BEL', date: '1986-06-17', availableTickets: true },
    { place: 'Zurych', city: 'Zurych', country: 'Szwajcaria', countryCode: 'CHE', date: '1986-07-01', availableTickets: false },
]

export default function UpcomingTour() {
    return (
        <SectionWrapper title="Nadchodząca trasa koncertowa">
            {Data.map((item, index, length) => {
                return <Concert key={index} item={item} last={index === Data.length - 1 ? true : false} />
            })}
        </SectionWrapper>
    )
}

const Concert = ({ item, last, length }) => {
    const { place, city, country, countryCode, date, availableTickets } = item;
    const formattedDate = format(new Date(date), 'D MMMM');
    return (
        <div className="mb-3">
            <div className="flex flex-row items-center mb-3">
                <div className="flex-1">
                    <CustomText>{place}</CustomText>
                </div>
                <div className="flex-1 flex flex-row items-center">
                    <Flag code={countryCode} className="mr-3" height={16} style={{ maxWidth: 25 }} />
                    <CustomText>{city}, {country}</CustomText>
                </div>
                <div className="flex-1">
                    <CustomText>{formattedDate}</CustomText>
                </div>
                {availableTickets ? <div style={{width: 160}}><AddToCartButton availableTickets={availableTickets} /></div> : <NoAvailableTicketsMessage />}

            </div>
            {!last ? <div className="w-full bg-gray-400" style={{ height: 0.3 }} /> : null}
        </div>
    )
}

const CustomText = ({ children }) => <p className="text-lg">{children}</p>

const NoAvailableTicketsMessage = () => (
    <div className="py-3 justify-center items-center" style={{ width: 160 }}>
        < p className="text-sm text-center font-semibold">Wyprzedano</p >
    </div>
)


//ustawiam parametry do format, które będę wykorzystywał do foramtowania daty na polskie wartości
setGlobalDateI18n({
    dayNamesShort: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
    dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piatek", "Sobota"],
    monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sier", "Wrz", "Paź", "Lis", "Gru"],
    monthNames: ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"],
    amPm: ["am", "pm"],
    // D is the day of the month, function returns something like...  3rd or 11th
    DoFn: function (D) {
        return D + ["th", "st", "nd", "rd"][D % 10 > 3 ? 0 : ((D - (D % 10) !== 10) * D) % 10];
    },
});