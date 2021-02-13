require('dotenv').config();
const Airtable = require('airtable');

Airtable.configure({
    apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);
const table = base.table(process.env.AIRTABLE_TABLE);


exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({err: "Method not allowed"})
        };
    };

    const { score, name } = JSON.parse(event.body);

    if (!score || !name) {
        return {
            statusCode: 405,
            body: JSON.stringify({err: "Bad request"}),
        };
    };

    try {
        const records = await table
            .select({ 
                sort:[{field: "Score", direction: "desc"}],
            })
            .firstPage();

        const formattedRecords = records.map( record => ({
            id: record.id,
            fields: record.fields
        }));

        const lowestRecord = formattedRecords[9];

        if (lowestRecord.fields.score == null || score > lowestRecord.fields.score) {
            const updatedRecord = {
                id: lowestRecord.id,
                fields: { name, score }
            };
            // https://airtable.com/appUTsZhe1wZk7Mak/api/docs#curl/table:highscore:update
            await table.update([updatedRecord]);

            return {
                statusCode: 200,
                body: JSON.stringify(formattedRecords)
            };
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                err: 'Failed to query data from Air Table.',
            })
        }
    }
};