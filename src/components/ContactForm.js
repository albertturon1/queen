import React, { useRef, useState } from 'react'
import closeFormIcon from '../assets/icons/closeForm.png'
import Captcha from './Captcha';
import toast, { Toaster } from 'react-hot-toast';

// const useOutsideClick = (callback) => {
//     const ref = React.useRef();

//     React.useEffect(() => {
//         const handleClick = (event) => {
//             if (ref.current && !ref.current.contains(event.target)) {
//                 callback();
//             } else return null
//         };

//         document.addEventListener('click', handleClick);

//         return () => {
//             document.removeEventListener('click', handleClick);
//         };
//     }, [ref]);

//     return ref;
// };

const Test = [
    { question: 'Czy Queen to najlepszy zespół w historii?', answers: ['Prawda', 'Fałsz'], correctAnswer: 'Prawda' },
    { question: 'Ilu członków posiadał zespół Queen?', answers: [1, 2, 3, 4], correctAnswer: 4 },
    { question: 'Czy Frederick Mercury to prawdziwe imię i nazwisko wokalisty Queen?', answers: ['Tak', 'Nie'], correctAnswer: 'Nie' },
]
const initialState = {
    fullName: '',
    email: '',
    phone: '',
    message: '',
    passedCaptcha: null,
    submitClicked: false,
    captchaVisible: false
}

export default function ContactForm({ visible, setContactVisible }) {
    const [fields, setFields] = useState(initialState)

    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const formatPhoneValue = formatPhoneNumber(fields.phone);

    const validFullname = regName.test(fields.fullName); //sprawdzam czy występuje spacje, co tworzy imię i nazwisko
    const validEmail = validateEmail(fields.email) ? true : false;
    const validPhone = fields.phone.replace(/\s/g, "").length === 9 ? true : false; //usuwam spacje i sprawdzam czy długość nr wynosi 9
    const validMessage = fields.message.length > 0;
    const validForm = validFullname > 0 && validEmail && validPhone && validMessage && fields.submitClicked ? true : false;

    const capitalizeName = fullname => fullname.replace(/\b(\w)/g, s => s.toUpperCase());
    const randomQuestion = Test[Math.floor(Math.random() * Test.length)];

    const invalidFullnameError = fields.submitClicked && !validFullname ? true : false;
    const invalidEmailError = fields.submitClicked && !validEmail ? true : false;
    const invalidPhoneError = fields.submitClicked && !validPhone ? true : false;
    const invalidMessageError = fields.submitClicked && !validMessage ? true : false;


    const closeContact = () => {
        setContactVisible();
        setFields({ ...initialState })
    }

    const OnCaptchaSubmit = captchaSuccess => {
        captchaSuccess ? toast.success('Twoja wiadomość została pomyślnie przesłana') : toast.error('Nie tym razem - jesteś robotem')
        setContactVisible();
        setFields({ ...initialState })
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (validForm) setFields({ ...fields, submitClicked: true, captchaVisible: true })
        else setFields({ ...fields, submitClicked: true })
    }

    return (
        <div className={`flex w-full h-screen justify-end first-line:flex flex-row z-10 fixed top-0 ${visible ? "right-0" : "right-full"}`} style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <div className="box-border bg-white h-full pt-10 px-3 md:pl-10 md:pr-32 relative" style={{ width: '50vw' }}>
                <div className="fixed top-10 right-10 z-30">
                    <div className="w-10 aspect-square z-10 flex justify-center items-center hover:cursor-pointer" onClick={closeContact}>
                        <img src={closeFormIcon} className="w-full h-full" />
                    </div>
                </div>
                <div className="w-full h-full">
                    <p className="font-bold text-2xl mb-2">Formularz kontaktowy</p>
                    <p>Chcesz nawiązać współpracę lub zadać pytanie? <br />Wypełnij dane poniżej i prześlij formularz</p>
                    <form onSubmit={handleFormSubmit} className="mt-6 flex flex-col">
                        {/* register your input into the hook by invoking the "register" function */}
                        <Input
                            id='full-name'
                            label='Imię i nazwisko'
                            type='text'
                            placeholder='Jan Kowalski'
                            value={capitalizeName(fields.fullName)}
                            onChange={e => setFields({ ...fields, fullName: e.target.value })}
                            error={invalidFullnameError}
                            errorText="Podaj poprawne imię"
                        />
                        <Input
                            id='email'
                            label='E-mail'
                            type='email'
                            placeholder='mail@mail.com'
                            value={fields.email}
                            onChange={e => setFields({ ...fields, email: e.target.value })}
                            error={invalidEmailError}
                            errorText="Podaj poprawny adres e-mail"
                        />
                        <Input
                            id='phone'
                            label='Twój numer telefonu'
                            type='tel'
                            placeholder='123 456 789'
                            value={formatPhoneValue}
                            onChange={e => e.target.value.replace(/\s/g, "").length <= 9 ? setFields({ ...fields, phone: e.target.value }) : null}
                            error={invalidPhoneError}
                            errorText="Numer telefonu jest za krótki"
                        />
                        <Input
                            id='message'
                            label='Wiadomość'
                            type='text'
                            placeholder='Dodaj wiadomość'
                            inputStyle="h-40"
                            value={fields.message}
                            messageInput
                            onChange={e => setFields({ ...fields, message: e.target.value })}
                            error={invalidMessageError}
                            errorText="Zdaję się, że zapomniałeś napisać wiadomość"
                        />
                        <div className="flex justify-center w-full mt-7">
                            <input type="submit" className={`bg-red-500 py-3 w-64 text-white font-bold rounded-sm hover:cursor-pointer`} value="Prześlij" />
                        </div>
                    </form>
                    {fields.captchaVisible ? <Captcha passedCaptcha={fields.passedCaptcha} onCaptchaSubmit={OnCaptchaSubmit} question={randomQuestion} /> : null}
                </div>
            </div>
        </div>
    )
}


function formatPhoneNumber(value) {
    if (!value) return '';
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)}`;
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 9)}`
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const Input = (props) => {
    const {
        placeholder = '',
        label = '',
        type = 'text',
        error = false,
        errorText = '',
        firstInput = false,
        inputStyle = "",
        messageInput = false,
        ...rest
    } = props;

    const inputRef = useRef();
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    return (
        <div className="mb-4">
            <div
                className={`border transition duration-150 ease-in-out ${focused ? 'border-black' : 'border-gray-400'}`}
                onClick={() => inputRef.current.focus()}
            >
                <label className='text-xs text-primary placeholder-gray-gray4 px-2 pt-1.5'>{label}</label>
                {messageInput ?
                    <textarea
                        onFocus={onFocus} onBlur={onBlur}
                        ref={inputRef}
                        type={type}
                        className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md ${inputStyle}`}
                        placeholder={placeholder}
                        {...rest}
                    /> :
                    <input
                        onFocus={onFocus} onBlur={onBlur}
                        ref={inputRef}
                        type={type}
                        className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md ${inputStyle}`}
                        placeholder={placeholder}
                        {...rest}
                    />}
            </div>
            <div className="h-3 mb-1 pl-1 pt-1">
                {error && errorText && (
                    <p className='text-xs font-medium text-red-600 '>{errorText}</p>
                )}
            </div>
        </div>
    );
};
