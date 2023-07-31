class Settings {
    constructor() {}

    sendFormData = async (url, data) => {
        const response = await axios.post(url, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    };

    requestData = async (url) => {
        const response = await axios.get(url);

        return response.data;
    };

    requestDataParams = async (url, options) => {
        const response = await axios.get(url, options);

        return response.data;
    };

    toast = (message, type) => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 10000,
            customClass: {
                popup: "colored-toast",
            },
            showConfirmButton: false,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: type,
            title: message,
        });
    };

    numberFormat = (str) => {
        return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}
