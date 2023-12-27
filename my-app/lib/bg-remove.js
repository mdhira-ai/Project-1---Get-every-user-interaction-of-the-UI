import bgremove from '@imgly/background-removal'



class BGRemove{
    constructor(){
        this.bgremove = bgremove;
    }
    async removeBG(img){
        console.log(img);
        const result = await this.bgremove(img)
        return result
    }


    manual_remover(imgsrc,canvas){
        const img = new Image()
        const context = canvas.getContext('2d');


        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;

            context.drawImage(img, 0, 0);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;


        }
    }
}

export default BGRemove;
