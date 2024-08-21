import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        const response = await fetch('https://ip2c.org/s');
        if (!response.ok) {
            throw new Error(`Failed to fetch country code: ${response.statusText}`);
        }
        const data = await response.text();
        const alpha2CountryCode = data.split(';')[1];
        res.status(200).json({ countryCode: alpha2CountryCode });
    } catch (error) {
        console.error('Error fetching country code:', error);
        res.status(500).json({ error: 'Error fetching country code' });
    }
}
