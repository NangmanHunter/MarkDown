- markded

[Doc](https://marked.js.org/)  
[Doc-demo](https://marked.js.org/demo/?text=Marked%20-%20Markdown%20Parser%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A%5BMarked%5D%20lets%20you%20convert%20%5BMarkdown%5D%20into%20HTML.%20%20Markdown%20is%20a%20simple%20text%20format%20whose%20goal%20is%20to%20be%20very%20easy%20to%20read%20and%20write%2C%20even%20when%20not%20converted%20to%20HTML.%20%20This%20demo%20page%20will%20let%20you%20type%20anything%20you%20like%20and%20see%20how%20it%20gets%20converted.%20%20Live.%20%20No%20more%20waiting%20around.%0A%0AHow%20To%20Use%20The%20Demo%0A-------------------%0A%0A1.%20Type%20in%20stuff%20on%20the%20left.%0A2.%20See%20the%20live%20updates%20on%20the%20right.%0A%0AThat%27s%20it.%20%20Pretty%20simple.%20%20There%27s%20also%20a%20drop-down%20option%20above%20to%20switch%20between%20various%20views%3A%0A%0A-%20**Preview%3A**%20%20A%20live%20display%20of%20the%20generated%20HTML%20as%20it%20would%20render%20in%20a%20browser.%0A-%20**HTML%20Source%3A**%20%20The%20generated%20HTML%20before%20your%20browser%20makes%20it%20pretty.%0A-%20**Lexer%20Data%3A**%20%20What%20%5Bmarked%5D%20uses%20internally%2C%20in%20case%20you%20like%20gory%20stuff%20like%20this.%0A-%20**Quick%20Reference%3A**%20%20A%20brief%20run-down%20of%20how%20to%20format%20things%20using%20markdown.%0A%0AWhy%20Markdown%3F%0A-------------%0A%0AIt%27s%20easy.%20%20It%27s%20not%20overly%20bloated%2C%20unlike%20HTML.%20%20Also%2C%20as%20the%20creator%20of%20%5Bmarkdown%5D%20says%2C%0A%0A%3E%20The%20overriding%20design%20goal%20for%20Markdown%27s%0A%3E%20formatting%20syntax%20is%20to%20make%20it%20as%20readable%0A%3E%20as%20possible.%20The%20idea%20is%20that%20a%0A%3E%20Markdown-formatted%20document%20should%20be%0A%3E%20publishable%20as-is%2C%20as%20plain%20text%2C%20without%0A%3E%20looking%20like%20it%27s%20been%20marked%20up%20with%20tags%0A%3E%20or%20formatting%20instructions.%0A%0AReady%20to%20start%20writing%3F%20%20Either%20start%20changing%20stuff%20on%20the%20left%20or%0A%5Bclear%20everything%5D(%2Fdemo%2F%3Ftext%3D)%20with%20a%20simple%20click.%0A%0A%5BMarked%5D%3A%20https%3A%2F%2Fgithub.com%2Fmarkedjs%2Fmarked%2F%0A%5BMarkdown%5D%3A%20http%3A%2F%2Fdaringfireball.net%2Fprojects%2Fmarkdown%2F%0A&options=%7B%0A%20%22async%22%3A%20false%2C%0A%20%22breaks%22%3A%20false%2C%0A%20%22extensions%22%3A%20null%2C%0A%20%22gfm%22%3A%20true%2C%0A%20%22hooks%22%3A%20null%2C%0A%20%22pedantic%22%3A%20false%2C%0A%20%22silent%22%3A%20false%2C%0A%20%22tokenizer%22%3A%20null%2C%0A%20%22walkTokens%22%3A%20null%0A%7D&version=15.0.7)
[깃허브](https://github.com/markedjs/marked)  

- markdown-it
<script src="https://cdn.jsdelivr.net/npm/markdown-it@14.1.0/+esm"></script>
<script src="https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.min.js"></script>
- remarkable

- showdonw
<script src="https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js"></script>


#
### 4. **Markdown 파일을 직접 HTML 페이지에 삽입 (브라우저 환경에서)**
만약 Markdown 파일이 브라우저에서 직접 로드된다면, Markdown 파일을 **JavaScript로 읽고** 해당 내용을 변환하여 렌더링할 수 있습니다. 예를 들어, 브라우저에서 파일을 읽어와 `markdown-it`으로 변환하는 방법이 있습니다.

[markdown-it-cdn](https://www.jsdelivr.com/package/npm/markdown-it)
[markdown-it](https://markdown-it.github.io/markdown-it/)




# 최적선택
marked>>markdownIt
ㄴpre지원>>pre미지원
ㄴb지원>>b미지원
ㄴ태그지원>>태그미지원
