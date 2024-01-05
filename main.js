(() => {

    document.getElementById("js-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            console.log(key, value);
        });
    });

})();

