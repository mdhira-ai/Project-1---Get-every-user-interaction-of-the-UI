export default function handler(req, res) {
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.status(200).json({ ip: clientIp });
}