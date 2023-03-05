export const categoryService = async () => {
    try {
        const data = await fetch('http://173.254.242.213:8080/clientapp-web/webresources/getMenus/APP')
            .then(response => response.json())
            .then(data => { return data });

        return {
            status: true,
            data,
        }
    } catch (e) {
        return {
            status: false,
            data: [],
        }
    }
}


