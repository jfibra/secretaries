const pieChartCanvas = $("#donutChart").get(0).getContext("2d");
const barChartCanvasX = $("#barChartX").get(0).getContext("2d");
const barChartCanvasY = $("#barChartY").get(0).getContext("2d");
// const barChartCanvasZ = $("#barChartZ").get(0).getContext("2d");

let propertyNames = [];
let propertyComputed = [];
let agesLabel = [];
let agesComputed = [];
let statesName = [];
let statesComputed = [];
let developersName = [];
let developersComputed = [];
let devColors = [];

//PIE CHART
const propertyData = {
    labels: propertyNames,
    datasets: [
        {
            label: "% of Sales by Property Types",
            data: propertyComputed,
            backgroundColor: [
                "#f56954",
                "#00a65a",
                "#f39c12",
                "#00c0ef",
                "#3c8dbc",
                "#aec6de",
                "#73d6cc",
                "#f2e6de",
            ],
        },
    ],
};
const pieOptions = {
    maintainAspectRatio: false,
    responsive: true,
};
const propertyPieChart = new Chart(pieChartCanvas, {
    type: "doughnut",
    data: propertyData,
    options: pieOptions,
});

//BAR CHART
const agesData = {
    labels: agesLabel,
    datasets: [
        {
            label: "% of Sales by Age",
            backgroundColor: [
                "#f56954",
                "#00a65a",
                "#f39c12",
                "#00c0ef",
                "#3c8dbc",
                "#aec6de",
                "#73d6cc",
                "#eed6cc",
                "#ff26cc",
                "#dfd6cc",
            ],
            data: agesComputed,
        },
    ],
};

const statesData = {
    labels: statesName,
    datasets: [
        {
            label: "% of Sales by Location",
            backgroundColor: [
                "#f56954",
                "#00a65a",
                "#f39c12",
                "#00c0ef",
                "#3c8dbc",
                "#aec6de",
                "#73d6cc",
                "#eed6cc",
                "#ff26cc",
                "#dfd6cc",
            ],
            data: statesComputed,
        },
    ],
};

// const developersData = {
//     labels: developers,
//     datasets: [
//         {
//             label: "% of Sales by Developer",
//             backgroundColor: devColors,
//             data: developersComputed,
//         },
//     ],
// };

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    datasetFill: false,
};

const agesBarChart = new Chart(barChartCanvasX, {
    type: "bar",
    data: agesData,
    options: barChartOptions,
});

const statesBarChart = new Chart(barChartCanvasY, {
    type: "bar",
    data: statesData,
    options: barChartOptions,
});

// const developersBarChart = new Chart(barChartCanvasZ, {
//     type: "horizontalBar",
//     data: developersData,
//     options: barChartOptions,
// });

let statesJson = [];

const categoriesJson = [
    {
        id: 1,
        count: 0,
        computed: 0,
        name: "Condominiums",
    },
    {
        id: 3,
        count: 0,
        computed: 0,
        name: "Commercial",
    },
    {
        id: 4,
        count: 0,
        computed: 0,
        name: "Industrial",
    },
    {
        id: 8,
        count: 0,
        computed: 0,
        name: "Apartment",
    },
    {
        id: 9,
        count: 0,
        computed: 0,
        name: "Beach House",
    },
    {
        id: 10,
        count: 0,
        computed: 0,
        name: "House & Lot",
    },
    {
        id: 11,
        count: 0,
        computed: 0,
        name: "Townhouse",
    },
    {
        id: 14,
        count: 0,
        computed: 0,
        name: "Lot Only",
    },
];

const agesJson = [
    {
        id: 1,
        minAge: 19,
        maxAge: 23,
        count: 0,
        computed: 0,
    },
    {
        id: 2,
        minAge: 24,
        maxAge: 26,
        count: 0,
        computed: 0,
    },
    {
        id: 3,
        minAge: 27,
        maxAge: 29,
        count: 0,
        computed: 0,
    },
    {
        id: 4,
        minAge: 30,
        maxAge: 33,
        count: 0,
    },
    {
        id: 5,
        minAge: 34,
        maxAge: 38,
        count: 0,
        computed: 0,
    },
    {
        id: 6,
        minAge: 39,
        maxAge: 41,
        count: 0,
        computed: 0,
    },
    {
        id: 7,
        minAge: 42,
        maxAge: 44,
        count: 0,
        computed: 0,
    },
    {
        id: 8,
        minAge: 45,
        maxAge: 47,
        count: 0,
        computed: 0,
    },
    {
        id: 9,
        minAge: 48,
        maxAge: 50,
        count: 0,
        computed: 0,
    },
    {
        id: 10,
        minAge: 51,
        maxAge: 60,
        count: 0,
        computed: 0,
    },
];

let developersJson = [];
