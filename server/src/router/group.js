import express from "express";

const groups=[
    {
        id:1,
        nama:"TREASURE",
        agensi:"YG Entertainment",
        img:"https://f.ptcdn.info/426/073/000/qstxelndozicl1M6z4a-o.jpg"
    },
    {
        id:2,
        nama:"BLACKPINK",
        agensi:"YG Entertainment",
        img: "https://www.youngontop.com/wp-content/uploads/2023/03/Blackpink-2023-members-01-9d67ffe25a474456b4be77adedb057b0.jpg"
    },
    {
        id:3,
        nama:"ITZY",
        agensi:"JYP Entertainment",
        img:"http://res.heraldm.com/content/image/2022/11/25/20221125000501_0.jpg"
    },
    {
        id:4,
        nama:"EVERGLOW",
        agensi:"Yuehua Entertainment",
        img:"https://oreosandpeanutbuttercom.files.wordpress.com/2021/01/everglow-group-dun-dun-profile-image.jpeg?w=1024"
    },
    {
        id:5,
        nama:"SEVENTEEN",
        agensi:"Pledis Entertainment",
        img:"https://s3.cosmopolitan.co.id/yuk-dengar-10-lagu-grup-seventeen-yang-siap-bikin-kamu-bersemangat_64_20211026175136fcSKoY.jpg"
    },
    
]

const groupsRoute = express.Router();

groupsRoute.get("/",(_req,res)=>{
    res.json(groups);
})
groupsRoute.get("/:id", (req,res)=> {
    const gr = groups.find((p)=> p.id == req.params.id);
    // berupa text
    if (gr){
        res.json(gr);
    }else{
        res.status(404);
        res.send("Boyband/Girlband Tidak Ditemukan atau belum ditambahkan");
    }
    
})

export default groupsRoute;