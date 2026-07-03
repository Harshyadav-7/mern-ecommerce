connectDB();

app.get('/', (req,res) => {
    res.send('API is running...')
})

app.listen(5001, () =>{
    console.log('Server is running..on port 5001');
})