class Campos {

    public inputDateL = '';
    public inputDesc = '';

    constructor(
        public inputTitle: string,
        inputDateL?: string,
        inputDesc?: string
    ){
        this.inputTitle = inputTitle;
        if(inputDateL)
            this.inputDateL = inputDateL;
        if(inputDesc)
            this.inputDesc = inputDesc;
    }

}