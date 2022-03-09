const fsp = require("fs").promises;
export default async function (req, res) {
  try {
    const file_data = await fsp.readFile("./data/data.json");
    const json_data = JSON.parse(file_data);
    res.status(200).json(json_data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Не удалось прочитать данные" });
  }
}
