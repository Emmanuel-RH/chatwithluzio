const express = require("express");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}));

app.post("/api/gpt", async (req, res) => {
    try {
        const { mensaje } = req.body;
        const respuesta = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: mensaje,
            max_tokens: 150
        });
        res.json({ respuesta: respuesta.data.choices[0].text.trim() });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ respuesta: "Error al procesar la solicitud." });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
