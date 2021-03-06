import React from 'react'
import SectionWrapper from '../components/SectionWrapper'
import YoutubeEmbed from '../components/YoutubeEmbed'

export default function About() {
  return (
    <div className="pt-10 w-full flex flex-col items-center">
      <SectionWrapper title='Członkowie zespołu'>
        <Profile imgSrc="https://i.iplsc.com/-/0003XTVTY9FDM2DQ-C125-F4.jpg" name="Freddie Mercury"
          text="Freddie Mercury (prawdziwe nazwisko Farrokh Bulsara) urodził się w Zanzibarze 5 września 1946 roku. Ukończył szkołę Świętego Piotra w pobliżu Bombaju (Indie). Tam nauczył się grać na pianinie i założył swój pierwszy zespół. Następnym etapem jego edukacji było Liceum im. Świętej Marii w Mazagonie (Indie). Po jego ukończeniu powrócił do Zanzibaru." />
        <Profile imgSrc="https://queenpoland.files.wordpress.com/2010/11/too-much-love-will-kill-you.jpeg" name="Brian May"
          text="Brian Harold May CBE, urodzony 19 lipca 1947 to angielski muzyk, autor tekstów i astrofizyk, najbardziej znany jako główny gitarzysta rockowego zespołu Queen. Posługuje się gitarą, którą sam zbudował przy pomocy ojca. Gitara, którą zbudowali, nazywa się „Red Special”.
          Oprócz muzyki, May uzyskał doktorat z astrofizyki w 2007 roku i obecnie jest rektorem Liverpool John Moores University. Wraz z Patrickiem Moore i Chrisem Lintottem napisał książkę pod tytułem Bang! Pełna historia wszechświata.
          May zajął 39. miejsce na liście „100 najlepszych gitarzystów wszechczasów” magazynu Rolling Stone." />
        <Profile imgSrc="https://queenpoland.files.wordpress.com/2010/11/roger-taylor-in-studio1.jpeg?w=500&h=684" name="Roger Taylor"
          text="Roger Meddows-Taylor, znany szerzej jako Roger Taylor (ur. 26 lipca 1949 w King's Lynn) – muzyk rockowy pochodzący z Wielkiej Brytanii. Gra na perkusji, gitarze, instrumentach klawiszowych oraz jest wokalistą z oryginalnym, mocnym głosem. Sławę przyniosła mu gra na perkusji dla Queen od początku istnienia grupy aż do dzisiejszego dnia." />
        <Profile imgSrc="http://johndeacon.queen.pl/wp-content/gallery/1985/john-live-aid.jpg" name="John Deacon"
          text="John Richard Deacon (ur. 19 sierpnia 1951) to angielski piosenkarz, autor tekstów i muzyk najbardziej znany jako basista Queen. Jego styl gry był pod silnym wpływem muzyki tanecznej i funku, co pomogło zdefiniować brzmienie Queen w latach 80. i mocno wpłynęło na album Hot Space zespołu z 1982 roku." />
      </SectionWrapper >
      <SectionWrapper title='Historia zespołu'>
        <img src={'https://rockpasta.com/wp-content/uploads/2020/09/2020-09-08-15_53_11-queenband-hashtag-on-Instagram-%E2%80%A2-Photos-and-Videos.png'} className="float-left w-96 object-contain pr-5 pb-5" alt="" />
        <p className="text-justify">Queen to brytyjski zespół rockowy założony w 1970 roku przez swojego wokalistę, Freddiego Mercury'ego, Briana Maya na gitarze, Rogera Taylora na perkusji i Johna Deacona na basie.
          Mimo nieobecności niektórych członków zespół działał do 2009 roku.<br></br><br></br>

          Brian May i Roger Taylor założyli zespół Smile w 1968 roku, z Timem Staffellem jako wokalistą. Studiował u Freddiego Mercury'ego w Ealing Art College, który był wielkim fanem zespołu.
          Dlatego, kiedy Tim Staffell opuścił grupę, aby dołączyć do innej, Humpy Bong, May i Taylor natychmiast pomyśleli o Merkurym. Kiedy wszyscy troje byli razem, imię Smile stało się Queen za sugestią samego Freddiego.
          Po zagraniu piosenek innych zespołów i artystów odnowili te, które skomponowali dla Smile i innych poprzednich zespołów.<br></br><br></br>
          <img src={'https://rockcelebrities.net/wp-content/uploads/2022/02/queen-playing-together.jpg'} className="float-right w-96 object-contain pl-5 pb-5" alt="" />
          Już w 1970 roku zostały zaprezentowane po raz pierwszy w Ratuszu miasta Truro w 1970 roku, a następnie, w tym samym roku, w Imperial College. W tym czasie kilku basistów próbowało, jak Mike Grose, Carry Mitchell i Doug Ewood Bogie, ale w końcu spotkali Johna Deacona w barze i wezwali go do definitywnego dołączenia do zespołu. Ten pojawił się z nimi po raz pierwszy w 1971 roku. W tym samym dniu Freddie Mercury zaprojektował logo zespołu inspirowane znakami zodiaku jego członków: dlatego widzisz dwa lwy, autorstwa Deacona i Taylora, którzy byli Leo, krab dla May, który był Rakiem, i dwie wróżki dla Merkurego, który był Panną.<br></br><br></br>

          Przyjaciel Briana Maya powiedział mu, że ma studio i że musi to udowodnić. Więc Queen wypróbowali studio i nagrali cztery piosenki, z którymi zaczęli szukać wytwórni, ale bez powodzenia. Jednak z czasem zostaliby uznani przez firmę Chrysalis Records, która zaoferowałaby im kontrakt, którego Queen postanowił nie podpisywać na warunkach, które nie były dla nich zbyt korzystne. To samo stało się początkowo z wytwórnią Trident, choć ostatecznie podpisali kontrakt w 1972 roku, ale tylko po to, by ich nagrywać i reprezentować. Brakowało więc pieczątki, która je rozprowadzała. Pojawiło się to dopiero w 1973 roku, w którym podpisali kontrakt z wytwórnią Elektra Records, która dystrybuowała ich pierwszy album: Queen. Zostało to dobrze przyjęte przez niektórych krytyków, choć generalnie nie było to zbyt udane.<br></br><br></br>

          W 1974 Queen pojawił się w Top of the Pops, gdzie zagrał w Seven Seas of Rhye. Prezentacja ta była transmitowana w telewizji, co bardzo promowało temat. Szybko EMI wydało singiel z piosenką oraz z See What A Fool I've Been, z którym udało im się znaleźć w rankingu 10 najczęściej słuchanych utworów przez co najmniej dziesięć tygodni. W tym samym roku ukazała się druga płyta zespołu, Queen II, która znalazła się na 5. miejscu angielskiej listy. Dzięki tym dwóm sukcesom Queen odbył swoją pierwszą trasę koncertową, nie będącą koncertem otwierającym, w Wielkiej Brytanii.<br></br><br></br>

          W listopadzie tego samego roku ukazał się trzeci album, Sheer Heart Attack, którego Killer Queen i Flick of the Wrist zdołali wejść na amerykańskie listy. Następnie zwiedzili Europę, Stany Zjednoczone i Japonię.<br></br><br></br>

          W 1975 roku ukazał się pierwszy singiel z kolejnego albumu, Bohemian Rhapsody, z którym przez 18 miesięcy znajdowali się na szczycie listy w Wielkiej Brytanii, i który po raz drugi przyznał Mercury'emu nagrodę Ivor Novello Prize. W tym celu nakręcono klip wideo, z którym zwykle towarzyszyła singlom próbka audiowizualna. Wreszcie, w listopadzie tego samego roku, miał zostać wydany „Noc w operze”.<br></br><br></br>
          <img src={'https://cdn.mos.cms.futurecdn.net/RVRUGmSinpf6XQADiez8C-1200-80.jpg'} className="float-left w-96 object-contain pr-5 pb-5" alt="" />
          Po odbyciu trasy promującej ich najnowszy album, Queen wydali A Day at the Races w 1976 roku, album uważany za kontynuację poprzedniego, oraz News of the World z 1977 roku, który słynie z piosenek „We Will Rock You ” i „Jesteśmy mistrzami”, które byłyby wykorzystywane w różnych wydarzeniach sportowych. W 1978 pojawił się Jazz, aw 1980 The Game. W następnym roku zespół wyruszył w swoją pierwszą trasę po Ameryce Południowej.<br></br><br></br>

          W 1981 roku wrócili na pozycję numer 1 w Anglii z Under Pressure, piosenką skomponowaną i zrealizowaną obok Davida Bowiego. W 1982 wydali Hot Space, a po roku odpoczynku wydali The Works w 1984. Dwa lata później ukazała się „A Kind of Magic”, aw 1989 The Miracle.<br></br><br></br>

          <YoutubeEmbed embed={'TkFHYODzRTs'} />
          <p className="mt-3">Występ Queen na londyńskim stadionie Wembley, który odbył się 13 lipca 1985 roku, został uznany za najlepszy koncert rockowy w historii.</p>
          <br></br>
          W 1987 roku para Mercury'ego, Jim Hutton, ogłosiła, że ​​piosenkarz ma AIDS, chociaż wszyscy członkowie zespołu temu zaprzeczali. Jednak w 1991 roku Mercury powiedział w oświadczeniu, że ma chorobę.
          W tym samym tekście prosił o wsparcie swojej publiczności i przyjaciół w walce z chorobą. Mimo to dwa dni później, 24 listopada, Freddie Mercury zmarł w wieku zaledwie 45 lat.<br></br><br></br>

          Po śmierci piosenkarki ukazała się płyta z największymi przebojami zespołu, odbył się koncert okolicznościowy oraz ukazała się płyta Made in Heaven oraz utwór „No-One, but You”. Zespół wszedł do galerii sław w 2001 roku, a rok później zdobył gwiazdę w Hollywood Walk of Fame. W 2004 roku Brian May i Roger Taylor ogłosili, że dołączą do Paula Rodgersa, tworząc Queen.<br></br><br></br>
        </p>
        <a className="text-blue-600" href="https://history-biography.com/history-of-queen/" target="_blank" rel="noreferrer">Tekst przetłumaczony ze strony: https://history-biography.com/history-of-queen/</a>

      </SectionWrapper >
    </div >
  )
}


const Profile = ({ imgSrc, name, text }) => (
  <div className='flex flex-row mb-6'>
    <img src={imgSrc} className="float-left w-60  aspect-square object-cover pr-5" alt="" />
    <div className='flex flex-col'>
      <p className="mb-2 font-semibold text-xl">{name}</p>
      <p className="text-justify leading-7">{text}</p>
    </div>
  </div>
)
