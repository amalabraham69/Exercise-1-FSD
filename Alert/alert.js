<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simple Form</title>
</head>
<body>

    <form onsubmit="alert('Hello ' + document.getElementById('name').value + '!'); return false;">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <br><br>
        <button type="submit">OK</button>
    </form>

</body>
</html>