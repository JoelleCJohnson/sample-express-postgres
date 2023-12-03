import express from "express"
import cors from "cors"
import { pool } from "./connectDb.js"

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json())
app.use(cors())

//phase 1, add and get items from wishlist
app.get('/', async (req, res) => {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM list_items')
    const items = result.rows // extract rows from result
    res.status(200).json(items)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))