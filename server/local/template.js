export default ({ body, title }) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>   
            <link rel="manifest" href="/manifest.json">
            <link rel="stylesheet" media="all" href="app.min.css"> 
        </head>
        <body>
            <div id="HeaderBanner" data-component="HeaderBanner">${body.appString}</div>
            <div id="app" data-component="App"></div>
            // <script src="manifest.js"></script>
            <script src="vendor_chunk.js"></script>
            <script src="app.bundle.js"></script>
            <script src="sw.bundle.js"></script>
           
        </body>
    </html>
`;


