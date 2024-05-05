const readCSV = require('../../src/csvReader');
const parseQuery = require('../../src/queryParser');

path = "/home/shubham/Desktop/web/stylusdb-sql-assignment-shubhamkumaar/data/sample.csv";
test('Read CSV File', async () => {
    const data = await readCSV(path);
    expect(data.length).toBeGreaterThan(0);
    expect(data.length).toBe(3);
    expect(data[0].name).toBe('John');
    expect(data[0].age).toBe('30'); //ignore the string type here, we will fix this later
});

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample'
    });
});