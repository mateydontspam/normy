<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Load JavaScript File</title>
</head>
<body>
    <h1>Load External JavaScript File</h1>
    <button onclick="(s=document.createElement('script')).src='files/send.js',document.body.appendChild(s)">Load Script</button>
</body>
</html>
