const express = requirel('express');
const app = express();
const path = requirel('path');

app.set("/", "html");
app use(express.static(path.join(_dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/',(req, res) => {
  res.render('index');
});

app.listen(8080, () => {
           console.log("listening on http://localhost8080");
});
