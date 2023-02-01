const NODE_URL = 'https://simply-cyber.herokuapp.com/sendemail';

const sendEmail = async (data) => {
    return await fetch(`${NODE_URL}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
}

export {
    sendEmail
}