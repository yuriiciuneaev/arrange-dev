import tw from "tailwind-styled-components"

import Layout         from '../../components/frontend/Layout';
import TopTitle       from '../../components/frontend/sections/activities/TopTitle'
import ActivityImage  from '../../components/frontend/sections/activities/ActivityImage'
import ActivityInfo   from '../../components/frontend/sections/activities/ActivityInfo'
import Reviews        from '../../components/frontend/sections/activities/Reviews'
import Faq            from '../../components/frontend/sections/activities/Faq'
import PreFooter      from '../../components/frontend/sections/activities/PreFooter'

const activity = {
  name: 'The Basic Course in Copenhagen at Smertefri Fødsel™',
  images: [
    {
      src: '/images/01_01.png',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],
  description:
    'Et grundkursus hos Smertefri Fødsel™ er til dig, der trin for trin vil træne dig op til en aktiv fødsel, hvor dit eget koncentrerede fødselsarbejde er i fokus i stedet for smerte og panik. Fokus ligger på handlingsanvisende og håndgribelige fødeteknikker, en unik viden indsamlet fra mere end 40.000 kursister siden Smertefri Fødsels startede i 2012, som, du ikke kan læse dig til i bøgerne eller opnå indsigt i noget andet sted. Resultatet er, at du kan opnå en fødsel, hvor du er med til at styre dit smertesignal i stedet for, at det løber afsted med dig.',
  price: '2.395 kr',
  reviews: {
    href: '#',
    average: '4,89',
    totalCount: 117,
    featured: [
      {
        id: 1,
        title: 'This is the best white t-shirt out there',
        rating: 5,
        content: `
          <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
        `,
        author: 'Mark Edwards',
        avatarSrc:
          '/avatars/photo-1519244703995-f4e0f30006d5.jpg',
        date: 'nov 2021',
      },
      {
        id: 2,
        title: 'Adds the perfect variety to my wardrobe',
        rating: 4,
        content: `
          <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
        `,
        author: 'Blake Reid',
        avatarSrc:
          '/avatars/photo-1519244703995-f4e0f30006d5.jpg',
        date: 'nov 2021',
      },
      {
        id: 3,
        title: 'All good things come in 6-Packs',
        rating: 5,
        content: `
          <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
        `,
        author: 'Ben Russel',
        avatarSrc:
          '/avatars/photo-1519244703995-f4e0f30006d5.jpg',
        date: 'nov 2021',
      },
    ],
  },
  meetings: [
    {
      id: 1,
      meeting_day: '10. Jan, 2022',
      time: '12:00 - 14:00',
      teacher: 'Anja Bay',
      title: 'Modul 1: 3 FIKSPUNKTER, LABORO & SMERTENS PYSKOLOGI',
      description: 'Laboro er blevet kaldt naturens svar på anæstesi til både ordinære, storm- & koblede veer. Kombinationsafspænding leder op til dine tre fikspunkter, der flytter både din smertetærskel & udholdenhed markant...',
    },
    {
      id: 2,
      meeting_day: '17. Jan, 2022',
      time: '12:00 - 14:00',
      teacher: 'Anja Bay',
      title: 'Modul 2: PRESSETEKNIK, FOREBYG BRISTNINGER & SMERTENS PSYKOLOGI',
      description: `Pres og giv slip-teknikken
      Bækkenet er ikke en statisk størrelse, og det samme gør sig gældende for bækkenbunden. Jo mere du ved og har øvet at slippe muskulært samt mentaltrænet til pressefasen, desto mere vinder du troen på...`,
    },
    {
      id: 3,
      meeting_day: '24. Jan, 2022',
      time: '12:00 - 14:00',
      teacher: 'Anja Bay',
      title: 'Modul 3: DIN, PARTNEREN & JORDEMODERENS ROLLE',
      description: 'På modul 3 kommer I sammen, alle andre moduler er kun for dig, der skal føde. Og nu bliver det interessant. For der kommer et punkt i fødslen, hvor h*n skal tage over og være klædt på til at finde fødelingoet frem - cirka halvvejs. Derfor skal h*n (eller de) med. Alle øvrige hjælpere er også velkomne!...',
    },
    {
      id: 4,
      meeting_day: '31. Jan, 2022',
      time: '12:00 - 14:00',
      teacher: 'Anja Bay',
      title: 'Modul 4: PANIKHÅNDTERING & BOBLER',
      description: `Ønskeliste
      Ønskelisten er det vigtigste teoretiske og kommunikerende redskab på kurset. Uden viden og indsigt mister du indflydelse og andre kommer til at tage beslutningerne for dig...`,
    },
  ]
}

const faqs = [
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
]

export default function Activity() {
  return (
    <Layout>
      <Container>
        <TopTitle />
        <ActivityImage images={activity.images} />
        <ActivityInfo activity={activity}/>
        <Reviews reviews={activity.reviews}/>
        <Faq faqs={faqs}/>
        <PreFooter />
      </Container>
    </Layout>
  )
}

const Container = tw.div`
  pt-10 sm:pt-16 font-inter
`
