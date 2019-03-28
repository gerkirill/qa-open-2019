export const baseDateLocale = 'uk-ua'
export const eventDateSource = 'April 20, 2019 09:30:00';// in English only

//о мероприятии
export const shortInfo = `Запрошуємо усіх бажаючих приєднатися до конференції QA Open, що вже вдруге відбудеться у місті Миколаєві! 
Ми запросили найдосвідченіших доповідачів із Києва, Одеси та Херсону щоб ви мали змогу покращити свої знання у галузі, поспілкуватись, обмінятися досвідом  і просто гарно провести час у колі однодумців. 
Як завжди, на вас чекатиме запашна кава з солодощами на додачу до приємної атмосфери та подарунки для найбільш активних та креативних.`;

export const speakers = [
    {
        id: 1,
        name: 'Волошин ',
        surname: 'Олексій Анатолійович',
        pic: './images/speakers/oleksii_voloshyn.jpg',
        profession: 'QA - aвтоматизатор, ментор.',
        experience: 'Більше 5 років досвіду в автоматизації.',
        shortInfo: `Олексій працює в IT з 2009 року, більше 5 років займається автоматизацією. Також проводить тренінги, воркшопи та курси. З 2016 року працює в компанії GlobalLogic.`,

        facebook: 'https://www.facebook.com/aleksey.vastlandov',
        twitter: '#',
        email: '#',
        linkedIn: 'https://www.linkedin.com/in/aleksey-voloshin-7b029146',


        speechTopic: `Do Androids Dream Of Automation?`,
        speechDesc: `Як розвернути та настроїти для тестування Andoid SDK та Appium кількома способами.
        Як знаходити та взаємодіяти з елементами Andoid додатків
        Як підгтотувати реальний телефон для автоматизації тестуваня та як працювати з емулятором
        Також будуть продемонстровані реальні приклади автоматизації додатків та тестування веб-сайтів в мобільному браузері`,
        speechStart: '12:00',
        duration: '30хв.',
        speechRoom: 0,
    },
    {
        id: 2,
        name: 'Boris',
        surname: '#2',
        pic: '',
        profession: 'profession',
        experience: 'experience',
        shortInfo: 'some short info some short info some short info',

        facebook: '#',
        twitter: '#',
        email: '#',
        linkedIn: '#',

        speechTopic: 'speech topic',
        speechStart: '13:00',
        duration: '30хв.',
        speechRoom: 0,
    },
    {
        id: 3,
        name: 'Speaker',
        surname: '#3',
        pic: '',
        profession: 'profession',
        experience: 'experience',
        shortInfo: 'some short info some short info some short info',

        facebook: '#',
        twitter: '#',
        email: '#',
        linkedIn: '#',

        speechTopic: 'speech topic',
        speechStart: '14:00',
        duration: '30хв.',
        speechRoom: 0,
    }, {
        id: 4,
        name: 'Speaker',
        surname: '#4',
        pic: '',
        profession: 'profession',
        experience: 'experience',
        shortInfo: 'some short info some short info some short info',

        facebook: '#',
        twitter: '#',
        email: '#',
        linkedIn: '#',

        speechTopic: 'speech topic',
        speechStart: '15:00',
        duration: '30хв.',
        speechRoom: 0,
    }

]
export const events = [
    {
        type : 'speech',
        startTime:'12.00',

        firstSpeakerId : 1,
        firstSpeechRoom : 1,
        firstSpeechTopic : 'Do Androids Dream Of Automation?',
        firstSpeechDesc : `Як розвернути та настроїти для тестування Andoid SDK та Appium кількома способами.
        Як знаходити та взаємодіяти з елементами Andoid додатків
        Як підгтотувати реальний телефон для автоматизації тестуваня та як працювати з емулятором
        Також будуть продемонстровані реальні приклади автоматизації додатків та тестування веб-сайтів в мобільному браузері`,

        secondSpeakerId : 2,
        secondSpeechRoom : 1,
        secondSpeechTopic : 'Другий',
        secondSpeechDesc : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum quidem possimus tenetur enim saepe suscipit adipisci recusandae alias culpa dolorem corporis exercitationem natus, illum nihil impedit nesciunt minus! Eum!`
    },
    
    {
        type:'event',
        name:'Реєстрація',
        startTime:'9.30'
    }


]
