{
    //Interface -generic start
    interface Developer<T,X=null>{
        name:string;
        computer:{
            brand:string;
            model:string;
            releaseYear:number;
        }
        smartWatch: T,
        bike?:X
    }
    type EmilabWatch={
            brand:string;
            model:string;
            display:string;
        
    }
    const poorDeveloper:Developer<EmilabWatch,null>={
        name:'rahyan',
        computer:{
            brand:'dell',
            model:'inspiron 12',
            releaseYear:2017
        },

        smartWatch:{
            brand:'Emilab',
            model:'kw66',
            display:"oLED"
        }
    }
    interface AppleWatch {
        
            brand:string;
            model:string;
            heartTrack:boolean;
            sleepTrack:boolean;
        
    }
    interface YamahaBike{
        model:string,
        engineCapacity:string
    }
    const richDeveloper:Developer<AppleWatch,YamahaBike>={
        name:'RichDev',
        computer:{
            brand:'Hp',
            model:'inspiron 13',
            releaseYear:2017,
            
        },

        smartWatch:{
            brand:'Apple Watch',
            model:'k',
            heartTrack:true,
            sleepTrack:true,
        },
        bike:{
            model:'YAMAHA',
            engineCapacity:"1000cc"
        }
    }


    //interface-generic end
}