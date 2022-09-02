import express from 'express'

const app = express()

// Home Route
app.get('/', async (req, res) => {
    res.json({
        message: 'Docker Service :D'
    })
})

const port = process.env.PORT || 8000

// Listening Server
app.listen(port, () => {
    console.log(`Server is up at port:${port}`)
})

// Route to test database connection
app.get('/desserts', async (req, res) => {
    let conn
    try {
        conn = await pool.getConnection()

        let sql = `SELECT * FROM desserts`
        let result = await conn.query(sql)

        res.send(result)
    } catch (error) {
        throw error
    } finally {
        if (conn) {
            conn.release()
        }
    }
})