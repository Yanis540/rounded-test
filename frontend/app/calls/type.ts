export const tabsValues = [
    {
        key:"all",
        value:"All",
    },
    {
        key:"appointment",
        value:"Appointment",
        filter: (calls:Call[])=>calls.filter((call)=>call.subject=="appointment")
    },
]