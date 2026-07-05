import Product from "../models/product.js";

export const askGemini = async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({ message: "Question is required" });
        }

        // fetched products from db
        const products = await Product.find();

        const productContext = products.map(p =>
            `${p.name} - ₹${p.price} - ${p.category} - Stock: ${p.stock} - ${p._id}`
        ).join("\n");

        const prompt = `

You are a assistant at a ecommerce store .Store products are listed below:

${productContext}

User's question: ${question}

Sirf ek JSON object return karo, kuch aur text nahi:
{"productId": "matching_product_ki_id_yahan"}

Agar koi matching product na mile:
{"productId": null}
        `;

        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": process.env.GEMINI_API_KEY
                },
                body: JSON.stringify({
                    contents: [
                        { parts: [{ text: prompt }] }
                    ]
                })
            }
        );

        const data = await response.json();
        // console.log("Gemini raw response:", JSON.stringify(data, null, 2));
        let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "{}";

        reply = reply.replace(/```json|```/g, "").trim();

        let result;
        try {
            result = JSON.parse(reply);
        } catch (e) {
            result = { productId: null };
        }

        res.json( result );

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error processing request", error: error.message });
    }
};