export default async function handler(req, res) {
    try {
        const response = await fetch('http://localhost:8080/api/some-endpoint');
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
}
