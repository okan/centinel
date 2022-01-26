export function getHtmlOutput(list: Array<{ date:string, name:string }>) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Centinel</title>
            <style>
                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fafafa;
                    font-family: system-ui;
                }

                .container {
                    width: 600px;
                }

                .container > ul {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    list-style: none;
                    padding-inline-start: 0;
                }

                .container > ul > li {
                    display: flex;
                    flex-grow: 1;
                    border-bottom: 1px dashed #ccc;
                    padding: 8px 0;
                    font-size: 20px;
                }

                .container > ul > li > span:first-child {
                    font-weight: bold;
                    width: 140px;
                }

                .container > ul > li > span:first-child::after {
                    content: '-';
                    padding: 0 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Nöbetçiler</h1>
                <ul>
                ${list.map(el => `
                    <li>
                        <span>${el.date}</span>
                        <span>${el.name}</span>
                    </li>
                `).join('')}
                </ul>
            </div>
        </body>
        </html>
    `;
}