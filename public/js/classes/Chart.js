class BarChart {
    constructor(cX, cY) {
        this.chartX = cX;
        this.chartY = cY;
        this.ctr = 0;
        this.data = null;
        this.gender = {
            dataX: ["Male", "Female"],
            dataY: [0, 0],
        };
        this.agesJson = [
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
                computed: 0,
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

        this.barChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            datasetFill: false,
        };

        this.barDataX = {
            labels: [],
            datasets: [
                {
                    label: "",
                    backgroundColor: [],
                    data: [],
                },
            ],
        };

        this.barDataY = {
            labels: [],
            datasets: [
                {
                    label: "",
                    backgroundColor: [],
                    data: [],
                },
            ],
        };

        this.chartDataX = new Chart(this.chartX, {
            type: "horizontalBar",
            data: this.barDataX,
            options: this.barChartOptions,
        });

        this.chartDataY = new Chart(this.chartY, {
            type: "bar",
            data: this.barDataY,
            options: this.barChartOptions,
        });
    }

    reset = () => {
        this.ctr++;
        this.data = null;
        this.barDataX.labels = [];
        this.barDataX.datasets[0].data = [];
        this.barDataY.datasets[0].data = [];
        this.gender = {
            dataX: ["Male", "Female"],
            dataY: [0, 0],
        };

        for (let age of this.agesJson) {
            age.count = 0;
        }
    };

    setData = (data) => {
        this.data = data;
    };

    setAge = (min, max, count) => {
        const index = this.agesJson.findIndex(
            (obj) => obj.minAge === min && obj.maxAge === max
        );
        if (index >= 0) {
            this.agesJson[index].count += count;
        }
    };

    setGender = (m, f) => {
        m.innerHTML = this.gender.dataY[0];
        f.innerHTML = this.gender.dataY[1];
    };

    setCity = (chart, cities) => {
        const cl = cities.length;
        let sm = cl < 10;
        let xl = cl > 100;

        chart.style.minHeight = xl ? "350vh" : sm ? "30vh" : "150vh";
        chart.style.height = xl ? "350vh" : sm ? "30vh" : "150vh";
        chart.style.maxHeight = xl ? "350vh" : sm ? "30vh" : "150vh";
    };

    getCityCount = (filter, data) => {
        let count = 0;
        for (const x of data) {
            if (x.city == filter) {
                count++;
            }
        }

        return count;
    };

    update = (c, m, f) => {
        const tmpCities = [];

        for (let data of this.data) {
            let _age = 0;
            let ageCtr = 0;
            let birthDate = "";
            let hasValidBDate = false;
            let min, max;

            tmpCities.push(data.city);
            birthDate = data.birthday;

            for (let i = 0; i < birthDate.length; i++) {
                if (birthDate[i] == "-") {
                    hasValidBDate = true;
                }
            }

            const d = new Date();
            let year = d.getFullYear();
            let bday = !hasValidBDate
                ? birthDate.split(", ")[1]
                : birthDate.split("-")[0];
            _age = year - bday;

            for (const age of this.agesJson) {
                if (_age >= age.minAge && _age <= age.maxAge) {
                    min = age.minAge;
                    max = age.maxAge;
                    ageCtr++;
                }
                this.setAge(min, max, ageCtr);
                ageCtr = 0;
            }

            this.gender.dataY[data.gender]++;
        }

        for (const age of this.agesJson) {
            if (this.ctr < 1) {
                const randomColor = Math.floor(
                    Math.random() * 16777215
                ).toString(16);

                this.barDataY.datasets[0].backgroundColor.push(
                    `#${randomColor}`
                );
                this.barDataY.labels.push(`${age.minAge}-${age.maxAge}`);
            }
            this.barDataY.datasets[0].data.push(age.count);
        }

        const uniqueCities = tmpCities.filter(
            (item, i, ar) => ar.indexOf(item) === i
        );
        const tempObj = [];

        for (const x in uniqueCities) {
            tempObj.push({
                row: this.getCityCount(uniqueCities[x], this.data),
                column: uniqueCities[x],
            });
        }

        tempObj
            .sort(function (a, b) {
                return a.row - b.row;
            })
            .reverse();

        for (const y of tempObj) {
            if (this.ctr < 1) {
                const randomColor = Math.floor(
                    Math.random() * 16777215
                ).toString(16);
                this.barDataX.datasets[0].backgroundColor.push(
                    `#${randomColor}`
                );
            }
            this.barDataX.labels.push(y.column);
            this.barDataX.datasets[0].data.push(y.row);
        }

        if (this.ctr > 0) {
            this.chartDataX.data = this.barDataX;
            this.chartDataY.data = this.barDataY;
        }

        this.chartDataX.update();
        this.chartDataY.update();

        this.setCity(c, uniqueCities);
        this.setGender(m, f);
    };
}
