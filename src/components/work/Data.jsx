
import todo from "../../assets/to-do.jpg"
import petAppointment from '../../assets/Pet Appointment.jpg'
import imagesSearch from '../../assets/imagesSearch.jpg'
import weatherSearch from '../../assets/weatherSearch.jpg'
import cryptoSearch from '../../assets/cryptoSearch.jpg'
import guitarLa from '../../assets/guitarLa.jpg'
import quickOrder from '../../assets/quickOrder.jpg'
import calorie_tracker from '../../assets/calorie_tracker.jpg'


export const projectsData = [
    {
        id: 1,
        image: todo,
        title: "TO-DO",
        category: "frontend",
        projectLink: "https://jmpolo-todo.netlify.app/",
        description: "Aplicación web para registrar y organizar tareas pendientes del día a día.",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "HTML5",
            "Tailwind"
        ]

    },

    {
        id: 2,
        image: petAppointment,
        title: "Citas Veterinarias",
        category: "frontend",
        projectLink: "https://jmpolo-veterinary-appointment.netlify.app/",
        description: "Aplicación web para administrar citas veterinarias.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 3,
        image: imagesSearch,
        title: "Buscador de imágenes",
        category: "frontend",
        projectLink: "https://buscador-imagen-pixabay.netlify.app/",
        description: "Aplicación web para buscar imágenes usando la API de Pixabay.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 4,
        image: calorie_tracker,
        title: "Calorie Tracker",
        category: "frontend",
        projectLink: "https://calorie-tracker-byjmp.netlify.app/",
        description: "Aplicación web para llevar un control de calorias gastadas y consumidas.",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "TailWind",
            "HTML5"
        ]

    },

    {
        id: 5,
        image: cryptoSearch,
        title: "Crypto Search",
        category: "frontend",
        projectLink: "https://jmpolo-crypto-search.netlify.app/",
        description: "Aplicación web para cotizar en tiempo real criptomonedas usando la API Cryptoccompare.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },

    {
        id: 6,
        image: weatherSearch,
        title: "Weather Search",
        category: "frontend",
        projectLink: "https://jmpolo-weather-search.netlify.app/",
        description: "Aplicación web para chequear temperaturas de diferentes ciudades usando la API Openweathermap.",
        tools: [
            "Javascript",
            "CSS",
            "HTML5"
        ]

    },
    {
        id: 7,
        image: guitarLa,
        title: "GuitarLa",
        category: "frontend",
        projectLink: "https://guitarlajmp.netlify.app/",
        description: "Web que simula una tienda de compra de guitarras con carrito y con LocalStorage",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "Bootstrap",
            "HTML5"
        ]

    },
    {
        id: 8,
        image: quickOrder,
        title: "QuickOrder&Tip",
        category: "frontend",
        projectLink: "https://quick-order-tip.netlify.app",
        description: "App para realizar pedidos y pagos inmediatos con su porcentaje de propina.",
        tools: [
            "React",
            "Javascript",
            "CSS",
            "Tailwind",
            "HTML5"
        ]

    }
];

export const projectsNav = [
    {
        name: "all"
    },

    {
        name: "frontend"
    },
    {
        name: "backend"
    },
    {
        name: "fullstack"
    }  
]
