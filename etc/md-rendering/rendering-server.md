
### 3. **서버 사이드에서 Markdown 파일을 HTML로 변환 (Node.js 예시)**
만약 서버에서 Markdown 파일을 HTML로 변환하려면, Node.js 환경에서 **`marked`** 또는 **`markdown-it`**와 같은 라이브러리를 사용해서 서버 측에서 변환한 후 클라이언트에게 전달할 수 있습니다.

#### Node.js + Express 예시
1. 먼저, `express`와 `marked` 라이브러리를 설치합니다.

   ```bash
   npm install express marked
   ```

2. 서버 코드 작성:

   ```javascript
   const express = require('express');
   const fs = require('fs');
   const marked = require('marked');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       fs.readFile('example.md', 'utf8', (err, data) => {
           if (err) {
               return res.status(500).send('Error reading file');
           }
           const htmlContent = marked(data); // Markdown 파일을 HTML로 변환
           res.send(htmlContent); // 변환된 HTML을 클라이언트로 전송
       });
   });

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   ```

3. `example.md`라는 파일을 웹 서버와 동일한 디렉토리에 넣고, 서버를 실행합니다. 클라이언트는 `http://localhost:3000/`로 접속하여 Markdown을 렌더링된 HTML을 볼 수 있습니다.



