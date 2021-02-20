const { table, getHighScores } = require('./utils/airtable');

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({err: "Method not allowed"})
        };
    };

    const { Score, Name, Average } = JSON.parse(event.body);

    if (Score == null || !Name) {
        return {
            statusCode: 405,
            body: JSON.stringify({err: "Bad request"}),
        };
    };

    try {
        const records = await getHighScores(false);

        const lowestRecord = records[9];

        if (lowestRecord.fields.Score == null || Score > lowestRecord.fields.Score) {
            const updatedRecord = {
                id: lowestRecord.id,
                fields: { Name, Score, Average }
            };
            // https://airtable.com/appUTsZhe1wZk7Mak/api/docs#curl/table:highscore:update
            await table.update([updatedRecord]);

            return {
                statusCode: 200,
                body: JSON.stringify({records, highScore: true})
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({records, highScore: false})
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