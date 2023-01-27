export default function Token() {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;

    const config = {
        headers: {
          Authorization: token,
        }
    };

    return config;
}